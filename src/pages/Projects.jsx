import React from 'react';
import { ProjectGrid } from '../components/ProjectGrid';

export const Projects = () => {
    return (
        <div className="projects-page container" style={{ padding: '3rem 1.5rem' }}>
            <div className="section-header">
                <span className="section-subtitle">Portfolio Showcase</span>
                <h1 className="section-title">Data &amp; BI Projects</h1>
                <p className="section-description">
                    Real-world analytical projects — Power BI dashboards, SQL investigations, Python EDA notebooks, and more — organized by category.
                </p>
            </div>

            <ProjectGrid />
        </div>
    );
};
