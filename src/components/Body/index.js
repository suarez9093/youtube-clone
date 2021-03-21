import React, { useContext } from 'react';
import { context } from '../../context';
import VideoSnippet from '../VideoSnippet';
import './Body.css';
function Body() {
  const { videos } = useContext(context);
  console.log('videos ', videos);
  return (
    <main className='body'>
      <VideoSnippet banner={videos} />
      {videos?.map((video, i) => (
        <VideoSnippet
          title={video.snippet.title}
          key={i}
          videoId={video.id.videoId}
          banner={video.snippet.thumbnails.default.url}
        />
      ))}
    </main>
  );
}

export default Body;
