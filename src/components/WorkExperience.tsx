import React from "react";
import Container from "react-bootstrap/Container";
import Section from "./Section";
import firstRoboticsImg from "../assets/first_robotics.jpg";
import honeybeeLogoImg from "../assets/honeybee.svg";
import markhamImg from "../assets/markham.png";
import polarImg from "../assets/polar.png";
import { IPart } from "./Part";

export default function WorkExperience() {
  const parts: IPart[] = [
    {
      date: "Sep 2021 - Dec 2021",
      img: polarImg,
      link: "https://polar.me/",
      title: "Full Stack Developer",
      location: "Toronto, Canada",
      subtitle: "React, JavaScript, Python, Django, MySQL, MongoDB",
      description: [
        "Polar is a creative advertising technology company which works with hundreds of publishers in 20+ countries. Publishers use Polar to promote their direct-sold branded content on-site through native ad formats. Over 2,500 publisher sites have delivered over 100 billion direct-sold native ads using Polar over the past several years.",
      ],
    },
    {
      // spotlight: true,
      date: "Jan 2021 - Apr 2021",
      img: honeybeeLogoImg,
      link: "https://www.honeybeehub.io/",
      title: "DevOps Developer",
      location: "Toronto, Canada",
      subtitle: "Kubernetes, GCP, Python, Flask",
      description: [
        "After learning about the structure of Kubernetes and networking, I implemented a new domain to the Honeybee Hub codebase",
        <br />,
        <br />,
        "From this domain, I developed endpoints with Flask and Python to handle any logic the recommendation engine will need.",
      ],
    },
    {
      date: "Jan 2021 - Apr 2021",
      img: honeybeeLogoImg,
      link: "https://play.google.com/store/apps/details?id=ca.honeybeehub",
      title: "Mobile Developer",
      location: "Toronto, Canada",
      subtitle: "Flutter, Dart, MongoDB, Google Cloud Platform",
      description: [
        "With a team of five, we developed many key new features for Honeybee such as a data collection system, a referral system, a recommendation system, and a rewards system. I personally lead our team in creating the profile data collection system by creating the data structures and function definitions as well as coordinating with the UI/UX team.",
        <br />,
        <br />,
        "In addition, the referral system we implemented greatly succeeded as both requests to join studies and study completions rose significantly ever since it was implemented. One of my first projects to be done during this term was to create the domain required for the recommendation endpoints by working with GCP, Kubernetes, Docker and other DevOp tools.",
      ],
    },
    {
      date: "May 2020 - Aug 2020",
      img: honeybeeLogoImg,
      link: "https://www.honeybeehub.io/",
      title: "Full Stack Developer",
      location: "Toronto, Canada",
      subtitle: "React, NodeJs, Typescript",
      description: [
        "As I have used survey builders such as Google Forms and Qualtrics before, developing one from scratch was fairly straightforward.",
        <br />,
        <br />,
        "After creating the builder page, I developed all the APIs necessary for a survey builder to function and then shortly finished developing the responder page.",
      ],
    },
    {
      date: "Feb 2017 - Nov 2017",
      img: firstRoboticsImg,
      link: "https://www.firstroboticscanada.org/",
      title: "FIRST Robotics Mentor",
      location: "Toronto, Canada",
      subtitle: "LEGO NXT",
      description: [
        "Having experience from previous competitions, I led my team to victory. Despite being the youngest team at the competition, I was still able to guide my team of 9-11 y/o to success, earning nearly all the possible points even available to obtain.",
      ],
    },
    {
      date: "Sept 2015 - June 2019",
      img: markhamImg,
      link: "https://www.markham.ca",
      title: "Computer Instructor",
      location: "Markham, Canada",
      subtitle: "NXT Robotics, Arduino, Java, Python",
      description: [
        "Right from a young age, I aspired to learn more about possibilities technology can bring to people. By working as a computer instructor, I was able to share my passion for technology, especially robotics and circuitry, with not just children of all ages, but also some adults who share that interest I have.",
        <br />,
        <br />,
        "As an instructor for both children and adults, I taught a variety of topics from hardware skills such as robotics and design to software skills such as programming",
      ],
    },
  ];

  return (
    <Container fluid="xl">
      <Section parts={parts} />
    </Container>
  );
}
