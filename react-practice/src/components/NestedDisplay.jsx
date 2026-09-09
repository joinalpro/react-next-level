import { use } from "react";
import "./Card.css";
import { CounterContext } from "../providers/counter.provider";

export default function NestedDisplay() {
  const { count } = use(CounterContext);

  return (
    <div className="card-orange">
      <h1>{count}</h1>
    </div>
  );
}
