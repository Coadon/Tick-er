import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(Math.random());
  }, []);

  return (
    <>
      <div className="text-7xl mb-24">{time}</div>
      <button
        className="text-3xl bg-green-100/10"
        onClick={() => {
          setTime(Math.random());
        }}
      >
        Start
      </button>
    </>
  );
}

export default App;
