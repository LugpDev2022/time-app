import { useRef, useState } from 'react';

export const useCountryForm = () => {
  const [city, setCity] = useState('');
  const countrySelect = useRef();

  const handleInputChange = ({ target }) => {
    setCity(target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(countrySelect.current.value);
    console.log(city);
    setCity('');
  };

  return { countrySelect, handleSubmit, city, handleInputChange };
};
