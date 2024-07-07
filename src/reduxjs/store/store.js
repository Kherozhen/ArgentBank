import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../actions/userSlice';
import {getPosts} from '../actions/post.action';

const store = configureStore({
  reducer: {
    user: userReducer,
  }
});

export default store;