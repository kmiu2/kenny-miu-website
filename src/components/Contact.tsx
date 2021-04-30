import { Col, Container, Row } from 'react-bootstrap';
import useResponsive from './helpers';
import Social from './social';

export default function Contact(props: any) {
  const isMobile = useResponsive(1224);

  const info = [
    {
      title: "Location",
      value: "Toronto, Canada",
    },
    {
      title: "Phone",
      value: "+1 (647) 863 1337",
      link: "tel: +1 (647) 863 1337"
    },
    {
      title: "Email",
      value: "kennymiu2@gmail.com",
      link: "mailto: kennymiu2@gmail.com"
    },
    {
      title: "Social",
      value: <Social filter="invert(50%) sepia(3%) saturate(8%) hue-rotate(332deg) brightness(92%) contrast(82%)" />,
    },
  ];
  // NOTE: Use https://codepen.io/sosuke/pen/Pjoqqp to get the filter of color #787878 

  const rows = []
  for (let i = 0; i < info.length; i++) {
    rows.push(
      <Row key={i + "row"} noGutters>
        <Col xs={isMobile ? 4 : 2} className="contact-left-col">
          {info[i].title}
        </Col>
        <Col className="contact-right-col">
          {info[i].link != null
            ? <a
              className="contact-link"
              href={info[i].link}
            >{info[i].value}</a>
            : info[i].value
          }
        </Col>
      </Row>
    )
    if (i !== info.length - 1)
      rows.push(<hr key={i + "hr"} />)
  }

  return (
    <div
      style={{
        padding: isMobile ? "30px 0" : "30px",
        backgroundColor: "#e0e0e0"
      }}
    >
      <Container fluid="xl">
        {rows}
      </Container>
    </div>
  );
}
