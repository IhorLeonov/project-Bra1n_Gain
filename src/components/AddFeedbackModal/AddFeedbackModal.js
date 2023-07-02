import axios from 'axios';
import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import { Modal } from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { modalType } from 'redux/modal/selector';

export const AddFeedbackModal = ({ review }) => {
  const [rate, setRate] = useState(5);
  const [comment, setComment] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showButtons, setShowButtons] = useState(true)

  useEffect(() => {
    getReview();
  }, []); //eslint-disable-line

  const getReview = async () => {
    try {
      const response = await axios.get(
        'https://bra1n-gain-backend.onrender.com/api/reviews/own'
      );
      console.log(response.data.rate)
      setRate(response.data.rate);
      console.log(response.data.comment)
      setComment(response.data.comment);
      setShowButtons(false)
      setIsLoaded(true);
    } catch (error) {
      setRate(5);
      setComment('');
      setIsLoaded(true);
      console.error(error);
    }
  };

  const modalTypeSelected = useSelector(modalType);

  // const showButtons = () => {
  //   if (rate === 5 && comment === '') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  return (
    <>
      {isLoaded && (
        <Modal>
          {modalTypeSelected === 'feedback' && isLoaded && (
            <FeedbackForm
              startRating={rate}
              startComment={comment}
              showButtons={showButtons}
            ></FeedbackForm>
          )}
        </Modal>
      )}
    </>
  );
};
