import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    workSchedule: []
}

const toDoSlice = createSlice({
    name: 'toDoSlice',
    initialState,
    reducers:{
        addSchedule: (state, action) => {
            state.workSchedule.push({
                id: new Date().getTime(),
                ...action.payload.data,
            })
        },
        deleteSchedule: (state, action) => {
            state.workSchedule = state.workSchedule.filter(work => work.id !== action.payload.id)
        },
        toDoChek:(state, action) => {
            const work = state.workSchedule.find(work => work.id === action.payload.id);
            work.status = !work.status
        }
    }
})

const toDoReducer = toDoSlice.reducer

export const {addSchedule, deleteSchedule, toDoChek} = toDoSlice.actions;

export default toDoReducer