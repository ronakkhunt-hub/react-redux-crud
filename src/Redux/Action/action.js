import { AddTodo, DeleteTodo, UpdateTodo } from "./action_types"

export const add_Todo = (data) => {
    return {
        type: AddTodo,
        data: data
    }
}

export const delete_Todo = (id) => ({
    type: DeleteTodo,
    data: id
})

export const update_Todo = (id, data) => ({
    type: UpdateTodo,
    id,
    data
})