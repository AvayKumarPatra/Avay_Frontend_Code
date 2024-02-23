import { useState } from "react";

export default function ColorTest() {
  const [color, setColor] = useState("grey");
  const handleClick = (newColor) => {
    setColor(newColor);
  };
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <button
          className="bg-black text-white mr-1 hover:bg-violet-600"
          onClick={() => handleClick("black")}
        >
          Black
        </button>
        <button
          className="bg-green-900 text-white mr-1 hover:bg-violet-600"
          onClick={() => handleClick("green")}
        >
          Green
        </button>
        <button
          className="bg-yellow-900 text-white mr-1 hover:bg-violet-600"
          onClick={() => handleClick("yellow")}
        >
          Yellow
        </button>
        <button
          className="bg-blue-900 text-white mr-1 hover:bg-violet-600"
          onClick={() => handleClick("blue")}
        >
          Blue
        </button>
        <button
          className="bg-emerald-300 text-white mr-1 hover:bg-violet-600"
          onClick={() => handleClick("#83EEA7")}
        >
          Emerald
        </button>
        <button
          className="bg-sky-600 text-white hover:bg-violet-600"
          onClick={() => handleClick("#5078C8")}
        >
          Sky
        </button>
      </div>
    </>
  );
}
