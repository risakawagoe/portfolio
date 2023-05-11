import React, { useEffect, useState } from "react";

// assets
import githubIcon from "./img/icon/github.png"
import viewIcon from "./img/icon/view.png"
import ProjectPreview from "./components/ProjectPreview";
import { getProjects, getProjectById } from "./data.service";

export default function Projects({openVideoModal}) {

    const observer = new IntersectionObserver(fadeInProject, {})
    const [projects, setProjects] = useState([])
    
    useEffect(() => {
        setProjects(getProjects())
    }, [])
    
    useEffect(() => {
        if(projects.length > 0) {
            document.querySelectorAll('.project').forEach((project) => {
                observer.observe(project)
            })
        }
    }, [projects])

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
                    {projects.map((project) => (
                        <div className="project fadein">
                            <div className="yellow_circle">
                                <div className="circle"></div>
                            </div>
                            <section className="description">
                                <h3>{project.title} <span>{project.duration}</span></h3>
                                <ProjectPreview preview={project.preview} id={project.id} notifySelectedProject={id => {
                                    const project = getProjectById(id)
                                    if(project) openVideoModal(project)
                                }} />
                                <p>{project.description}</p>
                                <div>
                                    <h4>Technology</h4>
                                    <p className="tech-stack">
                                        {project.techStack.map(tech => (
                                            <span className="tech-tag">{tech}</span>
                                        ))}
                                    </p>
                                </div>
                                <div className="project-links">
                                    <a href={project.url} target="_blank" rel="noreferrer"><img src={viewIcon} alt="" /></a>
                                    <a href={project.srcCode} target="_blank" rel="noreferrer"><img src={githubIcon} alt="" /></a>
                                </div>
                            </section>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}