import React, { useState } from 'react';
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

          <p>Theme : {isDark ? 'Dark' : 'Light'}</p>
          <button className="btnSmall" onClick={() => setDark(!isDark)}>change theme</button>
          

          <Parent />

        </div>
      </div>
    </counterContext.Provider>
  );
}

export default App;
