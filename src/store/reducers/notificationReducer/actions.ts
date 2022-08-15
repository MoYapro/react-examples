import { createAction } from "@reduxjs/toolkit";

export const showNotificationAction = createAction("notification/show");
export const clearNotificationAction = createAction("notification/clear");
