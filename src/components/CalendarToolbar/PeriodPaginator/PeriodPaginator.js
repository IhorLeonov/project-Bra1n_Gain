import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ButtonLeft,
  ButtonRight,
  ContainerBtn,
  Period,
  Wrapper
} from './PeriodPaginator.styled';

import { formatPeriod } from 'utils/calendarToolbar/formatPeriod';
import { changeDate } from 'utils/calendarToolbar/changeDate';


export const PeriodPaginator = ({ date, setDate, typenav }) => {
  const [period, setPeriod] = useState(() => formatPeriod(date, typenav));

  useEffect(() => {
    setPeriod(formatPeriod(date, typenav));
  }, [typenav, date]);

  const handleClick = num => {
    setDate(changeDate(date, num, typenav));
  };

  return (
    <Wrapper>
      <Period>{period}</Period>

      <ContainerBtn>
        <ButtonLeft onClick={() => handleClick(-1)}>
        <ArrowLeft/>
        </ButtonLeft>

        <ButtonRight onClick={() => handleClick(1)}>
        <ArrowRight/>
        </ButtonRight>
      </ContainerBtn>
    </Wrapper>
  );
};
