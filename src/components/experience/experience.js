import React, { useState } from 'react';
import experiencesData from '../../assets/data.json';
import './experience.css';

const ExperienceCard = ({
    projectName,
    role,
    timePeriod,
    description,
    responsibilities,
    toolsUsed,
}) => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleLearnMoreClick = () => {
        setPopupOpen(true);
    };

    const handlePopupClose = () => {
        setPopupOpen(false);
    };

    return (
        <div className="experience-card">
            <h3 className="expProjectName">{projectName}</h3>
            <h3>{role}</h3>
            <p>{timePeriod}</p>

            <button onClick={handleLearnMoreClick} className="learMoreBtn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                </svg>

                <div class="text">
                        Learn More
                </div>
            </button>

            {isPopupOpen && (
                <div className="popup">
                    <h2>{projectName}</h2>
                    <h2>{role}</h2>
                    <p>{description}</p>
                    <br />
                    <h4 className="linkText">Responsibilities:</h4>
                    <div dangerouslySetInnerHTML={{ __html: responsibilities }} />
                    <br />
                    <h4 className="linkText">Tools Used:</h4>
                    <p>{toolsUsed}</p>

                    {/* Use a button for Close */}
                    <button onClick={handlePopupClose} className="closeText">
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

function Experience() {
    return (
        <section id="experience">
            <div>
                <p className="section__text__p1">Explore My</p>
                <h1 className="title">Experience</h1>
            </div>
            <div className="experience-section">
                {experiencesData.Experiences.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        projectName={experience['Project Name']}
                        role={experience.Role}
                        timePeriod={experience['Time Period']}
                        description={experience.Description}
                        responsibilities={experience.Responsibilities}
                        toolsUsed={experience['Tools Used']}
                    />
                ))}
            </div>
        </section>
    );
}

export default Experience;
