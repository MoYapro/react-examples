export enum ENotificationTypes {
  success,
  error,
  info,
  warning,
}

export interface INotificationState {
  type: ENotificationTypes;
  message: string;
  show: boolean;
  dissmisTimeout?: number;
}
