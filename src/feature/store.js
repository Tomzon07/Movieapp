import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./moviesStore/movieSlice"

export const store=configureStore({
    reducer:{
    movies:moviesReducer
    }
 })