import axios from "axios";

const BACKEND_URL = 'https://alagad-42746-default-rtdb.asia-southeast1.firebasedatabase.app'

export async function storeBooking(bookingData) {
  const response = await axios.post(BACKEND_URL + '/booking.json', bookingData);
  const id = response.data.name;
  return id;
}

export function updateBooking(id, bookingData) {
  return axios.put(BACKEND_URL + '/booking/' + id + '.json', bookingData);
}

export function deleteBooking() {
  return axios.delete(BACKEND_URL + '/booking/' + id + '.json');
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