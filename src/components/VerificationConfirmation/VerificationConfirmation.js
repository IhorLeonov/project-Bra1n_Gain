import { useAuth } from 'hooks/useAuth';
import {
  VerificationBox,
  VerificationTitle,
  VerificationConfirmText,
  SuccessIcon,
} from './VerificationConfirmation.styled';

export const VerificationConfirmation = () => {
  const { isVerified } = useAuth();

  return (
    <VerificationBox>
      <VerificationTitle>Email Verification</VerificationTitle>
      {isVerified && (
        <>
          <VerificationConfirmText>
            Your email address has been successfully verified. Please wait, you
            will be redirected to your page.
            <SuccessIcon size={35} />
          </VerificationConfirmText>
        </>
      )}

      {!isVerified && <p>Verification faild</p>}
    </VerificationBox>
  );
};
