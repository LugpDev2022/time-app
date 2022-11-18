import { VscDebugRestart } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { resetTimer } from '../../../store/slices/timer/timerSlice';

export const RestartButton = () => {
  const { isFinished } = useSelector(state => state.timer);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetTimer());
  };


  if (isFinished) {
    return (
      <div className='position-absolute top-50 start-0 translate-middle ms-4'>
        <VscDebugRestart className='text-danger fs-2' onClick={handleClick} />
      </div>
    );
  }
};
