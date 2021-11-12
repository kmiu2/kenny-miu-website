import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useMediaQuery } from "react-responsive";
import { NavLink, Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import { Contact } from "./components/main/Contact";
import { Home } from "./components/main/Home";
import { Sidebar } from "./components/main/Sidebar";
import { Social } from "./components/main/Social";
import { CustomError } from "./components/sections/CustomError";
import { Education } from "./components/sections/Education";
import { Projects } from "./components/sections/Projects";
import { Showcase } from "./components/sections/Showcase";
import { WorkExperience } from "./components/sections/WorkExperience";

interface IURLLink {
  text: string;
  path: string;
}

export const urlLinks: IURLLink[] = [
  {
    text: "Work Experience",
    path: "/work-experience",
  },
  {
    text: "Projects",
    path: "/projects",
  },
  {
    text: "Education",
    path: "/education",
  },
  {
    text: "Showcase",
    path: "/showcase",
  },
];

export function App() {
  let location = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const renderNavbar = (navLinks: IURLLink[]) => {
    if (isMobile) {
      return null;
    }

    return (
      <div className="desktopPadding">
        <Navbar className="homeNav" variant="dark" expand="lg">
          <Nav>
            {navLinks.map((link: IURLLink) => (
              <Nav.Link key={link.path}>
                <NavLink className="nav-link" to={link.path}>
                  {link.text}
                </NavLink>
              </Nav.Link>
            ))}
          </Nav>
          <Navbar.Collapse className="homeNavCollapse">
            <Social />
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  };

  return (
    <div>
      <Home />
      {renderNavbar(urlLinks)}
      {isMobile && <Sidebar />}
      <div className={isMobile ? "mobilePadding" : "desktopPadding"}>
        <Switch location={location}>
          <Route path="/" component={WorkExperience} exact />
          <Route path="/work-experience" component={WorkExperience} />
          <Route path="/education" component={Education} />
          <Route path="/projects" component={Projects} />
          <Route path="/showcase" component={Showcase} />
          <Route path="/*" component={CustomError} />
        </Switch>
        <Contact />
      </div>
    </div>
  );
}
