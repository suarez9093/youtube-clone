import React, { useState } from 'react';
const context = React.createContext();

function ContextProvider({ children }) {
  const [videos, setVideos] = useState(null);
  const [mainVideo, setMainVideo] = useState(null);
  return (
    <context.Provider value={(setMainVideo, mainVideo, setVideos, videos)}>
      {children}
    </context.Provider>
  );
}
export { ContextProvider, context };
