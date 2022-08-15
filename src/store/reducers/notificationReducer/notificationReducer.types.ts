import { ENotificationTypes } from "../../../interfaces/notification.interface";

export interface INotificationState {
  type: ENotificationTypes;
  message: string;
  show: boolean;
  dissmissDelay?: number;
}
