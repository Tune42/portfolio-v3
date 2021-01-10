import { ReactComponent as Logo } from './assets/landing-image.svg';
import { ReactComponent as About } from './assets/about.svg';
import spotify from './assets/spotify.jpg';
import reporting from './assets/SDReporting.jpg';
import sdtools from './assets/sdtools.JPG';
import resume from './assets/resume.pdf';

const Portfolio = () => {
    return(
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
            <h1 className='section-header'>Projects</h1>
            <div className="project">
                <div className="project-display project-spotify">
                <img src={spotify} alt="spotify" className='project-image' />
                </div>
                <div className="project-information">
                <h2>
                    Spotify Clone
                </h2>
                <p className='project-description'>
                    A project for fun. A fully functional 'clone' of the Spotify landing page and web player, using their SDK and API.
                </p>
                <div className="tags">
                    <div className="tag">JS</div>
                    <div className="tag">React</div>
                    <div className="tag">APIs</div>
                    <div className="tag">SASS</div>
                </div>
                <div className="project-links">
                    <a href="https://github.com/Tune42/spotify-clone"><i className="fab fa-github project-link"></i></a>
                    <a href="https://tune42-spotify.netlify.app/"><i className="fas fa-external-link-alt project-link"></i></a>
                </div>
                </div>
            </div>
            <div className="project">
            <div className="project-information">
                <h2>Service Desk Reporting</h2>
                <p className="project-description">
                A client side react application that fetches data from Atlassian's Jira API. Allows the user to specify the date range to be used in each JQL query.
                </p>
                <div className="tags">
                <div className="tag">React</div>
                <div className="tag">CSS3</div>
                <div className="tag">APIs</div>
                <div className="tag">IIS</div>
                </div>
            </div>
            <div className="project-display project-reporting">
                <img src={reporting} alt="reporting" className='project-image' />
            </div>
            </div>
            <div className="project">
                <div className="project-display project-sdtools">
                <img src={sdtools} alt="sdtools" className='project-image' />
                </div>
                <div className="project-information">
                <h2>
                    SDTools
                </h2>
                <p className='project-description'>
                    A flask application written in Python to house automation scripts for the company service desk.
                </p>
                <div className="tags">
                    <div className="tag">Python</div>
                    <div className="tag">Flask</div>
                    <div className="tag">Bootstrap</div>
                    <div className="tag">IIS</div>
                </div>
                </div>
            </div>
            <form action="https://github.com/Tune42">
            <button type="submit" className="github-plug"><h3>See more on github</h3></button>
            </form>
            <h1 className='section-header'>Contact</h1>
        </div>
        <div className="contact-container">
            <div className="contact-card">
            <h2>Michael Book</h2>
            <h3>Oklahoma City, OK</h3>
            <h3>mikebook24@gmail.com</h3>
            <h3><a href="https://www.linkedin.com/in/michael-book-7a2831128/">LinkedIn</a></h3>
            <h3><a href={resume}>Resume</a></h3>
            </div>
            <About className="contact-image" />
        </div>
      </>
    )
}

export default Portfolio;