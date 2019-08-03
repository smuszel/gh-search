import { Action } from 'redux';
import {
    SET_SEARCH_KEYWORD,
    SET_USERS,
    UPDATE_REQUEST_META,
    ADD_REQUEST_META,
    SET_SELECTED_USER,
} from './actionTypes';

const defaultState: State = {
    requests: [],
    keyword: '',
    users: [],
    selectedUser: null,
};

// TODO split into multiple reducers
const mainReducer = (
    state = defaultState,
    // TODO use typed payload for the reducers
    action: Action & { payload: any },
) => {
    const payload = action.payload;

    // TODO consider using single returns
    switch (action.type) {
        case SET_SEARCH_KEYWORD:
            return { ...state, keyword: payload };
        case SET_USERS:
            return { ...state, users: payload };
        case UPDATE_REQUEST_META: {
            const oldRemoved = state.requests.filter(
                r => r.keyword === payload.keyword,
            );
            return { ...state, requests: [...oldRemoved, payload] };
        }
        case ADD_REQUEST_META:
            return { ...state, requests: [...state.requests, payload] };
        case SET_SELECTED_USER:
            return { ...state, selectedUser: payload };
        default:
            return state;
    }
};

// TODO use combineReducers
export const rootReducer = mainReducer;
