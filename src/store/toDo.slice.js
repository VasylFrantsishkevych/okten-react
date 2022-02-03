import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    workSchedule: [],
    count1: 0,
    count2: 0
}

const toDoSlice = createSlice({
    name: 'toDoSlice',
    initialState,
    reducers:{
        addSchedule: (state, action) => {
            state.workSchedule.push({
                id: new Date().getTime(),
                ...action.payload.data,
                status: false
            })
        },
        deleteSchedule: (state, action) => {
            state.workSchedule = state.workSchedule.filter(work => work.id !== action.payload.id)
        },
        toDoChek:(state, action) => {
            const work = state.workSchedule.find(work => work.id === action.payload.id);
            work.status = !work.status
            if (work.status === true){
                state.count2 = state.count2 + 1
            }else if (work.status === false){
                state.count2 = state.count2 - 1
            }
        },
        countAll: (state) => {
            state.count1 =  state.count1 + 1
        },
        countAllDec: (state) => {
            state.count1 = state.count1 - 1
        },
        countCompletedDec: (state) => {
            state.count2 = state.count2 - 1
        }
    }
})

const toDoReducer = toDoSlice.reducer

export const {addSchedule, deleteSchedule, toDoChek, countAll, countAllDec, countCompletedDec} = toDoSlice.actions;

export default toDoReducer