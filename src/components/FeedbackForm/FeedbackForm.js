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
import {
  addReview,
  updateReview,
  deleteReview,
} from 'redux/reviews/operations';

export const FeedbackForm = ({ startRating, startComment, showButtons }) => {
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

  const handleEdit = event => {
    event.preventDefault();
    setEditMode(true);
  };

  const handleDelete = event => {
    event.preventDefault();
    dispatch(deleteReview({}));
    handleToggleModal();
  };

  const onSubmit = event => {
    event.preventDefault();
    if (!editMode) {
      dispatch(
        addReview({
          rate: rating,
          comment,
        })
      );
    } else {
      dispatch(
        updateReview({
          rate: rating,
          comment,
        })
      );
    };
    handleToggleModal();
  };

  // const onEditSubmit = event => {
  //   event.preventDefault();

  //   handleToggleModal();
  // };

  const onChange = event => {
    setComment(event.target.value);
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
          initialValue={startRating}
          readonly={!editMode && !showButtons}
        />
      </RatingContainer>

      <StyledForm onSubmit={onSubmit}>
        {!showButtons && (
          <ButtonContainer>
            <EditButton type="button" onClick={handleEdit}>
              Edit
            </EditButton>
            <DeleteButton type="button" onClick={handleDelete}>
              Delete
            </DeleteButton>
          </ButtonContainer>
        )}

        <StyledLabel htmlFor="text">Review</StyledLabel>
        {!showButtons && !editMode && (
          <StyledInput
            id="text"
            type="text"
            name="text"
            placeholder="Enter text"
            value={startComment}
            maxlength="300"
            disabled
          />
        )}
        {editMode && (
          <StyledInput
            id="text"
            type="text"
            name="text"
            placeholder="Enter text"
            value={comment}
            onChange={onChange}
            maxlength="300"
            required
          />
        )}
        {showButtons && (
          <StyledInput
            id="text"
            type="text"
            name="text"
            placeholder="Enter text"
            value={comment}
            onChange={onChange}
            maxlength="300"
            required
          />
        )}
        <ButtonContainer>
          {showButtons && (
            <>
              <StyledButton type="submit">Save</StyledButton>
              <CancelButton type="button" onClick={handleToggleModal}>
                Cancel
              </CancelButton>
            </>
          )}
          {editMode && (
            <>
              <StyledButton type="submit">
                Edit
              </StyledButton>
              <CancelButton type="button" onClick={handleToggleModal}>
                Cancel
              </CancelButton>
            </>
          )}
        </ButtonContainer>
      </StyledForm>
    </FeedbackContainer>
  );
};
