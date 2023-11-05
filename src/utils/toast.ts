import { ToastPosition, toast } from 'react-toastify';

type ToastType = {
  position?: ToastPosition;
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: number;
};

//  toast fire
export const Toast = {
  success: (message: React.ReactNode, options: ToastType = {}) => {
    toast.success(message, { ...options });
  },
  error: (message: React.ReactNode, options: ToastType = {}) => {
    toast.error(message, { ...options });
  },
  info: (message: React.ReactNode, options: ToastType = {}) => {
    toast.info(message, { ...options, icon: false });
  },
};
