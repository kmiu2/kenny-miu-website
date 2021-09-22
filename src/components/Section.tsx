import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useMediaQuery } from "react-responsive";
import Part, { IPart } from "./Part";

export default function Section(props: { parts: IPart[] }) {
  const { parts } = props;

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const rows = [];

  if (isTabletOrMobile) {
    for (let i = 0; i < parts.length; i++) {
      rows.push(
        <Row key={i + "row"} noGutters>
          <Col
            key={i + "col"}
            className={i < parts.length - 1 ? "col-right" : "col-right-bottom"}
          >
            <Part key={i + "part"} part={parts[i]} />
          </Col>
        </Row>
      );
    }
  } else {
    for (let i = 0; i < parts.length; i += 2) {
      if (parts[i].spotlight) {
        rows.push(
          <Row key={i + "row"} noGutters>
            <Col className="col-right">
              <Part key={i + "part"} part={parts[i]} />
            </Col>
          </Row>
        );
        i--;
      } else {
        rows.push(
          <Row key={i + "row"} noGutters>
            <Col
              className={i < parts.length - 2 ? "col-left" : "col-left-bottom"}
            >
              <Part key={i + "part"} part={parts[i]} />
            </Col>
            <Col
              className={
                i < parts.length - 2 ? "col-right" : "col-right-bottom"
              }
            >
              {parts[i + 1] && (
                <Part key={i + 1 + "part"} part={parts[i + 1]} />
              )}
            </Col>
          </Row>
        );
      }
    }
  }

  return <Container fluid="xl">{rows}</Container>;
}
