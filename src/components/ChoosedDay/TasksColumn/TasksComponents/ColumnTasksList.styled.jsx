import styled from 'styled-components';

export const List = styled.ul`

display: flex;
flex-direction: column;
gap: 14px;
list-style: none;
width: 100%;
height: 356px;
padding-right: 6px;

  overflow: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  margin-bottom: -8px;

  /* width */
::-webkit-scrollbar {
  width: 6px;

}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 30px #F2F2F2;
  border-radius: 12px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #E7E5E5;
  border-radius: 12px;
}

  @media screen and (min-width: 768px) {

  height: 372px;
  gap: 18px;
  margin-bottom: 32px;

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
