import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { ReactComponent as GitHubIcon } from "../../assets/social/github.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/social/linkedin.svg";
import "./Social.css";

export function Social(props: { fillColour?: string }) {
  const { fillColour } = props;

  return (
    <ButtonToolbar className="buttonToolbar">
      <Button
        variant="outline-link"
        href="https://www.github.com/kmiu2/"
        target="_blank"
      >
        <GitHubIcon
          className="iconLink"
          fill={fillColour ?? "white"}
          width="30"
          height="30"
        />
      </Button>
      <Button
        variant="outline-link"
        href="https://www.linkedin.com/in/kennymiu/"
        target="_blank"
      >
        <LinkedInIcon
          className="iconLink"
          fill={fillColour ?? "white"}
          width="30"
          height="30"
        />
      </Button>
    </ButtonToolbar>
  );
}