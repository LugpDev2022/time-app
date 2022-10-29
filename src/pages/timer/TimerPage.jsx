import { useLocation } from 'react-router-dom';
import { NewTimerView, NormalView } from './views';

export const TimerPage = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className='position-absolute top-50 start-50 translate-middle w-75 border rounded-4 border-2 border-primary align-items-center px-3 py-0'>
      {pathname === '/timer/new' ? <NewTimerView /> : <NormalView />}
    </div>
  );
};
