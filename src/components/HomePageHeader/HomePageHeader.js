// import goose from '/image/icons/goose.svg';
import {
  LogoImg,
  Wrapper,
  MainTitle,
  OoTxt,
  BtnContainer,
  SignUp,
  Login,
} from './HomePageHeader.styled.jsx';

export const HomePageHeader = () => {
  return (
      <Wrapper>
        <LogoImg src={process.env.PUBLIC_URL + '/images/goose.png'} alt="goose" />
        <MainTitle>
          G<OoTxt>oo</OoTxt>seTrack
        </MainTitle>
        <BtnContainer>
          <SignUp to={'/register'} type="button">
            Sign up
          </SignUp>
          <Login to={'/login'} type="button">
            Log in
          </Login>
        </BtnContainer>
      </Wrapper>
  );
};
