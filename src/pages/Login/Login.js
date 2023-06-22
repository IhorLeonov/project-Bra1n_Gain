import { useState } from 'react';
// import { useDispatch } from 'react-redux';
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
} from './Login.styled';

export default function Login() {
  // const dispatch = useDispatch();
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
      // dispatch(authOperations.logIn({ email, password }));
    }
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <LoginTitle>Log In</LoginTitle>
        <LoginNameOfInput>Email</LoginNameOfInput>
        <Loginlabel>
          <LoginInput
            id="log"
            type="email"
            name="email"
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
            placeholder="Enter password"
            onChange={handleChange}
          />
        </Loginlabel>

        <LoginSubmitBtn type="submit">Log in</LoginSubmitBtn>
      </LoginForm>
      <ContainerSignUp>
        <SignUpBtn type="button">
          <SignUpBtnText>Sing up</SignUpBtnText>
        </SignUpBtn>
      </ContainerSignUp>
    </div>
  );
}
