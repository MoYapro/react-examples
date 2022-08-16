import { FC } from "react";

import ControlPanel from "./components/ControlPanel";
import Employees from "./components/Employees";
import Notification from "./components/Notification";

const App: FC = () => (
  <>
    <ControlPanel />
    <Employees />
    <Notification />
  </>
);

export default App;
