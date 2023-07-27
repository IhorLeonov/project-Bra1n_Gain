import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
  LogoImg,
  Wrapper,
  MainTitle,
  AcсentTitle,
  BtnContainer,
  SignUp,
  Login,
  LanguageContainer,
} from './HomePageHeader.styled.jsx';
import { ReactComponent as UA } from '../../shared/icons/ua.svg';
import { ReactComponent as EN } from '../../shared/icons/en.svg';
import { selectLanguage } from 'redux/auth/selectors';
import { toggleLanguage } from 'redux/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';


export const HomePageHeader = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const languageValue = useSelector(selectLanguage);
  const handleLanguage = () => dispatch(toggleLanguage());


  return (
    <Wrapper>
      <LanguageContainer>{languageValue === "uk" ?
        <UA onClick={handleLanguage} />
        :
        <EN onClick={handleLanguage} />
      }</LanguageContainer>
      <Link to="/layout/calendar">
        <LogoImg
          src={process.env.PUBLIC_URL + '/images/goose.png'}
          alt="goose"
        />
      </Link>
      <MainTitle>
        G<AcсentTitle>oo</AcсentTitle>seTrack
      </MainTitle>
      <BtnContainer>
        <SignUp to={'/register'} type="button">
          {t('btn.SignUp')}
        </SignUp>
        <Login to={'/login'} type="button">
          {t('btn.LogIn')}
          <svg width={18} height={18}>
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite.svg#icon-login-register_blue'
              }
            ></use>
          </svg>
        </Login>
      </BtnContainer>
    </Wrapper>
  );
};
