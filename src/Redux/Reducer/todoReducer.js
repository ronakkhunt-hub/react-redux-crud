import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../Action/action_types"

const initialState = {
    TodoItems: [
        {
            id: 123456,
            title: "go for Gym",
            description: "at evening"
        }
    ]
}

let todoData = localStorage.getItem('tododata');
todoData = JSON.parse(todoData);

export default function Todos(state = initialState.TodoItems, action) {
    switch (action.type) {
        case ADD_TODO:
            state.push(action.data)
            localStorage.setItem('tododata', JSON.stringify(state))
            return state

        case DELETE_TODO:
            state = state.filter((item) => item.id !== action.data.id)
            localStorage.setItem('tododata', JSON.stringify(state))
            return state

        case UPDATE_TODO:
            const findData = state.findIndex((item) => item.id === action.id)
            state[findData] = action.data
            localStorage.setItem('tododata', JSON.stringify(state))
            return state

        default:
            return todoData;
    }
}

