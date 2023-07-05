import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import VisionIconsLogIn from 'components/VisionIconsLogIn/VisionIconsLogIn';
import { BiLogIn } from 'react-icons/bi';
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
  const [borderColorNameInpt, setBorderColorNameInpt] = useState('main');
  const [borderColorMailInpt, setBorderColorMailInpt] = useState('main');
  const [borderColorPassInpt, setBorderColorPassInpt] = useState('main');

  function validationName(inputText) {
    if (inputText.length >= 16) {
      setBorderColorNameInpt('fail');
      ToasterNotify('Name must be less than 16 characters.');
      return false;
    } else {
      setBorderColorNameInpt('good');
      return true;
    }
  }

  function validateEmail(inputText) {
    const mailFormat = /\S+@\S+\.\S+/;

    if (inputText.match(mailFormat)) {
      setBorderColorMailInpt('good');
      return true;
    } else {
      setBorderColorMailInpt('fail');
      ToasterNotify('Invalid email address');
      return false;
    }
  }

  function validatePassword(inputText) {
    const isValidLength = /^.{6,16}$/;
    if (!isValidLength.test(inputText)) {
      ToasterNotify('Password must be 6-16 Characters Long.');
      setBorderColorPassInpt('fail');
      return false;
    }
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(inputText)) {
      ToasterNotify('Password must not contain Whitespaces.');
      setBorderColorPassInpt('fail');
      return false;
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(inputText)) {
      ToasterNotify('Password must have at least one Uppercase Character.');
      setBorderColorPassInpt('fail');
      return false;
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(inputText)) {
      ToasterNotify('Password must have at least one Lowercase Character.');
      setBorderColorPassInpt('fail');
      return false;
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(inputText)) {
      ToasterNotify('Password must contain at least one Digit.');
      setBorderColorPassInpt('fail');
      return false;
    } else {
      setBorderColorPassInpt('good');
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
      setBorderColorNameInpt('fail');
      setBorderColorMailInpt('fail');
      setBorderColorPassInpt('fail');
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
      setBorderColorNameInpt('main');
      setBorderColorMailInpt('main');
      setBorderColorPassInpt('main');
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
            className={` ${borderColorNameInpt}`}
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
            className={` ${borderColorMailInpt}`}
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
            className={` ${borderColorPassInpt}`}
            placeholder="Enter password"
            onChange={handleChange}
          />
          <DivIconToglePassword type="button" onClick={togglePassInput}>
            <VisionIconsLogIn type={type} />
          </DivIconToglePassword>
        </Registerlabel>

        <RegisterSubmitBtn type="submit">
          Sign Up
          <BiLogIn size={20} />
        </RegisterSubmitBtn>
        <Toaster />
      </RegisterForm>

      <LogInBtn to={'/login'} type="button">
        <LogInBtnText>Log in </LogInBtnText>
      </LogInBtn>
    </ContainerRegisterForm>
  );
}
