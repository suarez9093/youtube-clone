import { Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import MicIcon from '@material-ui/icons/Mic';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { context } from '../../context';
import './Header.css';
import youtubeImage from './img/youtube.png';
function Header({ user }) {
  const history = useHistory();
  const { handleSubmit, handleChange, query, setQuery } = useContext(context);

  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <header className='header'>
      <div className='header__left'>
        <MenuIcon />
        <img
          onClick={() => history.push('/')}
          loading='lazy'
          src={youtubeImage}
          alt=''
        />
      </div>
      <div className='header__center'>
        <form onSubmit={handleSubmit}>
          <input
            value={query}
            type='search'
            onChange={handleChange}
            placeholder='Search'
          />
          <div
            onClick={handleSubmit}
            className='header__center__searchIconContainer'
          >
            <SearchIcon fontSize='small' />
          </div>
          <button type='submit'>Submit</button>
        </form>
        <MicIcon />
      </div>
      <div className='header__right'>
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
