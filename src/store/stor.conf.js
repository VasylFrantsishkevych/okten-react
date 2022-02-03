import {configureStore} from "@reduxjs/toolkit";

import toDoReducer from "./toDo.slice";

const store = configureStore({
    reducer:{
        toDoReducer
    }
})

export default store