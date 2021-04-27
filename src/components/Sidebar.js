import Button from 'react-bootstrap/Button';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Social from './Social';

export default function Sidebar(props) {
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;

      // Need to do it like this to prevent constant setStates
      if(currentPosition > 900)
        setShouldShowShadow(true);
      else
        setShouldShowShadow(false)
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [shouldShowShadow]);
  
  const SidebarData = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Work Experience',
      path: '/work-experience',
    },
    {
      title: 'Projects',
      path: '/projects',
    },
    {
      title: 'Education',
      path: '/education',
    },
    {
      title: 'Showcase',
      path: '/showcase',
    },
  ];

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <Button 
        className="menu-button"
        onClick={showSidebar} 
        style={{boxShadow: shouldShowShadow ? "3px 3px 3px 3px #ccc" : null }}
      >
        <AiOutlineMenu style={{verticalAlign: "text-top", paddingTop: "3px"}}/> Menu
      </Button>
      <div 
        className={sidebar ? 'nav-overlay active' : 'nav-overlay'}
        style={{pointerEvents: sidebar ? "auto" : "none"}}
        onClick={showSidebar}
      />
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <AiOutlineClose size={22}/>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className="nav-text">
                <NavLink to={item.path}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
          <li className='navbar-toggle'>
            <Social />
          </li>
        </ul>
      </nav>
    </div>
  );
}