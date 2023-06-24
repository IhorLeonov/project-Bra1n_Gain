import styled from 'styled-components';

const Button = styled.button`
display: inline;
  width: 76px;
  height: 34px;
  font-size: 14px;
  color: #3e85f3;
  background-color: #e3f3ff;

  @media screen and (min-width: 768px) {
    width: 82px;
    height: 34px;
    font-size: 16px;
  }
`;

export const ButtonMonth = styled(Button)`
  border-radius: none;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px solid #aed4fd;
  background-color: ${props => props.typenav === 'month' && '#CAE8FF'};
`;

export const ButtonDay = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: ${props => props.typenav === 'day' && '#CAE8FF'};
`;
