import { FC, ReactNode } from "react";
import { useTimeout } from "../../hooks/useTiemout";
import {
  NotificationPosition,
  NotificationStatus,
} from "../../@types/notification";
import classes from "./notifcation.module.css";
import clsx from "clsx";

interface NotificationItemProps {
  close: () => void;
  status: NotificationStatus;
  position: NotificationPosition;
  title: string;
  description: string;
  duration: number;
}

export const NotificationItem: FC<NotificationItemProps> = ({
  close,
  position,
  status,
  title,
  description,
  duration,
}) => {
  useTimeout(close, duration);

  return (
    <div className={clsx(classes["notification-item"], classes[status])}>
      <div>
        <h1 className={classes["notification-title"]}>{title}</h1>
        <h1 className={classes["notification-description"]}>{description}</h1>
      </div>
      <div>
        <button onClick={close} >
          x
        </button>
      </div>
    </div>
  );
};
