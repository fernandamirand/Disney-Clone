import React from 'react';
import './App.css';
import Header from './components/Header';
import Routers from './routers/Routers';




function App () {
  return (
    <div className='App'>
      <Header/>
      <Routers/>   
    </div>
  );
};

export default App;
