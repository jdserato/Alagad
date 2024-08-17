import { configureStore } from "@reduxjs/toolkit";
import userReducer from './users';

export const store = configureStore({
  reducer: {
    loggedInUser: userReducer,
  }
});