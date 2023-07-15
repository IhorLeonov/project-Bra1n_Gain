import { VerificationConfirmation } from 'components/VerificationConfirmation/VerificationConfirmation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
  CheckIcon,
  ContainerLOginrForm,
  VerificationCheckText,
} from './EmailConfirmationPage.styled';
import { verifyEmail } from 'redux/auth/operations';

const EmailConfirmationPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { verificationCode } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const verify = () => {
      try {
        setIsLoading(true);
        dispatch(verifyEmail(verificationCode));
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
    <ContainerLOginrForm>
      {isLoading && !error && (
        <VerificationCheckText>
          Please wait, checking your email
          <CheckIcon size={25} />
        </VerificationCheckText>
      )}

      {!isLoading && !error && (
        <>
          <VerificationConfirmation />
        </>
      )}
    </ContainerLOginrForm>
  );
};

export default EmailConfirmationPage;
