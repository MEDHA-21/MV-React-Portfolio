import React from 'react';
import "./skills.css";
import checkmark from "../../icons/checkmark.png";
import skillsData from "../../assets/data.json";

function Skills() {
    return (
        <section id="skills">
            <div>
                <p className="section__text__p1">Explore My</p>
                <h1 className="title">Skills</h1>
            </div>
            <div className="skills-details-container">
                <div className="about-containers">
                    {skillsData.Skills.map((category, index) => (
                        <div key={index} className="details-container">
                            <h2 className="skills-sub-title">{category.title}</h2>
                            <div className="article-container">
                                {category.skills.map((skill, skillIndex) => (
                                    <article key={skillIndex}>
                                        <img
                                            src={checkmark}
                                            alt="skills icon"
                                            className="icon"
                                        />
                                        <div>
                                            <h3>{skill.name}</h3>
                                            <p>{skill.level}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
