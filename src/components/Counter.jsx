import React, { useState } from "react";

function Counter() {
  const [angka, setAngka] = useState(0);
  return (
    <>
      <h1>{angka}</h1>
      <button className="btn btn-primary">INC</button>
    </>
  );
}

export default Counter;
