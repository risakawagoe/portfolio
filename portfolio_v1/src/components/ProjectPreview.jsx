import React from "react";
import "./ProjectPreview.css"

export default function ProjectPreview({preview, id, notifySelectedProject}) {
    
    return (
        <figure className="preview">
            <img src={preview} alt="" />
            <div className="tooltip">
                <p>click image for demo video</p>
            </div>
            <div className="overlay" onClick={() => notifySelectedProject(id)}>
                <p>watch demo</p>
            </div>
        </figure>
    )
}