
import {
  LogoImg,
  Wrapper,
  MainTitle,
  AcсentTitle,
  BtnContainer,
  SignUp,
  Login,
} from './HomePageHeader.styled.jsx';
import { Link } from "react-router-dom";

export const HomePageHeader = () => {
  return (
      <Wrapper>
        <Link to="/layout/calendar">
        <LogoImg src={process.env.PUBLIC_URL + '/images/goose.png'} alt="goose" />
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
          </Login>
        </BtnContainer>
      </Wrapper>
  );
};
