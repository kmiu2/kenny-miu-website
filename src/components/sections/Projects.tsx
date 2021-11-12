import Container from "react-bootstrap/Container";
import reactImg from "../../assets/react.svg";
import rpiImg from "../../assets/rpi.png";
import swImg from "../../assets/sw.png";
import xcodeImg from "../../assets/xcode.png";
import { IPart } from "../reusable/Part";
import { Section } from "../reusable/Section";

export function Projects() {
  const parts: IPart[] = [
    {
      spotlight: true,
      date: "Sept 2018 - June 2019",
      img: xcodeImg,
      link: "https://itunes.apple.com/app/id1449888784/",
      title: "iOS App Development",
      location: "St. Augustine Catholic High School",
      subtitle: "Swift, Objective-C, XCode, Firebase",
      description: [
        "Starting from zero knowledge of Swift and app development, I self-taught myself everything required to create a successful app.",
        <br />,
        <br />,
        "In order to properly support the entire school, we had to ensure both the Android and iOS apps have the same UI and functionality. Using the Agile approach to development, I was able to coordinate with the team and our principal to ensure the app was a success. Through mediums like Slack and emailing the student body, our team cooperated and fulfilled the requests of our student body.",
      ],
    },
    {
      img: reactImg,
      title: "React Website",
      link: "https://github.com/kmiu2/kenny-miu-website",
      linkText: "View Code",
      subtitle: "ReactJS, Bootstrap, npm, CSS, HTML",
      description: [
        "Using React, I was able to create several quick and responsive SPAs such as this website. By using React Router and the SPA architecture, this website is able to instantly switch between sub pages.",
        <br />,
        <br />,
        "This website is also mobile friendly! It will change and show a sidebar whenever the width hits a certain threshold.",
      ],
    },
    {
      img: rpiImg,
      title: "Raspberry Pi Projects",
      subtitle: "Raspberry Pi 3",
      description: [
        "During my free time, I worked on several Raspberry Pi Projects. Since I enjoy working with these small single board computers, these projects range from pure entertainment to practical applications",
        <br />,
        <br />,
        "On the entertainment side, my projects include creating digital clocks and daily information displays. For more practical projects, I used the raspberry pi and spare drives to create a NAS.",
      ],
    },
    {
      img: swImg,
      title: "SolidWorks Projects",
      subtitle: "SolidWorks",
      description: [
        "By using SolidWorks, a 3D Modelling Software, I created a variety of parts and assemblies. From designing simple chairs to fully functioning soapbox cars, I worked through a variety of challenges and became proficient with 3D modelling software.",
        <br />,
        <br />,
        "When creating assemblies, I used the physical dynamics function of SolidWorks to simulate real life scenarios and account for stress, friction, and similar dynamics.",
      ],
    },
  ];

  return (
    <Container fluid="xl">
      <Section parts={parts} />
    </Container>
  );
}
