import toast from 'react-hot-toast';

export const ToasterNotify = status => {
  switch (status) {
    case 'AccountСreated':
      return toast.success('Goose registration successfully !');
    case 'LoginSuccessful':
      return toast.success('login successfully !');
    case 'RegisterСreatedFail':
      return toast.error(
        'Please enter less than 16 characters in the email field !'
      );
    case 'LoginFail':
      return toast.error('Incorrect login or password !');
    case 'RegisterFieldInputEmpty':
      return toast.error('Please fill in all fields !');
    case 'RegisterWrongEmail':
      return toast.error('Invalid email address !');
    case 'RegisterWrongPassword':
      return toast.error(
        'Please enter more than 6 characters in the password field !'
      );
    default:
      return toast.error(status);
  }
};
