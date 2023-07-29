import styled from 'styled-components';

export const ResendBtn = styled.button`
  width: 230px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  padding: 10px;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  
  &:hover {
    background-color: ${props => props.theme.colors.buttonsHoverColor};
  }

  @media (min-width: 320px) {
    width: auto;
  }
  @media (min-width: 380px) {
    width: 260px;
  }
  @media (min-width: 768px) {
    width: 400px;
  }
`;
