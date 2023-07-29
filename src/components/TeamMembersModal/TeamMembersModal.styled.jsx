import { FaEye } from 'react-icons/fa';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  padding: 10px;
  background: linear-gradient(to bottom, #009dff 0%, #ffff66 100%);
  border-radius: 8px;
  transition: 0.3s ease;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 450px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 700px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1439px) {
    width: 1000px;
  }
  @media screen and (min-width: 1440px) {
    width: 1200px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  text-align: center;
  color: #000;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.6);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const SliderWrapper = styled.div`
  margin: 0 auto;
  padding: 10px;
  border-radius: 8px;

  .slick-slide {
    padding: 0 5px;
  }

  .slick-arrow::before {
    width: 30px;
    height: 30px;
  }
`;

export const SlideCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
`;

export const ImageDescription = styled.div`
  position: relative;
  overflow: hidden;
  height: 300px;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    height: 240px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 195px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1439px) {
    height: 190px;
  }
  @media screen and (min-width: 1440px) {
    height: 230px;
  }
  &:hover {
    .work-list {
      transform: translateY(0);
    }

    & svg {
      opacity: 0;
    }
  }
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const EyeIcon = styled(FaEye)`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 40px;
  height: 40px;
  font-size: 24px;
  border-radius: 50%;
  border: solid 1px #333;
  color: #333;
  opacity: 1;
  transition: opacity 0.3s;
`;

export const WorkList = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  overflow-x: auto;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
`;

export const WorkItem = styled.li`
  margin-bottom: 5px;
  font-size: 14px;

  @media screen and (min-width: 479px) {
    font-size: 12px;
  }
`;

export const Description = styled.div`
  padding: 10px 5px;
  text-align: center;
  height: 125px;

  @media screen and (min-width: 480px) {
    height: 100px;
  }
`;

export const Name = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;

  @media screen and (min-width: 479px) {
    font-size: 16px;
  }
`;

export const JobTitle = styled.p`
  margin-bottom: 10px;
  font-size: 22px;

  @media screen and (min-width: 479px) {
    font-size: 17px;
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const SocialLinksItem = styled.li``;

export const IconLink = styled.a`
  font-size: 20px;
  color: #333;
  transition: color 0.3s ease;

  & svg {
    width: 30px;
    height: 30px;

    @media screen and (min-width: 479px) {
      width: 20px;
      height: 20px;
    }
  }

  &:hover {
    color: ${props => props.theme.colors.buttonsHoverColor};
  }
`;
