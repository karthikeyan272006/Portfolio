import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export const SkillCard = ({ category }) => {
    const { category: title, description, skills = [] } = category;

    const renderIcon = (iconName) => {
        const IconComponent = Icons[iconName] || Icons.Code;
        return <IconComponent size={16} />;
    };

    // Skill level default mapping if not specified
    const getSkillLevel = (skillName) => {
        const name = skillName.toLowerCase();
        if (name.includes('sql') || name.includes('power bi') || name.includes('excel') || name.includes('pandas')) return 92;
        if (name.includes('python') || name.includes('dax') || name.includes('cleaning') || name.includes('eda')) return 88;
        if (name.includes('git') || name.includes('tableau') || name.includes('statistics')) return 82;
        return 85;
    };

    return (
        <motion.div
            className="skill-category-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, borderColor: 'var(--accent-primary)', boxShadow: 'var(--shadow-glow)' }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div className="skill-category-header" style={{ marginBottom: '0.5rem' }}>
                <h3 className="skill-category-title" style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                    {title}
                </h3>
            </div>
            <p className="skill-category-desc" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                {description}
            </p>

            <div className="skills-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {skills.map((skill, idx) => {
                    const level = getSkillLevel(skill.name);
                    return (
                        <div key={idx} style={{ width: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                                    <span style={{ color: 'var(--accent-primary)', display: 'flex' }}>
                                        {renderIcon(skill.icon)}
                                    </span>
                                    <span>{skill.name}</span>
                                </div>
                                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontWeight: '700' }}>
                                    {level}%
                                </span>
                            </div>

                            {/* Animated Skill Meter Bar */}
                            <div
                                style={{
                                    height: '6px',
                                    width: '100%',
                                    backgroundColor: 'var(--bg-tertiary)',
                                    borderRadius: 'var(--radius-full)',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}
                            >
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.1 + idx * 0.05, ease: 'easeOut' }}
                                    style={{
                                        height: '100%',
                                        background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                                        borderRadius: 'var(--radius-full)'
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};
