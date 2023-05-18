import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';
import cagePage2 from '../../assets/cage-page2.png';
import md98 from '../../assets/md98.png';

const projects = [
  {
    name: "Cage Page",
    description:
      "A web app that allows users to create drinking game rules for every single movie in Nic Cage's incredible cannon. Uses Google OAuth for authentication and TMDB API for movie data.",
    img: cagePage2,
    tech: [
      {
        name: "Node.js",
        icon: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
      },
      {
        name: "Express",
        icon: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
      },
      {
        name: "MongoDB",
        icon: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
      },
      {
        name: "Heroku",
        icon: "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
      },
    ],
    github: "https://github.com/aidanbell/cage-page",
    live: "https://the-cage-page.herokuapp.com/",
  },
  {
    name: "Markdowner98",
    description: `A Mintbean Hackathon winner 🏆🎉🙌! A Markdown editor with live preview, simultaneous scrolling, and the ability to download your markdown as a .pdf file.`,
    img: md98,
    tech: [
      {
        name: "Node.js",
        icon: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
      },
      {
        name: "React",
        icon: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      },
      {
        name: "Markdown",
        icon: "https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white",
      },
    ],
    github: "https://github.com/aidanbell/Markdowner98",
    live: "https://aidanbell.github.io/Markdowner98/",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="projects">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.name} />
      ))}
    </div>
  );
}