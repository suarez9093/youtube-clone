import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarOption Icon={HomeIcon} title='Home' />
      <SidebarOption Icon={HomeIcon} title='Explore' />
      <SidebarOption Icon={HomeIcon} title='Subscriptions' />
      <hr />
      <SidebarOption Icon={HomeIcon} title='Library' />
      <SidebarOption Icon={HomeIcon} title='History' />
      <SidebarOption Icon={HomeIcon} title='Watch Later' />
      <SidebarOption Icon={HomeIcon} title='Liked Videos' />
      <hr />
      <h4>Subscriptions</h4>
      <SidebarOption Icon={HomeIcon} title='Clever Programmer' />
      <SidebarOption Icon={HomeIcon} title='Browse Channels' />
      <hr />
      <h4>More from youtube</h4>
      <SidebarOption Icon={HomeIcon} title='YouTube Premium' />
      <SidebarOption Icon={HomeIcon} title='Movies & Shows' />
      <SidebarOption Icon={HomeIcon} title='Gaming' />
      <SidebarOption Icon={HomeIcon} title='Live' />
      <SidebarOption Icon={HomeIcon} title='Fashio & Beauty' />
      <SidebarOption Icon={HomeIcon} title='Learning' />
      <SidebarOption Icon={HomeIcon} title='Sports' />
      <hr />
      <SidebarOption Icon={HomeIcon} title='Settings' />
      <SidebarOption Icon={HomeIcon} title='Report History' />
      <SidebarOption Icon={HomeIcon} title='Help' />
      <SidebarOption Icon={HomeIcon} title='Send Feedback' />
    </div>
  );
}

export default Sidebar;
