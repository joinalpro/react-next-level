import "./App.css";
import Counter from "./components/Counter";
import Display from "./components/Display";
import CounterProvider from "./providers/counter.provider";
// import Card from "./components/Card";

function App() {
  return (
    <CounterProvider>
      <Counter />
      <Display />
    </CounterProvider>
  );
}

export default App;
