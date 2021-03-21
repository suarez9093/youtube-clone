import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  useEffect(() => {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=dogs&key=AIzaSyB3_qVj6qvToTWoVpoXelHGcayvtTJvcHs'
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return (
    <div className='app'>
      <Header />
    </div>
  );
}

export default App;
