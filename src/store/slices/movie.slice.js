import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    movieId: [],
    status: null,
    error: null,
    currentPage: 1,
    totalPages: 0,
}

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async ({id, page}, {rejectWithValue}) => {
        try {
            return await movieService.getAll(id, page)
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getMoviesById = createAsyncThunk(
    'movieSlice/getMoviesById',
    async (id, {rejectWithValue}) => {
        try {
            const data = await movieService.getById(id);
            return [data]

        }catch (e){
            return rejectWithValue(e.message)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getAllMovies.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload.results
            state.currentPage = action.payload.page
            state.totalPages  = action.payload.total_pages
        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [getMoviesById.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getMoviesById.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movieId = action.payload
        },
        [getMoviesById.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const movieReducer = movieSlice.reducer;

export default movieReducer;

export const {} = movieSlice.actions;