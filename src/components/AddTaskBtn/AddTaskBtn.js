import { FiPlus } from 'react-icons/fi';
import { AddTask, Div, Text } from './AddTaskBtn.styled';
import { useTranslation } from 'react-i18next';


export const AddTaskBtn = ({ handleAddTask }) => {
  const { t } = useTranslation();

  return (
    <Div>
      <AddTask type="button" onClick={handleAddTask}>
        <FiPlus size={24} />
        <Text>{t('btn.AddTask')}</Text>
      </AddTask>
    </Div>
  );
};
