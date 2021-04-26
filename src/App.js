import Contact from './components/Contact';
import Education from './components/Education'
import Home from './components/Home'
import MediaQuery from 'react-responsive'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Projects from './components/Projects'
import React from 'react';
import Showcase from './components/Showcase';
import Social from './components/Social'
import WorkExperience from './components/WorkExperience'
import { NavLink, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <MediaQuery minDeviceWidth={1224}>
          <div style={{ padding: "0 7.5%" }}>
            <Navbar variant="dark" expand="lg" style={{backgroundColor: "#233f59"}}>
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
            <Switch>
              <Route path="/" component={WorkExperience} exact/>
              <Route path="/work-experience" component={WorkExperience} />
              <Route path="/education" component={Education} />
              <Route path="/projects" component={Projects} />
              <Route path="/showcase" component={Showcase} />
            </Switch>
            <Contact />
          </div>
        </MediaQuery>
        <div style={{ padding: "0 7.5%" }}>
          
        </div>
      </div>
    );
  }
}

export default App;
