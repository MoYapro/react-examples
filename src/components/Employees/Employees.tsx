import { FC } from "react";

import EmployeesList from "./EmployeesList";
import useEmloyeesLogic from "./Employees.hook";

const Employees: FC = (): JSX.Element | null => {
  const { data } = useEmloyeesLogic();

  return data?.length ? <EmployeesList data={data} /> : null;
};

export default Employees;
