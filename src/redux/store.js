import { configureStore, createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const initialState = {
  shouldRefresh: false,
  isLoggedIn: false,
  cart: [],
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
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    resetStore: () => initialState,
  },
});

export const { setShouldRefresh, setIsLoggedIn, addToCart, removeFromCart, resetStore } = appSlice.actions;

const store = configureStore({
  reducer: appSlice.reducer,
  preloadedState: persistedState
});

// Save state to localStorage whenever it changes
store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  });
});

export default store;
