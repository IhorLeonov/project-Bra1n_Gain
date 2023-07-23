import { List, ListItem, Text } from './StatisticsInfo.styled';
import { useTranslation } from 'react-i18next';


export const StatisticsInfo = () => {
  const { t } = useTranslation();

  return (
    <div>
      <List>
        <ListItem>
          <Text>{t('statistics.ByDay')}</Text>
        </ListItem>
        <ListItem>
          <Text>{t('statistics.ByMonth')}</Text>
        </ListItem>
      </List>
    </div>
  );
};
