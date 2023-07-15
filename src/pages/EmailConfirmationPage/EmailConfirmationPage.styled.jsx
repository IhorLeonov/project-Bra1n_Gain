import styled, { keyframes } from 'styled-components';
import { FiLoader } from 'react-icons/fi';

export const ContainerLOginrForm = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  @media (min-width: 320px) {
    background-color: #ffffff;
  }

  @media (min-width: 375px) {
    background-color: ${props => props.theme.colors.secondBlueColor};
  }

  @media (min-width: 1280px) {
    background-image: url(${process.env.PUBLIC_URL}/images/goose_auth-desctop/rocket_auth-desctop.png);

    background-size: 368px 521px;
    background-repeat: no-repeat;
    background-position: right 65px bottom 40%;
  }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const fadeAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
`;

export const CheckIcon = styled(FiLoader)`
  animation: ${rotateAnimation} 4s linear infinite,
    ${fadeAnimation} 4s ease-in-out infinite;
  color: #e0a800;
`;

export const VerificationCheckText = styled.p`
  display: inline-flex;
  gap: 5px;
  align-items: center;
  font-size: 18px;
`;
