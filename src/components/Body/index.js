import React, { useContext } from 'react';
import { context } from '../../context';
import VideoSnippet from '../VideoSnippet';
import './Body.css';
function Body() {
  const { videos } = useContext(context);
  console.log('videos ', videos);
  return (
    <main className='body'>
      <VideoSnippet />
    </main>
  );
}

export default Body;
