import { useRef, useState } from "react";
import "./Registration.css";

export default function Registration() {
  const [Name, setName] = useState("");
  const Age = useRef(null);
  const Email = useRef(null);
  const [Password, setPassword] = useState("");

  const [FinalName, setFinalName] = useState("");
  const [FinalAge, setFinalAge] = useState(null);
  const [FinalEmail, setFinalEmail] = useState(null);
  const [FinalPassword, setFinalPassword] = useState(null);

  function handle(e) {
    e.preventDefault();

    setFinalName(Name);
    setFinalAge(Age);
    setFinalEmail(Email);
    setFinalPassword(Password);

    alert("Form Submitted...");
    // alert("Name : " + Fullname);
    // alert("Age : " + ageRef.current.value);
  }
  return (
    <>
      <div className="register-container">
        <form className="register-form" onSubmit={handle}>
          <h2>Registration Form</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
              console.log(e.target.value);
            }}
          />
          <input type="number" placeholder="Age" min="1" ref={Age} />
          <input type="email" placeholder="Email Address" ref={Email} />
          <input
            type="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(e.target.value);
            }}
          />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
          <div className="display">
            <p>Name : {FinalName}</p>
            <p>Age : {FinalAge}</p>
            <p>Email : {FinalEmail}</p>
            <p>Password : {FinalPassword}</p>
          </div>
        </form>
      </div>
    </>
  );
}
