import './App.css'
import FooterLogo from "./img/footer-logo.png"

// sections
import FeaturedWork from './FeaturedWork'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'
import { Link } from 'react-scroll'

export default function App() {
    return (
        <div className='App'>
            <Hero />
            <Skills />
            <FeaturedWork />
            <Projects />
            <footer>
                <img src={FooterLogo} alt='footer logo' />
                <nav>
                    <ul>
                        <p><Link onClick={() => alert("About Me")}>About Me</Link></p>
                        <p><Link to="skills" spy="true" smooth="true" offset={-32} duration={500}>Skills</Link></p>
                        <p><Link to="featuredwork" spy="true" smooth="true" offset={-32} duration={500}>Featured Work</Link></p>
                        <p><Link to="projects" spy="true" smooth="true" offset={-32} duration={500}>Projects</Link></p>
                        <p><Link onClick={() => alert("Contact")}>Contact</Link></p>
                    </ul>
                </nav>

                <div className='contact-info'>
                    <p>risa.kawagoe@gmail.com</p>
                    <p>+1 (236) 982-8078</p>
                </div>
            </footer>
        </div>
    )
}