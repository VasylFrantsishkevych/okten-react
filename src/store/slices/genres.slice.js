import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";


const initialState = {
    genres: [],
    status: null,
    error: null,
}

export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {genres} = await genreService.getAll();
            return genres
        }catch (e){
            return rejectWithValue(e.message)
        }
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers:{
    },
    extraReducers: {
        [getAllGenres.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllGenres.fulfilled]:(state, action) => {
            state.status = 'fulfilled'
            state.genres = action.payload
        },
        [getAllGenres.rejected]:(state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const genresReducer = genresSlice.reducer;

export default genresReducer;

export const {} = genresSlice.actions;