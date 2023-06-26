import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1440px) {
    padding-left: 128px;
    padding-right: 128px;
  }

  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
`;
