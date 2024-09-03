import { useState, ReactNode, FC } from "react";
import { createPortal } from "react-dom";
import { ToastContext } from "./notification-context";
import { NotificationModel } from "../../@types/notification";
import { NotificationItem } from "./notification-item";
import { v4 as uuid } from "uuid";
import classes from "./notifcation.module.css";
import clsx from "clsx";

interface NotificationsProviderProps {
  children: ReactNode;
}

export const NotificationsProvider: FC<NotificationsProviderProps> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<NotificationModel[]>([]);

  const addNotification = (notification: Omit<NotificationModel, "id">) => {
    const newNotification = {
      ...notification,
      id: uuid(),
      duration: notification.duration || 5000,
    };
    setToasts((prev) => [...prev, { ...newNotification }]);
  };

  const notificationsTopCenter = toasts.filter(
    (el) => el.position === "top-center"
  );
  const notificationsTopLeft = toasts.filter(
    (el) => el.position === "top-left"
  );
  const notificationsTopRight = toasts.filter(
    (el) => el.position === "top-right"
  );
  const notificationsBottomCenter = toasts.filter(
    (el) => el.position === "bottom-center"
  );
  const notificationsBottomLeft = toasts.filter(
    (el) => el.position === "bottom-left"
  );
  const notificationsBottomRight = toasts.filter(
    (el) => el.position === "bottom-right"
  );

  const close = (id: string) => {
    setToasts((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <ToastContext.Provider value={addNotification}>
      {children}
      {createPortal(
        <div className={classes["root"]}>
          {notificationsTopLeft.length ? (
            <div
              className={clsx(
                classes["notification-wrapper"],
                classes["top-left"]
              )}
            >
              {notificationsTopLeft.map((toast) => (
                <NotificationItem
                  key={toast.id}
                  close={() => close(toast.id)}
                  status={toast.status}
                  position={toast.position}
                  title={toast.title}
                  description={toast.description}
                  duration={toast.duration!}
                ></NotificationItem>
              ))}
            </div>
          ) : null}

          {notificationsTopCenter.length ? (
            <div
              className={clsx(
                classes["notification-wrapper"],
                classes["top-center"]
              )}
            >
              {notificationsTopCenter.map((toast) => (
                <NotificationItem
                  key={toast.id}
                  close={() => close(toast.id)}
                  status={toast.status}
                  position={toast.position}
                  title={toast.title}
                  description={toast.description}
                  duration={toast.duration!}
                />
              ))}
            </div>
          ) : null}

          {notificationsTopRight.length ? (
            <div
              className={clsx(
                classes["notification-wrapper"],
                classes["top-right"]
              )}
            >
              {notificationsTopRight.map((toast) => (
                <NotificationItem
                  key={toast.id}
                  close={() => close(toast.id)}
                  status={toast.status}
                  position={toast.position}
                  title={toast.title}
                  description={toast.description}
                  duration={toast.duration!}
                />
              ))}
            </div>
          ) : null}

          {notificationsBottomLeft.length ? (
            <div
              className={clsx(
                classes["notification-wrapper"],
                classes["bottom-left"]
              )}
            >
              {notificationsBottomLeft.map((toast) => (
                <NotificationItem
                  key={toast.id}
                  close={() => close(toast.id)}
                  status={toast.status}
                  position={toast.position}
                  title={toast.title}
                  description={toast.description}
                  duration={toast.duration!}
                />
              ))}
            </div>
          ) : null}

          {notificationsBottomCenter.length ? (
            <div
              className={clsx(
                classes["notification-wrapper"],
                classes["bottom-center"]
              )}
            >
              {notificationsBottomCenter.map((toast) => (
                <NotificationItem
                  key={toast.id}
                  close={() => close(toast.id)}
                  status={toast.status}
                  position={toast.position}
                  title={toast.title}
                  description={toast.description}
                  duration={toast.duration!}
                />
              ))}
            </div>
          ) : null}

          {notificationsBottomRight.length ? (
            <div
              className={clsx(
                classes["notification-wrapper"],
                classes["bottom-right"]
              )}
            >
              {notificationsBottomRight.map((toast) => (
                <NotificationItem
                  key={toast.id}
                  close={() => close(toast.id)}
                  status={toast.status}
                  position={toast.position}
                  title={toast.title}
                  description={toast.description}
                  duration={toast.duration!}
                />
              ))}
            </div>
          ) : null}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};
