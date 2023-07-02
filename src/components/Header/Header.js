import { UserInfo } from './UserInfo/UserInfo';
import { useLocation } from 'react-router-dom';
import { toggleTheme } from 'redux/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal, setModalTypeFeedback } from 'redux/modal/modalSlice';
import { selectTheme } from 'redux/auth/selectors';
import { Link } from 'react-router-dom';

import {
  Wrapper,
  MenuIcon,
  Info,
  SectionTitle,
  FeedbackBtn,
  MotivationTask,
  LeftSubsection,
  RightSubsection,
  GooseImg,
  IconSun,
  IconMoon,
} from './Header.styled';
import { modalType, selectShowModal } from 'redux/modal/selector';
import { AddFeedbackModal } from 'components/AddFeedbackModal/AddFeedbackModal';
export const Header = () => {
  const themeValue = useSelector(selectTheme);
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
    dispatch(setModalTypeFeedback());
    dispatch(toggleModal());
  };

  const handleTheme = () => dispatch(toggleTheme());

  const modalTypeSelected = useSelector(modalType);
  const isModalOpen = useSelector(selectShowModal);

  return (
    <Wrapper>
      {themeValue ? (
        <MenuIcon color={'black'} /> // добавить открытие side bar onClick={handleSideBar}
      ) : (
        <MenuIcon color={'white'} /> // добавить открытие side bar onClick={handleSideBar}
      )}
      <LeftSubsection>
        {motivateText && (
          <GooseImg
            src={process.env.PUBLIC_URL + '/images/icons/goose-task.svg'}
            alt="goose"
          />
        )}
        <SectionTitle>{title}</SectionTitle>
        {motivateText && (
          <MotivationTask>
            Let go of the past and focus on the present!
          </MotivationTask>
        )}
      </LeftSubsection>
      <RightSubsection>
        <FeedbackBtn onClick={handleToggleModal}>Feedback</FeedbackBtn>
        <Info>
          {themeValue ? (
            <IconMoon onClick={handleTheme} />
          ) : (
            <IconSun onClick={handleTheme} />
          )}
          <Link to={'/layout/account'}>
            <UserInfo />
          </Link>
        </Info>
      </RightSubsection>
      {modalTypeSelected === 'feedback' && isModalOpen && (
        <AddFeedbackModal></AddFeedbackModal>
      )}
    </Wrapper>
  );
};

export default Header;
