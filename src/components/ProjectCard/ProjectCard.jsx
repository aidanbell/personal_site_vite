import { useState } from "react";
import "./ProjectCard.css"

export default function ProjectCard({ project }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="p-card">
      <img className="p-card-img" src={project.img} alt={project.name} />
      <h1 className="p-card-title">{project.name}</h1>
      <p className="p-card-desc">{project.description}</p>
      <div className="p-card-tech">
        {project.tech.map((tech) => (
          <img
            className="tech-icon"
            src={tech.icon}
            alt={tech.name}
            key={tech.name}
          />
        ))}
      </div>
      <div className="p-card-links">
        <p className={"hover-helper " + (hover ? "showing" : "")}>{hover}</p>
        <a
          className="link"
          href={project.github}
          onMouseEnter={() => setHover('See the Code')}
          onMouseLeave={() => setHover(false)}
          target="_blank"
          rel="noreferrer">
          <i id="github-icon" className="devicon-github-original p-icon"></i>
        </a>
        <a
          className="link"
          id="launch-icon"
          href={project.live}
          onMouseEnter={() => setHover('See the Live Site')}
          onMouseLeave={() => setHover(false)}
          target="_blank"
          rel="noreferrer">
          <i className="material-icons p-icon">launch</i>
        </a>
      </div>
    </div>
  );
}
