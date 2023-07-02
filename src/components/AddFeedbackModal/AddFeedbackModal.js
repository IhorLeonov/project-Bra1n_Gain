import axios from 'axios';
import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import { Modal } from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { modalType } from 'redux/modal/selector';

export const AddFeedbackModal = () => {
  const [rate, setRate] = useState(0)
  const [comment, setComment] = useState('');

  useEffect(() => {
    getReview();
  }, []); //eslint-disable-line

  // const startRating = () => {
  //   if (feedback) {
  //     console.log(feedback.rate)
  //     return rate
  //   } else {
  //     return 0
  //   }
  // }

  // const startComment = () => {
  //   if (feedback) {
  //     console.log(feedback.comment)
  //     return feedback.comment
  //   } else {
  //     return 0
  //   }
  // }

  const getReview = async () => {
    try {
      const response = await axios.get(
        'https://bra1n-gain-backend.onrender.com/api/reviews/own'
      );
      console.log(response.data)
      setRate(response.data.rate);
      setComment(response.data.comment)
      // console.log(feedback);
    } catch (error) {
      // console.log(feedback);
      console.error(error);
    }
  };

  const modalTypeSelected = useSelector(modalType);

  return (
    <Modal>
      {modalTypeSelected === 'feedback' && (
        <FeedbackForm startRating={rate} startComment={comment}></FeedbackForm>
      )}
    </Modal>
  );
};