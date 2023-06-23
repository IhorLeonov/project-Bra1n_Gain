import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6.25rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }

  @media (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const SectionTitle = styled.h1`
  display: none;
  color: ${props => props.theme.text};
  @media (min-width: 1440px) {
    display: block;

    font-weight: 700;
    font-size: 32px;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  }
`;

export const Toggler = styled.svg`
  fill: transparent;
  stroke: ${props => props.theme.text};

  height: 24px;
  width: 24px;

  @media (min-width: 765px) {
    height: 34px;
    width: 34px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const GooseTask = styled.img`
  display: none;

  @media (min-width: 1440px) {
    weight: 64px;
    display: block;
    margin-right: 8px;
  }
`;

export const MotivationTask = styled.p`
  display: none;
  color: ${({ theme }) => theme.text};

  @media (min-width: 1440px) {
    display: block;
    font-family: 'Inter';

    font-weight: 600;
    font-size: 14px;
    line-height: 1.3;
  }
`;