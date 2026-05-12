import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  
  const add = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  const reset = () => {
    setCount(0);
    setMessage(""); 
  };

  
  const styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#f0f2f5',
      fontFamily: '"Quicksand", sans-serif',
    },
    card: {
      background: 'white',
      padding: '40px',
      borderRadius: '24px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      textAlign: 'center',
      width: '320px'
    },
    countDisplay: {
      fontSize: '4rem',
      margin: '10px 0',
      color: count >= 5 ? '#ff7675' : '#2d3436',
      transition: 'all 0.3s ease'
    },
    btnGroup: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      marginBottom: '20px'
    },
    button: {
      padding: '10px 18px',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: '0.2s',
      background: '#6c5ce7',
      color: 'white'
    },
    input: {
      padding: '12px',
      borderRadius: '10px',
      border: '2px solid #dfe6e9',
      width: '100%',
      outline: 'none',
      boxSizing: 'border-box'
    },
    goal: {
      color: '#00b894',
      fontSize: '1.2rem',
      marginTop: '15px',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={{ fontSize: '1.5rem', color: '#636e72' }}>Counter</h1>
        
        <h2 style={styles.countDisplay}>{count}</h2>

        <div style={styles.btnGroup}>
          <button onClick={add} style={styles.button}>+</button>
          <button onClick={minus} style={styles.button}>-</button>
          <button onClick={reset} style={{...styles.button, background: '#fab1a0'}}>Reset</button>
        </div>

        <input
          type="text"
          placeholder="What's on your mind?"
          style={styles.input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <p style={{ color: '#b2bec3', marginTop: '15px' }}>{message || "..."}</p>

        {count >= 5 && <div style={styles.goal}>✨ You hit 5! Nice! ✨</div>}
      </div>
    </div>
  );
}

export default App;