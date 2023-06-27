import { ThemeToggler } from './ThemeToggler/ThemeToggler';
import { UserInfo } from './UserInfo/UserInfo';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/theme/selectors';

// import icons from 'public/images/icons/icons-menu.svg';
// import gooseTask from 'public/images/icons/goose-task.svg';

import {
  Wrapper,
  Info,
  SectionTitle,
  Toggler,
  GooseTask,
  MotivationTask,
} from './Header.styled';

const menuIcon = process.env.PUBLIC_URL + '/images/icons/icons-menu.svg';
const gooseTaskIcon = process.env.PUBLIC_URL + '/images/icons/goose-task.svg';

export const Header = ({ onToggle }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const { currentDay } = useParams();
  const isCalendarPage = currentPath.startsWith('/calendar/day');

  const tasks = useSelector(selectTasks);

  const haveTasksToday = () => {
    const tasksForToday = tasks.filter(task => task.date === currentDay);
    if (tasksForToday.length > 0) {
      const tasksInProgress = tasksForToday[0].tasks.find(
        task => task.category === 'to-do' || task.category === 'in-progress'
      );

      return tasksInProgress;
    }
  };

  let title = '';
  if (currentPath.startsWith('/account')) {
    title = 'User Profile';
  } else if (currentPath.startsWith('/calendar/')) {
    title = 'Calendar';
  } else {
    title = '';
  }
  return (
    <>
      <Wrapper>
        {isCalendarPage && haveTasksToday() && (
          <GooseTask src={gooseTaskIcon} alt="goose" />
        )}
        <div>
          <SectionTitle>{title}</SectionTitle>

          {isCalendarPage && haveTasksToday() && (
            <MotivationTask>
              Let go of the past and focus on the present!
            </MotivationTask>
          )}
        </div>
        <Toggler
          onClick={() => {
            onToggle();
          }}
        >
          <use src={menuIcon} alt="menu" />
        </Toggler>
        <Info>
          <ThemeToggler />
          <UserInfo />
        </Info>
      </Wrapper>
    </>
  );
};
