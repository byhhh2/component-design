import {
  ChangeEvent,
  createContext,
  EventHandler,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

interface InputValue {
  id: string;
  value: string;
  type: string;
  onChange: EventHandler<ChangeEvent>;
}

const InputContext = createContext({} as InputValue);

const InputWrapper = ({
  id,
  type,
  children,
}: PropsWithChildren<Omit<InputValue, 'value' | 'onChange'>>) => {
  const [value, setValue] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const contextValue = { id, value, type, onChange };

  return (
    <InputContext.Provider value={contextValue}>
      {children}
    </InputContext.Provider>
  );
};

const Input = ({ ...props }) => {
  const { id, value, type, onChange } = useContext(InputContext);

  return (
    <input id={id} value={value} type={type} onChange={onChange} {...props} />
  );
};

const Label = ({ children, ...props }: PropsWithChildren) => {
  const { id } = useContext(InputContext);

  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
};

InputWrapper.Input = Input;
InputWrapper.Label = Label;

export default InputWrapper;
