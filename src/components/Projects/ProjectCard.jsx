// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";



function ProjectCard({ project, index }) {
        return (
<div
    className="project-card"
    data-aos="fade-up"
    data-aos-delay={index * 150}>
            <div className="project-image">
                <img
                    src={project.image}
                    alt={project.title}
                />
            </div>

            <div className="project-content">

                <div className="project-top">

                    <h3>{project.title}</h3>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                    >
                        <FaArrowUpRightFromSquare />
                    </a>

                </div>

                <p>{project.description}</p>

                <div className="project-divider"></div>

                <div className="project-tech">

                    {project.technologies.map((tech, index) => {
                        const Icon = tech.icon;

                        return (
                            <span key={index}>
                                <span className="tech-icon">
                                    <Icon />
                                </span>

                                <span className="tech-name">
                                    {tech.name}
                                </span>
                            </span>
                        );
                    })}

                </div>


            </div>

        </div>
    );
}

export default ProjectCard;