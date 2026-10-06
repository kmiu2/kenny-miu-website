import { useMediaQuery } from 'react-responsive'
import { useRef } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import './App.css'
import { Contact } from './components/main/Contact'
import { Home } from './components/main/Home'
import { Sidebar } from './components/main/Sidebar'
import { Social } from './components/main/Social'
import { ThemeSwitch } from './components/main/ThemeSwitch'
import { CustomError } from './components/sections/CustomError'
import { Education } from './components/sections/Education'
import { Projects } from './components/sections/Projects'
import { Showcase } from './components/sections/Showcase'
import { WorkExperience } from './components/sections/WorkExperience'
import { useHeroBlobs } from './hooks/useHeroBlobs'

interface IURLLink {
  text: string
  path: string
}

export const urlLinks: IURLLink[] = [
  {
    text: 'Work Experience',
    path: '/work-experience',
  },
  {
    text: 'Projects',
    path: '/projects',
  },
  {
    text: 'Education',
    path: '/education',
  },
  {
    text: 'Showcase',
    path: '/showcase',
  },
]

export function App() {
  const location = useLocation()
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )
  const blobRef = useRef<HTMLDivElement>(null)
  useHeroBlobs(blobRef, theme === 'dark')

  return (
    <div className="appWrapper" data-theme={theme} ref={blobRef}>
      {isMobile && <Sidebar theme={theme} setTheme={setTheme} />}
      <Home />
      {!isMobile && (
        <>
          <nav className="homeNav">
            <div className="desktopNavLinks">
              {urlLinks.map((link) => (
                <NavLink key={link.path} className="navLink" to={link.path}>
                  {link.text}
                </NavLink>
              ))}
            </div>
            <div className="desktopNavRight">
              <Social
                fillColour={
                  theme === 'dark'
                    ? 'rgba(255,255,255,0.65)'
                    : 'rgba(35,39,66,0.6)'
                }
              />
              <ThemeSwitch theme={theme} setTheme={setTheme} />
            </div>
          </nav>
          <main id="mainContent" className="pageContainer">
            <Routes location={location}>
              <Route path="/" element={<WorkExperience />} />
              <Route path="work-experience" element={<WorkExperience />} />
              <Route path="education" element={<Education />} />
              <Route path="projects" element={<Projects />} />
              <Route path="showcase" element={<Showcase />} />
              <Route path="/*" element={<CustomError />} />
            </Routes>
            <Contact />
          </main>
        </>
      )}
      {isMobile && (
        <main id="mainContent">
          <Routes location={location}>
            <Route path="/" element={<WorkExperience />} />
            <Route path="work-experience" element={<WorkExperience />} />
            <Route path="education" element={<Education />} />
            <Route path="projects" element={<Projects />} />
            <Route path="showcase" element={<Showcase />} />
            <Route path="/*" element={<CustomError />} />
          </Routes>
          <Contact />
        </main>
      )}
    </div>
  )
}
