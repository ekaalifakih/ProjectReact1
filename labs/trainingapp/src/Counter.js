//Penggunaan state
import * as React from "react";

export const Counter = () => {
  //Contoh mendefinisikan state, setCount adalah fungsi untuk mengubah nilai state count
  const [count, setCount] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);

  const handleIncrease = () => {
    setCount(count + 1);
    if (count >= 0) {
      setDisabled(false);
    }
  };

  const handleDecrease = () => {
    if (count === 0) {
      setDisabled(true);
    } else {
      setCount(count - 1);
      setDisabled(false);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleIncrease}>
        Increment
      </button>
      <button type="button" onClick={handleDecrease} disabled={disabled}>
        Decrement
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
      <div>Nilai count: {count}</div>
    </div>
  );
};
