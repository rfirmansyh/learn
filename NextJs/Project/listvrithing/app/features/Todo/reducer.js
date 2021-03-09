import {
    TODO_ADD, TODO_REMOVE
} from './constants';

const initialState = [];
export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case TODO_ADD:
            return [...state, action.todo];
        case TODO_REMOVE:
            return state.filter( (v) => {
                return v.id !== action.id
            })
        default:
            return state;
    }
}