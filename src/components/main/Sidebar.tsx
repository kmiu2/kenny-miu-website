import { useState } from 'react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { urlLinks } from '../../App'
import { Social } from './Social'
import './Sidebar.css'

export function Sidebar(props: { theme: string; setTheme: any }) {
  const { theme, setTheme } = props
  const isDark = theme === 'dark'
  const [open, setOpen] = useState(false)

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')
  const closeMenu = () => setOpen(false)

  return (
    <>
      {/* Single sticky wrapper — bar + dropdown move together */}
      <div className="mobileNavWrapper">
        <nav className="mobileTopNav" aria-label="Main navigation">
          <button
            className="mobileHamburger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

          <div className="mobileNavSpacer" />

          <div className="mobileNavRight">
            <Social
              fillColour={
                isDark ? 'rgba(255,255,255,0.7)' : 'rgba(35,39,66,0.65)'
              }
            />
            <button
              className="mobileThemeBtn"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              {isDark ? (
                <FiSun size={18} strokeWidth={2} />
              ) : (
                <FiMoon size={18} strokeWidth={2} />
              )}
            </button>
          </div>
        </nav>

        {/* Dropdown sits inside the sticky wrapper — no fixed positioning needed */}
        <div className={open ? 'mobileDropdown open' : 'mobileDropdown'}>
          {urlLinks.map((link) => (
            <NavLink
              key={link.path}
              className={({ isActive }) =>
                isActive ? 'mobileDropLink active' : 'mobileDropLink'
              }
              to={link.path}
              onClick={closeMenu}
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Backdrop rendered outside wrapper so it covers the whole page */}
      {open && (
        <div
          className="mobileNavBackdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  )
}
