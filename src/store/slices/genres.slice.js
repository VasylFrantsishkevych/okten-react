import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    genres: []
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