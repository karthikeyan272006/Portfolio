import React from 'react';
import { skillCategories } from '../data/skills';
import { SkillCard } from '../components/SkillCard';

export const Skills = () => {
    return (
        <div className="skills-page container" style={{ padding: '3rem 1.5rem' }}>
            <div className="section-header">
                <span className="section-subtitle">Technical Proficiency</span>
                <h1 className="section-title">Skills & Toolstack</h1>
                <p className="section-description">
                    Categorized analytical toolkit across programming, SQL database management, BI visualization, and cloud environments.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
                {skillCategories.map((category) => (
                    <SkillCard key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
};
