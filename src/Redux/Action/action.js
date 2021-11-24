import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action_types"

export const add_Todo = (data) => ({
    type: ADD_TODO,
    data: data
})

export const delete_Todo = (id) => ({
    type: DELETE_TODO,
    data: id
})

export const update_Todo = (id, data) => ({
    type: UPDATE_TODO,
    id,
    data
})