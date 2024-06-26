// Montre comment l'état du site change suivant les actions (pour la connexion)

import { createReducer } from '@reduxjs/toolkit';
import { loginRequest, loginSuccess, loginFailure } from '../actions/authActions.js';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loginSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.token = action.payload.token;
      state.error = null;
    })
    .addCase(loginFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default authReducer;