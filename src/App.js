import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  function add() {
    setCount(count + 1);
  }

  function minus() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Counter App</h1>

      <h2>{count}</h2>

      <button onClick={add}>Increase</button>

      <button onClick={minus} style={{ marginLeft: "10px" }}>
        Decrease
      </button>

      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Type message here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <h3>{message}</h3>

      {count >= 5 && <h2>Goal Reached!</h2>}
    </div>
  );
}

export default App;