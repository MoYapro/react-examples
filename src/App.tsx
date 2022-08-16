import { FC } from "react";

import ControlPanel from "./components/ControlPanel";
import Notification from "./components/Notification";
import { useReduxHooks } from "./hooks/useReduxHooks";
import { RootState } from "./store";

const App: FC = () => (
  <>
    <ControlPanel />
    <Notification />
  </>
);

export default App;
