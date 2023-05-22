import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <header className="App-header">
        Hello word
      </header> */}
      {count}
      <button id='test-btn' onClick={() => setCount(++count)}>Click me</button>
    </div>
  );
}

export default App;
