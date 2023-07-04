import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import gooseWithTablet from '../../shared/images/rocket_auth-desctop/goose_auth-desctop.png';

export const ContainerRegisterForm = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1280px) {
    background-image: url(${gooseWithTablet});
    background-size: 400px 416px;
    background-repeat: no-repeat;
    background-position: 0% 100%;
  }

  @media (min-width: 375px) {
    background-color: #ddebf8;
  }
`;

export const RegisterForm = styled.form`
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
  @media (min-width: 375px) {
    width: 300px;
    padding: 20px;
  }
  @media (min-width: 768px) {
    width: 480px;
    padding: 40px;
  }
`;

export const RegisterInput = styled.input`
  height: 54px;
  border-radius: 8px;
  border: 1px solid #11111126;
  padding: 18px;

  &:hover,
  &:focus {
    border: 1px solid #111111;
  }
  &.main {
    border: 1px solid #11111126;
  }
  &.fail {
    border: 1px solid #e74a3b;
  }
  &.good {
    border: 1px solid #3cbc81;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #dce3e5;
  }
  :-ms-input-placeholder {
    color: #dce3e5;
  }

  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 375px) {
    width: 100%;
  }
  @media (min-width: 1280px) {
    width: 400px;
  }
`;
export const Registerlabel = styled.label`
  &:nth-child(7) {
    margin-bottom: 48px;
    position: relative;
  }

  &:nth-child(-n + 5) {
    margin-bottom: 18px;
  }
`;
export const RegisterTitle = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;

  color: #3e85f3;
  margin-bottom: 40px;
`;
export const RegisterNameOfInput = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;

  color: #111111;
  margin-bottom: 8px;
`;

export const RegisterSubmitBtn = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;

  height: 56px;
  width: 100%;

  gap: 11px;
  background-color: #3e85f3;
  border: none;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }
`;

export const LogInBtn = styled(NavLink)`
  border: none;
  cursor: pointer;
  position: relative;
`;

export const LogInBtnText = styled.span`
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

export const DivIconToglePassword = styled.div`
  width: 30px;
  height: 30px;

  position: absolute;
  bottom: 11px;
  right: 11px;
`;
