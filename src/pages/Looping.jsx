export default function Looping() {
  const users = ["Maulik", "Moleeekkk", "MD"];
  const student = [
    { id: 101, name: "Maulik", age: 21 },
    { id: 102, name: "Manish", age: 22 },
    { id: 103, name: "Devji", age: 23 },
    { id: 104, name: "Shivam", age: 24 },
  ];
  return (
    <>
      <h1>Array Looping</h1>
      <ol>
        {users.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ol>

      <h1>Array of Onject Looping</h1>
      <table style={{ width: "50%" }}>
        <thead>
          <tr style={{ backgroundColor: "#f99837", height: "40px" }}>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {student.map((elem) => (
            <tr
              key={elem.id}
              style={{
                height: "40px",
                backgroundColor: "#ffd7b0",
              }}
            >
              <td>{elem.id}</td>
              <td>{elem.name}</td>
              <td>{elem.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
