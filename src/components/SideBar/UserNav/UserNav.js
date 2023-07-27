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

  return (
    <>
      <Heading>{t('sidebar.UserPanel')}</Heading>
      <UserNavContainer>
        <StyledNavLink to="account" id={'account'}>
          <Icon>
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite.svg#icon-user-check-24x24'
              }
              stroke="currentColor"
            />
          </Icon>
          {t('sidebar.MyAccount')}
        </StyledNavLink>

        <StyledNavLink to="calendar" id={'calendar'}>
          <Icon>
            <use
              xlinkHref={
                process.env.PUBLIC_URL + '/images/sprite.svg#icon-calendar'
              }
              fill="currentColor"
            />
          </Icon>
          {t('sidebar.Calendar')}
        </StyledNavLink>

        <StyledNavLink to="statistics" id={'statistics'}>
          <IconStatistic>
            <use
              xlinkHref={
                process.env.PUBLIC_URL + '/images/sprite.svg#statistic'
              }
              fill="currentColor"
            />
          </IconStatistic>
          {t('sidebar.Statistics')}
        </StyledNavLink>
      </UserNavContainer>
    </>
  );
};
