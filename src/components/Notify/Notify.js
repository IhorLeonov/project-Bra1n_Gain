import toast from 'react-hot-toast';

export const ToasterNotify = message => {
  switch (message) {
    case 'AccountСreated':
      return toast.success(
        'Account created. To confirm your registration, please follow the link that was sent to your email address.',
        {
          duration: 10000,
        }
      );
    case 'LoginSuccessful':
      return toast.success('login successfully.', {
        duration: 4000,
      });

    case 'MailSend':
      return toast.success('Verification email has been sent.', {
        duration: 4000,
      });

    default:
      return toast.error(message);
  }
};
