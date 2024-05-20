import { toast, ToastPosition } from "react-toastify";

export const toastOptions = {
  position: "top-right" as ToastPosition,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const notify = (message: string) => toast(message, toastOptions);
