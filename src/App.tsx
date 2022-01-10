import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useMediaQuery } from "react-responsive";
import { NavLink, Route, Switch, useLocation } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import "./App.css";
import { Contact } from "./components/main/Contact";
import { Home } from "./components/main/Home";
import { Sidebar } from "./components/main/Sidebar";
import { ThemeSwitch } from "./components/main/ThemeSwitch";
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
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const renderNavbar = (navLinks: IURLLink[]) => {
    if (isMobile) {
      return null;
    }

    return (
      <div className="desktopPadding">
        <Navbar className="homeNav" variant="dark" expand="lg">
          <Nav>
            {navLinks.map((link: IURLLink) => (
              <NavLink key={link.path} className="navLink" to={link.path}>
                {link.text}
              </NavLink>
            ))}
          </Nav>
          <Navbar.Collapse className="homeNavCollapse">
            <ThemeSwitch theme={theme} setTheme={setTheme} />
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  };

  return (
    <div className="appWrapper" data-theme={theme}>
      <Button className="skipNavigationButton" href="#mainContent">
        Skip Navigation
      </Button>
      <Home />
      {renderNavbar(urlLinks)}
      {isMobile && <Sidebar theme={theme} setTheme={setTheme} />}
      <main id="mainContent">
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
      </main>
    </div>
  );
}
