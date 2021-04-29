import Contact from './components/Contact';
import Education from './components/Education'
import Home from './components/Home'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Projects from './components/Projects'
import React from 'react';
import Showcase from './components/Showcase';
import Sidebar from './components/Sidebar';
import Social from './components/Social'
import WorkExperience from './components/WorkExperience'
import { NavLink, Route, Switch, useLocation } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';

export default function App(props: any) {
  let location = useLocation();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div>
      <Home />
      {!isTabletOrMobile && 
        <div style={{ padding: "0 7.5%" }}>
          <Navbar variant="dark" expand="lg" className="home-nav">
            <Nav>
              <Nav.Link>
                <NavLink className="nav-link" to="/work-experience">Work Experience</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="nav-link" to="/projects">Projects</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="nav-link" to="/education">Education</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className="nav-link" to="/showcase">Showcase</NavLink>
              </Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
              <Social />
            </Navbar.Collapse>
          </Navbar>
        </div>
      }
      <div style={{
        padding: isTabletOrMobile
          ? "0"
          : "0 7.5%"
      }}>
        <Switch location={location}>
          <Route path="/" component={WorkExperience} exact />
          <Route path="/work-experience" component={WorkExperience} />
          <Route path="/education" component={Education} />
          <Route path="/projects" component={Projects} />
          <Route path="/showcase" component={Showcase} />
        </Switch>
        <Contact />
      </div>
      {isTabletOrMobile && <Sidebar />}
    </div>
  );
}
