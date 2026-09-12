import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

export const ProjectCard = ({ project }) => {
    const {
        id,
        title,
        category,
        description,
        tools = [],
        image,
        github,
        demo
    } = project;

    const displayImage = image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';

    return (
        <motion.article
            className="project-card"
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -8, boxShadow: 'var(--shadow-glow)' }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div className="project-image-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
                <motion.img
                    src={displayImage}
                    alt={title}
                    className="project-image"
                    loading="lazy"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.3 }}
                />
                {category && (
                    <span
                        className="project-category-tag"
                        style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            backgroundColor: 'rgba(15, 23, 42, 0.75)',
                            backdropFilter: 'blur(8px)',
                            color: 'var(--accent-primary)',
                            padding: '0.3rem 0.75rem',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            border: '1px solid var(--accent-border)'
                        }}
                    >
                        {category}
                    </span>
                )}
            </div>

            <div className="project-card-body" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 className="project-card-title" style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    {title}
                </h3>
                <p className="project-card-desc" style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', flex: 1 }}>
                    {description}
                </p>

                {tools.length > 0 && (
                    <div className="project-tech-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                        {tools.map((tool, idx) => (
                            <span key={idx} className="tech-tag">
                                {tool}
                            </span>
                        ))}
                    </div>
                )}

                <div className="project-card-actions" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <Link to={`/projects/${id}`} className="btn btn-primary btn-sm">
                        View Details <ArrowRight size={14} />
                    </Link>

                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary btn-sm"
                            title="View GitHub Repository"
                        >
                            <Github size={14} /> Code
                        </a>
                    )}

                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-sm"
                            title="View Live Dashboard / Demo"
                        >
                            <ExternalLink size={14} /> Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
};
