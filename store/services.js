import { createSlice } from "@reduxjs/toolkit";

export const SERVICES = [
  {
    id: "s1",
    name: "Electrician",
    logo: "flash"
  },
  {
    id: "s2",
    name: "Mechanic",
    logo: "build"
  },
  {
    id: "s3",
    name: "Plumber",
    logo: "water"
  },
  {
    id: "s4",
    name: "Aircon Cleaner",
    logo: "snow"
  },
  {
    id: "s5",
    name: "Carpentry",
    logo: "hammer"
  },
  {
    id: "s6",
    name: "Laundry",
    logo: "shirt"
  },
  {
    id: "s7",
    name: "Manicure",
    logo: "hand-right"
  },
  {
    id: "s8",
    name: "Pedicure",
    logo: "footsteps"
  },
  {
    id: "s9",
    name: "Home Cleaner",
    logo: "storefront"
  },
]

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    data: SERVICES
  }
});