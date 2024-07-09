// Ce sont les évenements qui vont être effectué sur le site => connexion
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

// test avec un tableau et les log de connexions de Tony

const loginUsersData = {
    email: 'tony@stark.com',
    password: 'password123',
};

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async() => {
        try {
        console.log('Logging in with credentials:', loginUsersData);
        const response = await Axios.post('http://localhost:3001/api/v1/user/login', loginUsersData);
        const data = response.data;

        console.log('Login response:', response);
        localStorage.setItem('user', JSON.stringify(data.body));
        return data.body; // Retourne les données de l'utilisateur connecté
        } catch (error) {
        throw error; // Propage l'erreur pour être capturée par loginUser.rejected
        }
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
            console.log('Login request pending...');
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            console.log('Login request fulfilled:', action.payload);
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(loginUser.rejected,(state,action)=>{
            console.log('Login request rejected:', action.error.message);
            state.loading = false;
            state.user = null;
            console.log(action.error.message);
            if(action.error.message === 'request failed, code 401'){
                state.error = 'Email or password is invalid';
            }else{
                state.error = action.error.message;
            }
        })
    }
})


export default userSlice.reducer;