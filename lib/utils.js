import { toast } from 'react-toastify';

export const errorToastr = errors => {
  Object.keys(errors).map(key =>
    toast.error(`${key.toUpperCase()}: ${errors[key].join(',')}`, {
      position: toast.POSITION.TOP_CENTER,
    }),
  );
};
