import { useContext } from "react";
import { ToastContext } from "../components/notification/notification-context";

export const useToast = () => useContext(ToastContext);
