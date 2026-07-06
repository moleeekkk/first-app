import "./Login.css";
import { useState } from "react";
// import key from "./Authentication";
// import submitData from "./Authentication";

// let isLoggedIn = "Not Login";
// console.log("Login status = ", isLoggedIn);

export default function Login() {
  const [loginStatus, isLoggedIn] = useState("Not Logged In");
  console.log("Login status = ", loginStatus);
  const submitData = () => {
    isLoggedIn("Logged in");
    console.log("Login status = ", loginStatus);
  };

  return (
    <>
      <div className="box-cont">
        <div class="login-box">
          <h2 style={{ color: "green", textDecoration: "underline" }}>Login</h2>

          <form>
            <label>Username</label>
            <input type="text" placeholder="Enter Username" />

            <label>Password</label>
            <input type="password" placeholder="Enter Password" />

            <button type="button" onClick={submitData}>
              Login
            </button>
            <span>Is Logged In : {loginStatus}</span>
          </form>
        </div>
      </div>
    </>
  );
}
