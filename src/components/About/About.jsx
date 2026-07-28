import "./About.css";

import {
    FaBriefcase,
    FaMicrochip,
    FaGithub,
    FaFolderOpen,
    FaUser,
} from "react-icons/fa";

function About() {
    return (
        <section
            className="about-section"
            id="about"
            data-aos="fade-up">

            <div className="container">

                {/* Heading */}

                <div className="about-header">

                    <h2>
                        About <span>Me</span>
                    </h2>

                    <div className="about-line"></div>

                </div>

                {/* Main Row */}

                <div className="row g-4 align-items-stretch">

                    {/* Left Side */}

                    <div className="col-lg-7">

                        <div
                            className="about-card"
                            data-aos="fade-right">

                            <div className="about-top">

                                <div className="about-icon">
                                    <FaUser />
                                </div>

                                <h3>Full Stack Python Developer</h3>

                            </div>

                            <p>
                                I'm Rajendra Mahapatra, a passionate Full Stack Python Developer
                                specializing in secure systems, AI-powered interfaces, and
                                cyber-themed UI design. With expertise in Django, React, and
                                Computer Vision, I create immersive digital experiences that
                                blend functionality with futuristic aesthetics.
                            </p>

                            <p>
                                I enjoy building clean, scalable software while continuously
                                learning new technologies....My approach combines clean code architecture with
                                cutting-edge UI/UX principles, delivering solutions
                                that are both powerful and visually stunning...My approach combines clean code architecture with
                                cutting-edge UI/UX principles, delivering solutions
                                that are both powerful and visually stunning.
                            </p>

                            <div className="bottom-lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div className="col-lg-5">

                        <div className="row g-4">

                            <div className="col-6">

                                <div
                                    className="stat-card"
                                    data-aos="zoom-in"
                                    data-aos-delay="100"
                                >

                                    <div className="stat-icon">
                                        <FaFolderOpen />
                                    </div>

                                    <h1>10+</h1>

                                    <p>Projects</p>

                                </div>

                            </div>

                            <div className="col-6">

                                <div
                                    className="stat-card"
                                    data-aos="zoom-in"
                                    data-aos-delay="200"
                                >

                                    <div className="stat-icon">
                                        <FaMicrochip />
                                    </div>

                                    <h1>15+</h1>

                                    <p>Technologies</p>

                                </div>

                            </div>

                            <div className="col-6">

                                <div
                                    className="stat-card"
                                    data-aos="zoom-in"
                                    data-aos-delay="300"
                                >

                                    <div className="stat-icon">
                                        <FaBriefcase />
                                    </div>

                                    <h1>6+</h1>

                                    <p>Months Experience</p>

                                </div>

                            </div>

                            <div className="col-6">

                                <div
                                    className="stat-card"
                                    data-aos="zoom-in"
                                    data-aos-delay="400"
                                >

                                    <div className="stat-icon">
                                        <FaGithub />
                                    </div>

                                    <h1>250+</h1>

                                    <p>GitHub Commits</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;