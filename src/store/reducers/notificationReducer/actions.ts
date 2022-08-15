import { createAction } from "@reduxjs/toolkit";
import { INotification } from "../../../interfaces/notification.interface";

export const showNotificationAction =
  createAction<INotification>("notification/show");

export const clearNotificationAction = createAction("notification/clear");
