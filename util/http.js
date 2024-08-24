import axios from "axios";

const BACKEND_URL = 'https://alagad-42746-default-rtdb.asia-southeast1.firebasedatabase.app'

export function storeBooking(bookingData) {
  axios.post(BACKEND_URL + '/booking.json',
    bookingData
  );
}

export async function fetchBookings() {
  const response = await axios.get(BACKEND_URL + '/booking.json');

  const bookings = [];

  console.log(response.data);
  
  for (const key in response.data) {
    const bookingObj = {
      id: key,
      workerId: response.data[key].workerId,
      clientId: response.data[key].clientId,
      time: response.data[key].time,
      landmarks: response.data[key].landmarks,
      address: response.data[key].address,
      date: response.data[key].date,
      details: response.data[key].details,
      status: response.data[key].status,
    }
    bookings.push(bookingObj);
  }

  return bookings;
}