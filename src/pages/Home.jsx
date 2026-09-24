import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowRight, FileText, Mail, Github, Linkedin,
    Database, BarChart3, Terminal, Award, Layers, TrendingUp, Sparkles
} from 'lucide-react';
import { personalData } from '../data/personal';
import { ProfileAvatar } from '../components/ProfileAvatar';

export const Home = () => {
    // Stagger animation container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 260, damping: 20 }
        },
    };

    // Stats highlight
    const statsData = [
        { label: "Data Projects Completed", value: "5+", icon: Layers, color: "#3b82f6" },
        { label: "Records Cleaned & Analyzed", value: "500K+", icon: Database, color: "#6366f1" },
        { label: "BI Dashboards Developed", value: "10+", icon: BarChart3, color: "#06b6d4" },
        { label: "SQL & Python Efficiency", value: "99%", icon: TrendingUp, color: "#10b981" },
    ];

    return (
        <motion.div
            className="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Hero Section */}
            <section className="hero-section container" style={{ padding: '4rem 1.5rem 3rem 1.5rem' }}>
                <motion.div
                    className="hero-grid-layout"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(280px, 320px) 1fr',
                        gap: '3.5rem',
                        alignItems: 'center',
                        maxWidth: '1100px',
                        margin: '0 auto',
                    }}
                >
                    {/* Hero Left Column: Circular Profile Avatar */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <ProfileAvatar size="xl" showBadge={true} />
                    </motion.div>

                    {/* Hero Right Column: Intro & Headline */}
                    <motion.div
                        variants={itemVariants}
                        style={{ textAlign: 'left' }}
                    >
                        <motion.div className="hero-badge" whileHover={{ scale: 1.05 }}>
                            <Database size={15} /> Data / Business Intelligence Portfolio
                        </motion.div>

                        <h1 className="hero-title" style={{ textAlign: 'left', margin: '0.5rem 0' }}>
                            Hi, I'm <span className="gradient-text">{personalData.name}</span> 👋
                        </h1>

                        <h2 className="hero-subtitle" style={{ textAlign: 'left', fontSize: '1.4rem' }}>
                            {personalData.headline}
                        </h2>

                        <p className="hero-intro" style={{ textAlign: 'left', margin: '0 0 2rem 0', maxWidth: '680px' }}>
                            {personalData.shortIntro}
                        </p>

                        {/* CTAs */}
                        <div className="hero-cta-group" style={{ justifyContent: 'flex-start', margin: '0 0 2.5rem 0' }}>
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                <Link to="/projects" className="btn btn-primary btn-lg">
                                    Explore Projects <ArrowRight size={18} />
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                <Link to="/resume" className="btn btn-secondary btn-lg">
                                    <FileText size={18} /> View Resume
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                <Link to="/contact" className="btn btn-outline btn-lg">
                                    <Mail size={18} /> Contact Me
                                </Link>
                            </motion.div>
                        </div>

                        {/* Contact Info Chips - Clickable Direct Links with Clean Display Text */}
                        <div className="hero-placeholders" style={{ justifyContent: 'flex-start', padding: '0.85rem 1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                            <a
                                href={personalData.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="placeholder-item"
                                style={{ textDecoration: 'none', cursor: 'pointer', transition: 'transform 0.2s ease, color 0.2s ease' }}
                                title="Open GitHub Profile"
                            >
                                <Github size={16} />
                                <span>GitHub: <strong>{personalData.socials.github.replace(/^https?:\/\/(www\.)?/, '')}</strong></span>
                            </a>
                            <a
                                href={personalData.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="placeholder-item"
                                style={{ textDecoration: 'none', cursor: 'pointer', transition: 'transform 0.2s ease, color 0.2s ease' }}
                                title="Open LinkedIn Profile"
                            >
                                <Linkedin size={16} />
                                <span>LinkedIn: <strong>{personalData.socials.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</strong></span>
                            </a>
                            <a
                                href={`mailto:${personalData.socials.email}`}
                                className="placeholder-item"
                                style={{ textDecoration: 'none', cursor: 'pointer', transition: 'transform 0.2s ease, color 0.2s ease' }}
                                title="Send Email"
                            >
                                <Mail size={16} />
                                <span>Email: <strong>{personalData.socials.email}</strong></span>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Interactive Data Key Metrics Stats Bar */}
            <section className="container" style={{ margin: '1rem auto 3rem auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '1.25rem',
                    }}
                >
                    {statsData.map((stat, idx) => {
                        const StatIcon = stat.icon;
                        return (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -6, boxShadow: 'var(--shadow-glow)' }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="glass-card"
                                style={{
                                    padding: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: 'var(--radius-lg)'
                                }}
                            >
                                <div
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: 'var(--radius-md)',
                                        backgroundColor: 'var(--accent-subtle)',
                                        color: stat.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <StatIcon size={26} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                                        {stat.value}
                                    </div>
                                    <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: '600', marginTop: '0.2rem' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>

            {/* Quick Highlights Section */}
            <section className="container" style={{ margin: '4rem auto 4rem auto' }}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-subtitle">
                        <Sparkles size={14} style={{ display: 'inline', marginRight: '4px' }} /> Core Expertise
                    </span>
                    <h2 className="section-title">Turning Raw Data Into Business Strategy</h2>
                    <p className="section-description">
                        Specialized analytical skill set focused on structured query language, automated dashboards, and statistical decision frameworks.
                    </p>
                </motion.div>

                <div className="what-i-do-grid">
                    <motion.div
                        className="service-card"
                        whileHover={{ y: -6, borderColor: 'var(--accent-primary)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="service-icon-box">
                            <Terminal size={24} />
                        </div>
                        <h3 className="service-title">SQL Analytics</h3>
                        <p className="service-desc">
                            Advanced querying with Joins, Subqueries, CTEs, Window Functions, and stored procedures for relational databases.
                        </p>
                    </motion.div>

                    <motion.div
                        className="service-card"
                        whileHover={{ y: -6, borderColor: 'var(--accent-primary)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="service-icon-box">
                            <BarChart3 size={24} />
                        </div>
                        <h3 className="service-title">Power BI & DAX</h3>
                        <p className="service-desc">
                            Building automated, interactive BI dashboards, Star Schema data models, and complex DAX measures.
                        </p>
                    </motion.div>

                    <motion.div
                        className="service-card"
                        whileHover={{ y: -6, borderColor: 'var(--accent-primary)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="service-icon-box">
                            <Database size={24} />
                        </div>
                        <h3 className="service-title">Python Data Wrangling</h3>
                        <p className="service-desc">
                            Automating exploratory data analysis (EDA), cleaning missing data, and feature transformation using Pandas & NumPy.
                        </p>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

