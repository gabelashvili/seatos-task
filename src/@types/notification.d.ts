type NotificationStatus = "success" | "error" | "info" | "warning";
type NotificationPosition =
  | "top-right"
  | "top-center"
  | "top-left"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left";

export interface NotificationModel {
  id: string;
  status: NotificationStatus;
  title: string;
  description: string;
  position: NotificationPosition;
  duration?: number;
}
