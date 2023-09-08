import VisionIconsLogIn from 'components/VisionIconsLogIn/VisionIconsLogIn';

import { useTranslation } from 'react-i18next';
import { ToasterNotify } from 'components/Notify/Notify';
import { ResendMailVerifyBtn } from 'components/ResendMailVerifyBtn/ResendMailVerifyBtn';
import { ResendMailVerifyModal } from 'components/ResendMailVerifyModal/ResendMailVerifyModal';
import { Toaster } from 'react-hot-toast';
import { BiLogIn } from 'react-icons/bi';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalType, selectShowModal } from 'redux/modal/selector';
import { register } from '../../redux/auth/operations';

import {
  ContainerRegisterForm,
  DivIconToglePassword,
  LogInBtn,
  LogInBtnText,
  RegisterForm,
  RegisterInput,
  RegisterNameOfInput,
  RegisterSubmitBtn,
  RegisterTitle,
  Registerlabel,
} from './Register.styled';
import { Footer } from 'components/Footer/Footer';

export default function Register() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const modalTypeSelected = useSelector(modalType);
  const isShowModalWindow = useSelector(selectShowModal);

  const [type, setType] = useState('password');
  const [borderColorNameInpt, setBorderColorNameInpt] = useState('main');
  const [borderColorMailInpt, setBorderColorMailInpt] = useState('main');
  const [borderColorPassInpt, setBorderColorPassInpt] = useState('main');

  function validationName(inputText) {
    if (inputText.length >= 16) {
      setBorderColorNameInpt('fail');
      ToasterNotify(`${t('notifications.ErrorName')}`);
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
      ToasterNotify(`${t('notifications.ErrorEmail')}`);
      return false;
    }
  }

  function validatePassword(inputText) {
    const isValidLength = /^.{6,16}$/;
    if (!isValidLength.test(inputText)) {
      ToasterNotify(`${t('notifications.ErrorPasswordLong')}`);
      setBorderColorPassInpt('fail');
      return false;
    }
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(inputText)) {
      ToasterNotify(`${t('notifications.ErrorPasswordSpace')}`);
      setBorderColorPassInpt('fail');
      return false;
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(inputText)) {
      ToasterNotify(`${t('notifications.ErrorPasswordUppercase')}`);
      setBorderColorPassInpt('fail');
      return false;
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(inputText)) {
      ToasterNotify(`${t('notifications.ErrorPasswordLowercase')}`);
      setBorderColorPassInpt('fail');
      return false;
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(inputText)) {
      ToasterNotify(`${t('notifications.ErrorPasswordDigit')}`);
      setBorderColorPassInpt('fail');
      return false;
    } else {
      setBorderColorPassInpt('good');
      return true;
    }
  }

  function isValidateForm() {
    if (!validationName(name)) {
      return false;
    }
    if (!validateEmail(email)) {
      return false;
    }
    if (!validatePassword(password)) {
      return false;
    }
    return true;
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

    if (isValidateForm()) {
      setBorderColorNameInpt('good');
      setBorderColorMailInpt('good');
      setBorderColorPassInpt('good');
      dispatch(register({ name, email, password }));
      setEmail('');
      setName('');
      setPassword('');
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
    <>
      <ContainerRegisterForm>
        <RegisterForm onSubmit={handleSubmit} autoComplete="off">
          <RegisterTitle>{t('loginRegisterForm.SignUp')}</RegisterTitle>
          <RegisterNameOfInput>
            {t('loginRegisterForm.Name')}
          </RegisterNameOfInput>
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
          <RegisterNameOfInput>
            {t('loginRegisterForm.Email')}
          </RegisterNameOfInput>
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
          <RegisterNameOfInput>
            {t('loginRegisterForm.Password')}
          </RegisterNameOfInput>
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
            {t('btn.SignUp')}
            <BiLogIn size={20} />
          </RegisterSubmitBtn>
          <Toaster />
        </RegisterForm>

        <LogInBtn to={'/login'} type="button">
          <LogInBtnText>{t('btn.LogIn')}</LogInBtnText>
        </LogInBtn>

        <ResendMailVerifyBtn />

        {modalTypeSelected === 'resend-mail' && isShowModalWindow && (
          <ResendMailVerifyModal />
        )}
      </ContainerRegisterForm>
      <Footer />
    </>
  );
}
