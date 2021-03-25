import React, { useContext } from 'react';
import { context } from '../../context';
import SidebarVideo from '../SidebarVideo';
import './SelectedVideo.css';
function SelectedVideo() {
  const { selectedVideo } = useContext(context);

  const videoURL = `https://www.youtube.com/embed/${selectedVideo.id.videoId}?rel=0`;

  const { title, channelTitle, publishedAt } = selectedVideo.snippet;
  return (
    <div className='selectedVideo'>
      <div className='selectedVideo__videoContainer'>
        <iframe title={title} src={videoURL} allowFullScreen></iframe>
        <div
          // onClick={() => handleSelectedVideoClick(video)}
          className='selectedVideo__text'
        >
          <h4>{title}</h4>
          <p>{channelTitle}</p>
          <p>{publishedAt}</p>
        </div>
      </div>
      {/* <div className='selectedVideo__sidebarContainer'> */}
      <SidebarVideo />
      {/* </div> */}
    </div>
  );
}

export default SelectedVideo;
