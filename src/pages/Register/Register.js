import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import VisionIcons from 'components/VisionIcons/VisionIcons';
import { ReactComponent as InOutSvg } from '../../shared/icons/icon-login-register.svg';

import { Toaster } from 'react-hot-toast';
import { ToasterNotify } from 'components/Notify/Notify';
import {
  RegisterForm,
  RegisterInput,
  Registerlabel,
  RegisterTitle,
  RegisterNameOfInput,
  RegisterSubmitBtn,
  LogInBtn,
  LogInBtnText,
  ContainerRegisterForm,
  SvgShowPAsswordContainer,
} from './Register.styled';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');

  function validateEmail(inputText) {
    var mailFormat = /\S+@\S+\.\S+/;

    if (inputText.match(mailFormat)) {
      return true;
    } else {
      ToasterNotify('RegisterWrongEmail');
      return false;
    }
  }

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    if (!validateEmail(email)) {
      return;
    }
    if (name !== '' && email !== '' && password !== '') {
      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    }

    if (name === '' || email === '' || password === '') {
      ToasterNotify('RegisterFieldInputEmpty');
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
    <ContainerRegisterForm>
      <RegisterForm onSubmit={handleSubmit} autoComplete="off">
        <RegisterTitle>Sign Up</RegisterTitle>
        <RegisterNameOfInput>Name</RegisterNameOfInput>
        <Registerlabel>
          <RegisterInput
            id="reg"
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </Registerlabel>
        <RegisterNameOfInput>Email</RegisterNameOfInput>
        <Registerlabel>
          <RegisterInput
            id="reg"
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Registerlabel>
        <RegisterNameOfInput>Password</RegisterNameOfInput>
        <Registerlabel>
          <RegisterInput
            id="reg"
            type={type}
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={handleChange}
          />

          <SvgShowPAsswordContainer onClick={togglePassInput}>
            <VisionIcons typeIcon={type} />
          </SvgShowPAsswordContainer>
        </Registerlabel>

        <RegisterSubmitBtn type="submit">
          Sign Up
          <InOutSvg />
        </RegisterSubmitBtn>
      </RegisterForm>

      <LogInBtn to={'/login'} type="button">
        <LogInBtnText>Log in </LogInBtnText>
      </LogInBtn>

      <Toaster />
    </ContainerRegisterForm>
  );
}
