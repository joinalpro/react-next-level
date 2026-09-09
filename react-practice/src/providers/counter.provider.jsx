import { createContext, useState } from "react";

export const CounterContext = createContext();

export default function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <h1>{children}</h1>
    </CounterContext.Provider>
  );
}
