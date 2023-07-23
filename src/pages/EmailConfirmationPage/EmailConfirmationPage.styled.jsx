import styled from 'styled-components';

export const ContainerLOginrForm = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  @media (min-width: 320px) {
    background-color: #ffffff;
  }

  @media (min-width: 375px) {
    background-color: ${props => props.theme.colors.secondBlueColor};
  }

  @media (min-width: 1280px) {
    background-image: url(${process.env.PUBLIC_URL}/images/goose_auth-desctop/rocket_auth-desctop.png);

    background-size: 368px 521px;
    background-repeat: no-repeat;
    background-position: right 65px bottom 40%;
  }
`;

