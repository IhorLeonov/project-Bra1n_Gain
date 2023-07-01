import { UserInfo } from './UserInfo/UserInfo';
import { useLocation } from 'react-router-dom';
import { toggleTheme } from 'redux/auth/authSlice';
// import { FiMoon } from 'react-icons/fi';

import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/modalSlice';

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
  const handleToggleModal = () => dispatch(toggleModal());

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
    </Wrapper>
  );
};

export default Header;
