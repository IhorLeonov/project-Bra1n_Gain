import { HomePageHeader } from './components/HomePageHeader';
// import { HomePageContainer } from './HomePageLayOut.styled';
import { HomePageDescription } from './components/HomePageDescription';
// import { HomePageReviews } from './components/HomePageReviews';

export const HomePageLayOut = () => {
  return (
    <>
      <HomePageHeader />
      <HomePageDescription />
      <main>
        {/* <HomePageContainer>

          <HomePageReviews />
        </HomePageContainer> */}
      </main>
    </>
  );
};