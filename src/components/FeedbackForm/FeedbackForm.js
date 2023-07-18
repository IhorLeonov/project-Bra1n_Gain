import React, { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { useTranslation } from 'react-i18next';

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
  MiddleContainer,
  PencilIcon,
  TrashIcon,
} from './FeedbackForm.styled';

import { toggleModal } from 'redux/modal/modalSlice';
import { useDispatch } from 'react-redux';
import {
  addReview,
  updateReview,
  deleteReview,
} from 'redux/reviews/operations';

export const FeedbackForm = ({ startRating, startComment, showButtons }) => {
  const { t } = useTranslation();


  const dispatch = useDispatch();
  const handleToggleModal = () => dispatch(toggleModal());

  const [rating, setRating] = useState(startRating);
  const [comment, setComment] = useState(startComment);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => { }, [rating]);
  useEffect(() => { }, [comment]);
  useEffect(() => { }, [editMode]);

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
    }
    handleToggleModal();
  };

  const onChange = event => {
    setComment(event.target.value);
  };

  return (
    <FeedbackContainer>
      <StyledLabel>{t('header.feedbackPopUp.Rating')}</StyledLabel>
      <RatingContainer>
        <Rating
          onClick={handleRating}
          SVGstyle={{ width: 24, height: 24 }}
          initialValue={startRating}
          readonly={!editMode && !showButtons}
        />
      </RatingContainer>

      <StyledForm onSubmit={onSubmit}>
        <MiddleContainer>
          <StyledLabel htmlFor="text">{t('header.feedbackPopUp.Review')}</StyledLabel>

          {!showButtons && (
            <ButtonContainer>
              <EditButton
                type="button"
                onClick={handleEdit}
                editMode={editMode}
              >
                <PencilIcon size={16} />
              </EditButton>
              <DeleteButton type="button" onClick={handleDelete}>
                <TrashIcon size={16}></TrashIcon>
              </DeleteButton>
            </ButtonContainer>
          )}
        </MiddleContainer>

        {!showButtons && !editMode && (
          <StyledInput
            id="text"
            type="text"
            name="text"
            placeholder={t('header.feedbackPopUp.EnterText')}
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
              <StyledButton type="submit">{t('header.feedbackPopUp.Save')}</StyledButton>
              <CancelButton type="button" onClick={handleToggleModal}>
                {t('header.feedbackPopUp.Cancel')}
              </CancelButton>
            </>
          )}
          {editMode && (
            <>
              <StyledButton type="submit">{t('header.feedbackPopUp.Edit')}</StyledButton>
              <CancelButton type="button" onClick={handleToggleModal}>
                {t('header.feedbackPopUp.Cancel')}
              </CancelButton>
            </>
          )}
        </ButtonContainer>
      </StyledForm>
    </FeedbackContainer>
  );
};
