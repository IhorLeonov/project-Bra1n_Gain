import styled from 'styled-components';

export const Container = styled.div`
  #scroll-progress {
    position: fixed;
    bottom: 30px;
    right: 20px;

    height: 40px;
    width: 40px;

    display: none;
    place-items: center;

    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    
    &:hover {
      transform: scale(1.2);
      -webkit-box-shadow: 0px 0px 5px 4px
        ${p => p.theme.colors.primaryBlueColor};
      -moz-box-shadow: 0px 0px 5px 4px ${p => p.theme.colors.buttonsHoverColor};
      box-shadow: 0px 0px 5px 4px ${p => p.theme.colors.buttonsHoverColor};

      span {
        stroke: ${p => p.theme.colors.buttonsHoverColor};
      }
    }

    @media screen and (min-width: 768px) {
      bottom: 20px;
      right: 10px;

      height: 70px;
      width: 70px;
    }
  }

  #scroll-progress-value {
    display: block;
    height: calc(100% - 10px);
    width: calc(100% - 10px);

    display: grid;
    place-items: center;
    border-radius: 50%;

    @media screen and (min-width: 768px) {
      height: calc(100% - 15px);
      width: calc(100% - 15px);
    }

    svg {
      width: 20px;
      height: 20px;

      @media screen and (min-width: 768px) {
        width: 30px;
        height: 30px;
      }
    }
  }
`;
