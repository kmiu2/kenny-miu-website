import Container from "react-bootstrap/Container";
import staLogoImg from "../../assets/education/sta_icon.svg";
import uwLogoImg from "../../assets/education/uw_icon.svg";
import { IPart } from "../reusable/Part";
import { Section } from "../reusable/Section";

export function Education() {
  const parts: IPart[] = [
    {
      date: "Sept 2019 - April 2024",
      img: uwLogoImg,
      link: "https://uwaterloo.ca/",
      title: "Nanotechnology Engineer Student",
      location: "University of Waterloo",
      description: [
        "Waterloo goes beyond the classroom, to a place where experience is the teacher. Beyond problems to solutions that address social, technical and economic needs. Beyond the laboratory, to the research that propels industries, organizations and society. Waterloo is at the forefront of innovation and is home to transformational research and inspired learning.",
        "Located in the heart of Canada's technology hub, we are growing a network of global partnerships that will shape the future by working beyond disciplines and building bridges with industry, institutions and communities. Our incredible people and partners take us beyond the lives we're living today, to find solutions to the global challenges that lie ahead. Creating change that goes beyond the status quo and is felt around the world. Waterloo goes beyond—to challenge, connect and propel our world.",
      ],
    },
    {
      date: "Sept 2015 - June 2019",
      img: staLogoImg,
      link: "https://www.ycdsb.ca/stau/",
      title: "ICT SHSM Graduate",
      location: "St. Augustine Catholic High School",
      subtitle: "Honours, Ontario's Scholars, Laptop Program",
      description: [
        "Even though St. Augustine CHS has a short history of only fifteen years, it has earned itself a distinguished reputation in the York Catholic District School Board as a strong academic school, earning high grades in the grade nine EQAO mathematics and the grade ten OSSLT.",
        "St. Augustine CHS prides itself on a strong integration of technology in the school curricula. Our innovative Laptop Learning Program provides a rich opportunity for many of our students to enhance, extend and apply their learning using state of the art laptops in their core subject areas. Our school has many SMARTboards and teachers who integrate their lessons using this technology and others to provide meaningful and engaging learning experiences for our students.",
      ],
    },
  ];

  return (
    <Container fluid="xl">
      <Section parts={parts} />
    </Container>
  );
}
