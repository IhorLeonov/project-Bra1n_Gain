import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  /* padding: 30px 0; */
  /* background-color: transparent; */
`;

export const AddTask = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 20px;
  width: 100%;

  cursor: pointer;
  border-radius: 8px;
  backface-visibility: hidden;
  transition: transform 0.2s ease-in-out;
  &:hover,
  &:focus {
    background-color: #2b78ef;
    transition: background-color 0.5s;
  }

  border: 1px dashed #3e85f3;
  background-color: ${props => props.theme.colors.accentColor};
  color: ${props => props.theme.colors.textColor};
`;

export const Text = styled.span`
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  line-height: 18px;
`;
