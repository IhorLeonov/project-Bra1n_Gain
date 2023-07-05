import toast from 'react-hot-toast';

export const ToasterNotify = message => {
  switch (message) {
    case 'AccountСreated':
      return toast.success('Goose registration successfully.');
    case 'LoginSuccessful':
      return toast.success('login successfully.');
    case 'Successfully':
      return toast.success('Successfully');


    default:
      return toast.error(message);
  }
};
