import axios from 'axios';
import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import { Modal } from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { modalType } from 'redux/modal/selector';

export const AddFeedbackModal = () => {
  const [feedback, setFeedback] = useState();

  useEffect(() => {}, [feedback]);

  useEffect(() => {
    getReview();
  }, []);

  const startRating = () => {
    if (feedback) {
      return feedback.rate
    } else {
      return 0
    }
  }

  const startComment = () => {
    if (feedback) {
      return feedback.comment
    } else {
      return 0
    }
  }

  const getReview = async () => {
    try {
      const response = await axios.get(
        'https://bra1n-gain-backend.onrender.com/api/reviews/own'
      );
      console.log(response.data)
      setFeedback(response.data);
      console.log(feedback);
    } catch (error) {
      console.log(feedback);
      console.error(error);
    }
  };

  const modalTypeSelected = useSelector(modalType);

  return (
    <Modal>
      {modalTypeSelected === 'feedback' && (
        <FeedbackForm startRating={startRating()} startComment={startComment()}></FeedbackForm>
      )}
    </Modal>
  );
};
