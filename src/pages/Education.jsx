import React from 'react';
import { educationData, academicAchievements } from '../data/education';
import { Timeline } from '../components/Timeline';
import { Trophy, Laptop, Award, Medal } from 'lucide-react';

const iconMap = {
    Trophy: Trophy,
    Laptop: Laptop,
    Award: Award,
    Medal: Medal
};

export const Education = () => {
    return (
        <div className="education-page container" style={{ padding: '3rem 1.5rem' }}>
            <div className="section-header">
                <span className="section-subtitle">Academic Background</span>
                <h1 className="section-title">Education</h1>
                <p className="section-description">
                    Degrees, academic institution history, and foundational coursework.
                </p>
            </div>

            <Timeline items={educationData} type="education" />

            {/* Academic Honors & Achievements Section */}
            {academicAchievements && academicAchievements.length > 0 && (
                <div className="education-achievements-section" style={{ marginTop: '4.5rem' }}>
                    <div className="section-header" style={{ marginBottom: '2rem' }}>
                        <span className="section-subtitle">Honors & Recognition</span>
                        <h2 className="section-title" style={{ fontSize: '2rem' }}>Academic Achievements</h2>
                        <p className="section-description">
                            Awards, rank distinctions, and recognitions earned during my academic studies.
                        </p>
                    </div>

                    <div className="achievements-grid">
                        {academicAchievements.map((item) => {
                            const IconComponent = iconMap[item.icon] || Trophy;
                            return (
                                <div key={item.id} className="achievement-card">
                                    <div className="achievement-icon-wrapper">
                                        <IconComponent size={26} />
                                    </div>
                                    <div className="achievement-content">
                                        <div className="achievement-top">
                                            <span className="achievement-category">{item.category}</span>
                                            {item.badge && <span className="achievement-badge">{item.badge}</span>}
                                        </div>
                                        <h3 className="achievement-title">{item.title}</h3>
                                        <div className="achievement-institution">{item.institution}</div>
                                        <p className="achievement-desc">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

