import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const VerificationBox = styled.div`
  padding: 0px;
  margin: 0 auto;
  border-radius: 8px;
  margin-bottom: 24px;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  position: relative;

  @media (min-width: 320px) {
    width: 100%;
    padding: 10px;
  }
  @media (min-width: 375px) {
    width: 300px;
    padding: 20px;
  }
  @media (min-width: 768px) {
    width: 520px;
    padding: 40px;
  }
`;

export const VerificationTitle = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;

  color: #3e85f3;
  margin-bottom: 40px;
`;

export const VerificationConfirmText = styled.p`
  font-size: 18px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SuccessIcon = styled(AiOutlineCheckCircle)`
  color: green;
  margin-top: 10px;
`;
