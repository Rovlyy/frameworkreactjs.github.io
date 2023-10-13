import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg';
import './App.css';

function Header() {
  return (
    <header>
      <h2>Ini Header</h2>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>Ini Footer</p>
    </footer>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Header />
      <h1>Vite + React</h1>
      <Counter />
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <Footer />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
