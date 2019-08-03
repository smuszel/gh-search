import React from 'react';
import { render } from 'react-dom';
import { Search } from './components/Search';
import { Details } from './components/Details';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

render(
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        <Search />
        <Details />
    </Provider>,
    document.getElementById('root'),
);
