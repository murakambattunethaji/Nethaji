const initialState = { user: null, tasks: [] };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload };
        case "LOGOUT":
            return { ...state, user: null };
        case "ADD_TASK":
            return { ...state, tasks: [...state.tasks, action.payload] };
        default:
            return state;
    }
};

export default rootReducer;
