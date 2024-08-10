import { createSlice } from "@reduxjs/toolkit";

export const SERVICES = [
  new Service(
    "s1",
    "Electrician",
    "flash"
  ),
  new Service(
    "s2",
    "Mechanic",
    "build"
  ),
  new Service(
    "s3",
    "Plumber",
    "water"
  ),
  new Service(
    "s4",
    "Aircon Cleaner",
    "snow"
  ),
  new Service(
    "s5",
    "Carpentry",
    "hammer"
  ),
  new Service(
    "s6",
    "Laundry",
    "shirt"
  ),
  new Service(
    "s7",
    "Manicure",
    "hand-right"
  ),
  new Service(
    "s8",
    "Pedicure",
    "footsteps"
  ),
  new Service(
    "s9",
    "Home Cleaner",
    "storefront"
  ),
]

const servicesSlice = createSlice({
  'services':
  {
    id: '',
  }
});