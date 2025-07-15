//Demo penggunaan user ref
import * as React from "react";

function PakaiRef() {
  //State untuk menampilkan counter
  const [count, setCount] = React.useState(0);
  //REF untuk menghitung jumlah click
  const ref = React.useRef({
    increament: 0,
    decreament: 0,
  });
  //function untuk increase state
  const handleIncreament = () => {
    setCount(count + 1); //Increase state
    ref.current.increament++; //USAGE tracing jumlah click
  };
  //function untuk decrease state
  const handleDecreament = () => {
    setCount(count - 1); //Decrease state
    ref.current.decreament++; //USAGE tracing jumlah click
  };

  return (
    <>
      <button onClick={handleIncreament}>Increament</button>
      <button onClick={handleDecreament}>Decreament</button>
      <div>Counter: {count}</div>
      <div>
        <p>Jumlah Click Increament: {ref.current.increament}</p>
        <p>Jumlah Click Decreament: {ref.current.decreament}</p>
        <p>Total Click: {ref.current.increament + ref.current.decreament}</p>
      </div>
    </>
  );
}

export default PakaiRef;
