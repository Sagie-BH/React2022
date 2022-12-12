import { configureStore, createSlice  } from '@reduxjs/toolkit';

const initialState = { value: { userName: "" } }

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout:(state) => {
            state.value = initialState
        },
    }
})

export const { login, logout } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})