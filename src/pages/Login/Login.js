import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { ReactComponent as InOutSvg } from '../../shared/icons/icon-login-register.svg';
import { ReactComponent as GooseInARocket } from '../../shared/icons/goose-in-a-rocket.svg';
import { Toaster } from 'react-hot-toast';

import {
  LoginForm,
  LoginInput,
  ContainerSignUp,
  LoginTitle,
  LoginNameOfInput,
  Loginlabel,
  LoginSubmitBtn,
  SignUpBtn,
  SignUpBtnText,
  ContainerLOginrForm,
  GooseContainer,
} from './Login.styled';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    }
    setEmail('');
    setPassword('');
  };

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
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={handleChange}
          />
        </Loginlabel>

        <LoginSubmitBtn type="submit">
          Log in
          <InOutSvg />
        </LoginSubmitBtn>
      </LoginForm>
      <ContainerSignUp>
        <SignUpBtn to={'/register'} type="button">
          <SignUpBtnText>Sign up</SignUpBtnText>
        </SignUpBtn>
      </ContainerSignUp>
      <GooseContainer>
        <GooseInARocket />
      </GooseContainer>
      <Toaster />
    </ContainerLOginrForm>
  );
}
