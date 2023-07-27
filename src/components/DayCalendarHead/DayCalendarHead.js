import { useLocation } from 'react-router-dom';
import { useMedia } from 'react-use';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/auth/selectors.js';
import uk from 'date-fns/locale/uk';
import {
  startOfWeek,
  endOfWeek,
  format,
  addDays,
  isSameDay,
  isWeekend,
} from 'date-fns';

import {
  CellWrapperOfDate,
  GridWrapper,
  Date,
  Day,
} from './DayCalendarHead.styled';

export const DayCalendarHead = ({ date, setDate }) => {
  const languageValue = useSelector(selectLanguage);

  const { pathname } = useLocation();
  const path = pathname.includes('day');
  const isMobile = useMedia('(max-width: 767px)');
  const formatDay = isMobile ? 'EEEEE' : 'E';
  const start = startOfWeek(date, { weekStartsOn: 1 });
  const end = endOfWeek(date, { weekStartsOn: 1 });
  const week = [];
  let formattedDate = "";
  let dayOfWeek = "";


  let currentDay = start;

  while (currentDay <= end) {
    if (languageValue === "uk") {
      formattedDate = format(currentDay, 'd', { locale: uk });
      dayOfWeek = format(currentDay, formatDay, { locale: uk });
    }
    else {
      formattedDate = format(currentDay, 'd');
      dayOfWeek = format(currentDay, formatDay);
    }

    week.push({ date: formattedDate, day: dayOfWeek, fullDate: currentDay });
    currentDay = addDays(currentDay, 1);
  }

  return (
    <GridWrapper page={!path}>
      {week.map(dateItem => {
        const isCurrentDay = isSameDay(dateItem.fullDate, date);
        return (
          <CellWrapperOfDate
            key={dateItem.fullDate}
            onClick={() => path && setDate(dateItem.fullDate)}
            page={!path}
          >
            <Day weekend={isWeekend(dateItem.fullDate) && !path} page={!path}>
              {dateItem.day}
            </Day>
            {path && (
              <Date isCurrentDay={isCurrentDay} page={!path}>
                {dateItem.date}
              </Date>
            )}
          </CellWrapperOfDate>
        );
      })}
    </GridWrapper>
  );
};
