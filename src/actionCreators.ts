import axios from 'axios';
import {
    SET_USERS,
    UPDATE_REQUEST_META,
    ADD_REQUEST_META,
    SET_SEARCH_KEYWORD,
    SET_SELECTED_USER,
} from './actionTypes';

const apiUrl =
    // process.env.NODE_ENV === 'production' ? '/' : 'https://api.github.com/';
    process.env.NODE_ENV === 'development' ? '/' : 'https://api.github.com/';

export const setKeyword = (keyword: string) => dispatch => {
    return dispatch({ type: SET_SEARCH_KEYWORD, payload: keyword });
};

export const fetchUsers = (keyword: string) => (dispatch, getState) => {
    const cachedSearchRequest = getState().requests.find(
        r => r.keyword === keyword,
    );

    if (cachedSearchRequest && cachedSearchRequest.loading) {
        // TODO implement loader
    } else if (cachedSearchRequest) {
        // We dont need to ask for options if request was triggered in the past
        dispatch({ type: SET_USERS, payload: cachedSearchRequest.data });
    } else {
        dispatch({
            type: ADD_REQUEST_META,
            payload: {
                loading: true,
                data: null,
                errors: null,
                keyword,
            },
        });
        // TODO abstract out the api path into map with properly named keys
        axios.get(`${apiUrl}search/users?q=${keyword}&per_page=10`).then(r => {
            dispatch({
                type: UPDATE_REQUEST_META,
                payload: {
                    loading: false,
                    data: r.data.items,
                    errors: null,
                    keyword,
                },
            });
            // Possible case that previous request takes unusually long and
            // it forces stale data to be pushed
            const newKeyword = getState().keyword;
            newKeyword === keyword &&
                dispatch({
                    type: SET_USERS,
                    payload: r.data.items,
                });
        });
    }

    // TODO pack the whole api handling into abstraction that can paginate and
    // debounce requests as the user types
    return undefined;
};

// TODO Add selected user caching
export const setSelectedUser = userName => dispatch => {
    return axios.get(`${apiUrl}users/${userName}`).then(r => {
        dispatch({ type: SET_SELECTED_USER, payload: r.data });
    });
};
