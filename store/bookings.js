import Booking from "../models/booking";

export const BOOKINGS = [
  new Booking(
    'b001',
    'w1',
    '001',
    '2024-08-10',
    '16:58',
    '0', // pending
    '0',
    ''
  ),
  new Booking(
    'b002',
    'w1',
    '004',
    '2024-08-06',
    '16:58',
    '1', // current
    '0',
    ''
  ),
  new Booking(
    'b003',
    'w1',
    '004',
    '2024-08-06',
    '16:58',
    '2', // cancelled by user
    '0',
    ''
  ),
  new Booking(
    'b003',
    'w1',
    '004',
    '2024-08-06',
    '16:58',
    '3', // cancelled by worker
    '0',
    ''
  ),
  new Booking(
    'b003',
    'w1',
    '004',
    '2024-08-06',
    '16:58',
    '4', // completed
    '0',
    ''
  ),

]