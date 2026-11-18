import React, { useState } from "react";

function Counter() {
  const [angka, setAngka] = useState(0);

  const handleincrement = () => {
    setAngka(angka + 1)
  }

  const handleDecrement = () => {
    setAngka (angka - 1)
  }
  return (
    <div>
      <div className="text-6xl font-bold">{angka}</div>
      <button className="btn btn-primary"onClick={handleincrement}
      >Increment
      </button>
      <button className="btn btn-primary" onClick={handleDecrement}>decrement</button>
    </div>
       
    
  );
}

export default Counter;