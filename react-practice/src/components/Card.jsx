import "./Card.css";

// export default function Card({ name, age }) {
//   //   if (age < 18) {
//   //     return <div className="card">You are under age.</div>;
//   //   }
//   return (
//     <>
//       {age > 18 && (
//         <div className="card">
//           <p>First Name: {name}</p>
//           <p>Age: {age}</p>
//         </div>
//       )}
//       {age < 18 && (
//         <div className="card">
//           <p>You are too young</p>
//         </div>
//       )}
//     </>
//   );
// }

export default function Card({ name, age }) {
  //   if (age < 18) {
  //     return <div className="card">You are under age.</div>;
  //   }
  return (
    <>
      {age > 18 ? (
        <div className="card">
          <p>First Name: {name}</p>
          <p>Age: {age}</p>
        </div>
      ) : (
        <div className="card">
          <p>You are too young</p>
        </div>
      )}
    </>
  );
}
