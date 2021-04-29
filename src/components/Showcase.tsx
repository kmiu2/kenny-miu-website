import Container from 'react-bootstrap/Container';
import carImg from "../assets/car.png";
import circuitImg from "../assets/circuit.jpg";
import electroplateImg from "../assets/electroplate.jpg";
import trampolineImg from "../assets/trampoline.png";
import Section from './Section';

export default function Showcase(props: any) {
  const parts = [
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
