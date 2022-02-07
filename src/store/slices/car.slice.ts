import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces";
import {carService} from "../../services";

interface ICarState {
    cars: ICar[],
    update: ICar | null
}

const initialState:ICarState = {
    cars: [],
    update: null
}

export const getAllCars =createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {dispatch}) => {
        const {data} = await carService.getAll()
        dispatch(getCars({cars:data}))
    }
)

export const addNewCar = createAsyncThunk<void,ICar>(
    'carSlice/addNewCar',
    async (car, {dispatch}) => {
        const {data} = await carService.creat(car);
        dispatch(addCar({car:data}))
    }
)

export const deleteCarApp = createAsyncThunk<void, ICar>(
    'carSlice/deleteCarApp',
        async (id, {dispatch}) => {
        await  carService.deleteCar(id);
        dispatch(deleteToCar(id))
        }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        getCars:(state, action:PayloadAction<{cars:ICar[]}>) => {
            state.cars = action.payload.cars
        },
        addCar: (state, action:PayloadAction<{car: ICar}>) => {
            state.cars.push(action.payload.car)
        },
        deleteToCar: (state, action:PayloadAction<ICar>) => {
            state.cars = state.cars.filter(car => car.id === action.payload.id)
        }
    }
})

const carReducer = carSlice.reducer;

export default carReducer;
export const {getCars, addCar, deleteToCar} = carSlice.actions;