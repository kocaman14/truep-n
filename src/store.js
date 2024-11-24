import { configureStore } from "@reduxjs/toolkit";
import  pinReducer from "./features/pin";




export const store = configureStore({
reducer:{
pin:pinReducer

}


})