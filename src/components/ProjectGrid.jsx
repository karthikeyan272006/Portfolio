import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { categories, sampleDemoProject } from '../data/projects';
import { FolderPlus, Sparkles } from 'lucide-react';

export const ProjectGrid = ({ projects = [] }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showDemo, setShowDemo] = useState(false);

    const displayProjects = showDemo ? [...projects, sampleDemoProject] : projects;

    const filteredProjects = selectedCategory === 'All'
        ? displayProjects
        : displayProjects.filter(p => p.category === selectedCategory);

    return (
        <div className="project-grid-wrapper">
            {/* Category Filter Tabs with Motion Layout Indicator */}
            <div className="projects-filter-bar" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                {categories.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`filter-btn ${isActive ? 'active' : ''}`}
                            style={{ position: 'relative', cursor: 'pointer' }}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeFilterIndicator"
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        borderRadius: 'var(--radius-full)',
                                        backgroundColor: 'var(--accent-primary)',
                                        zIndex: -1,
                                    }}
                                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                                />
                            )}
                            <span style={{ color: isActive ? '#ffffff' : 'inherit', position: 'relative', zIndex: 1 }}>
                                {cat}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Grid or Empty State with AnimatePresence */}
            <motion.div layout className="projects-grid">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    ) : (
                        <motion.div
                            key="empty-state"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="empty-projects-state"
                            style={{ gridColumn: '1 / -1' }}
                        >
                            <div className="empty-icon-box">
                                <FolderPlus size={32} />
                            </div>
                            <h3>No Projects in this Category Yet</h3>
                            <p style={{ margin: '0.75rem 0 1.5rem 0', color: 'var(--text-secondary)' }}>
                                You can add custom project records to <code>src/data/projects.js</code> or click below to preview sample data analytics projects!
                            </p>
                            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <button
                                    onClick={() => {
                                        setShowDemo(true);
                                        setSelectedCategory('All');
                                    }}
                                    className="btn btn-primary btn-sm"
                                >
                                    <Sparkles size={14} /> Preview Sample Analytics Project
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {showDemo && (
                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <button
                        onClick={() => setShowDemo(false)}
                        className="btn btn-outline btn-sm"
                    >
                        Hide Demo Preview
                    </button>
                </div>
            )}
        </div>
    );
};
