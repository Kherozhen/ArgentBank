

const initialState = {
    userName: '',
};

const SET_USERNAME = 'SET_USERNAME';

const userNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
        return  {
                ...state,
                userName: action.payload,
            };
        default: 
            return state;
    }
};

export { SET_USERNAME };
export default userNameReducer;