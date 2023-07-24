import { useTranslation } from 'react-i18next';
import { ScrollToTop } from '../MainPageComponents/ScrollToTop/ScrollToTop';

import {
  Container,
  SectionList,
  InfoWrapper,
  SectionDescription,
  ContainerDescription,
  Img,
  Label,
  Number,
  Text,
  TitleText,
  TitleWrapper,
} from './HomePageDescription.styled';

export const HomePageDescription = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <SectionList>
        <SectionDescription>
          <ContainerDescription>
            <InfoWrapper>
              <TitleWrapper>
                <Number>1.</Number>
                <Label>{t('homePage.Calendar')}</Label>
                <TitleText>{t('homePage.View')}</TitleText>
              </TitleWrapper>
              <Text>{t('homePage.calendarViewDesk')}</Text>
            </InfoWrapper>
          </ContainerDescription>
          <ContainerDescription>
            <div>
              <picture>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/calendar-mobile/calendar_m_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/calendar-mobile/calendar_m_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/calendar-mobile/calendar_m_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/calendar-mobile/calendar_m_x2.webp'} 2x`}
                  media="(max-width: 767px)"
                ></source>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/calendar-tablet/calendar_t_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/calendar-tablet/calendar_t_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/calendar-tablet/calendar_t_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/calendar-tablet/calendar_t_x2.webp'} 2x`}
                  media="(max-width: 1279px)"
                ></source>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/calendar-desctop/calendar_d_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/calendar-desctop/calendar_d_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/calendar-desctop/calendar_d_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/calendar-desctop/calendar_d_x2.webp'} 2x`}
                  media="(min-width: 1280px)"
                ></source>
                <Img src={process.env.PUBLIC_URL + '/images/calendar-desctop/calendar_d_x1.png'} alt="schedule"></Img>
              </picture>
            </div>
          </ContainerDescription>
        </SectionDescription>
        <SectionDescription>
          <ContainerDescription>
            <InfoWrapper>
              <TitleWrapper>
                <Number>2.</Number>
                <TitleText>{t('homePage.Sidebar')}</TitleText>
              </TitleWrapper>
              <Text>{t('homePage.calendarSidebarDesk')}</Text>
            </InfoWrapper>
          </ContainerDescription>
          <ContainerDescription>
            <div>
              <picture>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/navigation-mobile/navigation_m_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/navigation-mobile/navigation_m_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/navigation-mobile/navigation_m_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/navigation-mobile/navigation_m_x2.webp'} 2x`}
                  media="(max-width: 767px)"
                ></source>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/navigation-tablet/navigation_t_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/navigation-tablet/navigation_t_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/navigation-tablet/navigation_t_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/navigation-tablet/navigation_t_x2.webp'} 2x`}
                  media="(max-width: 1279px)"
                ></source>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/navigation-desctop/navigation_d_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/navigation-desctop/navigation_d_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/navigation-desctop/navigation_d_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/navigation-desctop/navigation_d_x2.webp'} 2x`}
                  media="(min-width: 1280px)"
                ></source>
                <Img src={process.env.PUBLIC_URL + '/images/navigation-desctop/navigation_d_x1.png'} alt="sidebar"></Img>
              </picture>
            </div>
          </ContainerDescription>
        </SectionDescription>
        <SectionDescription>
          <ContainerDescription>
            <InfoWrapper>
              <TitleWrapper>
                <Number>3.</Number>
                <Label>{t('homePage.AllIn')}</Label>
                <TitleText>{t('homePage.One')}</TitleText>
              </TitleWrapper>
              <Text>{t('homePage.AllInDesk')}</Text>
            </InfoWrapper>
          </ContainerDescription>
          <ContainerDescription>
            <div>
              <picture>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/todo_board-mobile/todo_board_m_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/todo_board-mobile/todo_board_m_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/todo_board-mobile/todo_board_m_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/todo_board-mobile/todo_board_m_x2.webp'} 2x`}
                  media="(max-width: 767px)"
                ></source>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/todo_board-tablet/todo_board_t_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/todo_board-tablet/todo_board_t_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/todo_board-tablet/todo_board_t_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/todo_board-tablet/todo_board_t_x2.webp'} 2x`}
                  media="(max-width: 1279px)"
                ></source>
                <source
                  srcSet={`${process.env.PUBLIC_URL + '/images/todo_board-desctop/todo_board_d_x1.png'} 1x, ${process.env.PUBLIC_URL + '/images/todo_board-desctop/todo_board_d_x2.png'} 2x, ${process.env.PUBLIC_URL + '/images/todo_board-desctop/todo_board_d_x1.webp'} 1x, ${process.env.PUBLIC_URL + '/images/todo_board-desctop/todo_board_d_x2.webp'} 2x`}
                  media="(min-width: 1280px)"
                ></source>
                <Img src={process.env.PUBLIC_URL + '/images/todo_board-desctop/todo_board_d_x1.png'} alt="Calendar"></Img>
              </picture>
            </div>
          </ContainerDescription>
        </SectionDescription>
      </SectionList>
      <ScrollToTop />
    </Container>
  );
};
