import './About.css';

export default function About() {
  return (
    <div id="about" className="about">
      <nav className="side-nav">
        <div
          className="side-nav"
          id="nav-tab"
          role="tablist"
          aria-orientation="vertical">
          <button
            className="btn btn-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true">
            Me:
          </button>
          <button
            className="btn btn-link"
            id="nav-education-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-education"
            type="button"
            role="tab"
            aria-controls="nav-education"
            aria-selected="false">
            Education:
          </button>
          <button
            className="btn btn-link"
            id="nav-technologies-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-technologies"
            type="button"
            role="tab"
            aria-controls="nav-technologies"
            aria-selected="false">
            Technologies:
          </button>
        </div>
      </nav>
      <div className="vr"></div>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabIndex="0">
          <p className="brand-statement">
            Curious and detail-oriented, I tend to approach problems with
            creativity and efficiency first, and enjoy tinkering with the latest
            technologies. After studying literature and poetry, I recognized
            that my enjoyment of deconstructing and analyzing large pieces of
            writing was mirrored in the world of programming. I view my place in
            the field of software engineering as one in which I have room to
            grow, and satiate my desire to never stop learning.
          </p>
        </div>
        <div
          className="tab-pane fade"
          id="nav-education"
          role="tabpanel"
          aria-labelledby="nav-education-tab"
          tabIndex="0">
          <h2>General Assembly</h2>
          3 Month intensive bootcamp consisting of over
          450 hours of building fluency in full-stack web development with a
          focus on object-oriented programming, MVC Frameworks, team
          colaboration strategies, and best coding practices.
        </div>
        <div
          className="tab-pane fade"
          id="nav-technologies"
          role="tabpanel"
          aria-labelledby="nav-technologies-tab"
          tabIndex="0">
          <div className="technologies">
            <div className="left">
              <h2>Languages:</h2>
              <div className="languages">
                <i title="JavaScript" className="logo devicon-javascript-plain"></i>
                <i
                  title="Python"
                  className="logo devicon-python-plain-wordmark"></i>
              </div>
              <h2>Databases:</h2>
              <div className="languages">
                <i
                  title="MongoDB"
                  className="logo devicon-mongodb-plain-wordmark"></i>
                <i
                  title="PostgreSQL"
                  className="logo devicon-postgresql-plain-wordmark"></i>
              </div>
              <h2>Frameworks:</h2>
              <div className="languages">
                <i
                  title="Express"
                  className="logo devicon-express-original-wordmark"></i>
                <i
                  title="React.js"
                  className="logo devicon-react-original-wordmark"></i>
                <i
                  title="Django"
                  className="logo devicon-django-plain-wordmark"></i>
              </div>
            </div>
            <div className="right">
              <h2>Technologies/Tools:</h2>
              <div className="languages">
                <i
                  title="Node.js"
                  className="logo devicon-nodejs-plain-wordmark"></i>
                <i title="Git" className="logo devicon-git-plain"></i>
                <i
                  title="Heroku"
                  className="logo devicon-heroku-plain-wordmark"></i>
                <i
                  title="amazonwebservices"
                  className="logo devicon-amazonwebservices-plain-wordmark"></i>
              </div>
              <h2>Libraries</h2>
              <div className="languages">
                <i
                  title="Bootstrap"
                  className="logo devicon-bootstrap-plain-wordmark"></i>
                <i
                  title="JQuery"
                  className="logo devicon-jquery-plain-wordmark"></i>
                <i
                  title="socketio"
                  className="logo devicon-socketio-original-wordmark"></i>
              </div>
              <h2>Other:</h2>
              <div className="languages">
                <i title="bash" className="logo devicon-bash-plain"></i>
                <i title="windows" className="logo devicon-windows8-original"></i>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-disabled"
          role="tabpanel"
          aria-labelledby="nav-disabled-tab"
          tabIndex="0">
          ...
        </div>
      </div>
    </div>
  );
}