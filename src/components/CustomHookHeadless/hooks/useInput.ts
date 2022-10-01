import { ChangeEvent, useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange,
  };
};

export default useInput;
