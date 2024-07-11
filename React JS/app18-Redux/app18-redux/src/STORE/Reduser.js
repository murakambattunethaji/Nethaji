import { CREATE_USER, DELETE_USER, EDIT_USER, READ_USER } from "./Constant";

const initialstate = {
    users: []
}

export const Reduser = (state = initialstate, action) => {
    switch (action.payload) {
        case CREATE_USER:
            break;
        case READ_USER:
            break;
        case EDIT_USER:
            break;
        case DELETE_USER:
            break;
            default :
            return state
    }
}