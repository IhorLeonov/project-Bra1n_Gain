import styled from 'styled-components';

export const Container = styled.section`
  padding-left: 20px;
  padding-right: 20px;

  background-color: #ffffff;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 768px) {
    padding-left: 128px;
    padding-right: 128px;
  }
`;

export const SectionList = styled.ul`
  justify-items: center;
  justify-content: center;
  padding-top: 64px;
`;

export const SectionDescription = styled.li`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 64px;

  @media (max-width: 1279px) {
    flex-direction: column;
    :nth-of-type(2) {
      & div:nth-of-type(1) {
        margin-left: auto;
      }
    }
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 228px;
    :nth-of-type(2) {
      flex-direction: row-reverse;
    }
  }
`;

export const InfoWrapper = styled.div`
  @media (min-width: 768px) {
    max-width: 275px;
  }
`;
export const ContainerDescription = styled.div`
  @media (min-width: 1280px) {
    max-width: 604px;
  }
`;

export const TitleWrapper = styled.h2`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const Number = styled.span`
  font-weight: 700;
  font-size: 80px;
  line-height: 1;
  letter-spacing: -4px;
  color: ${props => props.theme.colors.primaryBlueColor};
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 104px;
  }
`;

export const Label = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  text-transform: uppercase;
  border-radius: 44px;
  padding: 8px 18px;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.primaryBlueColor};
  background-color: white;
  background-color: ${props => props.theme.colors.secondBlueColor};

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const TitleText = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  text-transform: uppercase;
  color: 171820;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  margin-bottom: 40px;
`;

export const Img = styled.img`
  width: 335px;
  height: 457px;

  @media (max-width: 1279px) {
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 768px) {
    width: 704px;
    height: 700px;
  }

  @media (min-width: 1280px) {
    width: 604px;
    height: 700px;
  }
`;
