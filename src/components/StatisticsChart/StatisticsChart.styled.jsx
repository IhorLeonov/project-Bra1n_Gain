import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 279px;
  margin-top: 20px;
  color: ${props => props.theme.colors.textColorStatistic};

  @media screen and (min-width: 768px) {
    max-width: 100%;
    width: 576px;
  }

  @media screen and (min-width: 1440px) {
    width: 780px;
  }
`;

export const ListChart = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
`;

export const ListItemChart = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  text-align: right;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  ::after {
    content: '';
    display: block;
    width: 239px;
    height: 1px;
    background-color: ${props => props.theme.colors.colorLineStatisticChart};
    margin-left: 14px;

    @media screen and (min-width: 768px) {
      width: 518px;
      margin-left: 32px;
    }

    @media screen and (min-width: 1440px) {
      width: 692px;
      margin-left: 64px;
    }
  }
`;
export const Column = styled.p`
  width: 14px;
  height: ${props => `calc(${props.data}% - 10.5px)`};
  background: ${props =>
    props.type === 'day'
      ? 'linear-gradient(360deg, #FFD2DD 0%, rgba(255, 210, 221, 0.00) 96.88%)'
      : 'linear-gradient(360deg, #3E85F3 0%, rgba(62, 133, 243, 0.00) 100%)'};
  margin-top: auto;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  transition: height 0.3s ease-in-out;
  
  @media screen and (min-width: 300px) {
    width: 18px;
  }

  @media screen and (min-width: 320px) {
    width: 22px;
  }

  @media screen and (min-width: 768px) {
    width: 27px;
  }
`;

export const ProcentColumn = styled.span`
  position: relative;
  width: 25px;
  bottom: 18px;
  left: -1.5px;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 33px;
    bottom: 24px;
    left: -3px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ListColumn = styled.ul`
  position: absolute;
  bottom: 10px;
  left: 0;
  max-width: 215px;
  gap: 12%;
  height: 100%;
  margin: 0 14px 0 50px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 375px) {
    width: 215px;
    gap: 0px;
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {

    width: 464px;
    margin: 0 20px 0 95px;
  }

  @media screen and (min-width: 1440px) {
    width: 534px;
    margin: 0 100px 0 146px;
  }
`;

export const ListItemColumn = styled.li`
  display: flex;
  gap: 4px;
  position: relative;

  @media screen and (min-width: 340px) {
    gap: 6px;
  }

  @media screen and (min-width: 375px) {
    gap: 8px;
  }

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;
export const TextCategory = styled.p`
  position: absolute;
  bottom: -36px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: max-content;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;

  @media screen and (min-width: 320px) {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    bottom: -35px;

    font-size: 14px;
    line-height: 1.5;
  }
`;
