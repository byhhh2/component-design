import {
  ChangeEvent,
  createContext,
  EventHandler,
  PropsWithChildren,
  useContext,
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
  value,
  type,
  onChange,
  children,
}: PropsWithChildren<InputValue>) => {
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
