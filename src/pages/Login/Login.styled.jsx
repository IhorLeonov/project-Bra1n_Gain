import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 480px;
  padding: 40px;
  margin: 0 auto;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const LoginInput = styled.input`
  width: 400px;
  border-radius: 8px;
  height: 54px;
  border: 1px solid #dce3e5;
  padding: 18px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #dce3e5;
  }
  :-ms-input-placeholder {
    color: #dce3e5;
  }
`;
export const LoginTitle = styled.h1`
  color: #3e85f3;
  font-size: 24px;
  font-weight: 600;
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
  }
`;
export const LoginNameOfInput = styled.span`
  color: #111111;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const LoginSubmitBtn = styled.button`
  font-size: 18px;
  font-weight: 600;

  background-color: #3e85f3;
  border: none;
  border-radius: 16px;
  height: 56px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }
`;

export const SignUpBtn = styled(NavLink)`
  border: none;
  cursor: pointer;
  background-color: #dcebf7;
  position: relative;
`;
export const SignUpBtnText = styled.span`
  font-size: 18px;
  color: #3e85f3;

  &:after {
    content: ' ';
    background: #3e85f3;
    width: 80%;
    height: 2px;
    position: absolute;
    top: 22px;
    left: 7px;
  }
`;
