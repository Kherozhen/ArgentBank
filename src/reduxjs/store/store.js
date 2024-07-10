import { configureStore } from '@reduxjs/toolkit';

import loginReducer from '../reducers/loginReducer';
import formReducer from '../reducers/formReducer';

const store = configureStore({
  reducer: {
    user: loginReducer,
    form: formReducer,
  }
});

export default store;