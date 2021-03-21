import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const context = React.createContext();
function ContextProvider({ children }) {
  const history = useHistory();
  const [videos, setVideos] = useState(null);
  const [mainVideo, setMainVideo] = useState(null);
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState('');

  function handleSelectedVideoClick(video) {
    console.log('video', video);
    history.push('/video');
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&&maxResults=10&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

    let urlResponse = await fetch(url);
    let data = await urlResponse.json();
    console.log('data ', data);
    setVideos(data.items);
    setQuery('');
  }

  function handleChange(e) {
    console.log(e.target.value);
    setQuery(e.target.value);
  }

  return (
    <context.Provider
      value={{
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
