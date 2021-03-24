import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const context = React.createContext();
function ContextProvider({ children }) {
  const history = useHistory();
  const [videos, setVideos] = useState(null);
  const [mainVideo, setMainVideo] = useState(null);
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState();
  const [selectedVideo, setSelectedVideo] = useState(null);

  function handleSelectedVideoClick(video) {
    setSelectedVideo(video);
    history.push('/video');
  }
  async function handleSubmit(e) {
    try {
      if (e) {
        e.preventDefault();
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&&maxResults=10&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

        let urlResponse = await fetch(url);
        let data = await urlResponse.json();

        setVideos(data.items);
        setQuery('');
      } else {
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&&maxResults=10&q=${'popular videos'}&key=${
          process.env.REACT_APP_YOUTUBE_API_KEY
        }`;

        let urlResponse = await fetch(url);
        let data = await urlResponse.json();

        setVideos(data.items);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(e) {
    console.log(e.target.value.trim());
    setQuery(e.target.value);
  }

  return (
    <context.Provider
      value={{
        selectedVideo,
        setSelectedVideo,
        handleSelectedVideoClick,
        setMainVideo,
        mainVideo,
        setVideos,
        videos,
        user,
        setUser,
        handleSubmit,
        query,
        setQuery,
        handleChange,
      }}
    >
      {children}
    </context.Provider>
  );
}
export { ContextProvider, context };
