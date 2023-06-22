import styled from 'styled-components';

const Button = styled.button`
  width: 76px;
  height: 34px;
  font-size: 14px;
  color: #3e85f3;
  border: none;
  background-color: #e3f3ff;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 82px;
    height: 34px;
    font-size: 16px;
  }
`;

export const ButtonMonth = styled(Button)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-right: 1px solid #aed4fd;
  background-color: ${props => props.typenav === 'month' && '#CAE8FF'};
`;

export const ButtonDay = styled(Button)`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${props => props.typenav === 'day' && '#CAE8FF'};
`;
