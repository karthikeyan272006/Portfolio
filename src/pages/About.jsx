import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personal';
import { ProfileAvatar } from '../components/ProfileAvatar';
import * as Icons from 'lucide-react';
import { UserCheck, Target, Award, Sparkles } from 'lucide-react';

export const About = () => {
    const renderIcon = (iconName) => {
        const IconComponent = Icons[iconName] || Icons.BarChart2;
        return <IconComponent size={22} />;
    };

    return (
        <motion.div
            className="about-page container"
            style={{ padding: '3rem 1.5rem 5rem 1.5rem' }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="section-header">
                <span className="section-subtitle">
                    <UserCheck size={14} style={{ display: 'inline', marginRight: '4px' }} /> About Me
                </span>
                <h1 className="section-title">Analytical Mind, Business Focused</h1>
                <p className="section-description">
                    Dedicated to discovering patterns, building automated intelligence pipelines, and supporting executive decision-making.
                </p>
            </div>

            {/* About Profile & Bio Flex/Grid Section */}
            <motion.div
                className="about-bio-container"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem',
                    alignItems: 'center',
                    maxWidth: '1000px',
                    margin: '0 auto 4rem auto',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2.5rem',
                    boxShadow: 'var(--shadow-md)'
                }}
            >
                {/* Circular Profile Avatar Container */}
                <div style={{ textAlign: 'center' }}>
                    <ProfileAvatar size="lg" showBadge={true} />
                    <h3 style={{ marginTop: '1.25rem', fontSize: '1.35rem', fontWeight: '800', color: 'var(--text-primary)' }}>
                        {personalData.name}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--accent-primary)', fontWeight: '700' }}>
                        Data & Business Analyst
                    </p>
                </div>

                {/* Bio Content */}
                <div className="about-bio-text">
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        Driven by Insight & Accuracy
                    </h3>
                    {personalData.aboutBio.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} style={{ fontSize: '1.025rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
                            {paragraph}
                        </p>
                    ))}

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                        <span className="badge" style={{ padding: '0.4rem 0.85rem' }}>
                            <Target size={14} /> Problem Solver
                        </span>
                        <span className="badge" style={{ padding: '0.4rem 0.85rem' }}>
                            <Sparkles size={14} /> Data Storyteller
                        </span>
                        <span className="badge" style={{ padding: '0.4rem 0.85rem' }}>
                            <Award size={14} /> BI Specialist
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* What I Do Section */}
            <div style={{ marginTop: '4rem' }}>
                <div className="section-header">
                    <span className="section-subtitle">Services & Expertise</span>
                    <h2 className="section-title">What I Do</h2>
                    <p className="section-description">
                        End-to-end data analytics capabilities designed to empower organization decision-making.
                    </p>
                </div>

                <div className="what-i-do-grid">
                    {personalData.whatIDo.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="service-card"
                            whileHover={{ y: -5, borderColor: 'var(--accent-primary)', boxShadow: 'var(--shadow-md)' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                        >
                            <div className="service-icon-box">
                                {renderIcon(item.icon)}
                            </div>
                            <h3 className="service-title">{item.title}</h3>
                            <p className="service-desc">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
