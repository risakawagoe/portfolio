import React, { useEffect } from "react";
import ProjectPreview from "./components/ProjectPreview";
import testPreviewImg from "./img/preview/test.png"
import githubIcon from "./img/icon/github.png"
import viewIcon from "./img/icon/view.png"

export default function FeaturedWork() {
    const observer = new IntersectionObserver(fadeInProject, {})

    
    useEffect(() => {
        function init() {
            observer.observe(document.getElementById('featuredwork').children[0])
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
        <div id="featuredwork">
            <div className="flex fadein">
                <ProjectPreview preview={testPreviewImg} />
                <section className="description">
                    <h2>Featured work</h2>
                    <div>
                        <h3>SFU Synapse</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
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
            <div className="separator end"></div>
        </div>
    )
}