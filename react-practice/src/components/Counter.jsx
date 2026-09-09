import { use } from "react";
import "./Card.css";
import { CounterContext } from "../providers/counter.provider";

export default function Counter() {
  const { count, setCount } = use(CounterContext);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  //   const handleDecrement = () => {
  //    if(count > 0){
  //      setCount(count - 1);
  //    }
  //   };
  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  const handleIncByValue = (value) => {
    setCount(count + value);
  };

  return (
    <div className="card">
      <h1>Counter</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => handleIncByValue(5)}>Increment by Value</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
