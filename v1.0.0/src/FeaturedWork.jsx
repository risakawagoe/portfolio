import React, { useEffect, useState } from "react";
import ProjectPreview from "./components/ProjectPreview";
import githubIcon from "./img/icon/github.png"
import viewIcon from "./img/icon/view.png"
import { getFeaturedProject } from "./data.service";

export default function FeaturedWork({openVideoModal}) {
    const observer = new IntersectionObserver(fadeInProject, {})

    const [project, setProject] = useState(null)

    
    useEffect(() => {
        setProject(getFeaturedProject)
    }, [])

    useEffect(() => {
        if(project) {
            observer.observe(document.getElementById('featuredwork').children[0])
        }
    }, [project])


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
        <div id="featuredwork">
            {project && 
                <div className="flex fadein">
                    <ProjectPreview preview={project.preview} id={project.id} notifySelectedProject={() => openVideoModal(project)} />
                    <section className="description">
                        <h2>Featured work</h2>
                        <div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div>
                            <h4>Technology</h4>
                            <p className="tech-stack">
                                {project.techStack.map(tech => (
                                    <span className="tech-tag">{tech}</span>
                                ))}
                            </p>
                        </div>
                        <div className="project-links">
                            <a href={project.url} target="_blank" rel="noreferrer"><img src={viewIcon} alt={project.url} /></a>
                            <a href={project.srcCode} target="_blank" rel="noreferrer"><img src={githubIcon} alt="" /></a>
                        </div>
                    </section>
                </div>
            }
        </div>
    )
}