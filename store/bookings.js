import { createSlice } from "@reduxjs/toolkit";
import Booking from "../models/booking";

export const BOOKINGS = [
  new Booking(
    'b001',
    'w1',
    '001',
    '2024-08-10',
    '16:58',
    0, // pending
    '0',
    ''
  ),
  new Booking(
    'b002',
    'w1',
    '004',
    '2024-08-06',
    '16:58',
    1, // current
    '0',
    ''
  ),
  new Booking(
    'b003',
    'w1',
    '004',
    '2024-08-06',
    '16:58',
    2, // cancelled by user
    '0',
    ''
  ),
  new Booking(
    'b004',
    'w1',
    '004',
    '2024-08-06',
    '16:58',
    3, // cancelled by worker
    '0',
    ''
  ),
  new Booking(
    'b005',
    'w1',
    '004',
    '2024-08-06',
    '16:58',
    4, // completed
    '0',
    ''
  ),

]

const bookingSlice = createSlice( {
  name: 'booking',
  initialState: {
    list: BOOKINGS
  },
  reducers: {
    setBookingStatus: (state, action) => {
      console.log(action.payload);
      
      const book = state.list.find((booking) => {
        if (booking.id === action.payload.id) {
          booking.status = action.payload.newstatus;
        }
        return booking.id === action.payload.id;
      })
      book.status = action.payload.newstatus;
    },
  }
});

export const changeBookingStatus = bookingSlice.actions.setBookingStatus;
export default bookingSlice.reducer;