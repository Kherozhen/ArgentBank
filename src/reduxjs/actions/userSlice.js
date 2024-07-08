// Ce sont les évenements qui vont être effectué sur le site => connexion
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

export const loginUser=createAsyncThunk(
    'user/loginUser',
    async(userCredentials)=>{
        const request = await Axios.post('http://localhost:3001/user/login', userCredentials);
        const response = await request.data.data;
        localStorage.setItem('user', JSON.stringify(response));
        return response;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState:{
        loading: false,
        user: null,
        error: null,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading = false;
            state.user = null;
            console.log(action.error.message);
            if(action.error.message === 'request failed, code 401'){
                state.error = 'Username or Password invalid';
            }else{
                state.error = action.error.message;
            }
        })
    }
})


export default userSlice.reducer;