import React from "react";
import "./Modal.css"
import About from "../About";
import Contact from "../Contact";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

export default function Modal({view, notifyModalClosure}) {
    return (
        <div id="sectionModal" className="show">
            <div className="modal">
                <div className={`banner ${view === "about" ? "about" : ""} ${view === "contact" ? "contact" : ""}`}>
                    {view === "about" && <p>About Me</p>}
                    {view === "contact" && <p>Let's talk!</p>}
                </div>
                <div className="content">
                    {view === "about" && <About />}
                    {view === "contact" && <Contact />}
                </div>
                <ClearRoundedIcon id="closeBtn" onClick={notifyModalClosure} />
            </div>
        </div>
    )
}