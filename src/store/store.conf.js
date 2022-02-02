import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./carSlice/car.slice";
import userReducer from "./userSlice/user.slice";
import postReducer from "./postSlice/post.slice";
import commentReducer from "./commentSlice/commentSlice";

const store = configureStore({
    reducer:{
        carReducer,
        userReducer,
        postReducer,
        commentReducer
    }
})

export default store