import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

export const SkillCard = ({ category }) => {
    const { category: title, description, skills = [] } = category;
    const [activeSkill, setActiveSkill] = useState(null);

    const renderIcon = (iconName, size = 16) => {
        const IconComponent = Icons[iconName] || Icons.Code;
        return <IconComponent size={size} />;
    };

    return (
        <motion.div
            className="skill-category-card"
            initial={{ opacity: 0, y: 24 }}
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
            {/* Card header */}
            <div className="skill-category-header" style={{ marginBottom: '0.5rem' }}>
                <h3 className="skill-category-title" style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                    {title}
                </h3>
            </div>
            <p className="skill-category-desc" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                {description}
            </p>

            {/* Interactive skill badges */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.6rem',
                }}
            >
                {skills.map((skill, idx) => {
                    const isActive = activeSkill === idx;
                    return (
                        <motion.button
                            key={idx}
                            onClick={() => setActiveSkill(isActive ? null : idx)}
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.04, type: 'spring', stiffness: 300, damping: 22 }}
                            whileHover={{ scale: 1.08, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                padding: '0.42rem 0.85rem',
                                borderRadius: '999px',
                                border: isActive
                                    ? '1.5px solid var(--accent-primary)'
                                    : '1.5px solid var(--border-color)',
                                background: isActive
                                    ? 'linear-gradient(135deg, var(--accent-primary)22, var(--accent-secondary)18)'
                                    : 'var(--bg-tertiary)',
                                color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                                fontSize: '0.82rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                outline: 'none',
                                transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                                boxShadow: isActive ? '0 0 10px var(--accent-primary)44' : 'none',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Shimmer sweep on hover */}
                            <motion.span
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)',
                                    pointerEvents: 'none',
                                }}
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '200%' }}
                                transition={{ duration: 0.55, ease: 'easeInOut' }}
                            />
                            <span style={{ color: isActive ? 'var(--accent-primary)' : 'var(--accent-primary)', opacity: isActive ? 1 : 0.7, display: 'flex' }}>
                                {renderIcon(skill.icon, 14)}
                            </span>
                            {skill.name}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.span
                                        key="check"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                        style={{ display: 'flex', color: 'var(--accent-primary)' }}
                                    >
                                        {renderIcon('CheckCircle2', 13)}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    );
                })}
            </div>

            {/* Active skill highlight */}
            <AnimatePresence>
                {activeSkill !== null && (
                    <motion.div
                        key={activeSkill}
                        initial={{ opacity: 0, y: 6, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -4, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        style={{
                            marginTop: '1.1rem',
                            padding: '0.65rem 1rem',
                            borderRadius: 'var(--radius-md)',
                            background: 'linear-gradient(135deg, var(--accent-primary)14, var(--accent-secondary)10)',
                            border: '1px solid var(--accent-primary)44',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            overflow: 'hidden',
                        }}
                    >
                        <span style={{ color: 'var(--accent-primary)', display: 'flex' }}>
                            {renderIcon(skills[activeSkill]?.icon, 18)}
                        </span>
                        <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                            {skills[activeSkill]?.name}
                        </span>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginLeft: 'auto' }}>
                            ✦ selected
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
