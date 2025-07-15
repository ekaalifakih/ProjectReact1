import useCounterStore from "./GlobalState";
export default function CounterUseGlobalState() {
  const count = useCounterStore((state) => state.count);
  return (
    <>
      <h1>Counter Global State dari CounterUseGlobalState</h1>
      <button onClick={() => useCounterStore.getState().increase()}>Increment</button>
      <button onClick={() => useCounterStore.getState().decrease()}>Decrement</button>
      <button onClick={() => useCounterStore.setState({ count: 0 })}>Reset</button>
      <h2>Nilai Counter : (dari CounterUseGlobalState) {count}</h2>
    </>
  );
}
