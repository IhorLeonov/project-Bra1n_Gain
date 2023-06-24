import { useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {
  Avatar,
  ButtonBox,
  ButtonNext,
  ButtonPreview,
  GrayStar,
  ReviewContainer,
  ReviewInfo,
  ReviewText,
  ReviewTitle,
  StarRating,
  UserName,
  UserInfo,
  WrapperReview,
} from './ReviewSlider.styled';
import left from '../../shared/icons/icon-left-61x61.svg';

// временный файлик с отзывами. В будущем будут приходить данные с бека
// и через useEffect нужно будет отрисовывать
import reviewsData from './reviews.json';

//нужно будет выполнить команду "npm install react-slick slick-carousel" для установки себе слайдера
export const ReviewSlider = () => {
  const sliderRef = useRef(null);

  //настройки к слайдеру
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    // autoplay: true,  // свойство, которое автоматически листает слайды. Оставил закоментированным, чтобы не маячило и спокойно стилизировать
    speed: 500,
    arrows: true,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  //кнопка - предыдущий комент
  const goToPreviousSlide = () => {
    sliderRef.current.slickPrev();
  };

  //кнопка - слудющий комент
  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  // рендерит звезды (если оценка 4: делает 4 звезды желтыми и 1 серую)
  const renderStars = rating => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} />);
      } else {
        stars.push(<GrayStar key={i} />);
      }
    }
    return <StarRating>{stars}</StarRating>;
  };

  return (
    <ReviewContainer>
      <ReviewTitle>Reviews</ReviewTitle>
      <ReviewInfo ref={sliderRef} {...settings}>
        {reviewsData.map((review, index) => (
          <WrapperReview key={index}>
            <UserInfo>
              <div>
                <Avatar src={review.avatar} alt={review.name.slice(0, 1)} />
              </div>

              <div>
                <UserName>{review.name}</UserName>
                {renderStars(parseInt(review.rate, 10))}
                <ReviewText>{review.comment}</ReviewText>
              </div>
            </UserInfo>
          </WrapperReview>
        ))}
      </ReviewInfo>
      <ButtonBox>
        <ButtonPreview onClick={goToPreviousSlide}>
          <img src={left} alt="button-left"></img>
        </ButtonPreview>
        <ButtonNext onClick={goToNextSlide}>
          <img src={left} alt="button-right"></img>
        </ButtonNext>
      </ButtonBox>
    </ReviewContainer>
  );
};
