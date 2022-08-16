import { FC } from "react";

import ControlPanel from "./components/ControlPanel";
import Employees from "./components/Employees";
import Notification from "./components/Notification";
import { useReduxHooks } from "./hooks/useReduxHooks";
import { RootState } from "./store";

const App: FC = () => {
  const { useAppSelector } = useReduxHooks();

  const notification = useAppSelector((state: RootState) => state.notification);

  return (
    <div>
      <ControlPanel />
      <Employees />
      {notification.show && (
        <Notification type={notification.type} message={notification.message} />
      )}
    </div>
  );
};

export default App;
