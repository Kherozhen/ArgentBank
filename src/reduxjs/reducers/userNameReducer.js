
import { USER_INFO } from "../actions/actionUserName";

const initialState = {
    userName: '',
};

const userNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_INFO:
            return {
                ...state,
                userName: action.payload,
            };
        default: 
            return state;
    }
};

export default userNameReducer;