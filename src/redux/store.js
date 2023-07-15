import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  shouldRefresh: false,
  isLoggedIn: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShouldRefresh: (state, action) => {
      state.shouldRefresh = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    resetStore: () => initialState,
  },
});

export const { setShouldRefresh, setIsLoggedIn, resetStore } = appSlice.actions;

const store = configureStore({
  reducer: appSlice.reducer,
});

export default store;
