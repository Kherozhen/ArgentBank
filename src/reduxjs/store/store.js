import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../actions/userSlice';

import formReducer from '../reducers/formReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer,
  }
});



export default store;