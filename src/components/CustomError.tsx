import { Jumbotron, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import wizImg from "../assets/wizard.png";

export default function CustomError() {
  return (
    <Jumbotron
      style={{
        backgroundColor: "white",
        textAlign: "center",
        height: "100%",
      }}
    >
      <p style={{ fontSize: "1.75rem" }}>Error Page Not Found</p>
      <NavLink to="/">Click here to go home</NavLink>
      <p style={{ padding: 15 }}>Enjoy this wizard I drew in the meanwhile</p>
      <Image
        src={wizImg}
        rounded
        alt="404 wizard"
        style={{
          width: "75%",
          maxWidth: 500,
        }}
      />
    </Jumbotron>
  );
}
