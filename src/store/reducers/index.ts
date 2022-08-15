import { combineReducers } from "@reduxjs/toolkit";
import notificatonReducer from "./notificationReducer";

const reducers = combineReducers({
  notification: notificatonReducer,
  //...other reducers
});

export default reducers;
