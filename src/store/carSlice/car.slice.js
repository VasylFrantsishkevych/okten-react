import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services/car.service";




const   initialState = {
     cars: [],
     status: null,
     error: null,
     carUpdate: {}
 }


//отримую всі авто з серевера
export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) =>{

        try {
            return await carService.getAll();
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

//обновлення
export const updateCarById = createAsyncThunk(
    'carSlice/updateCarById',
    async ({id, car}, {dispatch}) =>  {
        const newCar = await carService.update(id, car);
        dispatch(updateCar({car: newCar}))
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        //пушимо в масив id та дані з форми, які ми визначили як data
        addCar:(state, action) => {
            state.cars.push(action.payload.data)
        },
        //за допомогою фільтрації будемо видаляти car порівнюючи id
        deleteCar:(state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        updateToCar:(state,action) => {
            state.carUpdate = action.payload.car
        },
        updateCar:(state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.car.id);
            state.cars[index] = action.payload.car
            state.carUpdate = {}
        }
    },
    extraReducers:{
        [getAllCars.pending]:(state) => {
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

export const {addCar, deleteCar, updateToCar, updateCar} = carSlice.actions;
export default carReducer