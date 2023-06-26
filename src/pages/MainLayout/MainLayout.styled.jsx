import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  /* min-height: 812px;
  @media (min-width: 768px) {
    min-height: 1024px;
  }
  @media (min-width: 1440px) {
    min-height: 900px;
  } */
`;

export const WrapperForFixSideBar = styled.div`
  background-color: ${props => props.theme.bcgPrimary};
`;