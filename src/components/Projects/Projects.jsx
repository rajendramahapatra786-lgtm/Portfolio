import "./Projects.css";

import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <section
            className="projects-section"
            id="projects">


            <div className="container" data-aos="fade-up">

                <div className="projects-header">

                    <h2>
                        Projec<span>ts</span>
                    </h2>

                    <div className="projects-line"></div>

                </div>

                <div className="row g-4">

                    {projects.map((project, index) => (

                        <div
                            key={index}
                            className="col-lg-4 col-md-6"
                        >
                            <ProjectCard
                                project={project}
                                index={index} />
                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Projects;