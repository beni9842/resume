import "../css/resume.css"
import headshot from "../img/headshot.jpeg";
import JobList from "./JobList.js"

function Resume() {

    return (
        <div className="resume card">
            <div className="card-body">
                <h2 className="card-title text-center">Resume</h2>

                <div className="row card">
                    <div className="left card">
                        <img className="headshot" src={headshot} alt="headshot"></img>
                        <div className="card-body">
                            <h3 className="card-title">Benjamin Niesmertelny</h3>
                            <p className='lead'>Software Developer</p>
                            <div className="contact card">
                                <div className="card-body">
                                    <h5>Contact Me</h5>
                                    <ul className="contact-list">
                                        <li>
                                            <a href="mailto:ben.nies1017@gmail.com?subject=Hello!"><img src="#" alt="email"></img> ben.nies1017@gmail.com</a>
                                        </li>
                                        <li>
                                             <a href="tel:+19738037990"><img src="#" alt="phone"></img> 973 803-7990</a>
                                        </li>
                                        <li>
                                            <a href="https://goo.gl/maps/C1f1r1EeE6imdocs9"><img src="#" alt="location"></img> <p>New York City, NY</p></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right card">
                        <div className="about card">
                            <div className="card-body">
                                <h4 className="text-center">About</h4>
                                <p className="lead text-wrap">
                                    Ben is a skilled and programmer who loves coding, learning more about tech, and teaching others new skills and methods
                                    for software development. He often uses his knowledge of web development to create personal projects, and has 
                                    previously created small web sites and even entire apps using various stacks. When he is not coding, Ben enjoys playing 
                                    the guitar, skiing, and going to concerts.
                                </p>
                            </div>
                        </div>
                        <div className="education card">
                            <div className="card-body">
                                <h4 className="text-center">Education</h4>
                                <div className="school card">
                                    <div className="card-body">
                                        <h5 className="card-title text-sm">University of Colorado, Boulder</h5>
                                        <h6 className="card-subtitle">Boulder, CO</h6>
                                        <p className="lead">Computer Science, Engineering</p>
                                        <p>Aug, 2021 - May, 2025 (projected)</p>
                                    </div>
                                </div>
                                <div className="school card">
                                    <div className="card-body">
                                        <h5 className="card-title text-sm">Verona High School</h5>
                                        <h6 className="card-subtitle">Verona, NJ</h6>
                                        <p className="lead">High School Diploma</p>
                                        <p>Sep, 2017 - Jun, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row card">
                    <div className="general skills card">
                        <div className="card-body">
                            <h4 className="card-title text-center">General Skills</h4>
                            <ul>
                                <li>Full-stack programmer</li>
                                <li>Agile/SCRUM methods</li>
                                <li>Problem-solving and troubleshooting</li>
                                <li>Collaboration and teamwork</li>
                                <li>Creativity</li>
                                <li>High-level math (calculus/statistics)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="tech skills card">
                        <div className="card-body">
                            <h4 className="card-title text-center">Technical Skills</h4>
                            <ul>
                                <li>C/C++</li>
                                <li>Intel x86-64 assembly</li>
                                <li>HTML, CSS, and JS</li>
                                <li>NodeJS, Webpack, and React</li>
                                <li>Linux and Bash scripting</li>
                                <li>PostgreSQL</li>
                                <li>Python</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row card">
                    <div className="card-body">
                        <h4 className="text-center">Professional Experience</h4>
                        <JobList />
                    </div>
                </div>

            </div>
        </div>
    );
}


export default Resume;