import { PayloadAction } from "@reduxjs/toolkit";
import { FC, useEffect } from "react";
import { useReduxHooks } from "../../hooks/useReduxHooks";
import { IEmployee } from "../../interfaces/employee.interface";
import { RootState } from "../../store";
import {
  addEmployeesAction,
  getEmployeesAction,
} from "../../store/reducers/employeesReducer/actions";

const Employees: FC = (): JSX.Element | null => {
  const { dispatch, useAppSelector } = useReduxHooks();

  const { data } = useAppSelector((state: RootState) => state.employees);

  useEffect(() => {
    dispatch(getEmployeesAction()).then(
      // @ts-ignore: Unreachable code error
      (response: PayloadAction<IEmployee[], string>) => {
        dispatch(addEmployeesAction(response?.payload));
      }
    );
  }, [dispatch]);

  return data?.length ? (
    <ul>
      {data.map(({ id, employee_name }) => (
        <li key={id}>{employee_name}</li>
      ))}
    </ul>
  ) : null;
};

export default Employees;
