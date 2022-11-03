import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { capitalize } from '../../../helpers/capitalize';
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

    // if () {
    //   const action = {
    //     errorType: 'Duplicated Clock',
    //   };

    //   dispatch(handleError(action));
    //   return;
    // }

    if (city.length >= 1) {
      const action = {
        region: regionSelect.current.value,
        city: capitalize(city),
      };

      dispatch(addClock(action));
      setCity('');
      return;
    }
    const action = {
      errorType: 'Not city',
    };
    dispatch(handleError(action));
  };

  return { regionSelect, handleSubmit, city, handleInputChange };
};
