import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { urlLinks } from '../../App'
import './Sidebar.css'
import { Social } from './Social'
import { ThemeSwitch } from './ThemeSwitch'

export function Sidebar(props: { theme: string; setTheme: any }) {
  const { theme, setTheme } = props
  const [shouldShowShadow, setShouldShowShadow] = useState(false)

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset > 900) {
        setShouldShowShadow(true)
      } else {
        setShouldShowShadow(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [shouldShowShadow])

  const [sidebarActive, setSidebarActive] = useState(false)
  const toggleSidebar = () => setSidebarActive(!sidebarActive)

  return (
    <div className="sidebarWrapper">
      <Button
        className={shouldShowShadow ? 'menuButton boxShadow' : 'menuButton'}
        onClick={toggleSidebar}
      >
        <AiOutlineMenu className="menuIcon" />
        Menu
      </Button>
      <div
        className={sidebarActive ? 'navOverlay active' : 'navOverlay inactive'}
        onClick={toggleSidebar}
      />
      <div className={sidebarActive ? 'navMenu active' : 'navMenu inactive'}>
        <ul className="navMenuItems" onClick={toggleSidebar}>
          <li className="navbarToggle">
            <AiOutlineClose size={22} />
          </li>
          {urlLinks.map((link) => {
            return (
              <li key={link.path} className="navText">
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            )
          })}
          <li className="navbarToggle">
            <Social />
          </li>
        </ul>
        <ThemeSwitch theme={theme} setTheme={setTheme} />
      </div>
    </div>
  )
}
