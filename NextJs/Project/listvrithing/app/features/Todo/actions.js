import {
    TODO_ADD,
    TODO_REMOVE
} from './constants';

export const addTodo = (todo) => {
    return {
        type: TODO_ADD,
        todo: todo
    }
}
export const removeTodo = (todo_id) => {
    return {
        type: TODO_REMOVE,
        id: todo_id
    }
}