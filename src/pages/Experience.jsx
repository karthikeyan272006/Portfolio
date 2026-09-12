import React from 'react';
import { experienceData } from '../data/experience';
import { Timeline } from '../components/Timeline';

export const Experience = () => {
    return (
        <div className="experience-page container" style={{ padding: '3rem 1.5rem' }}>
            <div className="section-header">
                <span className="section-subtitle">Career History</span>
                <h1 className="section-title">Work Experience</h1>
                <p className="section-description">
                    Professional experience, analytical responsibilities, and key achievements.
                </p>
            </div>

            <Timeline items={experienceData} type="experience" />
        </div>
    );
};


