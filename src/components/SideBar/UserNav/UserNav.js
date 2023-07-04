import { useLocation } from 'react-router-dom';
import { ReactComponent as IconUser } from 'shared/icons/icon-user.svg';
import { ReactComponent as IconCalendar } from 'shared/icons/icon-calendar.svg';
import { ReactComponent as IconStatistics } from 'shared/icons/icon-statistics.svg';
import {
  Heading,
  UserNavContainer,
  StyledNavLink,
  Icon,
  IconStatistic,
} from './UserNav.styled';

export const UserNav = () => {
  const location = useLocation();

  return (
    <>
      <Heading>User Panel</Heading>
      <UserNavContainer>
        <StyledNavLink
          to="account"
          id={'account'}
        >
          <Icon
            as={IconUser}
            className={location.pathname.includes('account') ? 'active' : ''}
          />
          My Account
        </StyledNavLink>

        <StyledNavLink
          to="calendar"
          id={'calendar'}

        >
          <Icon
            as={IconCalendar}
            className={location.pathname.includes('calendar') ? 'active' : ''}
          />
          Calendar
        </StyledNavLink>

        <StyledNavLink
          to="statistics"
          id={'statistics'}
        >
          <IconStatistic
            as={IconStatistics}
            className={location.pathname.includes('statistics') ? 'active' : ''}
          />
          Statistics
        </StyledNavLink>
      </UserNavContainer>
    </>
  );
};
