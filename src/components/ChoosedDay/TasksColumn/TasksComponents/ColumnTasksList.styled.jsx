import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  list-style: none;
  width: 100%;
  max-height: 290px;

  padding-right: 6px;

  overflow: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  padding-bottom: ${props => props.hasTasks && "28px"};

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 30px #f2f2f2;
    border-radius: 12px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #e7e5e5;
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 0;

    gap: 18px;
    margin-bottom: ${props => props.hasTasks && "32px"};
    max-height: 372px;

    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }
  }
`;

export const ListItem = styled.li`
  height: 108px;

  @media screen and (min-width: 768px) {
    height: 112px;
  }
`;
