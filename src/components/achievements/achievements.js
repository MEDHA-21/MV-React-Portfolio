import React from 'react';
import './achievements.css';
import achievementsData from "../../assets/data.json";

const AchievementCard = ({ title, description }) => {
    return (
        <div className="achievement-card">
            <div className="achievement-content">
                <h2 className="achievement-title">{title}</h2>
                <p className="achievement-description">{description}</p>
            </div>
        </div>
    );
};

function Achievements() {
    return (
        <section id='achievements'>
            <p className="section__text__p1">Explore My</p>
            <h1 className="title">Achievements</h1>
            <div className="achievements-container">
                {achievementsData.Achievements.map((achievement, index) => (
                    <AchievementCard
                        key={index}
                        title={achievement.title}
                        description={achievement.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Achievements;
