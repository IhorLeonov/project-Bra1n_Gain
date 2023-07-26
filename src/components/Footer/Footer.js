import { TeamMembersModal } from 'components/TeamMembersModal/TeamMembersModal';
import { FaGithubAlt, FaGithub } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { SiSwagger } from 'react-icons/si';
import {
  FooterContainer,
  FooterLink,
  ModalButton,
  LicenseText,
  ListLink,
  ListLinkItem,
  ListButtons,
} from './Footer.styled';
import { useSelector } from 'react-redux';
import { selectShowModal } from 'redux/modal/selector';
import { toggleModal } from 'redux/modal/modalSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const linkList = [
  {
    link: 'https://backend-documentation-url',
    icon: <SiSwagger />,
  },
  {
    link: 'https://backend-documentation-url',
    icon: <FaGithub />,
  },
  {
    link: 'https://backend-documentation-url',
    icon: <FaGithubAlt />,
  },
];

export const Footer = () => {
  const dispatch = useDispatch();
  const isShowModalWindow = useSelector(selectShowModal);

  const handleToggleModal = () => {
    dispatch(toggleModal());
  };

  useEffect(() => {
    if (isShowModalWindow) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isShowModalWindow]);

  return (
    <FooterContainer>
      <LicenseText>&copy; 2023. Bra1n Ga1n</LicenseText>

      <ListButtons>
        <ModalButton type="button" onClick={handleToggleModal}>
          <RiTeamFill />
        </ModalButton>
        <ListLink>
          {linkList.map((item, index) => (
            <ListLinkItem key={index}>
              <FooterLink
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </FooterLink>
            </ListLinkItem>
          ))}
        </ListLink>
      </ListButtons>

      {isShowModalWindow && <TeamMembersModal />}
    </FooterContainer>
  );
};

export default Footer;
