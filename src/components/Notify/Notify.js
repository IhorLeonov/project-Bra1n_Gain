import toast from 'react-hot-toast';

export const ToasterNotify = status => {
  switch (status) {
    case 'AccountСreated':
      return toast.success('Goose registration successfully !');
    case 'LoginSuccessful':
      return toast.success('login successfully !');
    case 'AccountСreatedFail':
      return toast.error('This mail is already registered !');
    case 'LoginFail':
      return toast.error('Login or password error !');
    case 'RegisterFieldInputEmpty':
      return toast.error('Please fill in all fields !');
    case 'RegisterWrongEmail':
      return toast.error('Invalid email address !');
    case 'RegisterWrongPassword':
      return toast.error(
        'Please enter more than 6 characters in the password field !'
      );
    default:
      return toast.error('Error not found');
  }
};
