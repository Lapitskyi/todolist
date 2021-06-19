import { useState } from 'react';

const useInput = (initialVal) => {
  const [val, setVal] = useState(initialVal);

  const onChange = (e) => {
    setVal(e.target.value);
  };

  const reset = () => {
    setVal(initialVal);
  };

  return {
    val,
    onChange,
    reset,
  };
};
export default useInput;
