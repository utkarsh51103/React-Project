import React, { useState } from 'react';
import Menulist from './Menulist';

function Menuitem({ item }) {
  const [display, setDisplay] = useState({});

  const handleToggleChildren = (getcurrentlabel) => {
    setDisplay({
      ...display,
      [getcurrentlabel]: !display[getcurrentlabel],
    });
  }

  return (
    <li>
      <div className='flex items-center gap-5 cursor-pointer text-white' >
        <p>{item.label}</p>
        {item.children && item.children.length > 0 ? (
          <span
            onClick={() => handleToggleChildren(item.label)}
          >
            {display[item.label] ? '-' : '+'}
          </span>
        ) : null}
      </div>
      {item.children && item.children.length > 0 && display[item.label] ? (
        <div>
          <Menulist list={item.children} />
        </div>
      ) : null}
    </li>
  );
}

export default Menuitem;
