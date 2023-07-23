import {
  LogoImg,
  Wrapper,
  MainTitle,
  AcсentTitle,
  BtnContainer,
  SignUp,
  Login,
} from './HomePageHeader.styled.jsx';
import { Link } from 'react-router-dom';

export const HomePageHeader = () => {
  return (
    <Wrapper>
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
          Sign up
        </SignUp>
        <Login to={'/login'} type="button">
          Log in
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
