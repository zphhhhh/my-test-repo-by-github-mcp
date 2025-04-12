import React, { useState } from 'react';
import './styles/App.css';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Rspack + React Demo</h1>
        <p>Edit <code>src/App.tsx</code> and save to reload</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p className="read-the-docs">
          Click on the Rspack and React logos to learn more
        </p>
      </header>
    </div>
  );
};

export default App;