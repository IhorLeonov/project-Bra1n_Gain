import { UserInfo } from './UserInfo/UserInfo';
import { useLocation } from 'react-router-dom';
import { toggleTheme } from 'redux/auth/authSlice';
// import { FiMoon } from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import { toggleModal, setModalTypeFeedback } from 'redux/modal/modalSlice';

import {
  Wrapper,
  MenuIcon,
  // Container,
  Info,
  SectionTitle,
  // Toggler,
  FeedbackBtn,
  MotivationTask,
  LeftSubsection,
  RightSubsection,
  GooseImg,
  ThemeButton,
} from './Header.styled';
import { modalType, selectShowModal } from 'redux/modal/selector';
import { AddFeedbackModal } from 'components/AddFeedbackModal/AddFeedbackModal';
export const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const dispatch = useDispatch();

  let title = '';
  if (currentPath.startsWith('/layout/account')) {
    title = 'User Profile';
  } else if (currentPath.startsWith('/layout/calendar')) {
    title = 'Calendar';
  } else {
    title = 'Statistics';
  }

  let motivateText = false;
  if (currentPath.startsWith('/layout/calendar/day')) {
    motivateText = true;
  }

  const handleToggleModal = () => {
    console.log('pressed button');
    dispatch(setModalTypeFeedback());
    dispatch(toggleModal());
  };

  const modalTypeSelected = useSelector(modalType);
  const isModalOpen = useSelector(selectShowModal);

  return (
    <Wrapper>
      <MenuIcon size={34} />
      {/* <Container> */}
      <LeftSubsection>
        {motivateText && (
          <GooseImg
            src={process.env.PUBLIC_URL + '/images/icons/goose-task.svg'}
            alt="goose"
          />
        )}
        <div>
          <SectionTitle>{title}</SectionTitle>
          {motivateText && (
            <MotivationTask>
              Let go of the past and focus on the present!
            </MotivationTask>
          )}
        </div>
      </LeftSubsection>
      {/* <Toggler>
        <img
          src={process.env.PUBLIC_URL + '/images/icons/icons-menu.svg'}
          alt="menu"
        />
      </Toggler> */}
      <RightSubsection>
        <FeedbackBtn onClick={handleToggleModal}>Feedback</FeedbackBtn>
        <Info>
          <ThemeButton onClick={() => dispatch(toggleTheme())}>
            Theme
          </ThemeButton>
          <UserInfo />
        </Info>
      </RightSubsection>
      {/* </Container> */}
      {modalTypeSelected === 'feedback' && isModalOpen && (
        <AddFeedbackModal></AddFeedbackModal>
      )}
    </Wrapper>
  );
};

export default Header;
