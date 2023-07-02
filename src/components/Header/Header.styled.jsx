import styled from 'styled-components';
import { fontColors, backgroundColors } from './variables';
import { CgMenu } from 'react-icons/cg';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;

  border: 1px solid lightgray;
  padding-bottom: 64px;

  @media screen and (min-width: 1280px) {
    padding-bottom: 32px;
  }
`;

export const MenuIcon = styled(CgMenu)`
  /* @media screen and (max-width: 767px) {
  } */

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

// export const Container = styled.div`
//   /* display: flex; */
//   border: 1px solid tomato;
//   /* justify-content: space-between; */
//   width: 100%;

//   padding-left: 20px;
//   padding-right: 20px;
//   margin-left: auto;
//   margin-right: auto;

//   @media screen and (min-width: 375px) {
//     width: 375px;
//   }

//   @media screen and (min-width: 768px) {
//     width: 768px;
//     padding-left: 20px;
//     padding-right: 20px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 1024px;
//   }
// `;

export const LeftSubsection = styled.div`
  border: 1px solid green;

  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 8px; */

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

  color: ${fontColors.black};
  display: block;
  font-weight: 700;
  font-size: 32px;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

// export const Toggler = styled.svg`
//   border: 1px solid blue;

//   /* fill: transparent; */
//   stroke: ${iconColors.black};
//   margin-right: 8px;
//   height: 24px;
//   width: 24px;

//   @media (min-width: 765px) {
//     height: 34px;
//     width: 34px;
//     margin-right: 16px;
//   }
//   @media (min-width: 1024px) {
//     display: none;
//   }
// `;

export const MotivationTask = styled.p`
  color: ${fontColors.black};

  display: block;
  font-family: 'Inter';

  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
`;

export const FeedbackBtn = styled.button`
  background: ${backgroundColors.blue};
  border-radius: 10px;
  padding: 8px 20px;
  border: none;
  color: ${fontColors.white};
  text-align: center;
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

export const ThemeButton = styled.button`
  color: black;
`;
