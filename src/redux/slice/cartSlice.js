import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cart_id: [],
  Total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart = state.cart_id.includes(action.payload.id)
        ? state.cart
        : [...state.cart, action.payload];
      state.cart_id = [...state.cart_id, action.payload.id];
      state.Total = state.Total + action.payload.price;
    },
    cartIncreaseItem: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              count: item.count + 1,
              price: (item.actualPrice * (item.count + 1)).toFixed(2),
            }
          : item
      );
      state.Total = parseFloat(
        (state.Total + action.payload.actualPrice).toFixed(2)
      );
    },
    cartDecreaseItem: (state, action) => {
      
      const item = state.cart.find((item) => item.id === action.payload.id);
      const id = item ? item.id : null;
      const count=item ? item.count:null;
      
      if(count===1) state.cart_id=state.cart_id.filter((item)=>item!==id)
      
      
      state.cart = state.cart
        .map((item) =>
          item.id === action.payload.id
            ? item.count > 1 ? {
                  ...item,
                  count: item.count - 1,
                  price: (item.price - item.actualPrice).toFixed(2), 
                }
              : 'remove'
            : item
        ).filter((item) => item !== 'remove'); 

 
      state.Total = parseFloat(
        (state.Total - action.payload.actualPrice).toFixed(2)
      );
    },
  },
});

export const { addCart, cartIncreaseItem, cartDecreaseItem } =
  cartSlice.actions;

export default cartSlice.reducer;
