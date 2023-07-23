import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
  width: 100%;
  max-height: 290px;

  padding-right: 6px;

  overflow: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;

  padding-bottom: ${props => !props.empty  && "28px"};

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

    margin-bottom: ${props => !props.empty && "32px"};
    max-height: 372px;

    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }
  }
`;

export const ListItem = styled.li`
  height: 108px;
  user-select: none;
margin-bottom: 14px;

:last-child{
  margin-bottom: 0;
}
  @media screen and (min-width: 768px) {
    height: 112px;
margin-bottom: 18px;
:last-child{
  margin-bottom: 0;
}
  }
`;
