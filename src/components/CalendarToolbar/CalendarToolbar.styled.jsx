import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;

    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;