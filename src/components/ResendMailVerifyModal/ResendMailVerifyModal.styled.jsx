import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

export const FormikWrapper = styled(Formik)`
  transition: 0.3s ease;
`;

export const ResendVerifyForm = styled(Form)`
  padding: 0px;
  margin: 0 auto;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  transition: 0.3s ease;

  @media (min-width: 320px) {
    width: 100%;
    padding: 10px;
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

export const EmailNameOfInput = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;

  color: #111111;
`;

export const EmailInput = styled(Field)`
  height: 54px;
  border-radius: 8px;
  border: 1px solid #11111126;
  padding: 18px;
  transition: border 0.5s ease;
  margin-top: 10px;

  &:hover,
  &:focus {
    border: 1px solid #111111;
  }
  &.main {
    border: 1px solid #11111126;
  }
  &.fail {
    border: 1px solid ${props => props.theme.colors.inputError};
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

export const ResendSubmit = styled.button`
  padding: 10px;
  border-radius: 16px;
  height: auto;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
