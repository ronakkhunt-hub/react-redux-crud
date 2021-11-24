import { ADD_USER } from "../Action/action_types"

const initialState = {
    Users: [
        {
            id: 1248,
            username: "admin@123",
            email: 'admin@gmail.com',
            password: '123456'
        },
        {
            id: 1246,
            username: "test@123",
            email: 'test@gmail.com',
            password: '123456'
        }
    ]
}

localStorage.setItem('data', JSON.stringify(initialState.Users))
let userData = localStorage.getItem('data');
userData = JSON.parse(userData);

export default function Users(state = initialState.Users, action) {
    switch (action.type) {
        case ADD_USER:
            state = state.push(action.data)
            return state

        default:
            return userData
    }
}