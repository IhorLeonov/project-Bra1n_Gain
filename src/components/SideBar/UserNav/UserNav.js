import { useLocation } from 'react-router-dom';
import { ReactComponent as IconUser } from 'shared/icons/icon-user.svg';
import { ReactComponent as IconCalendar } from 'shared/icons/icon-calendar.svg';
import { ReactComponent as IconStatistics } from 'shared/icons/icon-statistics.svg';
import { useTranslation } from 'react-i18next';

import {
  Heading,
  UserNavContainer,
  StyledNavLink,
  Icon,
  IconStatistic,
} from './UserNav.styled';

export const UserNav = () => {
  const { t } = useTranslation();

  const location = useLocation();

  return (
    <>
      <Heading>{t('sidebar.UserPanel')}</Heading>
      <UserNavContainer>
        <StyledNavLink
          to="account"
          id={'account'}
        >
          <Icon
            as={IconUser}
            className={location.pathname.includes('account') ? 'active' : ''}
          />
          {t('sidebar.MyAccount')}
        </StyledNavLink>

        <StyledNavLink
          to="calendar"
          id={'calendar'}

        >
          <Icon
            as={IconCalendar}
            className={location.pathname.includes('calendar') ? 'active' : ''}
          />
          {t('sidebar.Calendar')}
        </StyledNavLink>

        <StyledNavLink
          to="statistics"
          id={'statistics'}
        >
          <IconStatistic
            as={IconStatistics}
            className={location.pathname.includes('statistics') ? 'active' : ''}
          />
          {t('sidebar.Statistics')}
        </StyledNavLink>
      </UserNavContainer>
    </>
  );
};
