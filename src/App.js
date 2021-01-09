import './App.scss';
import { ReactComponent as Logo } from './assets/landing-image.svg';
import spotify from './assets/spotify.jpg';

function App() {
  return (
    <>
      <div className="landing">
        <div className="landing-image-container">
          <Logo className='landing-person' width='80%' />
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='landing-image-blob'>
            <path fill="#00FF8B" d="M37.4,-57C47.5,-44.1,54.1,-31.9,62,-17.8C69.8,-3.6,79,12.5,77.3,27.3C75.5,42.1,62.8,55.5,48.1,64.4C33.4,73.3,16.7,77.7,1.6,75.6C-13.6,73.4,-27.2,64.8,-39.7,55.2C-52.3,45.6,-63.8,35,-68.5,22C-73.1,8.9,-70.9,-6.7,-67.3,-23C-63.6,-39.3,-58.5,-56.4,-47,-68.8C-35.5,-81.3,-17.8,-89.2,-2.1,-86.3C13.6,-83.5,27.3,-69.9,37.4,-57Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="landing-text-container">
          <h1>Hello.</h1>
          <h1>I'm <strong>Michael</strong>.</h1>
          <p>I am a web developer with full stack experience using <strong>Python, Node, JavaScript, React, HTML5, and CSS3/SASS</strong>. I develop web applications both on and off the job. I enjoy problem solving as well as working with new tools and technologies.</p>
        </div>
      </div>
      <div className="project-container">
        <h1>Projects</h1>
        <div className="project">
          
            <div className="project-display project-spotify">
              <img src={spotify} alt="spotify" width="500px" />
            </div>
          
          
            <div className="project-information">
              <h2>Spotify Clone</h2>
              <p>A project for fun. A fully functional 'clone' of the Spotify landing page and web player, using their SDK and API.</p>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
