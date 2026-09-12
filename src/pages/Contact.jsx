import React from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { personalData } from '../data/personal';
import { ContactForm } from '../components/ContactForm';

// Helper to ensure all external links have a proper http/https scheme for href
const formatUrl = (url) => {
    if (!url) return '#';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:')) return url;
    return `https://${url}`;
};

// Helper to remove https:// and www. for clean visible text
const formatDisplayUrl = (url) => {
    if (!url) return '';
    return url.replace(/^https?:\/\/(www\.)?/, '');
};

export const Contact = () => {
    const contactLinks = [
        {
            id: 'email',
            label: 'Email',
            value: personalData.socials.email,
            displayValue: personalData.socials.email,
            href: `mailto:${personalData.socials.email}`,
            icon: Mail,
            isExternal: false,
        },
        {
            id: 'linkedin',
            label: 'LinkedIn',
            value: personalData.socials.linkedin,
            displayValue: formatDisplayUrl(personalData.socials.linkedin),
            href: formatUrl(personalData.socials.linkedin),
            icon: Linkedin,
            isExternal: true,
        },
        {
            id: 'github',
            label: 'GitHub',
            value: personalData.socials.github,
            displayValue: formatDisplayUrl(personalData.socials.github),
            href: formatUrl(personalData.socials.github),
            icon: Github,
            isExternal: true,
        },
    ];

    return (
        <div className="contact-page container" style={{ padding: '3rem 1.5rem' }}>
            <div className="section-header">
                <span className="section-subtitle">Get In Touch</span>
                <h1 className="section-title">Let's Connect</h1>
                <p className="section-description">
                    {personalData.contactText}
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
                {/* Contact Info & Direct Interactive Links */}
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                        Direct Links & Contact
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {contactLinks.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    target={item.isExternal ? '_blank' : undefined}
                                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                                    className="glass-card"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '1rem',
                                        padding: '1.25rem 1.5rem',
                                        borderRadius: 'var(--radius-lg)',
                                        border: '1px solid var(--border-color)',
                                        background: 'var(--bg-card)',
                                        textDecoration: 'none',
                                        transition: 'all 0.25s ease',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border-color)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', overflow: 'hidden' }}>
                                        <div className="service-icon-box" style={{ margin: 0, flexShrink: 0 }}>
                                            <IconComponent size={22} />
                                        </div>
                                        <div style={{ overflow: 'hidden' }}>
                                            <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                                {item.label}
                                            </strong>
                                            <span style={{
                                                fontWeight: '600',
                                                color: 'var(--accent-primary)',
                                                fontSize: '1rem',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                display: 'block'
                                            }}>
                                                {item.displayValue}
                                            </span>
                                        </div>
                                    </div>
                                    <ExternalLink size={18} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Interactive Contact Form */}
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                        Send a Direct Message
                    </h2>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

