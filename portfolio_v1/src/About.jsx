import React from "react";
import ResumeDoc from "./data/resume.pdf"

export default function About() {
    return (
        <div id="about">
            <section>
                <h2>Education</h2>
                <p><strong>Simon Fraser University</strong></p>
                <p>School of Computing Science - Major in Software Systems</p>
                <h3>Courses taken</h3>
                <ul>
                    <li><p>Web Development I [<a href="https://www.sfu.ca/students/calendar/2022/fall/courses/cmpt/272.html" target="_blank" rel="noreferrer">link</a>]</p></li>
                    <li><p>Web Development II [<a href="https://www.sfu.ca/students/calendar/2023/spring/courses/cmpt/372.html" target="_blank" rel="noreferrer">link</a>]</p></li>
                    <li><p>Data Structures/Programming [<a href="https://www.sfu.ca/students/calendar/2021/fall/courses/cmpt/225.html" target="_blank" rel="noreferrer">link</a>]</p></li>
                    <li><p>Data Communications/Networking [<a href="https://www.sfu.ca/students/calendar/2023/spring/courses/cmpt/371.html" target="_blank" rel="noreferrer">link</a>]</p></li>
                    <li><p>Database Systems I [<a href="https://www.sfu.ca/students/calendar/2022/fall/courses/cmpt/354.html" target="_blank" rel="noreferrer">link</a>]</p></li>
                    <li><p>Operating Systems I [<a href="https://www.sfu.ca/students/calendar/2022/summer/courses/cmpt/300.html" target="_blank" rel="noreferrer">link</a>]</p></li>
                    <li><p>Mobile App Programming [<a href="https://www.sfu.ca/students/calendar/2022/summer/courses/cmpt/362.html" target="_blank" rel="noreferrer">link</a>]</p></li>
                </ul>
            </section>
            <section>
                <h2>Favorites</h2>
                <p>JavaScript (React JS)</p>
                <p>HTML, CSS</p>
                <p>MySQL</p>
            </section>
            <section>
                <h2>Interests</h2>
                <p>Badminton</p>
                <p>Camping</p>
                <p>Learning mandarin</p>
                <p>Playing Apex</p>
                <p>Ice skating</p>
            </section>
            <section>
                <h2>Languages</h2>
                <p>English - fluent</p>
                <p>Japanese - native </p>
            </section>
            <section>
                <h2>Links</h2>
                <p><a href="https://github.com/risakawagoe" target="_blank" rel="noreferrer">Github</a></p>
                <p><a href="https://www.linkedin.com/in/risakawagoe/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                <p><a href={ResumeDoc} target="_blank" rel="noreferrer">Resume</a></p>
            </section>
        </div>
    )
}