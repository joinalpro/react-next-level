import "./Card.css";
import NestedDisplay from "./NestedDisplay";

export default function Display() {
  return (
    <div className="card-blue">
      <p>Child Component</p>
      <NestedDisplay />
    </div>
  );
}
