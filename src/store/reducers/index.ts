import { combineReducers } from "@reduxjs/toolkit";
import employessReducer from "./employeesReducer";
import notificatonReducer from "./notificationReducer";

const reducers = combineReducers({
  notification: notificatonReducer,
  employees: employessReducer,
  //...other reducers
});

export default reducers;
