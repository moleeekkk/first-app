import { useEffect, useState } from "react";

export default function Effect_Hook() {
  const [count, setcount] = useState(0);
  const [stock, setstock] = useState(20);

  function display() {
    console.log("Display()");
  }

  useEffect(() => {
    display();
  }, [count]);
  return (
    <>
      <button onClick={() => setcount(count + 1)}>{count}</button>
      <button onClick={() => setstock(stock - 1)}>Stock</button>
      <p>Stock : {stock}</p>
    </>
  );
}
