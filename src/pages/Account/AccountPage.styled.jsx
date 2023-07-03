import styled from 'styled-components';

export const AccountPageContainer = styled.div`
  position: relative;
  margin-top: 8px;
  background: inherit;

  padding-top: 31px;
  width: 100%;
  font-family: Inter;
`;

export const BtnWtapper = styled.div`
  display: flex;
`;

export const ToggleBtn = styled.button`
  border-radius: 16px 16px 0 0;
   font-size: 0;
    width: 50px;
    height: 31px;

   @media screen and (min-width: 768px) {
    display: flex;
    width: 120px;
    height: 46px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }

  &.active {
  background: ${props => props.theme.colors.componentsBgColor};
  color: ${props => props.theme.colors.textColor};

  }
  &.notactive {
    color: ${props => props.theme.colors.sideBarTextColor};
    background: ${props => props.theme.colors.componentsBgColor};
    opacity: 0.6;
  }
`;
