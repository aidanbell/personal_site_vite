import './Home.css';
import './particle.css';

export default function Home() {
  return (
    <div id="home" className="home">
      <div id="particles-js">
        <div className="home-container">
          <p className="name outline">/ab/</p>
        </div>
      </div>
      <a href="#about" id="down">
        <i
          className="material-icons"
          
          onClick={() => {
            this.props.scroll(this.props.scrollRef);
          }}>
          arrow_downward
        </i>
        </a>
    </div>
  );
}