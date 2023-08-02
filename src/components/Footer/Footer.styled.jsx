import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${props => props.theme.colors.primaryBlueColor};

  @media screen and (min-width: 440px) {
    justify-content: center;
    gap: 30px;
  }
`;

export const LicenseText = styled.p`
  color: #ffffff;

  @media screen and (max-width: 440px) {
    display: none;
  }
`;

export const ListLink = styled.ul`
  display: flex;
  gap: 10px;
`;

export const ListButtons = styled.div`
  display: flex;
  gap: 10px;
`;
export const ListLinkItem = styled.li`
  width: 30px;
  height: 30px;
`;

export const FooterLink = styled.a`
  font-size: 20px;
  color: rgb(52, 52, 52);
  transition: color 0.3s;

  & svg {
    width: 30px;
    height: 30px;
    transition: scale 0.3s;
  }

  &:hover {
    color: #dcebf7;
    & svg {
      scale: 1.1;
    }
  }
`;

export const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 30px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 50%;
  border: solid 1px rgb(52, 52, 52);
  color: rgb(52, 52, 52);
  background-color: transparent;
  transition: color 0.3s, scale 0.3s, border 0.3s, background-color 0.3s;

  &:hover {
    color: ${props => props.theme.colors.secondBlueColor};
    scale: 1.1;
    border: solid 1px ${props => props.theme.colors.secondBlueColor};
  }
`;
