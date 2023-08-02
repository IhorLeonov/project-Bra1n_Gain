import styled from 'styled-components';

export const LanguageBox = styled.button`
  width: 24px;
  height: 100%;
  padding-top: 5px;
  border-radius: 0;
  margin-right: 14px;
  cursor: pointer;
  background: none;
  transition-duration: 500ms;

  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`;
