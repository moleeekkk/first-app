//>>> Props <<<
//1. Old Way
// export default function User(props) {
//   return (
//     <>
//       <h1>User Page</h1>
//       <hr />
//       <h3>Name = {props.name}</h3>
//       <h3>Age = {props.age}</h3>
//     </>
//   );
// }

//2. Letest
export default function User({ name, age, hobbies }) {
  return (
    <>
      <h1>User Page</h1>
      <hr />
      <h3>Name = {name}</h3>
      <h3>Age = {age}</h3>
      <h3>Hobbies: </h3>
      <ul>
        {hobbies.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  );
}
