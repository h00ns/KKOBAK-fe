import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './customToastContainer.css';
import { customToastContainer } from './index.css';

export default function CustomToastContainer() {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar
      limit={1}
      closeButton={false}
      className={customToastContainer}
    />
  );
}
