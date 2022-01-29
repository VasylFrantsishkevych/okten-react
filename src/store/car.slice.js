import {createSlice} from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: 'carSlice',
    initialState:{
        cars: []
    },
    reducers:{
        //пушимо в масив id та дані з форми, які ми визначили як data
        addCar:(state, action) => {
            state.cars.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        //за допомогою фільтрації будемо видаляти car порівнюючи id
        deleteCar:(state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    }
})
const carReducer = carSlice.reducer

export const {addCar, deleteCar} = carSlice.actions;
export default carReducer