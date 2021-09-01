import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [state, setState] = useState("is not live")

  useEffect(() => {

      const fetchData = async () => {
        const result = await axios("http://localhost:8000/test");
        setState(result.data);
      };

      fetchData();
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          PADELBRO - {state}
        </p>
      </header>
    </div>
  );
}

export default App;
