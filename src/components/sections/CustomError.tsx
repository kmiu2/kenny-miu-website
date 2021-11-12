import { Image, Jumbotron } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import wizImg from "../../assets/base/wizard.png";
import { Spacer } from "../reusable/Spacer";
import "./CustomError.css";

export function CustomError() {
  return (
    <Jumbotron className="customErrorWrapper">
      <div className="errorText">Error Page Not Found</div>
      <NavLink className="errorButton" to="/">
        Click here to go home
      </NavLink>
      <Spacer height={15} />
      <div>Enjoy this wizard I drew in the meanwhile</div>
      <Image className="errorImage" src={wizImg} alt="404 wizard" />
    </Jumbotron>
  );
}
