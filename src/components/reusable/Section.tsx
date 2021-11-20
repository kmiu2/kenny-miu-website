import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useMediaQuery } from "react-responsive";
import { IPart, Part } from "./Part";
import "./Section.css";

export function Section(props: { parts: IPart[] }) {
  const { parts } = props;
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const renderRows = (parts: IPart[]) => {
    const rows: any[] = [];
    let index = 0;

    while (index < parts.length) {
      const part = parts[index];
      const nextPart = parts[index + 1];
      const columnsPerRow = isMobile || part.spotlight ? 1 : 2;
      const isLastRow = index >= parts.length - columnsPerRow;

      if (columnsPerRow === 1) {
        rows.push(
          <Row key={index} noGutters>
            <Col className={isLastRow ? "colRight bottom" : "colRight"}>
              <Part part={part} />
            </Col>
          </Row>
        );
      } else {
        const isLastRow = index >= parts.length - 2;
        rows.push(
          <Row key={index} noGutters>
            <Col className={isLastRow ? "colLeft bottom" : "colLeft"}>
              <Part part={part} />
            </Col>
            <Col className={isLastRow ? "colRight bottom" : "colRight"}>
              {nextPart && <Part part={nextPart} />}
            </Col>
          </Row>
        );
      }
      index += columnsPerRow;
    }

    return rows;
  };

  return (
    <Container className="sectionWrapper" fluid="xl">
      {renderRows(parts)}
    </Container>
  );
}
