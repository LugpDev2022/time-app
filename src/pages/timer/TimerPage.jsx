import { useLocation } from 'react-router-dom';
import { Box } from '../../components';
import { NewTimerView, NormalView } from './views';

export const TimerPage = () => {
  const { pathname } = useLocation();

  return (
    <Box>{pathname === '/timer/new' ? <NewTimerView /> : <NormalView />}</Box>
  );
};
