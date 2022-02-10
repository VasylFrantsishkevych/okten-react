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

// export const getAllMovies = createAsyncThunk(
//     'movieSlice/getAllMovies',
//     async (_, {dispatch}) => {
//         const {results} = await movieService.getAll();
//         dispatch(getMovies(results))
//     }
// )
//
export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (page, {rejectWithValue}) => {
        try {
            return await movieService.getAll(page)
        }catch (error) {
            rejectWithValue(error.message)
        }
    }
)
 // const getAllMovies = async () => {
 //        try {
 //            return await movieService.getAll();
 //
 //        }catch (e) {
 //            console.log(e)
 //        }
 //    }
//
// export const getMoviesGenres = createAsyncThunk(
//     'movieSlice/getMovieData',
//     async (_, {rejectWithValue}) => {
//         const requests = [await getAllMovies(),  await getAllGenres()];
//         try {
//             const [movies, genres] = await Promise.all(requests);
//             const {page, results, total_pages, total_results} = movies;
//
//             return results.map((movie) => {
//                 const {genre_ids} = movie;
//                 const genresList = genre_ids.map(genreId => genres.find(value => value.id === genreId))
//                 return {
//                     ...movie,
//                     genresList,
//                 }
//             })
//         }catch (error){
//             rejectWithValue(error.messages)
//         }
//     }
// )

export const getMoviesById = createAsyncThunk(
    'movieSlice/getMoviesById',
    async (id, {rejectWithValue}) => {
        try {
            const data = await movieService.getById(id);
            return [data]

        }catch (error){
            rejectWithValue(error.message)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
    },
    extraReducers: {
        // [getMoviesGenres.pending]: (state) => {
        //     state.status = 'pending'
        //     state.error = null
        // },
        // [getMoviesGenres.fulfilled]: (state, action) => {
        //     state.status = 'fulfilled'
        //     state.movies = action.payload
        // },
        // [getMoviesGenres.rejected]: (state, action) => {
        //     state.status = 'rejected'
        //     state.error = action.payload
        // },
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