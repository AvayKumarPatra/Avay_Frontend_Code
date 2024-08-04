import React, { useEffect, useState } from "react";

export const UseEffet2 = () => {
//   const [state, setState] = useState();
//   useEffect(() => {
//     const intevalId = setInterval(() => {
//       setState((prev) => prev_1);
//     }, 1000);
//     return () => {
//       clearInterval(intevalId);
//       console.log("cleanup complete");
//     };
//   }, []);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
