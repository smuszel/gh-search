import React from 'react';
import { style } from '../style';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, setKeyword, setSelectedUser } from '../actionCreators';
import Autosuggest from 'react-autosuggest';
import { userOptionsSelector } from '../selectors';

const UserSuggestion = (suggestion: User & { isSelected: boolean }) => {
    // TODO figure out how to use conditional styling in JSS
    const cn =
        style.suggestion +
        ' ' +
        (suggestion.isSelected ? style.suggestionSelected : '');

    return (
        <span className={cn}>
            <img
                className={style.suggestionAvatar}
                src={suggestion.avatar_url}
                alt="logo"
            />
            <span className={style.suggestionText}>{suggestion.login}</span>
        </span>
    );
};

export const Search = () => {
    const keyword = useSelector<State, string>(state => state.keyword);
    const dispatch = useDispatch();

    const inputProps = {
        className: style.searchBox,
        value: keyword,
        onChange: (ev, x) => dispatch(setKeyword(x.newValue)),
        autoCorrect: 'off',
        spellCheck: false,
        id: 'search',
    };

    return (
        <div className={style.searchContainer}>
            <Autosuggest
                inputProps={inputProps}
                getSuggestionValue={suggestion => suggestion.login}
                onSuggestionsFetchRequested={key =>
                    dispatch(fetchUsers(key.value))
                }
                suggestions={useSelector(userOptionsSelector)}
                onSuggestionsClearRequested={() => null}
                onSuggestionSelected={(suggestion, evd) =>
                    dispatch(setSelectedUser(evd.suggestionValue))
                }
                renderSuggestion={UserSuggestion}
                alwaysRenderSuggestions={true}
            />
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg"
                alt="magnifying glass"
                className={style.magnifyingGlass}
            />
        </div>
    );
};
