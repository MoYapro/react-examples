import { PayloadAction, createReducer } from "@reduxjs/toolkit";

import {
  ENotificationTypes,
  INotification,
} from "../../../interfaces/notification.interface";

import { INotificationState } from "./notificationReducer.types";

const initState: INotificationState = {
  type: ENotificationTypes.success,
  message: "",
  show: false,
};

export default createReducer(initState, {
  "notification/show": (
    _: INotificationState, // current state
    action: PayloadAction<INotification>
  ): INotificationState => ({
    ...action.payload,
    show: true,
  }),
  "notification/clear": () => initState,
});
