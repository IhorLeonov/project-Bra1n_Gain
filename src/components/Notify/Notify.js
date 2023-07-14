import toast from 'react-hot-toast';

export const ToasterNotify = message => {
  switch (message) {
    case 'AccountСreated':
      return toast.success(
        'Account created. To confirm your registration, please follow the link that was sent to your email address. Click on this message to close it',
        {
          duration: Infinity,
        }
      );
    case 'LoginSuccessful':
      return toast.success('login successfully.');
    case 'RegisterSuccessful':
      return toast.success('Registration successfully complited');

    default:
      return toast.error(message);
  }
};
