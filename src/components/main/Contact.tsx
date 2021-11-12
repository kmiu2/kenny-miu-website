import { Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "./Contact.css";
import { Social } from "./Social";

interface IContactInfo {
  text: string;
  value: any;
  link?: string;
}

export function Contact() {
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const contactInfo: IContactInfo[] = [
    {
      text: "Location",
      value: "Toronto, Canada",
    },
    {
      text: "Phone",
      value: "+1 (647) 863 1337",
      link: "tel: +1 (647) 863 1337",
    },
    {
      text: "Email",
      value: "kennymiu2@gmail.com",
      link: "mailto: kennymiu2@gmail.com",
    },
    {
      text: "Social",
      value: <Social fillColour="#787878" />,
    },
  ];

  const renderRows = (contactInfo: IContactInfo[]) => {
    return contactInfo.map((info, index) => (
      <div key={info.text}>
        <Row noGutters>
          <Col className="contactLeftCol" xs={isMobile ? 4 : 2}>
            {info.text}
          </Col>
          <Col className="contactRightCol">
            {info.link != null ? (
              <a className="contactLink" href={info.link}>
                {info.value}
              </a>
            ) : (
              info.value
            )}
          </Col>
        </Row>
        {index !== contactInfo.length - 1 && <hr />}
      </div>
    ));
  };

  return (
    <div className="contactWrapper">
      <Container fluid="xl">{renderRows(contactInfo)}</Container>
    </div>
  );
}
