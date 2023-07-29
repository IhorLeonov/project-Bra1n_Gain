import { useEffect } from 'react';
import { FaGithub, FaGithubAlt, FaServer } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { setModalTypeTeam, toggleModal } from 'redux/modal/modalSlice';
import { modalType, selectShowModal } from 'redux/modal/selector';
import { TeamMembersModal } from 'components/TeamMembersModal/TeamMembersModal';
import {
  FooterContainer,
  FooterLink,
  LicenseText,
  ListButtons,
  ListLink,
  ListLinkItem,
  ModalButton,
} from './Footer.styled';

const linkList = [
  {
    link: 'https://bra1n-gain-backend.onrender.com/api-docs',
    icon: <FaServer />,
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

      {modalTypeSelected === 'team' && isShowModalWindow && (
        <TeamMembersModal />
      )}
    </FooterContainer>
  );
};

export default Footer;
