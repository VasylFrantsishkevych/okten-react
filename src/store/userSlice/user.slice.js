import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../services/user.service";

const   initialState = {
    users: [],
    status: null,
    error: null
}

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_,{rejectWithValue}) => {
        try {
            return await userService.getAll()
        }catch (e){
            return rejectWithValue(e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{

    },
    extraReducers: {
        [getAllUsers.fulfilled]:(state, action) => {
            state.status = 'fulfilled'
            state.users = action.payload
        },
        [getAllUsers.rejected]:(state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const userReducer = userSlice.reducer

export default userReducer