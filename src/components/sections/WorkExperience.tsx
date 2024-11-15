import amazonImg from '../../assets/workExperience/amazon.jpg'
import applyboardImg from '../../assets/workExperience/applyboard.png'
import firstRoboticsImg from '../../assets/workExperience/first_robotics.png'
import honeybeeLogoImg from '../../assets/workExperience/honeybee.svg'
import markhamImg from '../../assets/workExperience/markham.png'
import polarImg from '../../assets/workExperience/polar.png'
import smilecdrImg from '../../assets/workExperience/smilecdr.png'
import { IPart } from '../reusable/Part'
import { Section } from '../reusable/Section'

export function WorkExperience() {
  const parts: IPart[] = [
    {
      spotlight: true,
      date: 'Nov 2024 - Present',
      img: amazonImg,
      link: 'https://www.amazon.com',
      title: 'Software Development Engineer',
      location: 'Toronto, Canada',
      subtitle: 'Java, Typescript, Python, CDK, Lambda',
      description: [
        'The Item Exception Handling team focuses on building a flexible and scalable architecture that can adapt to a rapidly evolving global fulfillment infrastructure, leveraging innovative technologies that help enable the automation of the "unhappy" paths throughout Amazon\'s fulfillment operations. Whenever possible, our systems self-heal defects without interrupting the main inventory flow and without additional human input.',
      ],
    },
    {
      date: 'Jan 2023 - Aug 2023',
      img: smilecdrImg,
      link: 'https://www.smilecdr.com',
      title: 'Frontend Developer',
      location: 'Toronto, Canada',
      subtitle: 'Angular, Typescript, Cypress',
      description: [
        'At Smile, I was on the Clinical Reasoning Group as a frontend developer. The main project I worked on was creating a new UI for the Smile backend. Previously, the company had no way to demonstrate their backend capabilities easily to potential clients. The UI included a page for running evaluations on clinical measures, building reports for the Quality Payment Program (QPP), and managing submissions to the Center for Medicare and Medicaid Services (CMS).',
        'I created the entire codebase myself, including Gitlab pipelines, linting, and testing. I also wrote all the Cypress tests and kept code coverage over 95%.',
      ],
    },
    {
      date: 'Jan 2022 - Apr 2022',
      img: applyboardImg,
      link: 'https://www.applyboard.com/',
      title: 'Full Stack Developer',
      location: 'Kitchener, Canada',
      subtitle: 'React, NodeJS, Typescript, Cypress',
      description: [
        'At ApplyBoard, I worked on with the Recruitment Partner Journey Team to refractor a Student Bulk Import Page. I was tasked to refractor the bulk import page to use Styled components from the emotion library. In the process, I also improved state management as well as the overall performance of the page. I also added better csv file validation checks. In the end, I was able to reduce the lines of code by over 50%.',
        'Another project I worked on was creating Cypress tests for the bulk import page as well as a student intake form. I added file uploading, drag and drop, and full form validation checks.',
      ],
    },
    {
      date: 'Sep 2021 - Dec 2021',
      img: polarImg,
      link: 'https://polar.me/',
      title: 'Full Stack Developer',
      location: 'Toronto, Canada',
      subtitle: 'React, Redux, JavaScript, Django, Python, Jest',
      description: [
        'One of my first major projects at Polar was to help revamp the demo site list page and fix/add any associated unit tests. The old behaviour fetched all the demo sites in one call and then filtered them in React. By using pagination and a new Django REST endpoint with search, sort, and page number parameters, I improved performance by over 1000%. Instead of timing out at over 30s+, the new functionality finishes in under 3s.',
        'Near the end of the term, I worked on a feature where after a user crops an image for an ad format, the preview tool would switch to the respective format. At first, this seemed like a simple change, but after looking at the code, the preview tool format was stored in a local state. Since the image crop component and the preview tool component were in two different trees, I had to migrate the state to Redux as well as add the Redux actions to switch the format. While the migration took a bit of work, most of my time was spent fixing the old unit tests and adding in new ones.',
      ],
    },
    {
      date: 'Jan 2021 - Apr 2021',
      img: honeybeeLogoImg,
      link: 'https://play.google.com/store/apps/details?id=ca.honeybeehub',
      title: 'Mobile Developer',
      location: 'Toronto, Canada',
      subtitle: 'Flutter, Dart, MongoDB, Google Cloud Platform',
      description: [
        'With a team of five, we developed many key features for Honeybee such as a data collection system, a referral system, a recommendation system, and a rewards system. I personally lead our team in implementing the profile data collection system by creating the data structures and function definitions as well as coordinating with the UI/UX team.',
        'In addition, the referral system we implemented brought great success as both the number of requests to join studies and study completion rates rose significantly since it was implemented. Another project I worked on during this coop was creating a domain for the recommendation endpoints by using with GCP, Kubernetes, Docker and other DevOp tools.',
      ],
    },
    {
      date: 'May 2020 - Aug 2020',
      img: honeybeeLogoImg,
      link: 'https://www.honeybeehub.io/',
      title: 'Full Stack Developer',
      location: 'Toronto, Canada',
      subtitle: 'React, NodeJs, Typescript',
      description: [
        'Having previously used survey builders like Google Forms and Qualtrics, developing and testing one from scratch was a fairly straightforward process as there was an industry standard for validations, checks, and question types.',
        'After creating the React front end, I developed all the APIs necessary for a survey builder to function, such as GET, EDIT, and DELETE functions. The final part in the flow was to developer the survey responder page and ensuring the entire flow from start to finish was linked.',
      ],
    },
    {
      date: 'Feb 2017 - Nov 2017',
      img: firstRoboticsImg,
      link: 'https://www.firstroboticscanada.org/',
      title: 'FIRST Robotics Mentor',
      location: 'Toronto, Canada',
      subtitle: 'LEGO NXT',
      description: [
        'Having experience from previous competitions, I led my team to victory at a local tournament. Despite being the youngest team at the competition, I was still able to guide my team of 9-11 y/o students to success. By completing most of the missions in the HYDRODYNAMICS challenge, we earned nearly all the possible points with time to spare.',
        "Since this was a year long process, the team's dynamic changed quite frequently as at that age, small disagreements and struggles can be magnified. Young students may also be shy in asking for help even when they need it. To counter this, I spent extra time before and after meetups talking to every student to get to know them and build trust. Overtime, even the most quiet student was willing to pull me aside to bring up any issues she had.",
      ],
    },
    {
      date: 'Sept 2015 - June 2019',
      img: markhamImg,
      link: 'https://www.markham.ca',
      title: 'Computer Instructor',
      location: 'Markham, Canada',
      subtitle: 'NXT Robotics, Java, Python',
      description: [
        'Right from a young age, I aspired to learn more about possibilities technology can bring. By working as a computer instructor, I was able to share my passion for technology, especially about robotics and circuitry, with not just children, but also some adults who attended our classes at community centres.',
        'During those years, I taught a variety of topics ranging from hardware skills such as building robots to software skills such as programming.',
      ],
    },
  ]

  return <Section parts={parts} />
}
