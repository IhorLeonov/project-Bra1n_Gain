import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  padding: 30px 0;
  background-color: beige;
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
    transform: scale(1.05);
  }

  //! для светлой темы
  // border: 2px dashed #3e85f3;
  background-color: #e3f3ff;
  //? background-color: ${props => props.theme.ltMainAccentColor}; //переключение по теме
  color: #111111;
  //? color: ${props => props.theme.ltTextColor}; //переключение по теме

  //! для темной темы
  // border: none;
  // background-color: #3e85f3;
  //// ? background-color: ${props => props.theme.ltMainAccentColor}; //переключение по теме
  // color: #ffffff;
  //// ? color: ${props => props.theme.ltTextColor}; //переключение по теме
`;

export const Text = styled.span`
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  line-height: 18px;
`;
