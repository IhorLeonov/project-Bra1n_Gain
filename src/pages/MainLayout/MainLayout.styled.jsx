import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const MainWrapper = styled.div`
  background-color: #f7f6f9;
  width: 100%;

  padding-top: 24px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;

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
