import { ENotificationTypes } from "../../interfaces/notification.interface";

export interface INotificationProps {
  type: ENotificationTypes;
  message: string;
}
