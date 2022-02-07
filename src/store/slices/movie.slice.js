import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {

    }
})

const movieReducer = movieSlice.reducer;

export default movieReducer;

export const {} = movieSlice.actions;