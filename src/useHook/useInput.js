import { useState } from 'react';

const useInput = (initialVal) => {
  const [val, setVal] = useState(initialVal);

  const onChange = (e) => {
    setVal(e.target.value);
  };

  return {
    val,
    onChange,
  };
};
export default useInput;
