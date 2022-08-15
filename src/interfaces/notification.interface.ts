export enum ENotificationTypes {
  success = "success",
  error = "error",
  info = "info",
  warning = "warning",
}
export interface INotification {
  type: ENotificationTypes;
  message: string;
  dissmissDelay?: number;
}
