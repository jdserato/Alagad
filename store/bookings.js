import { createSlice } from "@reduxjs/toolkit";
import Booking from "../models/booking";
import { fetchBookings } from "../util/http";
import { createContext, useReducer } from "react";

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

export const BookingsContext = createContext({
  bookings: [],
  addBooking: ({date, time, workerId, clientId, status}) => { },
  deleteBooking: (id) => {  },
  updateBooking: (id, {date, time, workerId, clientId, status}) => {  },
});

function bookingsReducer(state, action) {
  switch(action.type) {
    case 'ADD':
      return [action.payload, ...state]
    case 'UPDATE':
      console.log("PASSED ID: ", action.payload.id);
      
      const updatableBookingIndex = state.findIndex((booking) => booking.id === action.payload.id);
      const updatableBooking = state[updatableBookingIndex];
      const updatedItem = { ...updatableBooking, ...action.payload.data}
      console.log("UPDATED ITEM: ", updatedItem);
      
      const updatedBookings = [...state];
      updatedBookings[updatableBookingIndex] = updatedItem;
      console.log(updatedBookings, 'change');
      return updatedBookings;
    case 'DELETE':
      return state.filter((booking) => booking.id != action.payload)
    case 'SET':
      return action.payload.reverse();
    default:
      return state;
  }
}

function BookingContextProvider({children}) {
  const [bookingsState, dispatch] = useReducer(bookingsReducer, []);
  function addBooking(bookingData) {
    dispatch({type: 'ADD', payload: bookingData});
  }
  function deleteBooking(id) {
    dispatch({type: 'DELETE', payload: id})
  }
  function updateBooking(id, bookingData) {
    dispatch({type: 'UPDATE', payload: {id: id, data: bookingData}})
  }
  function setBookings(bookings) {
    dispatch({type: 'SET', payload: bookings})
  }

  const value = {
    bookings: bookingsState,
    addBooking: addBooking,
    deleteBooking: deleteBooking,
    updateBooking: updateBooking,
    setBookings: setBookings,
  }

  return <BookingsContext.Provider value={value}>{children}</BookingsContext.Provider>
}

export default BookingContextProvider;

// const bookingSlice = createSlice( {
//   name: 'booking',
//   initialState: {
//     list: []
//   },
//   reducers: {
//     setBookings: (state, action) => {
//       console.log("Setting ", action.payload);
      
//       state.list = action.payload;
//     },
//     getBookings: (state, action) => {
//       console.log("GETTING", state.list);
      
//       return state.list;
//     },
//     setBookingStatus: (state, action) => {
//       console.log(action.payload); 
//       console.log(state);
      
//       const updatableBookingIndex = state.list.findIndex((booking) => booking.id === action.payload.id);
//       const updatableBooking = state.list[updatableBookingIndex];
//       const updatedItem = { ...updatableBooking, status: action.payload.newstatus}
//       const updatedBookings = [...state.list];
//       updatedBookings[updatableBookingIndex] = updatedItem;
//       console.log("BEFORE", state.list);
//       state.list = updatedBookings;
//       console.log("AFTER", state.list);
      
//       // const book = state.list.find((booking) => {
//       //   if (booking.id === action.payload.id) {
//       //     booking.status = action.payload.newstatus;
//       //   }
//       //   return booking.id === action.payload.id;
//       // })
//       // book.status = action.payload.newstatus;
//     },
//   }
// });

// export const changeBookingStatus = bookingSlice.actions.setBookingStatus;
// export const setBookings = bookingSlice.actions.setBookings;
// export const getBookings = bookingSlice.actions.getBookings;
// export default bookingSlice.reducer;