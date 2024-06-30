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
import VideoModal from './components/VideoModal'
import Modal from './components/Modal'

export default function App() {
    const [project, setProject] = useState(null)
    const [view, setView] = useState('main')

    useEffect(() => {
        document.title = 'risakawagoe';
      }, []);

    useEffect(() => {
        if(project) {
            setView("video")
        }
    }, [project])

    useEffect(() => {
        console.log(view)
        if(view === "main") {
            setProject(null)
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
    
    function openAboutModal() {
        setView("about")
    }
    function openContactModal() {
        setView("contact")
    }
    function closeSectionModal() {
        const modal = document.getElementById("sectionModal")
        modal.classList.toggle("show")
    
        setTimeout(() => {
            setView("main")
        }, 500)

    }


    return (
        <div className='App'>
            <Hero openAboutModal={openAboutModal} openContactModal={openContactModal} />
            <Skills />
            <FeaturedWork openVideoModal={openVideoModal} />
            <Projects openVideoModal={openVideoModal} />
            <footer>
                <img src={FooterLogo} alt='footer logo' />
                <nav>
                    <ul>
                        <p><Link to='about' onClick={openAboutModal}>About Me</Link></p>
                        <p><Link to="skills" spy="true" smooth="true" offset={-32} duration={500}>Skills</Link></p>
                        <p><Link to="featuredwork" spy="true" smooth="true" offset={-32} duration={500}>Featured Work</Link></p>
                        <p><Link to="projects" spy="true" smooth="true" offset={-32} duration={500}>Projects</Link></p>
                        <p><Link to='contact' onClick={openContactModal}>Contact</Link></p>
                    </ul>
                </nav>

                {/* <div className='contact-info'>
                    <p>risa.kawagoe[at]gmail.com</p>
                    <p>+1 (236) 982-8078</p>
                </div> */}
            </footer>
            {(view === "about" || view === "contact") && <Modal view={view} notifyModalClosure={closeSectionModal} />}
            {view === "video" && project && <VideoModal project={project} notifyModalClosure={closeVideoModal} />}
        </div>
    )
}