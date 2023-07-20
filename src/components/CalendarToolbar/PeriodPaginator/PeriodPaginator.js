import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ButtonLeft,
  ButtonRight,
  ContainerBtn,
  Period,
  Wrapper,
  PickerWrapper,
  DatePickerCastom,
} from './PeriodPaginator.styled';

import { formatPeriod } from 'utils/calendarToolbar/formatPeriod';
import { changeDate } from 'utils/calendarToolbar/changeDate';

import { selectLanguage } from 'redux/auth/selectors.js';


export const PeriodPaginator = ({ minDate, date, setDate, typenav }) => {
  const languageValue = useSelector(selectLanguage);
  const { pathname } = useLocation();
  const path = typenav ? typenav : pathname.includes('day') ? 'day' : 'month';
  const page = pathname.includes('calendar');
  const navigate = useNavigate();

  const [period, setPeriod] = useState(() => formatPeriod(date, path));
  const [openPicker, setOpenPicker] = useState(false);
  const [minDateDisabled, setMinDateDisabled] = useState(false);

  const handlePickerChange = newValue => {
    setDate(newValue);
    setOpenPicker(false);
  };

  const handleClickPeriod = () => {
    if (path === 'day') {
      setOpenPicker(true);
    }
  };

  const handleClick = num => {
    setDate(changeDate(date, num, path));
  };

  useEffect(() => {
    if (!page) return;
    const newParams = date.getDate();
    if (path === 'day') {
      navigate(`/layout/calendar/day/${newParams}`, { replace: true });
    }
    if (path === 'month') {
      navigate(`/layout/calendar/month/${newParams}`, { replace: true });
    }
  }, [date, navigate, path, page]);

  useEffect(() => {
    setPeriod(formatPeriod(date, path));
  }, [path, date]);

  useEffect(() => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    if (path === 'day') {
      const formattedDate = `${months[date.getMonth()]
        } ${date.getDate()} ${date.getFullYear()}`;

      setMinDateDisabled(formattedDate === minDate);
    }
    if (path === 'month') {
      const formattedDate = `${months[date.getMonth()]} ${date.getFullYear()}`;
      const arrDate = minDate.split(' ');
      const newMinDate = `${arrDate[0]} ${arrDate[2]}`;
      setOpenPicker(false);
      setMinDateDisabled(formattedDate === newMinDate);
    }
  }, [date, minDate, path]);

  return (
    <Wrapper>
      <Period typePeriod={path} onClick={handleClickPeriod}>{period}</Period>

      <PickerWrapper>
        {openPicker && path === 'day' && (
          <DatePickerCastom
            open
            selected={date}
            calendarStartDay={1}
            closeOnSelect={true}
            minDate={new Date(minDate)}
            onChange={handlePickerChange}
            formatWeekDay={nameOfDay => nameOfDay.slice(0, 1)}
            onClickOutside={() => setOpenPicker(false)}
            locale={languageValue}

          />
        )}
      </PickerWrapper>

      <ContainerBtn>
        <ButtonLeft onClick={() => handleClick(-1)} disabled={minDateDisabled}>
          <ArrowLeft disabled={minDateDisabled} />
        </ButtonLeft>

        <ButtonRight onClick={() => handleClick(1)}>
          <ArrowRight />
        </ButtonRight>
      </ContainerBtn>
    </Wrapper>
  );
};
