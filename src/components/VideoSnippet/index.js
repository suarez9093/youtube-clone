import React from 'react';
import './VideoSnippet.css';
function VideoSnippet({ banner, title, videoId, channel, published }) {
  const videoURL = `https://www.youtube.com/embed/${videoId}?rel=0`;
  return (
    <div className='videoSnippet'>
      {videoId ? (
        <>
          <iframe title={title} src={videoURL} allowFullScreen></iframe>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{published}</p>
        </>
      ) : null}
    </div>
  );
}

export default VideoSnippet;
