import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>As a 3rd-year undergraduate passionate about software development, UI/UX design, frontend technologies, cloud computing,and quality assurance, I’m actively seeking a software internship where I can contribute to real-world projects, gain hands-on experience, and grow by working with an innovative team.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>React Js</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Next Js</p><hr style={{ width: "40%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF UI/UX EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>COLLOBORATION WITH TEAMS</p>
                </div>
            </div>
        </div>
    )
}

export default About