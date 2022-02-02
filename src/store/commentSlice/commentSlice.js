import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentService} from "../../services/comment.service";


const initialState = {
    comments: [],
    status: null
}

export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async () => {
        try {
            return await commentService.getAll()
        }catch (e){

        }
    }
)

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers:{},
    extraReducers:{
        [getAllComments.fulfilled]:(state, action) => {
            state.status = 'fulfilled'
            state.comments = action.payload
        }
    }
})

const commentReducer = commentSlice.reducer

export default commentReducer;