import { VerificationConfirmation } from 'components/VerificationConfirmation/VerificationConfirmation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { verifyEmail } from 'redux/auth/operations';

const EmailConfirmationPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { verificationCode } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const verify = async () => {
      try {
        setIsLoading(true);
        await dispatch(verifyEmail(verificationCode));
      } catch (error) {
        console.log(error.message);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    verify();
  }, [dispatch, verificationCode]);

  return (
    <div>
      {isLoading && !error && <p>Please wait, checking your email...</p>}

      {!isLoading && !error && (
        <>
          <VerificationConfirmation />
          <NavLink to={'/login'} type="button">
            Log in
          </NavLink>
        </>
      )}
    </div>
  );
};

export default EmailConfirmationPage;
