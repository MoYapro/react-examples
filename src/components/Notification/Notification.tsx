import { FC } from "react";
import { useReduxHooks } from "../../hooks/useReduxHooks";
import { RootState } from "../../store";

import { NotificationWrapper } from "./Notification.styled";

const Notification: FC = (): JSX.Element | null => {
  const { useAppSelector } = useReduxHooks();
  const notification = useAppSelector((state: RootState) => state.notification);

  return notification.show ? (
    <NotificationWrapper $color={notification.type}>
      {notification.message}
    </NotificationWrapper>
  ) : null;
};

export default Notification;
