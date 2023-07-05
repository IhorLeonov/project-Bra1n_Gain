import styled from 'styled-components';

export const ColumnsItem = styled.li`
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.componentsBgColor};

  height: fit-content;
  min-width: 280px;
  line-height: 1.12;
  font-size: 18px;
  font-weight: 700;
  padding: 18px 18px 10px 18px;
  gap: 16px;
  max-width: 335px;

  @media screen and (min-width: 768px) {
    padding: 18px 22px 28px;
    font-size: 20px;
    max-width: calc((100% - 48px) / 2);
  }

  @media screen and (min-width: 1440px) {
    gap: 27px;
    max-width: calc((100% - 54px) / 3);
  }
`;
