import "./App.css";
import Card from "./components/Card";

const members = [
  { name: "Joinal", age: 39 },
  { name: "Abrar", age: 29 },
  { name: "Nusaiba", age: 25 },
];

function App() {
  return (
    <>
      {/* <Card name="Joinal Abden" age={39} />
      <Card name="Abrar" age={9} /> */}
      {members
        .filter((member) => member.age > 18)
        .sort((a,b)=> a.age - b.age )
        .map((member) => (
          <Card name={member.name} age={member.age} />
        ))}
    </>
  );
}

export default App;
