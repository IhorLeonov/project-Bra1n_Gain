import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import gоoseInRocket from '../../shared/images/rocket_auth-desctop/rocket_auth-desctop@2x.png';

export const ContainerLOginrForm = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1440px) {
    background-image: url(${gоoseInRocket});
    background-size: 368px 521px;
    background-repeat: no-repeat;
    background-position: 110% 90%;
  }

  @media (min-width: 768px) {
    background-color: #ddebf8;
  }
`;

export const LoginForm = styled.form`
  padding: 0px;
  margin: 0 auto;
  border-radius: 8px;
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  position: relative;

  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 480px;
    padding: 40px;
  }
`;

export const LoginInput = styled.input`
  width: 400px;
  height: 54px;
  border-radius: 8px;
  border: 1px solid #dce3e5;
  padding: 18px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #dce3e5;
  }
  :-ms-input-placeholder {
    color: #dce3e5;
  }
  @media (min-width: 1440px) {
    width: 400px;
  }
  @media (min-width: 320px) {
    width: 100%;
  }
`;
export const LoginTitle = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;

  color: #3e85f3;
  margin-bottom: 40px;
`;
export const ContainerSignUp = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loginlabel = styled.label`
  &:nth-child(-n + 4) {
    margin-bottom: 18px;
  }
  &:nth-child(5) {
    margin-bottom: 48px;
    position: relative;
  }
`;
export const LoginNameOfInput = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;

  color: #111111;
  margin-bottom: 8px;
`;

export const LoginSubmitBtn = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;

  height: 56px;
  width: 100%;
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

export const SignUpBtn = styled(NavLink)`
  border: none;
  cursor: pointer;
  position: relative;
`;

export const SignUpBtnText = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #3e85f3;

  &:after {
    content: ' ';
    background: #3e85f3;
    width: 100%;
    height: 2px;
    position: absolute;
    top: 21px;
    left: 0px;
  }
`;
