import Container from "react-bootstrap/Container";
import carImg from "../../assets/showcase/car.png";
import doggoImg from "../../assets/showcase/doggo.jpg";
import nanoSweaterImg from "../../assets/showcase/nano_sweater.jpg";
import trampolineImg from "../../assets/showcase/trampoline.jpg";
import { IPart } from "../reusable/Part";
import { Section } from "../reusable/Section";

export function Showcase() {
  const parts: IPart[] = [
    {
      spotlight: true,
      img: doggoImg,
      link: "https://www.instagram.com/everlasting_blizzart/",
      linkText: "Instagram Art Account",
      title: "Dog Drawing",
      subtitle: "Procreate",
      description: [
        "During my free time, I like to explore my creative side by drawing. For example, this is my drawing of a cute dog. At first, I drew buildings and landscapes, but lately have moved more to drawing characters and animals. All my other art can be found on instagram.",
      ],
    },
    {
      img: nanoSweaterImg,
      title: "Nano Sweater Design",
      subtitle: "Procreate",
      description: [
        "Our engineering cohort wanted sweaters to commemorate year. After winning an anonymous design contest, my design was chosen to be the back logo for all of our sweaters!",
      ],
    },
    {
      img: carImg,
      link: "/car.zip",
      linkText: "Download",
      title: "Soapbox Car",
      subtitle: "SolidWorks",
      description: [
        "With a team of 4, we designed a fully functioning soapbox car. Since the Cybertruck car recently came out at that time, we modelled the soapbox car after its peculiar design.",
      ],
    },
    {
      img: trampolineImg,
      link: "/trampoline.zip",
      linkText: "Download",
      title: "Trampoline",
      subtitle: "SolidWorks",
      description: [
        "I was challenged to design a trampoline appropriate for children. By adding walls and as well a large mat for the trampoline, this design ensures that any child playing on this trampoline would be safe while having fun.",
      ],
    },
  ];

  return (
    <Container fluid="xl">
      <Section parts={parts} />
    </Container>
  );
}
