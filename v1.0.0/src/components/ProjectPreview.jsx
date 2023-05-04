import React from "react";
import "./ProjectPreview.css"

export default function ProjectPreview({preview}) {

    function openVideoModal() {
        alert("Open Video Modal")
    }

    return (
        <figure className="preview">
            <img src={preview} alt="" />
            <div className="tooltip">
                <p>click image for demo video</p>
            </div>
            <div className="overlay" onClick={openVideoModal}>
                <p>watch demo</p>
            </div>
        </figure>
    )
}