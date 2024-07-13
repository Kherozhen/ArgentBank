const initialState = {
  token: ''
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', action.payload.token); // Token dans le storage
      return {
        ...state,
        token: action.payload.token,
      };
    case 'LOGOUT':
      localStorage.removeItem('token'); // Token supprimé du storage
      return initialState;
    default:
      return state;
  }

};

export { LOGIN, LOGOUT }
export default loginReducer;