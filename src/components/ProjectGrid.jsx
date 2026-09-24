import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { PROJECT_SECTIONS, getProjectsBySection } from '../data/projects';

const ALL_KEY = 'All';

export const ProjectGrid = () => {
    const [activeFilter, setActiveFilter] = useState(ALL_KEY);

    const sections = getProjectsBySection();

    // Filter tabs: All + each section that has projects
    const filterTabs = [
        { key: ALL_KEY, label: 'All Projects', icon: 'LayoutGrid' },
        ...sections.map(s => ({ key: s.key, label: s.label, icon: s.icon }))
    ];

    // Sections to render based on active filter
    const visibleSections = activeFilter === ALL_KEY
        ? sections
        : sections.filter(s => s.key === activeFilter);

    const renderIcon = (name, size = 16) => {
        const Icon = Icons[name] || Icons.Folder;
        return <Icon size={size} />;
    };

    return (
        <div className="project-grid-wrapper">

            {/* ── Filter Tab Bar ─────────────────────────────────────────── */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '3rem',
                }}
            >
                {filterTabs.map(tab => {
                    const isActive = activeFilter === tab.key;
                    return (
                        <motion.button
                            key={tab.key}
                            onClick={() => setActiveFilter(tab.key)}
                            whileHover={{ scale: 1.06, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                padding: '0.45rem 1.1rem',
                                borderRadius: '999px',
                                border: isActive
                                    ? '1.5px solid var(--accent-primary)'
                                    : '1.5px solid var(--border-color)',
                                background: isActive
                                    ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
                                    : 'var(--bg-card)',
                                color: isActive ? '#fff' : 'var(--text-secondary)',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                outline: 'none',
                                boxShadow: isActive ? '0 4px 16px var(--accent-primary)44' : 'none',
                                transition: 'all 0.2s',
                                position: 'relative',
                            }}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="filterPill"
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        borderRadius: '999px',
                                        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                        zIndex: 0,
                                    }}
                                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                                />
                            )}
                            <span style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                                {renderIcon(tab.icon, 14)}
                                {tab.label}
                            </span>
                        </motion.button>
                    );
                })}
            </div>

            {/* ── Category Sections ──────────────────────────────────────── */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFilter}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                >
                    {visibleSections.length === 0 ? (
                        /* ── Empty state ── */
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="empty-projects-state"
                            style={{ textAlign: 'center', padding: '4rem 2rem' }}
                        >
                            <div className="empty-icon-box" style={{ margin: '0 auto 1rem' }}>
                                <Icons.FolderPlus size={32} />
                            </div>
                            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>No Projects Here Yet</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                Add projects to <code>src/data/projects.js</code> with the matching category.
                            </p>
                        </motion.div>
                    ) : (
                        visibleSections.map((section, sIdx) => (
                            <motion.section
                                key={section.key}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: sIdx * 0.07, duration: 0.35, ease: 'easeOut' }}
                                style={{ marginBottom: '3.5rem' }}
                            >
                                {/* Section Header */}
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.7rem',
                                        marginBottom: '1.5rem',
                                        paddingBottom: '0.75rem',
                                        borderBottom: '1px solid var(--border-color)',
                                    }}
                                >
                                    <span
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '10px',
                                            background: 'linear-gradient(135deg, var(--accent-primary)22, var(--accent-secondary)18)',
                                            border: '1px solid var(--accent-primary)44',
                                            color: 'var(--accent-primary)',
                                            flexShrink: 0,
                                        }}
                                    >
                                        {renderIcon(section.icon, 18)}
                                    </span>
                                    <h2
                                        style={{
                                            fontSize: '1.25rem',
                                            fontWeight: '800',
                                            color: 'var(--text-primary)',
                                            margin: 0,
                                        }}
                                    >
                                        {section.label}
                                    </h2>
                                    <span
                                        style={{
                                            marginLeft: 'auto',
                                            fontSize: '0.78rem',
                                            fontWeight: '600',
                                            color: 'var(--accent-primary)',
                                            background: 'var(--accent-primary)18',
                                            padding: '0.2rem 0.65rem',
                                            borderRadius: '999px',
                                            border: '1px solid var(--accent-primary)33',
                                        }}
                                    >
                                        {section.projects.length} {section.projects.length === 1 ? 'project' : 'projects'}
                                    </span>
                                </div>

                                {/* Project Cards */}
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                                        gap: '1.75rem',
                                    }}
                                >
                                    <AnimatePresence>
                                        {section.projects.map((project, pIdx) => (
                                            <motion.div
                                                key={project.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                transition={{ delay: pIdx * 0.06, duration: 0.3 }}
                                            >
                                                <ProjectCard project={project} />
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </motion.section>
                        ))
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
