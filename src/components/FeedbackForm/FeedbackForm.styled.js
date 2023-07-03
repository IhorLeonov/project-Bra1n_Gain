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
  color: rgba(52, 52, 52, 0.8);
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
  background: #f6f6f6;
  outline: none;
  border: none;
  padding: 12px 14px;

  color: #343434;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
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
`;

export const CancelButton = styled(StyledButton)`
  border-radius: 8px;
  background: #e5edfa;
  color: black;
`;

export const EditButton = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background: #e3f3ff;
`;

export const PencilIcon = styled(SlPencil)`
  color: #3e85f3;
`;

export const TrashIcon = styled(FiTrash2)`
  color: #ea3d65;
`;

export const DeleteButton = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background: rgba(234, 61, 101, 0.2);
`;
