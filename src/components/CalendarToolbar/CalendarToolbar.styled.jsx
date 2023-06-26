import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;
