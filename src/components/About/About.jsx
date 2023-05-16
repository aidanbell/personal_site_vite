import mePic from '../../assets/me.jpeg';
import resume from '../../assets/aidan_bell23.pdf';
import './About.css';


export default function About() {
  return (
    <div id="about" className="about">
      <div className="bout">
        <img className="profile" src={mePic} alt="bout" />
        <div className="greet">
          <h1>
            Hello! <span className="wave">👋</span> I'm Aidan Bell
          </h1>

          <div className="links">
            <a
              href="https://www.linkedin.com/in/aidan-bell/"
              target="_blank"
              rel="noreferrer"
              className="icon">
              <i className="devicon-linkedin-plain"></i>
            </a>
            <a
              href="https://www.github.com/aidanbell"
              target="_blank"
              rel="noreferrer"
              className="icon">
              <i className="devicon-github-original"></i>
            </a>
            <a
              href={resume}
              download
              rel="noreferrer"
              className='icon'>
              <div id="resume-icon">
              
              </div>
            </a>
          </div>
        </div>
        <div className="blurb">
          <p>
            I'm a creative and detail-oriented software engineer with a passion
            for building things that are both accessible and feature-rich. I
            spent the last few years teaching web development at General
            Assembly, and I am always looking to learn more about the latest
            technologies.
            <br />
            I enjoy hunting for bugs, chasing obscure errors, and finding myself
            so deep into the docs that I'm learning something completely new
            along the way
            <br />
            Have a look at my projects, and feel free to reach out if you'd like
            to chat!
          </p>
        </div>
      </div>
    </div>
  );
}