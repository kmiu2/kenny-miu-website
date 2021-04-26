import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Section from './Section'

export default class Education extends Component {
  render() {
    const parts = [
      {
        date: "Sept 2019 - April 2024",
        img: "uw_icon.svg",
        link: "https://uwaterloo.ca/",
        title: ['Nano', <wbr></wbr>, 'technology Engineer Student'],
        location: "University of Waterloo",
        desc: [
          "Waterloo goes beyond the classroom, to a place where experience is the teacher. Beyond problems to solutions that address social, technical and economic needs. Beyond the laboratory, to the research that propels industries, organizations and society. Waterloo is at the forefront of innovation and is home to transformational research and inspired learning.",
          <br />,
          <br />,
          "Located in the heart of Canada's technology hub, we are growing a network of global partnerships that will shape the future by working beyond disciplines and building bridges with industry, institutions and communities. Our incredible people and partners take us beyond the lives we're living today, to find solutions to the global challenges that lie ahead. Creating change that goes beyond the status quo and is felt around the world. Waterloo goes beyond—to challenge, connect and propel our world."
        ]
      },
      {
        date: "Sept 2015 - June 2019",
        img: 'sta_icon.svg',
        link: 'https://www.ycdsb.ca/stau/',
        title: 'ICT SHSM Graduate',
        location: 'St. Augustine Catholic High School',
        sub: "Honours, Ontario's Scholars, Laptop Program",
        desc: ["Even though St. Augustine CHS has a short history of only fifteen years, it has earned itself a distinguished reputation in the York Catholic District School Board as a strong academic school, earning high grades in the grade nine EQAO mathematics and the grade ten OSSLT.",
          <br />,
          <br />,
          "St. Augustine CHS prides itself on a strong integration of technology in the school curricula. Our innovative Laptop Learning Program provides a rich opportunity for many of our students to enhance, extend and apply their learning using state of the art laptops in their core subject areas. Our school has many SMARTboards and teachers who integrate their lessons using this technology and others to provide meaningful and engaging learning experiences for our students."
        ]
      }
    ];

    return (
      <Container fluid="xl">
        <Section parts={parts}/>
      </Container>
    )
  }
}
