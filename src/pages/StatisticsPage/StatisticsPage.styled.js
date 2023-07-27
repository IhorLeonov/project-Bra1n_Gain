import styled from 'styled-components';

// 1280-1440 десктоп
// 768-1279 таблетка
// 375-767 мобилка
// До 375 тянутся

export const GeneralContainer = styled.div`
  padding: 28px 14px 135px;
  background-color: ${props => props.theme.colors.bgColorStatistic};
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    padding: 132px 32px 224px;
  }

  @media screen and (min-width: 1440px) {
    padding: 134px 113px 104px;
  }
`;

export const BoxPagination = styled.div`
  max-width: 307px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto 40px;

  @media screen and (min-width: 768px) {
    max-width: 100%;
    width: 576px;

    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    width: 780px;
  }
`;

export const Container = styled.div`
  max-width: 307px;
  height: 440px;

  text-align: center;
  padding: 40px 14px;
  border: 0.8px solid ${props => props.theme.colors.colorLineStatisticChart};

;
  border-radius: 29px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 100%;
    width: 640px;
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 860px;
  }
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.textColorStatistic};
  font-size: 14px;
  font-weight: 600;
  line-height: 1,5;
  text-align: left;

`;
