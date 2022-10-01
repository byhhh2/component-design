import { ChangeEvent, useState } from 'react';
import InputWrapper from '.';

export const WhereToUse = () => {
  const [name, setName] = useState('');

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <InputWrapper
      id="name"
      value={name}
      type="text"
      onChange={handleChangeName}
    >
      <InputWrapper.Input />
      <InputWrapper.Label>{name}</InputWrapper.Label>
    </InputWrapper>
  );
};
