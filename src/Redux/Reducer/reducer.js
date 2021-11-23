import { AddTodo, DeleteTodo, UpdateTodo } from "../Action/action_types";

const initialState = {
    TodoItems: [
        {
            id: 123456,
            title: "go for Gym",
            description: "at evening"
        }
    ]
}

export default function Todos(state = initialState.TodoItems, action) {
    switch (action.type) {
        case AddTodo:
            state.push(action.data)
            return state

        case DeleteTodo:
            state = state.filter((item) => item.id !== action.data.id)
            return state

        case UpdateTodo:
            const findData = state.findIndex((item) => item.id === action.id)
            state[findData] = action.data
            return state
            
        default:
            return state;
    }
}
