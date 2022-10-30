import { ImExit } from 'react-icons/im';
import { Link } from 'react-router-dom';

export const ExitButton = () => {
  return (
    <Link to='/timer'>
      <ImExit className='text-danger fs-4 position-absolute top-0 left-0 mt-4 ms-1 translate-middle cursor-pointer hover' />
    </Link>
  );
};
