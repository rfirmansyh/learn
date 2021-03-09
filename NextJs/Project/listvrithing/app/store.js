import { useMemo } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import {todoReducer} from './features/Todo/reducer';

let store;
const reducers = combineReducers({
    todos: todoReducer
})

function initStore(initialState) {
    return createStore(reducers, initialState, applyMiddleware(thunk))
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState);

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState
        })
        store = undefined
    }

    if (typeof window === 'undefined') return _store
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store;
}
