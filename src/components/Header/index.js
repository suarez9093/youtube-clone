import MenuIcon from '@material-ui/icons/Menu';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './Header.css';
import youtubeImage from './img/youtube.png';
function Header() {
  return (
    <header className='header'>
      <div className='header__left'>
        <MenuIcon />
        <img loading='lazy' src={youtubeImage} alt='' />
      </div>
      <div className='header__center'>
        <form>
          <input type='search' placeholder='Search' />
          <div className='header__center__searchIconContainer'>
            <SearchIcon />
          </div>
          <button type='submit'>Submit</button>
        </form>

        <MicIcon />
      </div>
      <div className='header__right'>
        {/* icons */}
        {/* Avatar */}
      </div>
    </header>
  );
}

export default Header;
