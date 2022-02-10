import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: [],
    status: null,
    error: null
}

// export const getAllGenres = createAsyncThunk(
//     'genresSlice/getAllGenres',
//     async (_, {rejectWithValue}) => {
//         try {
//             const {genres} = await genreService.getAll();
//             return genres
//         }catch (error){
//             rejectWithValue(error.messages)
//         }
//     }
// )
export const getAllGenres = async () => {
        try {
            const {genres} = await genreService.getAll();
            return genres
        }catch (e){
           console.log(e)
        }
    }

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers:{
    }
})

const genresReducer = genresSlice.reducer;

export default genresReducer;

export const {} = genresSlice.actions;