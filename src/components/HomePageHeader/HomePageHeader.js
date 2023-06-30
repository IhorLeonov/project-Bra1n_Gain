// import goose from '/image/icons/goose.svg';
import {
  LogoImg,
  Wrapper,
  MainTitle,
  AcсentTitle,
  BtnContainer,
  SignUp,
  Login,
} from './HomePageHeader.styled.jsx';

export const HomePageHeader = () => {
  return (
      <Wrapper>
        <a href="http://localhost:3000/project-Bra1n_Gain/login">
        <LogoImg src={process.env.PUBLIC_URL + '/images/goose.png'} href={'/login'} alt="goose" />
        </a>
        <MainTitle>
          G<AcсentTitle>oo</AcсentTitle>seTrack
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
