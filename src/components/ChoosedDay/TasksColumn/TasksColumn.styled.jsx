import styled from 'styled-components';

export const ColumnsItem = styled.li`
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  width: 100%;
  height: 100%;
  min-height: 155px;
  max-height: 432px;
  height: fit-content;
  min-width: 335px;
  line-height: 1.12;
  font-size: 18px;
  font-weight: 700;
  padding: 18px 18px 10px 18px;
  gap: 16px;
  font-family: 'InterSemiBolt';


  @media screen and (min-width: 768px) {
    padding: 18px 22px;
    font-size: 20px;
  }
`;

