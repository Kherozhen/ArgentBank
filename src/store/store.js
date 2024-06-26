// Contient l'état du site et les réducers

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;