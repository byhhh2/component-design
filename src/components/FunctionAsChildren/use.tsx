import { ChangeEvent } from 'react';
import FunctionAsChildren from '.';

export const WhereToUse = () => {
  return (
    <FunctionAsChildren>
      {({
        value,
        onChange,
      }: {
        value: string;
        onChange: (event: ChangeEvent<HTMLInputElement>) => void;
      }) => {
        return (
          <>
            <input id="FunctionAsChildren" value={value} onChange={onChange} />
            <label htmlFor="FunctionAsChildren">label</label>
          </>
        );
      }}
    </FunctionAsChildren>
  );
};
