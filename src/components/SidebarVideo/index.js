import React, { useContext } from 'react';
import { context } from '../../context';
import VideoSnippet from '../VideoSnippet';
import './SidebarVideo.css';

function SidebarVideo() {
  const { videos } = useContext(context);
  return (
    <div className='sidebarVideo'>
      {videos?.map((video, i) => (
        <VideoSnippet
          video={video}
          title={video.snippet.title}
          key={i}
          videoId={video.id.videoId}
          banner={video.snippet.thumbnails.default.url}
          channel={video.snippet.channelTitle}
          published={video.snippet.publishedAt}
        />
      ))}
    </div>
  );
}

export default SidebarVideo;
