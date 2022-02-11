import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";


const initialState = {
    genres: [],
    genresMovie: [],
    status: null,
    error: null,
    currentPage: 1,
    totalPages: 0
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

export const getMovieGenres = createAsyncThunk(
    'genresSlice/getMovieGenres',
    async ({id, page}, {rejectWithValue}) => {
        try {
            return await genreService.getGenreId(id, page)
        }catch (e) {
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
        },
        [getMovieGenres.fulfilled]:(state, action) => {
            state.status = 'fulfilled'
            state.genresMovie = action.payload.results
            state.currentPage = action.payload.page
            state.totalPages = action.payload.total_pages
        }
    }
})

const genresReducer = genresSlice.reducer;

export default genresReducer;

export const {} = genresSlice.actions;