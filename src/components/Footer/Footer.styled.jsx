import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: #f2f2f2;

  @media screen and (min-width: 390px) {
    justify-content: center;
  }
  @media screen and (min-width: 480px) {
    justify-content: space-around;
  }
`;

export const LicenseText = styled.p``;

export const ListLink = styled.ul`
  display: flex;
  gap: 5px;
`;

export const ListButtons = styled.div`
  display: flex;
  gap: 15px;
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
    color: #007bff;

    & svg {
      scale: 1.1;
    }
  }
`;

export const ModalButton = styled.button`
  padding: 5px;
  width: 30px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  color: #fff;
  background-color: rgb(52, 52, 52);
  transition: background-color 0.3s, scale 0.3s;

  &:hover {
    background-color: #007bff;
    scale: 1.1;
  }
`;
