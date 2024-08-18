import { configureStore } from "@reduxjs/toolkit";
import userReducer from './users';
import bookingReducer from './bookings';

export const store = configureStore({
  reducer: {
    loggedInUser: userReducer,
    bookingRedcr: bookingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});