import { useLocation } from 'react-router-dom';
import { t } from 'i18next';
import { Text } from './Overview.styled';

export default function Overview() {
  const location = useLocation();
  return <Text> {location.state ? location.state : t('notFoundMsg')}</Text>;
}
