import Container from "react-bootstrap/Container";
import carImg from "../../assets/showcase/car.png";
import circuitImg from "../../assets/showcase/circuit.jpg";
import doggoImg from "../../assets/showcase/doggo.jpg";
import electroplateImg from "../../assets/showcase/electroplate.jpg";
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
        "During my free time, I like to explore my creative side like drawing art. For example, this is my drawing of a cute dog. All my other art can be found on instagram.",
      ],
    },
    {
      img: nanoSweaterImg,
      title: "Nano Sweater Design",
      subtitle: "Procreate",
      description: [
        "Our engineering cohort wanted sweaters for our year. After winning an anonymous design contest, my design was chosen to be the back logo for all of our sweaters.",
      ],
    },
    {
      img: carImg,
      link: "/car.zip",
      linkText: "Download",
      title: "Soapbox Car",
      subtitle: "SolidWorks",
      description: [
        "With a team of 4 people other, I designed a fully functioning soapbox car. Since at this time, the Cybertruck car recently came out, we modelled the car after its peculiar design.",
      ],
    },
    {
      img: trampolineImg,
      link: "/trampoline.zip",
      linkText: "Download",
      title: "Trampoline",
      subtitle: "SolidWorks",
      description: [
        "A challenge I was given was to design a trampoline that was targeted for children. By adding walls and as well creating a large mat for the trampoline, this design ensures that any child playing in this trampoline would be safe.",
      ],
    },
    {
      img: circuitImg,
      title: "Soldering",
      description: [
        "Using the few parts given, I soldered these two LEDs, resistor and switch in series.",
      ],
    },
    {
      img: electroplateImg,
      title: "Electroplating",
      description: [
        "Using a copper (II) nitrate solution and galvanized steel, I plated this Pikachu design onto the galvanized steel plate with copper.",
      ],
    },
  ];

  return (
    <Container fluid="xl">
      <Section parts={parts} />
    </Container>
  );
}
