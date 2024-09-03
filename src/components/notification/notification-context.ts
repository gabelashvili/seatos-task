import { createContext } from "react";
import { NotificationModel } from "../../@types/notification";

export const ToastContext = createContext<
  (notification: Omit<NotificationModel, "id">) => void
>(() => {});
