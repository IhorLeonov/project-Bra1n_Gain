import { useParams } from 'react-router-dom';
import { NavWrraper, ButtonDay, ButtonMonth } from './PeriodTypeSelect.styled';
import { useTranslation } from 'react-i18next';


export const PeriodTypeSelect = ({ date }) => {
  const { t } = useTranslation();
  const { currentDate } = useParams()

  const params = currentDate ? currentDate : date.getDate();

  return (
    <NavWrraper>
      <ButtonMonth to={`month/${params}`}>
        {t('calendar.Month')}
      </ButtonMonth>
      <ButtonDay to={`day/${params}`}>
        {t('calendar.Day')}
      </ButtonDay>
    </NavWrraper>
  );
};
