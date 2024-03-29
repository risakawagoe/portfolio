import React from "react";
import { Link } from "react-scroll"

// assets
import GithubIcon from "./img/icon/github.png"
import LinkedinIcon from "./img/icon/linkedin.png"
import ResumeIcon from "./img/icon/resume.png"
import ResumeDoc from "./data/resume.pdf"

export default function Hero({openAboutModal, openContactModal}) {
    const githubURL = 'https://github.com/risakawagoe?tab=repositories'
    const linkedinURL = 'https://www.linkedin.com/in/risakawagoe/'

    return (
        <div id="hero">
            {/* background */}
            <section className="parallax">
                {/* <p>background</p> */}
                {/* <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" /> */}
            </section>

            {/* content */}
            <h1>RISA KAWAGOE</h1>
            <div>
                <nav>
                    <p><Link to="about" onClick={openAboutModal}>About Me</Link></p>
                    <p><Link to="skills" spy="true" smooth="true" offset={-32} duration={500}>Skills</Link></p>
                    <p><Link to="featuredwork" spy="true" smooth="true" offset={-32} duration={500}>Featured Work</Link></p>
                    <p><Link to="projects" spy="true" smooth="true" offset={-32} duration={500}>Projects</Link></p>
                    <p><Link to="about" onClick={openContactModal}>Contact</Link></p>
                </nav>
                <div className="flex">
                    <div className="links">
                        <a href={githubURL} target="_blank" rel="noreferrer"><img src={GithubIcon} alt="" /></a>
                        <a href={linkedinURL} target="_blank" rel="noreferrer"><img src={LinkedinIcon} alt="" /></a>
                        <a href={ResumeDoc} target="_blank" rel="noreferrer"><img src={ResumeIcon} alt="" /></a>
                    </div>
                    <span>Simon Fraser University | Software Systems</span>
                </div>
            </div>
        </div>
    )
}