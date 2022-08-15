import { PayloadAction, createReducer } from "@reduxjs/toolkit";

import { ENotificationTypes } from "../../../interfaces/notification.interface";

import { INotificationState } from "./notificationReducer.types";

const initState: INotificationState = {
  type: ENotificationTypes.success,
  message: "",
  show: false,
};

export default createReducer(initState, {
  "notification/show": (
    _: INotificationState,
    action: PayloadAction<INotificationState>
  ): INotificationState => ({
    ...action.payload,
    show: true,
  }),
  "notification/clear": () => initState,
});
