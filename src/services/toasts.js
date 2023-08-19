import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notiOps = {
  position: 'top-right',
  autoClose: 2800,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

export const error = () =>
  toast.error('Oops, something went wrong...', notiOps);
export const warn = () =>
  toast.warn('Sorry, you must enter some text...', notiOps);
export const empty = () =>
  toast.warn('Sorry, no photos with this query...', notiOps);
export const info = () => toast.info('Oops! No more photos :(', notiOps);
export const success = total =>
  toast.success(`Cool!!! We found ${total} photos!`, notiOps);
