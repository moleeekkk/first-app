import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

export default function Effect_Hook() {
  const [count, setcount] = useState(0);
  const [stock, setstock] = useState(20);

  function mount() {
    console.log("Mount phase");
  }

  function unmount() {
    console.log("Unmount phase");
  }

  //when component is mounting
  useEffect(() => {
    mount();
  }, []);

  //when component is unmounting
  useEffect(() => {
    return () => {
      unmount();
    };
  }, []);

  // useEffect(() => {
  //   display();
  // }, [count]);
  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          setcount(count + 1);
        }}
      >
        {count}
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          setstock(stock - 1);
        }}
      >
        {stock}
      </Button>
    </>
  );
}
