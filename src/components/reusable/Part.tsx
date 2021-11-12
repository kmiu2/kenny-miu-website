import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import NavLink from "react-bootstrap/NavLink";
import "./Part.css";

export interface IPart {
  date?: string;
  description: string[];
  img: string;
  link?: string;
  linkText?: string;
  location?: string;
  spotlight?: boolean;
  subtitle?: string;
  title: string;
}

export function Part(props: { part: IPart }) {
  const {
    date,
    description,
    img,
    link,
    linkText,
    location,
    spotlight,
    subtitle,
    title,
  } = props.part;

  const renderDescription = (description: string[]) => {
    return description.map((text) => (
      <div className="descriptionText" key={text}>
        {text}
      </div>
    ));
  };

  return (
    <Jumbotron className="partWrapper">
      {date && <div className="dateText">{date}</div>}
      <div className="titleText">
        <NavLink
          className={link ? "partLink" : "partLink inactive"}
          href={link}
          target="_blank"
        >
          {title}
        </NavLink>
      </div>
      {location && <div className="locationText">{location}</div>}
      <Image
        className={spotlight ? "image spotlight" : "image"}
        src={img}
        alt={title}
      />
      {subtitle && <div className="subtitleText">{subtitle}</div>}
      {renderDescription(description)}
      {link && (
        <Button className="partButton" href={link} target="_blank">
          {linkText ?? "Website"}
        </Button>
      )}
    </Jumbotron>
  );
}
