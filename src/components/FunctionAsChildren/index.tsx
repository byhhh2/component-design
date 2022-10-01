import { useState } from 'react';
import { ChangeEvent } from 'react';

interface FunctionAsChildrenProps {
  children: Function;
}

const FunctionAsChildren = ({ children }: FunctionAsChildrenProps) => {
  const [value, setValue] = useState('');

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return children({
    value,
    onChange: handleChangeValue,
  });
};

export default FunctionAsChildren;
