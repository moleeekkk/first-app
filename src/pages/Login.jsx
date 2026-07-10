import "./Login.css";
// import { useState } from "react";
import User from "./User";

// const [Temp, setTemp] = useState("");

export default function Login({ Temp, setTemp, Username, setUsername }) {
  // const [loginStatus, isLoggedIn] = useState("Not Logged In");
  // console.log("Login status = ", loginStatus);
  // const submitData = () => {
  //   isLoggedIn("Logged in");
  // };

  function submitData() {
    setUsername(Temp);
  }
  return (
    <>
      <div className="box-cont">
        {/* <UserProps /> */}
        {/* <h3>Welcome {Username ? Username : "Guest"}</h3> */}
        <LoginDetail Username={Username} />
        <div class="login-box">
          <h2 style={{ color: "green", textDecoration: "underline" }}>Login</h2>

          <form>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              onChange={(e) => setTemp(e.target.value)}
              required
            />

            <label>Password</label>
            <input type="password" placeholder="Enter Password" />

            <button type="button" onClick={submitData}>
              Login
            </button>
            {/* <span>Is Logged In : {loginStatus}</span> */}
          </form>
        </div>
      </div>
    </>
  );
}

export function UserProps() {
  return (
    <>
      <User
        name="Maulik"
        age={21}
        hobbies={["reading", "writing", "singing"]}
      />
    </>
  );
}

export function LoginDetail({ Username }) {
  return (
    <>
      <h3>Welcome, {Username ? Username : "Guest"}</h3>
    </>
  );
}
