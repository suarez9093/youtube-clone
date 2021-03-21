import React from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <>
      <Header />
      <div className='app'>
        <Sidebar />
        <Body />
      </div>
    </>
  );
}

export default App;
