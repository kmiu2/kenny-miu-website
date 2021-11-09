import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { ReactComponent as GitHubIcon } from "../assets/github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";

export default function Social(props: { fill?: string }) {
  const { fill } = props;

  return (
    <ButtonToolbar style={{ filter: "grayscale(25%)" }}>
      <Button
        variant="outline-link"
        href="https://www.github.com/kmiu2/"
        target={"_blank"}
      >
        <GitHubIcon fill={fill ?? "white"} width="30" height="30" />
      </Button>
      <Button
        variant="outline-link"
        href="https://www.linkedin.com/in/kennymiu/"
        target={"_blank"}
      >
        <LinkedInIcon fill={fill ?? "white"} width="30" height="30" />
      </Button>
    </ButtonToolbar>
  );
}
