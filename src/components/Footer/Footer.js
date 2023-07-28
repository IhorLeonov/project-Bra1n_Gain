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
import { useDispatch, useSelector } from 'react-redux';
import { selectShowModal, modalType } from 'redux/modal/selector';
import { toggleModal, setModalTypeTeam } from 'redux/modal/modalSlice';
import { useEffect } from 'react';

const linkList = [
  {
    link: 'https://bra1n-gain-backend.onrender.com/api-docs',
    icon: <SiSwagger />,
  },
  {
    link: 'https://github.com/IhorLeonov/project-Bra1n_Gain',
    icon: <FaGithub />,
  },
  {
    link: 'https://github.com/IhorLeonov/Bra1n_Gain-backend',
    icon: <FaGithubAlt />,
  },
];

export const Footer = () => {
  const dispatch = useDispatch();
  const modalTypeSelected = useSelector(modalType);
  const isShowModalWindow = useSelector(selectShowModal);

  const handleToggleModal = () => {
    dispatch(setModalTypeTeam());
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

      {modalTypeSelected === 'team' && isShowModalWindow && <TeamMembersModal />}
    </FooterContainer>
  );
};

export default Footer;
