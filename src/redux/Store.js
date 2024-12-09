import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../redux/slice/cartSlice.js';
import productSlice from '../redux/slice/apiSlice.js'


export const Store=configureStore({
    reducer:{
        cart:cartSlice,
        product:productSlice,
       
    }
})