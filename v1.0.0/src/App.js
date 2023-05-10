import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './App.css'

// assets
import FooterLogo from "./img/footer-logo.png"

// sections
import Hero from './Hero'
import Skills from './Skills'
import FeaturedWork from './FeaturedWork'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import VideoModal from './components/VideoModal'

export default function App() {
    const [project, setProject] = useState(null)
    const [view, setView] = useState('main')

    useEffect(() => {
        if(project) {
            setView("video")
        }
    }, [project])

    useEffect(() => {
        console.log(view)
        if(view === "main") {
            setProject(null)
        }else if(view === "about") {

        }else if(view === "contact") {

        }
    }, [view])

    function openVideoModal(project) {
        setProject(project)
    }
    function closeVideoModal() {
        const modal = document.getElementById("videoModal")
        modal.classList.toggle("show")

        setTimeout(() => {
            setView("main")
        }, 500)
    }

    return (
        <div className='App'>
            <Hero />
            <Skills />
            <FeaturedWork openVideoModal={openVideoModal} />
            <Projects openVideoModal={openVideoModal} />
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
            {view === "about" && <About />}
            {view === "contact" && <Contact />}
            {view === "video" && project && <VideoModal project={project} notifyModalClosure={closeVideoModal} />}
        </div>
    )
}