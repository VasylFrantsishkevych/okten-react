import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services/post.service";

const initialState = {
    posts: [],
    status: null
}

export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async () => {
        try {
            return await  postService.getAll()
        }catch (e) {

        }
    }
)

const  postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {},
    extraReducers:{
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.posts = action.payload
        }
    }
})

const postReducer = postSlice.reducer

export default postReducer