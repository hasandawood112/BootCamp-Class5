import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import counterContext from './CounterContext';

function App() {

  var countState = useState(0);
  let [isDark, setDark] = useState(true);

  return (

    <counterContext.Provider value={countState}>

      <div className="App">
          <div className={`lightTheme ${isDark ? 'darkTheme' : ''}`}>

            <h1>Theme : {isDark ? 'Dark' : 'Light'}</h1>
            <button onClick={() => setDark(!isDark)}>change theme</button>

            <Parent />

          </div>
      </div>
    </counterContext.Provider>
  );
}

export default App;
