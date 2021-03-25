import AddCircleIcon from '@material-ui/icons/AddCircle';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ExploreIcon from '@material-ui/icons/Explore';
import FeedbackIcon from '@material-ui/icons/Feedback';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import SettingsIcon from '@material-ui/icons/Settings';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import YouTubeIcon from '@material-ui/icons/YouTube';
import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarOption Icon={HomeIcon} title='Home' />
      <SidebarOption Icon={ExploreIcon} title='Explore' />
      <SidebarOption Icon={SubscriptionsIcon} title='Subscriptions' />
      <hr />
      <SidebarOption Icon={VideoLibraryIcon} title='Library' />
      <SidebarOption Icon={HistoryIcon} title='History' />
      <SidebarOption Icon={WatchLaterIcon} title='Watch Later' />
      <SidebarOption Icon={ThumbUpIcon} title='Liked Videos' />
      <hr />
      <h4>Subscriptions</h4>
      <SidebarOption Icon={HomeIcon} title='Clever Programmer' />
      <SidebarOption Icon={AddCircleIcon} title='Browse Channels' />
      <hr />
      <h4>More from youtube</h4>
      <SidebarOption Icon={YouTubeIcon} title='YouTube Premium' />
      <SidebarOption Icon={LocalMoviesIcon} title='Movies & Shows' />
      <SidebarOption Icon={VideogameAssetIcon} title='Gaming' />
      <SidebarOption Icon={LiveTvIcon} title='Live' />
      <SidebarOption Icon={StorefrontIcon} title='Fashion & Beauty' />
      <SidebarOption Icon={EmojiObjectsIcon} title='Learning' />
      <SidebarOption Icon={SportsFootballIcon} title='Sports' />
      <hr />
      <SidebarOption Icon={SettingsIcon} title='Settings' />
      <SidebarOption Icon={FlagIcon} title='Report History' />
      <SidebarOption Icon={HelpIcon} title='Help' />
      <SidebarOption Icon={FeedbackIcon} title='Send Feedback' />
      <hr />
    </div>
  );
}

export default Sidebar;
