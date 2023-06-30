import { ThemeToggler } from './ThemeToggler/ThemeToggler';
import { UserInfo } from './UserInfo/UserInfo';
import { useLocation } from 'react-router-dom';

import {
  Wrapper,
  Container,
  Info,
  SectionTitle,
  Toggler,
  FeedbackBtn,
  MotivationTask,
  LeftSubsection,
  RightSubsection,
  GooseImg,
} from './Header.styled';

export const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  let title = '';
  if (currentPath.startsWith('/account')) {
    title = 'User Profile';
  } else if (currentPath.startsWith('/calendar/')) {
    title = 'Calendar';
  } else {
    title = '';
  }

  let motivate = false;
  if (currentPath.startsWith('/calendar/day')) {
    motivate = true;
  }

  return (
    <Wrapper>
      <Container>
        <LeftSubsection>
          {motivate && (
            <GooseImg
              src={process.env.PUBLIC_URL + '/images/icons/goose-task.svg'}
              alt="goose"
            />
          )}
          <div>
            <SectionTitle>{title}</SectionTitle>
            {motivate && (
              <MotivationTask>
                Let go of the past and focus on the present!
              </MotivationTask>
            )}
          </div>
        </LeftSubsection>
        <Toggler>
          <img
            src={process.env.PUBLIC_URL + '/images/icons/icons-menu.svg'}
            alt="menu"
          />
        </Toggler>
        <RightSubsection>
          <FeedbackBtn>Feedback</FeedbackBtn>
          <Info>
            <ThemeToggler />
            <UserInfo />
          </Info>
        </RightSubsection>
      </Container>
    </Wrapper>
  );
};

export default Header;
