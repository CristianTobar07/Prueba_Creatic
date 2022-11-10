import { Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import rootReducer from "../../index";

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppThunkTemplate<T> = ThunkAction<
  T,
  RootState,
  unknown,
  Action<string>
>;
