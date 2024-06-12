import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen space-x-10 text-xl">
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>{count}</p>
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
