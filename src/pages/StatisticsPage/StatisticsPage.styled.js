import styled from 'styled-components';

// 1280-1440 десктоп
// 768-1279 таблетка
// 375-767 мобилка
// До 375 тянутся

export const GeneralContainer = styled.div`
  padding: 134px 114px 105px 114px;
  background-color: white;
  border-radius: 16px;

  @media screen and (min-width: 768px) and (max-width: 1279) {
    padding: 132px 32px 224px 32px;
  }
`;

export const BoxPagination = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 328px;
  align-items: center;
  margin-bottom: 40px;
`;

export const Container = styled.div`
  width: 860px;
  height: 440px;
  margin: auto;

  text-align: center;
  padding: 40px;
  border: 0.8px solid #e3f3ff;
  border-radius: 29px;
`;

export const Text = styled.p`
  color: #343434;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  text-align: left;
`;
