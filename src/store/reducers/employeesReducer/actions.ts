import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { IEmployee } from "../../../interfaces/employee.interface";
import { IApiResponse } from "../../..//interfaces/apiResponse.interface";

export const addEmployeesAction = createAction<IEmployee[]>("employees/add");

export const getEmployeesAction = createAsyncThunk(
  "employees/get",
  async (): Promise<IEmployee[]> => {
    try {
      const response = await axios.get<IApiResponse<IEmployee[]>>(
        "https://dummy.restapiexample.com/api/v1/employees"
      );
      return response.data.data;
    } catch (e) {
      throw new Error(JSON.stringify(e));
    }
  }
);
