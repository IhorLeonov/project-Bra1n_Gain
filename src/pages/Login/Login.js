import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { ReactComponent as InOutSvg } from '../../shared/icons/icon-login-register.svg';

import { Toaster } from 'react-hot-toast';
import VisionIconsLogIn from 'components/VisionIconsLogIn/VisionIconsLogIn';
import { DivIconToglePassword } from 'pages/Register/Register.styled';
import {
  LoginForm,
  LoginInput,
  LoginTitle,
  LoginNameOfInput,
  Loginlabel,
  LoginSubmitBtn,
  SignUpBtn,
  SignUpBtnText,
  ContainerLOginrForm,
} from './Login.styled';
import { ToasterNotify } from 'components/Notify/Notify';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      dispatch(logIn({ email, password }));
      ToasterNotify('LoginSuccessful');
    }
  };

  function togglePassInput() {
    if (type === 'password') {
      setType('text');
    }
    if (type === 'text') {
      setType('password');
    }
  }
  return (
    <ContainerLOginrForm>
      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <LoginTitle>Log In</LoginTitle>
        <LoginNameOfInput>Email</LoginNameOfInput>
        <Loginlabel>
          <LoginInput
            id="log"
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </Loginlabel>

        <LoginNameOfInput>Password</LoginNameOfInput>
        <Loginlabel>
          <LoginInput
            id="log"
            type={type}
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={handleChange}
          />
          <DivIconToglePassword type="button" onClick={togglePassInput}>
            <VisionIconsLogIn type={type} />
          </DivIconToglePassword>
        </Loginlabel>

        <LoginSubmitBtn type="submit">
          Log in
          <InOutSvg />
        </LoginSubmitBtn>
      </LoginForm>

      <SignUpBtn to={'/register'} type="button">
        <SignUpBtnText>Sign up</SignUpBtnText>
      </SignUpBtn>

      <Toaster />
    </ContainerLOginrForm>
  );
}
