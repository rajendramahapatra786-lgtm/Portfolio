import "./Hero.css";
import profile from "../../assets/images/profile/my_photo.jpg";
import TypingText from "./TypingText";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFileDownload } from "react-icons/fa";
import { socialLinks } from "../../data/socialLinks";


import {
    faGithub,
    faLinkedin,
    faInstagram,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Hero() {
    return (
        <section
            className="hero"
            id="hero"
        >
            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT SIDE */}

                    <div
                        className="col-lg-7"
                        data-aos="fade-right">

                        <p className="tag">
                            FULL STACK PYTHON DEVELOPER
                        </p>

                        <h1>
                            Rajendra <br />
                            <span>Mahapatra</span>
                        </h1>

                        <TypingText />

                        <p className="hero-desc">
                            Passionate Full Stack Python Developer focused on building
                            modern, responsive, and user-friendly web applications using
                            Python, Django, React, JavaScript, HTML, CSS, and SQL.
                        </p>

                        <div className="buttons">

                            <a
                                href="#projects"
                                className="primary secondary-btn"
                            >
                                View Projects
                            </a>

                            <a
                                href={`${import.meta.env.BASE_URL}files/Rajendra_Mahapatra_Resume.pdf`} download
                                className="secondary secondary-btn"
                            >
                                Download Resume
                                <FaFileDownload />
                            </a>

                        </div>

                        <div className="hero-socials">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.name}
                                >
                                    <FontAwesomeIcon icon={social.icon} />
                                </a>
                            ))}
                        </div>

                    </div>

                    {/* RIGHT SIDE */}

                    <div className="col-lg-5 d-flex justify-content-center">

                        <div
                            className="glass-card profile-card"
                            data-aos="fade-left">

                            <img
                                src={profile}
                                alt="Rajendra Mahapatra"
                                className="profile-img"
                            />

                            <h2>Rajendra Mahapatra</h2>

                            <p>Full Stack Python Developer</p>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;