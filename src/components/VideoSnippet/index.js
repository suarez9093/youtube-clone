import React from 'react';
import './VideoSnippet.css';
function VideoSnippet({ banner, title, videoId }) {
  const videoURL = `https://www.youtube.com/embed/${videoId}?rel=0`;
  return (
    <div className='videoSnippet'>
      {videoId ? (
        <>
          <iframe
            title={title}
            className='embed-responsive-item'
            src={videoURL}
            allowFullScreen
          ></iframe>
          <h4>{title}</h4>
        </>
      ) : null}
    </div>
  );
}

export default VideoSnippet;
