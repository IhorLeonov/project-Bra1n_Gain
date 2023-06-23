import {
  Header,
  Wrapper,
  MainTitle,
  OoTxt,
  BtnContainer,
  SignUp,
  Login,
} from './HomePage.styled.jsx';

const Home = () => {
  return (
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
  );
};
export default Home;
