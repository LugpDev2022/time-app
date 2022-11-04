import { useLocation } from 'react-router-dom';
import { NewTimerView, NormalView } from './views';

export const TimerPage = () => {
  const { pathname } = useLocation();

  if (pathname === '/timer/new') {
    return <NewTimerView />;
  }

  return <NormalView />;
};
