import { HomePageHeader } from '../../components/HomePageHeader/HomePageHeader';
import { HomePageDescription } from '../../components/HomePageDescription/HomePageDescription';
import { ReviewSlider } from '../../components/ReviewSlider/ReviewSlider';
import { Footer } from 'components/Footer/Footer';

const Home = () => {
  return (
    <>
      <HomePageHeader />
      <HomePageDescription />
      <ReviewSlider />
      <Footer />
    </>
  );
};

export default Home;
