const initialState = {
  token: ''
};

const loginReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload.token
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }

};

export default loginReducer;