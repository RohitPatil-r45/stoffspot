import { createSlice } from "@reduxjs/toolkit";
import { products } from "./data";

const initialState = {
  user: { name: "User name" },
  products: products,
  cart: [],
  wishlist: [],
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default userSlice.reducer;
