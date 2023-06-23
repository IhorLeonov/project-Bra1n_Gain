import {
  Header,
  Wrapper,
  MainTitle,
  OoTxt,
  BtnContainer,
  SignUp,
  Login,
} from './HomePage.styled.jsx';
import { ReviewSlider } from 'components/ReviewSlider/ReviewSlider.js';

const Home = () => {
  return (
    <>
      <Header>
        <Wrapper>
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
      </Header>
      <ReviewSlider />
    </>
  );
};
export default Home;
