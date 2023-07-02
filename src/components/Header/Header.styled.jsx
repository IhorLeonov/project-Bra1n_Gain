import styled from 'styled-components';
import { CgMenu } from 'react-icons/cg';
import { FiMoon, FiSun } from 'react-icons/fi';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;

  border: 1px solid lightgray;
  margin-bottom: 64px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;

export const MenuIcon = styled(CgMenu)`
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 34px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const IconMoon = styled(FiMoon)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primaryBlueColor};

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const IconSun = styled(FiSun)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primaryBlueColor};

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const LeftSubsection = styled.div`
  border: 1px solid green;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1279px) {
    display: none;
  }
`;

export const GooseImg = styled.img`
  width: 64px;
  height: 60px;
`;

export const RightSubsection = styled.div`
  border: 1px solid orange;
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }
`;

export const SectionTitle = styled.h1`
  border: 1px solid pink;

  color: ${({ theme }) => theme.colors.headerFontcolor};
  display: block;
  font-weight: 700;
  font-size: 32px;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const MotivationTask = styled.p`
  color: ${({ theme }) => theme.colors.headerFontcolor};

  display: block;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
`;

export const FeedbackBtn = styled.button`
  font-size: 12px;
  font-family: Inter;
  font-weight: 600;
  line-height: 16px;

  @media screen and (min-width: 768px) {
    border-radius: 14px;
    padding: 12px 32px;
    font-size: 14px;
    line-height: 18px;
  }
`;
