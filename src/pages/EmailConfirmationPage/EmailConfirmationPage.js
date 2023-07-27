import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { verifyEmail } from 'redux/auth/operations';
import { VerificationConfirmation } from 'components/VerificationConfirmation/VerificationConfirmation';
import { ContainerLOginrForm } from './EmailConfirmationPage.styled';

const EmailConfirmationPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { verificationCode } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const verify = async () => {
      try {
        setIsLoading(true);
        const answer = await dispatch(verifyEmail(verificationCode));
        
        if (answer.error) {
          setError(true);
          return;
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    verify();
  }, [dispatch, verificationCode]);

  return (
    <ContainerLOginrForm>
      <VerificationConfirmation error={error} isLoading={isLoading} />

      <Toaster />
    </ContainerLOginrForm>
  );
};

export default EmailConfirmationPage;
