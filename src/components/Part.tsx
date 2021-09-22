import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import NavLink from "react-bootstrap/NavLink";

export interface IPart {
  date?: string;
  description: any[];
  img: string;
  link?: string;
  linkText?: string;
  location?: string;
  spotlight?: boolean;
  subtitle?: string;
  title: string;
}

export default function Part(props: { part: IPart }) {
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

  return (
    <Jumbotron
      style={{
        backgroundColor: "transparent",
        textAlign: "center",
        height: "100%",
      }}
    >
      {date ?? (
        <p
          style={{
            fontSize: "1.2rem",
            fontStyle: "italic",
          }}
        >
          {date}
        </p>
      )}
      <NavLink
        className={link != null ? "part-link" : "part-link-inactive"}
        href={link}
        target={"_blank"}
      >
        <h1
          style={{
            fontSize: "2.1rem",
            fontWeight: 350,
            paddingBottom: 15,
          }}
        >
          {title}
        </h1>
      </NavLink>
      {location != null && <h3>{location}</h3>}
      <div style={{ padding: 15 }}>
        <Image
          src={img}
          rounded
          alt={title}
          style={{
            width: "75%",
            maxWidth: spotlight ? 500 : 300,
            paddingBottom: 30,
          }}
        />
      </div>
      {subtitle != null && (
        <h4 style={{ fontWeight: "bold", paddingBottom: 30 }}>{subtitle}</h4>
      )}
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: 200,
          lineHeight: "165%",
        }}
      >
        {description}
      </p>
      {link != null && (
        <Button className="part-button" href={link} target={"_blank"}>
          {linkText ?? "Website"}
        </Button>
      )}
    </Jumbotron>
  );
}
