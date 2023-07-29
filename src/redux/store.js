import { configureStore, createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const initialState = {
  shouldRefresh: false,
  isLoggedIn: false,
  cart: [],
  items: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setShouldRefresh: (state, action) => {
      state.shouldRefresh = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    addToCart: (state, action) => {
      // find the item in the cart
      const existingCartItem = state.cart.find(
        (item) => item.id === action.payload.id && item.weight === action.payload.weight
      );
    
      if (existingCartItem) {
        // if the item exists, increment the quantity
        existingCartItem.quantity += action.payload.quantity;
      } else {
        // if the item doesn't exist, add the new item to the cart
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id || item.weight !== action.payload.weight);
    },
    updateCartItem: (state, action) => {
      state.cart = state.cart.map((item) => 
        item.id === action.payload.id && item.weight === action.payload.weight 
        ? {...item, quantity: action.payload.quantity} 
        : item
      );
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
    resetStore: () => initialState,
  },
});

export const { setShouldRefresh, setIsLoggedIn, addToCart, removeFromCart, updateCartItem, setItems, resetStore } = appSlice.actions;

const store = configureStore({
  reducer: appSlice.reducer,
  preloadedState: persistedState
});

// Save state to localStorage whenever it changes
store.subscribe(() => {
  saveState({
    items: store.getState().items,
    cart: store.getState().cart,
  });
});

export default store;
