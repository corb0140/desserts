import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true, // use loading to fix the rendering issue in next.js in the server and client side
  cartItems: [], // default no item in cart
  qty: 1, // default quantity of the item
};

//function to add decimals to the total price of the items in the cart
const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

//define cartSlice by calling createSlice from redux and pass this object to this function
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateQty: (state, action) => {
      state.qty = action.payload;
    },

    addToCart: (state, action) => {
      const item = action.payload; // action.payload contains the item that we want to add to the cart

      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      ); // check if the item is already in the cart

      if (existingItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.id === existingItem.id ? item : cartItem
        ); // if the item is already in the cart, update the quantity
      } else {
        state.cartItems = [...state.cartItems, item]; // if the item is not in the cart, add the item to the cart
      }

      state.itemPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      ); // calculate the total price of the items in the cart

      state.taxPrice = addDecimals(Number((0.15 * state.itemPrice).toFixed(2))); // calculate the tax price of the items in the cart

      state.totalPrice = addDecimals(
        Number(state.itemPrice) + Number(state.taxPrice)
      ); // set the total price of the items in the cart

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); // save the cart items to the local storage
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload
      ); // remove the item from the cart

      state.itemPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      ); // calculate the total price of the items in the cart

      state.taxPrice = addDecimals(Number((0.15 * state.itemPrice).toFixed(2))); // calculate the tax price of the items in the cart

      state.totalPrice = addDecimals(
        Number(state.itemPrice) + Number(state.taxPrice)
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { addToCart, removeFromCart, hideLoading, updateQty } =
  cartSlice.actions;

export default cartSlice.reducer;
