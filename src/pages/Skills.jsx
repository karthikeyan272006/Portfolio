import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { SkillCard } from '../components/SkillCard';

const ALL_TAB = 'All';

export const Skills = () => {
    const [activeTab, setActiveTab] = useState(ALL_TAB);

    const tabs = [ALL_TAB, ...skillCategories.map(c => c.category)];

    const filtered = activeTab === ALL_TAB
        ? skillCategories
        : skillCategories.filter(c => c.category === activeTab);

    return (
        <div className="skills-page container" style={{ padding: '3rem 1.5rem' }}>
            {/* Section Header */}
            <div className="section-header">
                <span className="section-subtitle">Technical Proficiency</span>
                <h1 className="section-title">Skills &amp; Toolstack</h1>
                <p className="section-description">
                    Categorized analytical toolkit across programming, SQL database management, BI visualization, and cloud environments.
                </p>
            </div>

            {/* Filter Tabs */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    justifyContent: 'center',
                    marginBottom: '2.5rem',
                }}
            >
                {tabs.map((tab) => {
                    const isActive = activeTab === tab;
                    return (
                        <motion.button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            whileHover={{ scale: 1.06, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '0.45rem 1.2rem',
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
                                transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                                boxShadow: isActive ? '0 4px 16px var(--accent-primary)44' : 'none',
                            }}
                        >
                            {tab}
                        </motion.button>
                    );
                })}
            </div>

            {/* Cards Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: '2rem',
                    }}
                >
                    {filtered.map((category) => (
                        <SkillCard key={category.id} category={category} />
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
