import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const Container = styled.div`
  display: flex;
`;
export const MainWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.mainLoyautBgColor};
  width: 100%;

  padding-top: 24px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  transition: background-color 0.5s ease;

  @media screen and (min-width: 768px) {
    padding-top: 24px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 38px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 40px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
  }
`;
