import { UserInfo } from './UserInfo/UserInfo';
import { useLocation } from 'react-router-dom';
import { toggleTheme, toggleSideBar } from 'redux/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal, setModalTypeFeedback } from 'redux/modal/modalSlice';
import { selectTheme } from 'redux/auth/selectors';
import { ChangeLanguageBtn } from '../ChangeLanguageBtn/ChangeLanguageBtn';

import { useTranslation } from 'react-i18next';

import {
  Wrapper,
  MenuIcon,
  UserInfoBox,
  SectionTitle,
  AccentWords,
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
  const { t } = useTranslation();

  const themeValue = useSelector(selectTheme);
  const location = useLocation();
  const currentPath = location.pathname;
  const dispatch = useDispatch();

  let title = '';
  if (currentPath.startsWith('/layout/account')) {
    title = `${t('header.UserProfile')}`;
  } else if (currentPath.startsWith('/layout/calendar')) {
    title = `${t('header.Calendar')}`;
  } else {
    title = `${t('header.Statistics')}`;
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

  const handleSideBarShow = () => dispatch(toggleSideBar());

  const modalTypeSelected = useSelector(modalType);
  const isModalOpen = useSelector(selectShowModal);

  return (
    <Wrapper>
      <MenuIcon onClick={handleSideBarShow} />

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
              <AccentWords>{t('header.SloganPartOne')}</AccentWords>{' '}
              {t('header.SloganPartTwo')}
            </MotivationTask>
          )}
        </div>
      </LeftSubsection>
      <RightSubsection>
        <FeedbackBtn onClick={handleToggleModal}>
          {t('header.Feedback')}
        </FeedbackBtn>
        <UserInfoBox>
          {themeValue ? (
            <IconMoon onClick={handleTheme} />
          ) : (
            <IconSun onClick={handleTheme} />
          )}
          <ChangeLanguageBtn />
          <UserInfo />
        </UserInfoBox>
      </RightSubsection>
      {modalTypeSelected === 'feedback' && isModalOpen && (
        <AddFeedbackModal></AddFeedbackModal>
      )}
    </Wrapper>
  );
};

export default Header;
