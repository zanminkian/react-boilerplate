import { useState } from "react";

export function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="border border-solid border-black bg-red-100 p-1 text-center text-base">
      <div className="hover:text-lg">hello world: {num}</div>
      <button className="d-btn border-black" onClick={() => setNum(num + 1)}>
        Click me
      </button>
    </div>
  );
}
