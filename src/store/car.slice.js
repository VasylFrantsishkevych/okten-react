import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../services";


export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async () =>{
        try {
            const cars = await carService.getAll();
            return cars;
        }catch (error){

        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState:{
        cars: [],
        status: null,
        error: null
    },
    reducers:{
        //пушимо в масив id та дані з форми, які ми визначили як data
        addCar:(state, action) => {
            state.cars.push({
                //створюємо id
                id: new Date().getTime(),
                //деструктуризовуємо передані дані
                ...action.payload.data
            })
        },
        //за допомогою фільтрації будемо видаляти car порівнюючи id
        deleteCar:(state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers:{
        [getAllCars.pending]:(state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]:(state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]:(state, action) => {

        }
    }
})
const carReducer = carSlice.reducer

export const {addCar, deleteCar} = carSlice.actions;
export default carReducer