import "./Login.css";
// import key from "./Authentication";
// import submitData from "./Authentication";

let isLoggedIn = "Not Login";
console.log("Login status = ", isLoggedIn);

const submitData = () => {
  // alert("Key = " + key);
  isLoggedIn = "Login successfull";
  console.log("Login status = ", isLoggedIn);
};

export default function Login() {
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
            {/* <span>Is Logged In : {isLoggedIn}</span> */}
          </form>
        </div>
      </div>
    </>
  );
}
