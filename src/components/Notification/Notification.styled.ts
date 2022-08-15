import styled from "styled-components";
import { ENotificationTypes } from "../../interfaces/notification.interface";

const notificationColor: { [key: string]: string } = {
  success: "#07BF3A",
  error: "#D4440E",
  info: "#15BCE8",
  warning: "#E89815",
};

export const NotificationWrapper = styled.div<{
  $color: ENotificationTypes;
}>`
  position: fixed;
  top: 0;
  height: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $color }) => notificationColor[$color]};
  color: ${({ $color }) =>
    $color === ENotificationTypes.info ? "black" : "white"};
`;
