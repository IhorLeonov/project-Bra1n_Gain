import { Wrap, ColumnTitle, BtnAddTop, Icon } from './ColumnHeadBar.styled';
import { useTranslation } from 'react-i18next';

export const ColumnHeadBar = ({ title, handleAddTask }) => {
  const { t } = useTranslation();


  return (
    <>
      <Wrap>
        <ColumnTitle>
          {title === 'to-do'
            ? `${t('calendar.ToDo')}`
            : title === 'in-progress'
              ? `${t('calendar.InProgress')}`
              : title === 'done'
                ? `${t('calendar.Done')}`
                : null}
        </ColumnTitle>
        <BtnAddTop onClick={handleAddTask}>
          <Icon />
        </BtnAddTop>
      </Wrap>
    </>
  );
};
