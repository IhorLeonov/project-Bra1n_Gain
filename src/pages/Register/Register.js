import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import VisionIconsLogIn from 'components/VisionIconsLogIn/VisionIconsLogIn';
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
  DivIconToglePassword,
} from './Register.styled';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');

  function validationName(inputText) {
    const letters = /^[A-Za-z]+$/;
    if (!letters.test(inputText)) {
      ToasterNotify('The name cannot contain numbers.');
      return false;
    } else {
      ToasterNotify('Name must be shorter than 16 characters.');
      return true;
    }
  }

  function validateEmail(inputText) {
    const mailFormat = /\S+@\S+\.\S+/;

    if (inputText.match(mailFormat)) {
      return true;
    } else {
      ToasterNotify('Invalid email address');
      return false;
    }
  }

  function validatePassword(inputText) {
    const isValidLength = /^.{6,16}$/;
    if (!isValidLength.test(inputText)) {
      ToasterNotify('Password must be 6-16 Characters Long.');
      return false;
    }
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(inputText)) {
      ToasterNotify('Password must not contain Whitespaces.');
      return false;
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(inputText)) {
      ToasterNotify('Password must have at least one Uppercase Character.');
      return false;
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(inputText)) {
      ToasterNotify('Password must have at least one Lowercase Character.');
      return false;
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(inputText)) {
      ToasterNotify('Password must contain at least one Digit.');
      return false;
    }

    const isContainsSymbol =
      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!isContainsSymbol.test(inputText)) {
      ToasterNotify('Password must contain at least one Special Symbol.');
      return false;
    } else {
      return true;
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

    if (name === '' || email === '' || password === '') {
      return ToasterNotify('Please fill in all fields.');
    }

    if (!validationName(name)) {
      return;
    }
    if (!validateEmail(email)) {
      return;
    }
    if (!validatePassword(password)) {
      return;
    }

    if (name !== '' && email !== '' && password !== '') {
      dispatch(register({ name, email, password }));
      ToasterNotify('AccountСreated');
    }
    setEmail('');
    setName('');
    setPassword('');
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
      <RegisterForm onSubmit={handleSubmit} autoComplete="off" novalidate>
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
          <DivIconToglePassword type="button" onClick={togglePassInput}>
            <VisionIconsLogIn type={type} />
          </DivIconToglePassword>
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
