import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { context } from '../../context';
import VideoSnippet from '../VideoSnippet';
import './Body.css';
function Body() {
  const { videos } = useContext(context);
  console.log('videos ', videos);
  return (
    <main className='body'>
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
      <Switch>
        <Route path='video/:videoId'></Route>
      </Switch>
    </main>
  );
}

export default Body;
