import styled from 'styled-components';
// 1440+ - desctop
// 768-1439 tableLayout
// 375-767 mobile
// до 375 тянуться

export const Wrapper = styled.div`
  padding: 10px;
  background-color: #c9c9c9;
  text-align: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  color: #333;
  text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
  
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const SliderWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10px;

  border: solid 1px red;

  @media screen and (max-width: 1439px) {
    width: 90%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  .slick-slide {
    padding: 0 5px;

    @media screen and (min-width: 768px) {
      padding: 0 10px;
    }
  }
`;

export const SlideCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 375px) and (max-width: 767px) {
    max-width: 500px;
  }

  @media screen and (min-width: 768px) {
    max-width: 300px;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Description = styled.div`
  padding: 10px;
`;

export const Name = styled.h3`
  margin-bottom: 10px;
  
  font-size: 24px;

  @media screen and (min-width: 375px) {
    font-size: 18px;
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: space-around;
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

    @media screen and (min-width: 375px) and (max-width: 767px) {
      width: 20px;
      height: 20px;
    }
  }

  &:hover {
    color: #007bff;
  }
`;
