import { useEffect, useRef, useState } from 'react';

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
  FirstLetter,
} from './ReviewSlider.styled';
import { fetchAllReviews } from 'utils/featchReviews';

export const ReviewSlider = () => {
  const sliderRef = useRef(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const defaultReviews = [
    {
      name: 'Brain_Gain team',
      avatar: '/images/avatar.png',
      rate: '5',
      comment: 'No one reviews, Pleas write the first review',
    },
    {
      name: 'Brain_Gain team',
      avatar: '/images/avatar.png',
      rate: '5',
      comment: 'No one reviews, Pleas write the first review',
    },
  ];

  const render = !error && reviews ? reviews : defaultReviews;

  useEffect(() => {
    fetchAllReviews()
      .then(data => setReviews(data))
      .catch(err => setError(err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    arrows: false,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPreviousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

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
        {render.map((review, index) => (
          <WrapperReview key={index}>
            <UserInfo
              style={{
                overflowY: 'auto',
              }}
            >
              <div style={{ display: 'flex', gap: '18px' }}>
                {review.avatarUrl ? (
                  <Avatar src={review.avatarUrl} alt="userName" />
                ) : (
                  <FirstLetter>{review.name[0]}</FirstLetter>
                )}

                <div>
                  <UserName>{review.name}</UserName>
                  {renderStars(parseInt(review.rate, 10))}
                </div>
              </div>
              <ReviewText
                style={{
                  overflowY: 'auto',
                }}
              >
                {review.comment}
              </ReviewText>
            </UserInfo>
          </WrapperReview>
        ))}
      </ReviewInfo>
      <ButtonBox>
        <ButtonPreview onClick={goToPreviousSlide}>
          <svg width={61} height={61}>
            <use
              xlinkHref={
                process.env.PUBLIC_URL + '/images/sprite.svg#icon-left-61x61'
              }
            ></use>
          </svg>
        </ButtonPreview>
        <ButtonNext onClick={goToNextSlide}>
          <svg width={61} height={61}>
            <use
              xlinkHref={
                process.env.PUBLIC_URL + '/images/sprite.svg#icon-left-61x61'
              }
            ></use>
          </svg>
        </ButtonNext>
      </ButtonBox>
    </ReviewContainer>
  );
};
