import "./Skills.css";

import { skills } from "../../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
    return (
        <section
            className="skills-section"
            id="skills">

            <div className="container">

                <div className="skills-header" data-aos="fade-up" >

                    <h2>
                        Technical <span>Expertise</span>
                    </h2>

                    <div className="skills-line"></div>

                </div>

                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">

                    {skills.map((skill, index) => (

                        <div key={index} className="col">
                            <SkillCard
                                key={index}
                                skill={skill}
                                index={index} />                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skills;