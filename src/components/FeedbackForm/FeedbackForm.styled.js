import styled from 'styled-components';
import { SlPencil } from 'react-icons/sl';
import { FiTrash2 } from 'react-icons/fi';

export const FeedbackContainer = styled.div`
  box-sizing: border-box;
  margin: 0px;
  width: 335px;
  padding: 28px 20px;

  @media screen and (min-width: 768px) {
    width: 468px;
    padding: 32px;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  width: 100%;
  color: ${props => props.theme.colors.modalLabelTextColor};
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  margin: 0;
  text-align: start;
  margin-bottom: 8px;
`;

export const RatingContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.textarea`
  width: 295px;
  height: 130px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${props => props.theme.colors.modalInputBgColor};
  outline: none;
  border: 1px solid ${props => props.theme.colors.modalInputBorderColor};
  padding: 12px 14px;

  color: ${props => props.theme.colors.modalInputTextColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  resize: none;

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 30px #f2f2f2;
    border-radius: 12px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #e7e5e5;
    border-radius: 12px;
  }

  &::placeholder {
    color: ${props => props.theme.colors.modalInputTextColor};
  }

  @media screen and (min-width: 768px) {
    width: 404px;
    height: 127px;

    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 14px;
`;

export const StyledButton = styled.button`
  display: flex;
  width: 144px;
  height: 42px;
  padding: 8px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 8px;
  background: #3e85f3;

  border: none;
  outline: none;

  color: #fff;

  transition: linear 0.3s;

  &:hover,
  &:focus {
    scale: 1.02;
  }

  @media screen and (min-width: 768px) {
    width: 198px;
    height: 48px;

    padding: 15px 85px;
  }
`;

export const CancelButton = styled(StyledButton)`
  border-radius: 8px;
  background: ${props => props.theme.colors.modalReviewSecondBtnColor};
  color: ${props => props.theme.colors.modalInputTextColor};
`;

export const EditButton = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition-duration: 500ms;

  background-color: ${props =>
    props.editMode
      ? '#3e85f3'
      : `${props.theme.colors.modalReviewSecondBtnColor}`};
  color: ${props => (props.editMode ? '#fff' : '#3e85f3')};

  &:hover,
  &:focus {
    background: #3e85f3;
    color: #fff;
  }
`;

export const PencilIcon = styled(SlPencil)`
  &:hover,
  &:focus {
    fill: white;
    color: #fff;
  }
`;

export const TrashIcon = styled(FiTrash2)`
  &:hover,
  &:focus {
    color: white;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition-duration: 500ms;

  border-radius: 50%;
  background: rgba(234, 61, 101, 0.2);
  color: ${props => (props.editMode ? '#fff' : '#EA3D65')};

  &:hover,
  &:focus {
    background: #ea3d65;
    color: #fff;
    transition-duration: 500ms;
  }
`;
