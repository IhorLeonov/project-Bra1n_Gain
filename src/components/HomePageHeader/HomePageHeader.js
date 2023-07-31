import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChangeLanguageBtn } from '../ChangeLanguageBtn/ChangeLanguageBtn.js'

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

export const HomePageHeader = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <LanguageContainer>
        <ChangeLanguageBtn />
      </LanguageContainer>
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
