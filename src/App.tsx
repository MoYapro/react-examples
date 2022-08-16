import { FC } from "react";

import ControlPanel from "./components/ControlPanel";
import Notification from "./components/Notification";

const App: FC = () => (
  <>
    <ControlPanel />
    <Notification />
  </>
);

export default App;
