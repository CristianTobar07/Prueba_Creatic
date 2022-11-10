import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isAuth: boolean;
};

const initialState: InitialState = {
  isAuth: false,
};

export const slice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = slice.actions;

export default slice.reducer;
