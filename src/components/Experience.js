import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import ProjectCard from "./ProjectCard.js"
import ToolSkillCard from "./ToolAndSkillCard.js"

const Experience = () => {
    const [showCard, setShowCard] = useState();
    const [isActive, setActive] = useState('')

    useEffect(() => {
        setShowCard('project'); // menampilkan (ProjectCard) secara default
        setActive('project'); // class aktif untuk 'project'
    }, []);

    const handleClick = (card) => {
        setShowCard(card);
        handleActive(card);
    }

    const handleActive = (active) => {
        setActive(active);
    }

    return (
    <>
        <div class="experience">
            <div class="xp-link">
                <p id="project" className={isActive === 'project' ? 'active' : ''} onClick={() => handleClick('project')}>
                    <Link href>Projects</Link>
                </p>
                <p id="tool" className={isActive === 'tool' ? 'active' : ''} onClick={() => handleClick('tool')}>
                    <Link href>Tools & Skills</Link>
                </p>
            </div>
            <div id="showing-card">
                {(!showCard || (showCard !== 'project' && showCard !== 'tool')) && <ProjectCard />}
                {showCard === 'project' && <ProjectCard/>}
                {showCard === 'tool' && <ToolSkillCard/>}
            </div>
        </div>
    </>
    )
}

export default Experience;