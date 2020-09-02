import React from 'react';
import { Link, Route, Switch} from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import ListGroup from 'react-bootstrap/ListGroup'

import Home from './components/Home'
import Social from './components/Social'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import Projects from './components/Projects'
import Showcase from './components/Showcase';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />

        <div className="px-3">
        <Navbar bg="dark" variant="dark" style={{
          padding: '10px',
          borderRadius: '5px',
        }} expand="lg">
          <Navbar.Brand>
            <Link className="nav-link" to="/" style={{color: '#fff'}}>
              <img src={require('./assets/icon.png')} width="30" height="30" className="d-inline-block align-top" alt="" />
              {' Kenny Miu'}
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link className="nav-link" to="/work-experience">Work Experience</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/projects">Projects</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/education">Education</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link" to="/showcase">Showcase</Link>
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Social />
          </Navbar.Collapse>
        </Navbar>
        </div>
        <br />
        <div>
          <Switch>
            <Route path="/" component={WorkExperience} exact/>
            <Route path="/work-experience" component={WorkExperience} />
            <Route path="/education" component={Education} />
            <Route path="/projects" component={Projects} />
            <Route path="/showcase" component={Showcase} />
          </Switch>
        </div>
        <br />
        <div className="px-3">
        <ListGroup style={{
          fontSize: '1.2rem'
        }}>
          <ListGroup.Item variant="secondary">Address: Toronto, Canada</ListGroup.Item>
          <ListGroup.Item variant="secondary">Phone: +1 (647) 863 1337</ListGroup.Item>
          <ListGroup.Item variant="secondary">Email: kennymiu2@gmail.com</ListGroup.Item>
          <ListGroup.Item variant="secondary">Social: <Social /></ListGroup.Item>
        </ListGroup>
        </div>
      </div>
    );
  }
}

export default App;
