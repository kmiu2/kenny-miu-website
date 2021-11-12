import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import { useMediaQuery } from "react-responsive";
import meImage from "../../assets/me.jpg";

export function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Jumbotron
      style={{
        backgroundColor: "transparent",
        color: "#fff",
        textAlign: "center",
        paddingBottom: 0,
      }}
    >
      <h1
        style={{
          fontSize: isTabletOrMobile ? "3.7rem" : "4.5rem",
          fontWeight: 900,
          textTransform: "uppercase",
        }}
      >
        Kenny Miu
      </h1>
      <h3
        style={{
          fontSize: isTabletOrMobile ? "1.7rem" : "2rem",
          padding: "2vh 0",
        }}
      >
        Software Developer, Nanotechnology Engineer
      </h3>
      <img
        src={meImage}
        alt="me"
        style={{
          borderRadius: "20px",
          width: "80%",
          maxWidth: 500,
        }}
      />
      <div style={{ marginTop: 25 }} />
      <Button
        className="home-button"
        href="/resume-kenny.pdf"
        target={"_blank"}
      >
        Resume
      </Button>
    </Jumbotron>
  );
}
