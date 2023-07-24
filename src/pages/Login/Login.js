import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { BiLogIn } from 'react-icons/bi';

import { useTranslation } from 'react-i18next';
import { Toaster } from 'react-hot-toast';
import { ToasterNotify } from 'components/Notify/Notify';
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

export default function Login() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');

  const [borderColorMailInpt, setBorderColorMailInpt] = useState('main');
  const [borderColorPassInpt, setBorderColorPassInpt] = useState('main');

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
    if (email === '') {
      setBorderColorMailInpt('fail');
    }
    if (password === '') {
      setBorderColorPassInpt('fail');
    }
    if (email === '' || password === '') {
      return ToasterNotify(`${t('notifications.ErrorEmppyFields')}`);
    }
    if (email !== '' && password !== '') {
      setBorderColorMailInpt('main');
      setBorderColorPassInpt('main');
      dispatch(logIn({ email, password }));
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
        <LoginTitle>{t('loginRegisterForm.LogIn')}</LoginTitle>
        <LoginNameOfInput>{t('loginRegisterForm.Email')}</LoginNameOfInput>
        <Loginlabel>
          <LoginInput
            id="log"
            type="email"
            name="email"
            value={email}
            className={` ${borderColorMailInpt}`}
            placeholder={t('loginRegisterForm.EnterEmail')}
            onChange={handleChange}
          />
        </Loginlabel>

        <LoginNameOfInput>{t('loginRegisterForm.Password')}</LoginNameOfInput>
        <Loginlabel>
          <LoginInput
            id="log"
            type={type}
            name="password"
            value={password}
            className={` ${borderColorPassInpt}`}
            placeholder={t('loginRegisterForm.EnterPassword')}
            onChange={handleChange}
          />
          <DivIconToglePassword type="button" onClick={togglePassInput}>
            <VisionIconsLogIn type={type} />
          </DivIconToglePassword>
        </Loginlabel>

        <LoginSubmitBtn type="submit">
          {t('btn.LogIn')}
          <BiLogIn size={20} />
        </LoginSubmitBtn>
        <Toaster />
      </LoginForm>

      <SignUpBtn to={'/register'} type="button">
        <SignUpBtnText>{t('btn.SignUp')}</SignUpBtnText>
      </SignUpBtn>
    </ContainerLOginrForm>
  );
}
