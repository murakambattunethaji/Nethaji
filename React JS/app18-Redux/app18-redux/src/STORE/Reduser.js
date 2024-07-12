import { CREATE_USER, DELETE_USER, EDIT_USER, READ_USER } from "./Constant";

const initialstate = {
    users: ["nethaji", "reddy", "vijay", "dinesh", "sai"]
}

export const Reduser = (state = initialstate, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case READ_USER:
            return state
        case EDIT_USER:
            break;
        case DELETE_USER:
           return {
            ...state,
            users:[...state.users.filter((user)=> user !== action.payload)],
           }
        default:
            return state
    }
}