function btnClicked() {
  alert("Button clicked..");
}

export default function Login() {
  return (
    <>
      <button onClick={btnClicked}>Login</button>
    </>
  );
}
