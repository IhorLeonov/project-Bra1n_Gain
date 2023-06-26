import styled from 'styled-components';

export const Section = styled.div`
    max-width: 375px;
    margin-left: auto;
    margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
