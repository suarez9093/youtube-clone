import React from 'react';
import './SidebarOption.css';
function SidebarOption({ Icon, title }) {
  return (
    <div className='sidebarOption'>
      {Icon ? (
        <div>
          <Icon />
          <p>{title}</p>
        </div>
      ) : null}
    </div>
  );
}

export default SidebarOption;
