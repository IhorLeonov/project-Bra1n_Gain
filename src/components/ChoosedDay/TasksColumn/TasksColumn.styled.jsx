import styled from 'styled-components';

export const ColumnsItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 18px 18px 10px 18px;
  min-width: 345px;
  width: 100%;
  height: 100%;
  max-height: 432px;
  list-style: none;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  background-color: #fff;
  @media (min-width: 768px) {
    min-width: calc((100% - 54px) / 3);
    max-height: 568px;
    padding: 18px 23px 28px 20px;
  }

  @media (min-width: 1280px) {
    min-width: 290px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.1;
  font-family: 'InterBolt';
  color: #343434;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;
