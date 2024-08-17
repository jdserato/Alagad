import { createSlice } from "@reduxjs/toolkit";
import User from "../models/user";

export const USERS = [
  new User(
    '000',
    'Jay Vince',
    'Serato',
    'jdserato@gmail.com',
    [1],
    'password',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Abdelrahman_ElGendy%E2%80%94Headshot.jpg/640px-Abdelrahman_ElGendy%E2%80%94Headshot.jpg',
    'Poblacion, Liloan, Cebu'
  ),
  new User(
    '001',
    'Joshua',
    'Arivelez',
    'j.arivelez@gmail.com',
    [1],
    'password',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Dr_Prash_Ladva.jpg/640px-Dr_Prash_Ladva.jpg',
    'Labangon, Cebu City'
  ),
  new User(
    '002',
    'Clint',
    'Ramirez',
    'c.ramirez@gmail.com',
    [2],
    'password',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/%D0%9C%D0%B0%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%B8%D1%87.jpg/640px-%D0%9C%D0%B0%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%B8%D1%87.jpg',
    'Banawa, Cebu City'
  ),
  new User(
    '003',
    'Felisa',
    'Nuñez',
    'f.nuñez@gmail.com',
    [2],
    'password',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Marine_C_Cambon.jpg/640px-Marine_C_Cambon.jpg',
    'Guadalupe, Cebu City'
  ),
  new User(
    '004',
    'Trinity',
    'Oliveros',
    't.oliveros@gmail.com',
    [2],
    'password',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Michael_Belozerov.jpg/640px-Michael_Belozerov.jpg',
    'Canduman, Mandaue City'
  ),
  new User(
    '005',
    'John Jameson',
    'Dela Cruz',
    'jj.delacruz@gmail.com',
    [1],
    'password',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Johnsson%2C_WG_editor.jpg/640px-Johnsson%2C_WG_editor.jpg',
    'Tisa, Cebu City'
  ),
]

const loggedInUserSlice = createSlice( {
  name: 'user',
  initialState: {
    id: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.id = action.payload.id;
    },
    logOut: (state, action) => {
      state.id = null;
    }
  }
});

export const logInUser = loggedInUserSlice.actions.logIn;
export const logOutUser = loggedInUserSlice.actions.logOut;
export default loggedInUserSlice.reducer;