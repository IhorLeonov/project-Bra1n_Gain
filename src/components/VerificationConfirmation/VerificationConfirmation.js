import {
  VerificationBox,
  VerificationTitle,
  VerificationConfirmText,
  SuccessIcon,
  CheckIcon,
  VerificationCheckText,
} from './VerificationConfirmation.styled';

export const VerificationConfirmation = ({ isLoading, error }) => {
  return (
    <VerificationBox>
      <VerificationTitle>Email Verification</VerificationTitle>

      {!error && isLoading && (
        <VerificationCheckText>
          Please wait, checking your email
          <CheckIcon size={25} />
        </VerificationCheckText>
      )}

      {error && !isLoading && <p>Verification faild</p>}

      {!error && !isLoading && (
        <VerificationConfirmText>
          Your email address has been successfully verified. Please wait, you
          will be redirected to your page.
          <SuccessIcon size={35} />
        </VerificationConfirmText>
      )}
    </VerificationBox>
  );
};
