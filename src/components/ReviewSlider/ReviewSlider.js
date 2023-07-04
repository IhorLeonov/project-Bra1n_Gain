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
  FirstLetter,
} from './ReviewSlider.styled';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'https://bra1n-gain-backend.onrender.com';

// временный файлик с отзывами. В будущем будут приходить данные с бека
// и через useEffect нужно будет отрисовывать
// import reviewsData from './reviews.json';

//нужно будет выполнить команду "npm install react-slick slick-carousel" для установки себе слайдера
export const ReviewSlider = () => {
  const sliderRef = useRef(null);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/reviews'); // Замініть '/api/reviews' на свій URL-адресу для отримання відгуків
      setReviews(response.data); // Припускаємо, що дані відповіді містяться в ключі "data" об'єкта відповіді
    } catch (error) {
      console.error(error);
    }
  };

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
        breakpoint: 1440,
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
        {reviews.map((review, index) => (
          <WrapperReview key={index}>
            <UserInfo>
              <div>
                {review.avatarUrl ? (
                  <Avatar src={review.avatarUrl} alt="userName" />
                ) : (
                  <FirstLetter>{review.name[0]}</FirstLetter>
                )}
              </div>

              <div
                style={{
                  overflowY: 'auto',
                }}
              >
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
          <img
            src={process.env.PUBLIC_URL + '/images/icons/icon-left-61x61.svg'}
            alt="button-left"
          />
        </ButtonPreview>
        <ButtonNext onClick={goToNextSlide}>
          <img
            src={process.env.PUBLIC_URL + '/images/icons/icon-left-61x61.svg'}
            alt="button-right"
          />
        </ButtonNext>
      </ButtonBox>
    </ReviewContainer>
  );
};
