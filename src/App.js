import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Compoment/Counter'
import CounterGroup from './Compoment/CounterGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup />
        {/* <Counter /> */}
      </header>
    </div>
  );
}

export default App;
