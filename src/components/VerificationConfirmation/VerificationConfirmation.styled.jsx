import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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
  margin-bottom: 30px;
`;

export const SuccessIcon = styled(AiOutlineCheckCircle)`
  color: green;
  margin-top: 10px;
`;

export const LoginBtn = styled(NavLink)`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;

  height: 56px;
  width: 200px;
  background-color: #3e85f3;
  border: none;
  border-radius: 16px;
  gap: 11px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }
`;
