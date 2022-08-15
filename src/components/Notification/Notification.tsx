import { FC } from "react";

import { NotificationWrapper } from "./Notification.styled";
import { INotificationProps } from "./Notification.types";

const Notification: FC<INotificationProps> = ({
  type,
  message,
}): JSX.Element => {
  return <NotificationWrapper $color={type}>{message}</NotificationWrapper>;
};

export default Notification;
