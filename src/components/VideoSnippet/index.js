import React, { useContext } from 'react';
import { context } from '../../context';
import './VideoSnippet.css';
function VideoSnippet({ title, videoId, channel, published, video }) {
  const { handleSelectedVideoClick } = useContext(context);
  const videoURL = `https://www.youtube.com/embed/${videoId}?rel=0`;
  return (
    <div className='videoSnippet'>
      {videoId ? (
        <>
          <iframe title={title} src={videoURL} allowFullScreen></iframe>
          <div
            onClick={() => handleSelectedVideoClick(video)}
            className='videoSnippet__text'
          >
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{published}</p>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default VideoSnippet;
