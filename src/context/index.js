import React, { useState } from 'react';
const context = React.createContext();

function ContextProvider({ children }) {
  function handleSubmit(e) {
    // e.preventDefault();
    console.log('submit');
  }

  function handleChange(e) {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  }
  const [videos, setVideos] = useState(null);
  const [mainVideo, setMainVideo] = useState(null);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <context.Provider
      value={{
        setMainVideo,
        mainVideo,
        setVideos,
        videos,
        user,
        setUser,
        handleSubmit,
        searchTerm,
        handleChange,
      }}
    >
      {children}
    </context.Provider>
  );
}
export { ContextProvider, context };
