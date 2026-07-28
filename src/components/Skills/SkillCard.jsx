function SkillCard({ skill, index }) {

    const Icon = skill.icon;

    return (
        <div
            className="skill-card"
            data-aos="zoom-in"
            data-aos-delay={index * 100}>

            <div className="skill-icon">
                <Icon />
            </div>

            <h3>{skill.name}</h3>

            <div className="skill-bottom"></div>

        </div>
    );
}

export default SkillCard;