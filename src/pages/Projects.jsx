import React from 'react';
import { getProjects } from '../data/projects';
import { ProjectGrid } from '../components/ProjectGrid';

export const Projects = () => {
    const allProjects = getProjects();

    return (
        <div className="projects-page container" style={{ padding: '3rem 1.5rem' }}>
            <div className="section-header">
                <span className="section-subtitle">Portfolio Showcase</span>
                <h1 className="section-title">Data & BI Projects</h1>
                <p className="section-description">
                    Real-world data analytical investigations, SQL queries, Python EDA notebooks, and interactive Power BI dashboards.
                </p>
            </div>

            <ProjectGrid projects={allProjects} />
        </div>
    );
};
