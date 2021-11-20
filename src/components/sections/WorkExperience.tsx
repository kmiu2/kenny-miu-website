import Container from "react-bootstrap/Container";
import firstRoboticsImg from "../../assets/workExperience/first_robotics.png";
import honeybeeLogoImg from "../../assets/workExperience/honeybee.svg";
import markhamImg from "../../assets/workExperience/markham.png";
import polarImg from "../../assets/workExperience/polar.png";
import { IPart } from "../reusable/Part";
import { Section } from "../reusable/Section";

export function WorkExperience() {
  const parts: IPart[] = [
    {
      date: "Sep 2021 - Dec 2021",
      img: polarImg,
      link: "https://polar.me/",
      title: "Full Stack Developer",
      location: "Toronto, Canada",
      subtitle: "React, Redux, JavaScript, Python, Django, Jest",
      description: [
        "Polar is a creative advertising technology company which works with hundreds of publishers in 20+ countries. Publishers use Polar to promote their direct-sold branded content on-site through native ad formats. Over 2,500 publisher sites have delivered over 100 billion direct-sold native ads using Polar over the past several years.",
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
        "With a team of five, we developed many key features for Honeybee such as a data collection system, a referral system, a recommendation system, and a rewards system. I personally lead our team in implementing the profile data collection system by creating the data structures and function definitions as well as coordinating with the UI/UX team.",
        "In addition, the referral system we implemented brought great success as both the number of requests to join studies and study completion rates rose significantly since it was implemented. Another project I worked on during this coop was creating a domain for the recommendation endpoints by using with GCP, Kubernetes, Docker and other DevOp tools.",
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
        "Having previously used survey builders like Google Forms and Qualtrics, developing and testing one from scratch was a fairly straightforward process as there was an industry standard for validations, checks, and question types.",
        "After creating the React front end, I developed all the APIs necessary for a survey builder to function, such as GET, EDIT, and DELETE functions. The final part in the flow was to developer the survey responder page and ensuring the entire flow from start to finish was linked.",
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
        "Having experience from previous competitions, I led my team to victory at a local tournament. Despite being the youngest team at the competition, I was still able to guide my team of 9-11 y/o students to success. By completing most of the missions in the HYDRODYNAMICS challenge, we earned nearly all the possible points with time to spare.",
        "Since this was a year long process, the team's dynamic changed quite frequently as at that age, small disagreements and struggles can be magnified. Young students may also be shy in asking for help even when they need it. To counter this, I spent extra time before and after meetups talking to every student to get to know them and build trust. Overtime, even the most quiet student was willing to pull me aside to bring up any issues she had.",
      ],
    },
    {
      date: "Sept 2015 - June 2019",
      img: markhamImg,
      link: "https://www.markham.ca",
      title: "Computer Instructor",
      location: "Markham, Canada",
      subtitle: "NXT Robotics, Java, Python",
      description: [
        "Right from a young age, I aspired to learn more about possibilities technology can bring. By working as a computer instructor, I was able to share my passion for technology, especially about robotics and circuitry, with not just children, but also some adults who attended our classes at community centres.",
        "During those years, I taught a variety of topics ranging from hardware skills such as building robots to software skills such as programming.",
      ],
    },
  ];

  return (
    <Container fluid="xl">
      <Section parts={parts} />
    </Container>
  );
}
