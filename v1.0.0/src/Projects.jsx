import React, { useEffect } from "react";

// assets
import testImg from "./img/preview/test.png"
import githubIcon from "./img/icon/github.png"
import viewIcon from "./img/icon/view.png"
import ProjectPreview from "./components/ProjectPreview";

export default function Projects() {

    const observer = new IntersectionObserver(fadeInProject, {})
    
    useEffect(() => {
        function init() {
            document.querySelectorAll('.project').forEach((project) => {
                observer.observe(project)
            })
        }
        init()
    }, [])

    function fadeInProject(entries) {
        var delay = 0
        const diff = 150
        
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.transitionDelay = delay + "ms"
                entry.target.classList.toggle("faded", entry.isIntersecting)
                delay += diff
                observer.unobserve(entry.target)
            }
        })
    }

    return (
        <div id="projects">
            <section>

                <h2>Projects</h2>
                <div id="projectsList">
                    <div className="vertical-line"></div>
                    <div className="project fadein">
                        <div className="yellow_circle">
                            <div className="circle"></div>
                        </div>
                        <section className="description">
                            <h3>SFU Synapse 1 <span>May 2023 - Present</span></h3>
                            <ProjectPreview preview={testImg} />
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <div>
                                <h4>Technology</h4>
                                <p className="tech-stack"><span className="tech-tag">JavaScript</span><span className="tech-tag">React JS</span></p>
                            </div>
                            <div className="project-links">
                                <a href="" target="_blank" rel="noreferrer"><img src={viewIcon} alt="" /></a>
                                <a href="" target="_blank" rel="noreferrer"><img src={githubIcon} alt="" /></a>
                            </div>
                        </section>
                    </div>
                    <div className="project fadein">
                        <div className="yellow_circle">
                            <div className="circle"></div>
                        </div>
                        <section className="description">
                            <h3>SFU Synapse 2 <span>January - April 2023</span></h3>
                            <ProjectPreview preview={testImg} />
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <div>
                                <h4>Technology</h4>
                                <p className="tech-stack"><span className="tech-tag">JavaScript</span><span className="tech-tag">React JS</span></p>
                            </div>
                            <div className="project-links">
                                <a href="" target="_blank" rel="noreferrer"><img src={viewIcon} alt="" /></a>
                                <a href="" target="_blank" rel="noreferrer"><img src={githubIcon} alt="" /></a>
                            </div>
                        </section>
                    </div>
                    <div className="project fadein">
                        <div className="yellow_circle">
                            <div className="circle"></div>
                            <div className="yellow_circle_line"></div>
                        </div>
                        <section className="description">
                            <h3>SFU Synapse 3 <span>December 2022 - January 2023</span></h3>
                            <ProjectPreview preview={testImg} />
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <div>
                                <h4>Technology</h4>
                                <p className="tech-stack">
                                    <span className="tech-tag">JavaScript</span>
                                    <span className="tech-tag">React JS</span>
                                    <span className="tech-tag">Node JS</span>
                                    <span className="tech-tag">Angular JS</span>
                                    <span className="tech-tag">HTML</span>
                                    <span className="tech-tag">CSS</span>
                                </p>
                            </div>
                            <div className="project-links">
                                <a href="" target="_blank" rel="noreferrer"><img src={viewIcon} alt="" /></a>
                                <a href="" target="_blank" rel="noreferrer"><img src={githubIcon} alt="" /></a>
                            </div>
                        </section>
                    </div>
                    <div className="project fadein">
                        <div className="yellow_circle">
                            <div className="circle"></div>
                            <div className="yellow_circle_line"></div>
                        </div>
                        <section className="description">
                            <h3>SFU Synapse 4 <span>May - August 2021</span></h3>
                            <ProjectPreview preview={testImg} />
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <div>
                                <h4>Technology</h4>
                                <p className="tech-stack"><span className="tech-tag">JavaScript</span><span className="tech-tag">React JS</span></p>
                            </div>
                            <div className="project-links">
                                <a href="" target="_blank" rel="noreferrer"><img src={viewIcon} alt="" /></a>
                                <a href="" target="_blank" rel="noreferrer"><img src={githubIcon} alt="" /></a>
                            </div>
                        </section>
                    </div>
                    <div className="project fadein">
                        <div className="yellow_circle">
                            <div className="circle"></div>
                            <div className="yellow_circle_line"></div>
                        </div>
                        <section className="description">
                            <h3>SFU Synapse 5 <span>May 2023 - Present</span></h3>
                            <ProjectPreview preview={testImg} />
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <div>
                                <h4>Technology</h4>
                                <p className="tech-stack"><span className="tech-tag">JavaScript</span><span className="tech-tag">React JS</span></p>
                            </div>
                            <div className="project-links">
                                <a href="" target="_blank" rel="noreferrer"><img src={viewIcon} alt="" /></a>
                                <a href="" target="_blank" rel="noreferrer"><img src={githubIcon} alt="" /></a>
                            </div>
                        </section>
                    </div>

                </div>
            </section>
        </div>
    )
}