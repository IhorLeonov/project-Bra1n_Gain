import {
  VerificationBox,
  LoginBtn,
  VerificationTitle,
  VerificationConfirmText,
  SuccessIcon,
} from './VerificationConfirmation.styled';

export const VerificationConfirmation = () => {
  return (
    <VerificationBox>
      <VerificationTitle>Email Verification</VerificationTitle>
      <VerificationConfirmText>
        Your email address has been successfully verified. Please follow to
        Login Page to access your account.
        <SuccessIcon size={35} />
      </VerificationConfirmText>
      <LoginBtn to={'/login'} type="button">
        Log in
      </LoginBtn>
    </VerificationBox>
  );
};
