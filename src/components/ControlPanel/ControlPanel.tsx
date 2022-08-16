import { FC, useCallback, useEffect } from "react";
import { useReduxHooks } from "../../hooks/useReduxHooks";
import { ENotificationTypes } from "../../interfaces/notification.interface";
import { RootState } from "../../store";
import {
  clearNotificationAction,
  showNotificationAction,
} from "../../store/reducers/notificationReducer/actions";

const ControlPanel: FC = (): JSX.Element => {
  const { dispatch, useAppSelector } = useReduxHooks();

  const notification = useAppSelector((state: RootState) => state.notification);

  const handleShowNotification = useCallback((): void => {
    dispatch(
      showNotificationAction({
        type: ENotificationTypes.success,
        message: "Success message",
      })
    );
  }, [dispatch]);

  const handleShowNotificationWithDelay = useCallback((): void => {
    dispatch(
      showNotificationAction({
        type: ENotificationTypes.info,
        message: "Success message with 3000 ms delay",
        dissmissDelay: 3000,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    if (notification.dissmissDelay) {
      setTimeout(() => {
        dispatch(clearNotificationAction());
      }, Number(notification.dissmissDelay));
    }
  }, [dispatch, notification]);

  return (
    <>
      <button onClick={handleShowNotification}>show notification</button>
      <button onClick={handleShowNotificationWithDelay}>
        show notification with delay
      </button>
    </>
  );
};
export default ControlPanel;
