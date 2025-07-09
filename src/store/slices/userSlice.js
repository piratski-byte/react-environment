import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Гость',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.name = action.payload.name;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.name = 'Гость';
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
