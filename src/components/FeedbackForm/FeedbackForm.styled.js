import styled from "styled-components";

export const FeedbackContainer = styled.div`
  box-sizing: border-box;
  /* width: ; */
  margin: 0px;
`;

export const RatingLabel = styled.p`
  display: flex;
  width: 100%;
  color: rgba(52, 52, 52, 0.8);
  font-size: 12px;
  font-family: Inter;
  font-weight: 500;
  line-height: 14px;
  margin: 0;
  text-align: start;
  margin-bottom: 8px;
`;

export const StyledLabel = styled.label`
  display: block;
  width: 100%;
  color: rgba(52, 52, 52, 0.8);
  font-size: 12px;
  font-family: Inter;
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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  width: 404px;
  height: 127px;
  border-radius: 8px;
  background: #f6f6f6;
  outline: none;
  border: none;
  margin-bottom: 14px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledButton = styled.button`
  display: flex;
  width: 198px;
  padding: 15px 85px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

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
