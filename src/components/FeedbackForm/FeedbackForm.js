import React, { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import {
  StyledLabel,
  RatingContainer,
  StyledForm,
  StyledInput,
  ButtonContainer,
  FeedbackContainer,
  StyledButton,
  CancelButton,
  EditButton,
  DeleteButton,
} from './FeedbackForm.styled';

import { toggleModal } from 'redux/modal/modalSlice';
import { useDispatch } from 'react-redux';

export const FeedbackForm = ({ startRating, startComment, showButtons }) => {
  console.log(startRating);
  console.log(startComment);

  const dispatch = useDispatch();
  const handleToggleModal = () => dispatch(toggleModal());

  const [rating, setRating] = useState(startRating);
  const [comment, setComment] = useState(startComment);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {}, [rating]);
  useEffect(() => {}, [comment]);

  const handleRating = rate => {
    setRating(rate);
  };

  const handleEdit = () => {
    setEditMode(true);
    console.log(editMode);
    // showButtons = true;
  };

  const onSubmit = event => {
    event.preventDefault();
    const data = {
      rating,
      comment,
    };
    console.log(data);
    handleToggleModal();
  };

  const onChange = event => {
    setComment(event.target.value);
  };

  const buttons = showButtons || editMode

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
          initialValue={startRating}
        />
      </RatingContainer>

      <StyledForm onSubmit={onSubmit}>
        <ButtonContainer>
          <EditButton type="button" onClick={handleEdit}>
            Edit
          </EditButton>
          <DeleteButton type="button">Delete</DeleteButton>
        </ButtonContainer>

        <StyledLabel htmlFor="text">Review</StyledLabel>
        {editMode ? (
          <StyledInput
            id="text"
            type="text"
            name="text"
            placeholder="Enter text"
            value={startComment}
            onChange={onChange}
          />
        ) : (
          <StyledInput
            id="text"
            type="text"
            name="text"
            placeholder="Enter text"
            value={startComment}
            onChange={onChange}
            disabled
          />
        )}
        {buttons && (
          <ButtonContainer>
            {editMode ? (
              <StyledButton type="submit">
                Edit
              </StyledButton>
            ) : (
              <StyledButton type="submit">
                Save
              </StyledButton>
            )}

            <CancelButton type="button" onClick={handleToggleModal}>
              Cancel
            </CancelButton>
          </ButtonContainer>
        )}
      </StyledForm>
    </FeedbackContainer>
  );
};
