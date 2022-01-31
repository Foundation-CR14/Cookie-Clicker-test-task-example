import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Count is <span id="cookie-count" >{count}</span>
        </h2>
        <button
          name="cookie-increment"
          rel="noopener noreferrer"
          onClick={() => {
            setCount(oldValue => oldValue + 1)
          }}
        >
          Increment
        </button>
      </header>
    </div>
  );
}

export default App;
