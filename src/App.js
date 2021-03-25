import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import SelectedVideo from './components/SelectedVideo';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <>
      <Header />
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Sidebar />
            <Body />
          </Route>
          <Route exact path='/video'>
            <SelectedVideo />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
