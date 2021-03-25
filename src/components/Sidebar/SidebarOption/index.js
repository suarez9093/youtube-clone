import React from 'react';
import { useHistory } from 'react-router-dom';
import './SidebarOption.css';

function SidebarOption({ Icon, title }) {
  const history = useHistory();

  return (
    <div className='sidebarOption'>
      {Icon ? (
        <div>
          <Icon className='sidebarOption__icon' />
          <p>{title}</p>
        </div>
      ) : null}
    </div>
  );
}

export default SidebarOption;
