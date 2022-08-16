import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { IEmployee } from "../../../interfaces/employee.interface";
import { IEmployeesState } from "./employeesReducer.types";

const initState: IEmployeesState = {
  data: [],
};

export default createReducer(initState, {
  "employees/add": (
    state: IEmployeesState, // current state
    action: PayloadAction<IEmployee[]>
  ): IEmployeesState => ({
    ...state,
    data: action.payload,
  }),
  "employees/clear": () => initState,
});
