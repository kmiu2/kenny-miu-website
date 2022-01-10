import reactImg from "../../assets/projects/react.svg";
import swImg from "../../assets/projects/sw.png";
import xcodeImg from "../../assets/projects/xcode.png";
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
      subtitle: "Swift, Objective-C, XCode, Firebase Database",
      description: [
        "Starting from zero knowledge of Swift and app development, I self-taught myself all knowledge required to create, launch, and maintain a successful app.",
        "To properly support the entire school, we had to ensure both the Android and iOS apps maintained the same UI and functionality. Using the Agile approach to development, I was able to coordinate with the team and our principal to ensure the app was a success. Through mediums like Slack and polling the student body, our team cooperated and fulfilled the requests of our entire school.",
      ],
    },
    {
      img: reactImg,
      title: "React Website",
      link: "https://github.com/kmiu2/kenny-miu-website",
      linkText: "View Code",
      subtitle: "Typescript, ReactJS, CSS",
      description: [
        "Using React, I was able to create a quick and responsive website. By using React Router and the SPA architecture, my site is able to instantly switch between sub pages.",
        "This website is also mobile snd dark mode friendly! It will change and show a sidebar whenever the width hits a certain threshold. The dark mode toggle will use the device's theme at first, but can be toggled to show light/dark themes on all subsequent visits.",
      ],
    },
    {
      img: swImg,
      title: "SolidWorks Projects",
      subtitle: "SolidWorks",
      description: [
        "By using SolidWorks, a 3D Modelling Software, I created a variety of parts and assemblies. From designing simple chairs to fully functioning soapbox cars, I worked through a variety of challenges and became proficient with 3D modelling software.",
        "When creating assemblies, I used the physical dynamics function of SolidWorks to simulate real life scenarios and account for stress, friction, and similar dynamics.",
      ],
    },
  ];

  return <Section parts={parts} />;
}
