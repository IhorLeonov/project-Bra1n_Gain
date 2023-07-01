import styled from 'styled-components';

export const TasksList = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
  overflow: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
padding-bottom: 34px;
  scrollbar-width: thin; /* Товщина полоси прокрутки */
  scrollbar-color: red lightgray; /* Колір полоси прокрутки і фону */


/* width */
::-webkit-scrollbar {
  width: 12px;

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

  @media screen and (min-width: 1440px) {
    gap: 27px;
    height: 568px;
  }

  ::-webkit-scrollbar {
  width: 14px;

}
`;
