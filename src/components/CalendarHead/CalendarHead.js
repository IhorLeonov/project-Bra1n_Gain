import { useLocation } from 'react-router-dom';
import { useMedia } from 'react-use';
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
} from './CalendarHead.styled';

export const CalendarHead = ({ date, setDate }) => {
  const { pathname } = useLocation();
  const path = pathname.includes('day');
  const isMobile = useMedia('(max-width: 767px)');
  const formatDay = isMobile ? 'EEEEE' : 'E';
  const start = startOfWeek(date, { weekStartsOn: 1 });
  const end = endOfWeek(date, { weekStartsOn: 1 });
  const week = [];

  let currentDay = start;

  while (currentDay <= end) {
    const formattedDate = format(currentDay, 'd');
    const dayOfWeek = format(currentDay, formatDay);

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
