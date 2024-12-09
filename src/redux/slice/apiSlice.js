import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: 'idle',
  error: null,
};
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data; 
      } catch (error) {
       
        return thunkAPI.rejectWithValue(error.message);
        
      }
    }
);

const apiSlice = createSlice({
  name: "apiFetching",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload; 
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; 
      });
  },
});



export default apiSlice.reducer
