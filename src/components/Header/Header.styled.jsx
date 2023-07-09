import styled, { css } from 'styled-components';
import { CgMenu } from 'react-icons/cg';
import { FiMoon, FiSun } from 'react-icons/fi';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 64px;
  font-family: var(--title-font);

  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;

export const MenuIcon = styled(CgMenu)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.modalInputTextColor};
  transition: transform 0.5s ease, color 0.5s ease;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryBlueColor};
  }

  @media screen and (min-width: 768px) {
    font-size: 34px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

const iconStyles = css`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primaryBlueColor};
  margin-left: 18px;
  margin-right: 10px;
  cursor: pointer;
  transition: color 0.3s ease;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-left: 24px;
    margin-right: 14px;
  }

  &:hover {
    color: #f3b249;
  }
`;

export const IconMoon = styled(FiMoon)`
  ${iconStyles}
`;

export const IconSun = styled(FiSun)`
  ${iconStyles}
`;

export const LeftSubsection = styled.div`
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
  margin-right: 8px;
`;

export const RightSubsection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;

  @media screen and (min-width: 768px) {
  }
`;

export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  }
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.headerFontcolor};
  display: block;
  font-weight: 700;
  font-size: 32px;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 1280px) {
    margin-bottom: 8px;
  }
`;

export const MotivationTask = styled.p`
  color: ${({ theme }) => theme.colors.headerFontcolor};

  display: block;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
`;

export const AccentWords = styled.span`
  color: ${({ theme }) => theme.colors.primaryBlueColor};
`;

export const FeedbackBtn = styled.button`
  width: 97px;
  height: 32px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  transition: transform 0.5s ease, background-color 0.5s ease;

  @media screen and (min-width: 768px) {
    width: 130px;
    height: 42px;
    border-radius: 14px;
    padding: 12px 32px;
    font-size: 14px;
    line-height: 1.3;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.buttonsHoverColor};
    transform: scale(1.2);
    // transition-duration: 500ms;
  }
`;
