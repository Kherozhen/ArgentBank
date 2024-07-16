const initialState = {
    userName: '',
    firstName: '',
};

export const USER_INFO = "USER_INFO";

const userNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_INFO:
            return {
                ...state,
                userName: action.payload.userName,
                firstName: action.payload.firstName
            };
        default: 
            return state;
    }
};

export default userNameReducer;