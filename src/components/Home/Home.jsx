import './Home.css';
import './particle.css';

export default function Home() {
  return (
    <div id="home" className="home">
      <div id="particles-js">
        <div class="home-container">
          <p class="name">/ab/</p>
          <div class="mobile-nav">
            <ul class="home-nav">
              <li>
                <a class="mobile-nav-link" href="#About">
                  <span>About Me</span>
                </a>
              </li>
              <li>
                <a class="mobile-nav-link" href="#Projects">
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a class="mobile-nav-link" href="#Contact">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <i
          class="material-icons"
          id="down"
          style={{ fontSize: "10vmin", cursor: "pointer" }}
          onClick={() => {
            this.props.scroll(this.props.scrollRef);
          }}>
          arrow_downward
        </i>
    </div>
  );
}