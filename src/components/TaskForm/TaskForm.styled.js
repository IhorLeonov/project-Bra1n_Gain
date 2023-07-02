import styled from 'styled-components';

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
