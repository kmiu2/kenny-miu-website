import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import bunnyImg from "../../assets/base/bunny.png";
import "./CustomError.css";

export function CustomError() {
  return (
    <div className="customErrorWrapper">
      <div className="errorText">Error Page Not Found</div>
      <NavLink className="errorButton" to="/">
        Click here to go to site home
      </NavLink>
      <div>Enjoy this bunny I drew in the meanwhile</div>
      <Image className="errorImage" src={bunnyImg} alt="404 bunny" />
    </div>
  );
}
