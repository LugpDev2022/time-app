import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/slices/timer';

export const TimerPage = () => {
  const { minutes, seconds } = useSelector(state => state.timer.counter);

  return (
    <div className='text-primary h1'>
      <span>{`${minutes}:${seconds}`}</span>
    </div>
  );
};
