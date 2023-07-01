import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import {
  StyledLabel,
  RatingContainer,
  StyledForm,
  StyledInput,
  ButtonContainer,
  FeedbackContainer,
  StyledButton,
  CancelButton,
} from "./AddFeedbackModal.styled";

import { toggleModal } from 'redux/modal/modalSlice';

export const AddFeedbackModal = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {}, [rating]);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      rating,
      feedback,
    };
    console.log(data);
    toggleModal();
  };

  const onChange = (event) => {
    setFeedback(event.target.value);
  };

  return (
    <FeedbackContainer>
      <StyledLabel>Rating</StyledLabel>
      <RatingContainer>
        <Rating
          onClick={handleRating}
          // style={{ width: 128, height: 24 }}4
          // emptyStyle={{ width: 128, height: 24 }}
          // fillStyle={{ width: 128, height: 24 }}
          SVGstyle={{ width: 24, height: 24 }}
          // size={{width: 24, height: 24}}
          initialValue={rating}
        />
      </RatingContainer>

      <StyledForm onSubmit={onSubmit}>
        <StyledLabel htmlFor="text">Review</StyledLabel>
        <StyledInput
          id="text"
          type="text"
          name="text"
          placeholder="Enter text"
          value={feedback}
          onChange={onChange}
        />
        <ButtonContainer>
          <StyledButton type="submit">Save</StyledButton>
          <CancelButton type="button" onClick={toggleModal}>
            Cancel
          </CancelButton>
        </ButtonContainer>
      </StyledForm>
    </FeedbackContainer>
  );
};