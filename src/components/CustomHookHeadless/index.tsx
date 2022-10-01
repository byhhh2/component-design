import useInput from './hooks/useInput';

const CustomHookHeadless = () => {
  const { value, onChange } = useInput();

  return (
    <>
      <input value={value} onChange={onChange} />
      <label>label</label>
    </>
  );
};

export default CustomHookHeadless;
