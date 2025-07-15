import React from "react";
import PakaiRef from "./PakaiRef";
import PakaiUseRefFokus from "./PakaiUseRefFokus";
import useCounterStore from "./GlobalState";
import CounterUseGlobalState from "./CounterUseGlobalState";

const App = () => {
  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  const reset = useCounterStore((state) => state.reset);
  return (
    <>
      <h1>Selamat Datang di Aplikasi React</h1>
      <PakaiRef />
      <PakaiUseRefFokus />
      <CounterUseGlobalState />
      <h1>Counter Global State dari APP:</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <div>Nilai count dari APP: {count}</div>
    </>
  );
};
export default App;
