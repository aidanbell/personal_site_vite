import './About.css';

export default function About() {
  return (
    <div id="about" className="about d-flex">
      <nav class="side-nav">
        <div
          class="side-nav"
          id="nav-tab"
          role="tablist"
          aria-orientation="vertical">
          <button
            class="btn btn-link active"
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
            class="btn btn-link"
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
            class="btn btn-link"
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
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabindex="0">
          <p class="brand-statement">
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
          class="tab-pane fade"
          id="nav-education"
          role="tabpanel"
          aria-labelledby="nav-education-tab"
          tabindex="0">
          <h2>General Assembly</h2>
          3 Month intensive bootcamp consisting of over
          450 hours of building fluency in full-stack web development with a
          focus on object-oriented programming, MVC Frameworks, team
          colaboration strategies, and best coding practices.
        </div>
        <div
          class="tab-pane fade"
          id="nav-technologies"
          role="tabpanel"
          aria-labelledby="nav-technologies-tab"
          tabindex="0">
          <div class="technologies">
            <div class="left">
              <h2>Languages:</h2>
              <div class="languages">
                <i title="JavaScript" class="logo devicon-javascript-plain"></i>
                <i
                  title="Python"
                  class="logo devicon-python-plain-wordmark"></i>
              </div>
              <h2>Databases:</h2>
              <div class="languages">
                <i
                  title="MongoDB"
                  class="logo devicon-mongodb-plain-wordmark"></i>
                <i
                  title="PostgreSQL"
                  class="logo devicon-postgresql-plain-wordmark"></i>
              </div>
              <h2>Frameworks:</h2>
              <div class="languages">
                <i
                  title="Express"
                  class="logo devicon-express-original-wordmark"></i>
                <i
                  title="React.js"
                  class="logo devicon-react-original-wordmark"></i>
                <i
                  title="Django"
                  class="logo devicon-django-plain-wordmark"></i>
              </div>
            </div>
            <div class="right">
              <h2>Technologies/Tools:</h2>
              <div class="languages">
                <i
                  title="Node.js"
                  class="logo devicon-nodejs-plain-wordmark"></i>
                <i title="Git" class="logo devicon-git-plain"></i>
                <i
                  title="Heroku"
                  class="logo devicon-heroku-plain-wordmark"></i>
                <i
                  title="amazonwebservices"
                  class="logo devicon-amazonwebservices-plain-wordmark"></i>
              </div>
              <h2>Libraries</h2>
              <div class="languages">
                <i
                  title="Bootstrap"
                  class="logo devicon-bootstrap-plain-wordmark"></i>
                <i
                  title="JQuery"
                  class="logo devicon-jquery-plain-wordmark"></i>
                <i
                  title="socketio"
                  class="logo devicon-socketio-original-wordmark"></i>
              </div>
              <h2>Other:</h2>
              <div class="languages">
                <i title="bash" class="logo devicon-bash-plain"></i>
                <i title="windows" class="logo devicon-windows8-original"></i>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-disabled"
          role="tabpanel"
          aria-labelledby="nav-disabled-tab"
          tabindex="0">
          ...
        </div>
      </div>
    </div>
  );
}