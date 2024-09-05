"use client";
import { useState } from "react";

const Counter_0 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex flex-col text-center text-black">
      <h1 className="font-bold text-2xl border-green-500 border-4 mb-5 bg-white">
        Counter : {counter}
      </h1>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn-primary bg-green-500 p-2"
      >
        Increase
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        className=" bg-red-500 p-2"
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter_0;
