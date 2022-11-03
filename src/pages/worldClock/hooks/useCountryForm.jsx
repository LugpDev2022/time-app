import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addClock, handleError } from '../../../store/slices/worldClock';

export const useCountryForm = () => {
  const [city, setCity] = useState('');
  const regionSelect = useRef();
  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    setCity(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (true) {
      const action = {
        errorType: 'Duplicated Clock',
      };

      dispatch(handleError(action));
      return;
    }

    const action = {
      region: regionSelect.current.value,
      city,
    };
    dispatch(addClock(action));
    setCity('');
  };

  return { regionSelect, handleSubmit, city, handleInputChange };
};
