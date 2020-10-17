import React from 'react';
import './App.css';
import Header from './Header';
import Display from './Display';
import Options from './Options';

function App() {
  return (
   
    <div className="App">
       <div className="Header">
 <Header />
    </div>
     <div className="app_body">
     <Options />
     <br />
     <Display />
     </div>
    </div>
  );
}

export default App;
