import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../services";

//отримую всі авто з серевера
export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) =>{

        try {
            const cars = await carService.getAll();
            return cars;
        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)

//додавання авто на  сервера
export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data)
            dispatch(addCar({data: newCar}))
        } catch (e) {

        }
    }
)

//оновлення даних
export const updateOneCar = createAsyncThunk(
    'carSlice/updateOneCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.update(data)
            dispatch(updateCar({data: newCar}))
        }catch (e){

        }
    }
)

//видалення карів з сервера
export const deleteOneCar = createAsyncThunk(
    'carSlice/deleteOneCar',
    async ({id}, {dispatch}) => {
        try {
            await carService.delete(id)
            dispatch(deleteCar({id}))
        }catch (e) {
            console.log(e)
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
            state.cars.push(action.payload.data)
        },
        //за допомогою фільтрації будемо видаляти car порівнюючи id
        deleteCar:(state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        updateCar: (state, action) => {
            state.cars.push(action.payload.data)
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
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})
const carReducer = carSlice.reducer

export const {addCar, deleteCar} = carSlice.actions;
export default carReducer