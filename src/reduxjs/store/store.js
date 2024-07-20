import { configureStore } from '@reduxjs/toolkit';

import loginReducer from '../reducers/loginReducer';
import formReducer from '../reducers/formReducer';
import userNameReducer from '../reducers/userNameReducer';

const store = configureStore({
  reducer: {
    login: loginReducer,
    form: formReducer,
    userName: userNameReducer,
  }
});

export default store;