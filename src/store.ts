import { configureStore } from "@reduxjs/toolkit";
import rooReducer from "./common/store";

export default configureStore({
  reducer: rooReducer,
});
