import Container from 'react-bootstrap/Container';
import carImg from "../assets/car.png";
import circuitImg from "../assets/circuit.jpg";
import electroplateImg from "../assets/electroplate.jpg";
import trampolineImg from "../assets/trampoline.png";
import nanoSweaterImg from "../assets/nano_sweater.jpg";
import doggoImg from "../assets/doggo.jpg";
import Section from './Section';

export default function Showcase(props: any) {
  const parts = [
    {
      spotlight: true,
      img: doggoImg,
      link: 'https://www.linkedin.com/in/kennymiu/',
      linkText: "LinkedIn",
      title: 'Dog Drawing',
      sub: 'Procreate',
      desc: [
        'During my free time, I like to explore my creative side like drawing art. For example, this is my drawing of a cute dog. My drawing of the Quantum Nano Centre is currently my LinkedIn banner and can be found there.'
      ]
    },
    {
      img: nanoSweaterImg,
      title: 'Nano Sweater Design',
      sub: 'Procreate',
      desc: [
        'Our engineering cohort wanted sweaters for our year. After winning an anonymous design contest, my design was chosen to be the back logo for all of our sweaters.'
      ]
    },
    {
      img: carImg,
      link: '/car.zip',
      linkText: "Download",
      title: 'Soapbox Car',
      sub: 'SolidWorks',
      desc: [
        'With a team of 4 people other, I designed a fully functioning soapbox car. Since at this time, the Cybertruck car recently came out, we modelled the car after its peculiar design.'
      ]
    },
    {
      img: trampolineImg,
      link: '/trampoline.zip',
      linkText: "Download",
      title: 'Trampoline',
      sub: 'SolidWorks',
      desc: [
        'A challenge I was given was to design a trampoline that was targeted for children. By adding walls and as well creating a large mat for the trampoline, this design ensures that any child playing in this trampoline would be safe.'
      ]
    },
    {
      img: circuitImg,
      title: 'Soldering',
      desc: [
        'Using the few parts given, I soldered these two LEDs, resistor and switch in series.'
      ]
    },
    {
      img: electroplateImg,
      title: 'Electroplating',
      desc: [
        'Using a copper (II) nitrate solution and galvanized steel, I plated this Pikachu design onto the galvanized steel plate with copper.'
      ]
    }
  ];

  return (
    <Container fluid="xl">
      <Section parts={parts} />
    </Container>
  );
}
