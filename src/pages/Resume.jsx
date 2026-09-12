import React from 'react';
import { Download, FileText, ExternalLink, Mail, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/personal';

export const Resume = () => {
    return (
        <div className="resume-page container" style={{ padding: '4rem 1.5rem', maxWidth: '760px' }}>
            <div className="section-header" style={{ marginBottom: '2.5rem' }}>
                <span className="section-subtitle">Curriculum Vitae</span>
                <h1 className="section-title">Resume Download</h1>
                <p className="section-description" style={{ maxWidth: '580px', margin: '0.75rem auto 0 auto' }}>
                    Download my latest official resume to review my qualifications, technical skills, and practical experience in Data & Business Intelligence.
                </p>
            </div>

            <div className="resume-card" style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '3rem 2rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--accent-subtle)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    margin: '0 auto 1.5rem auto'
                }}>
                    <FileText size={36} />
                </div>

                <h2 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    {personalData.name} - Resume
                </h2>

                <p style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--accent-primary)', marginBottom: '1.25rem' }}>
                    {personalData.headline}
                </p>

                <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', marginBottom: '2.25rem', lineHeight: '1.6', maxWidth: '540px', margin: '0 auto 2.25rem auto' }}>
                    Click below to download the PDF resume or open it directly in a new tab.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                    <a
                        href={personalData.socials.resumeFile}
                        download="Karthikeyan_Resume.pdf"
                        className="btn btn-primary btn-lg"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 2rem', fontSize: '1.05rem' }}
                    >
                        <Download size={20} /> Download Resume (PDF)
                    </a>
                    <a
                        href={personalData.socials.resumeFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-lg"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.75rem', fontSize: '1rem' }}
                    >
                        <ExternalLink size={18} /> View PDF
                    </a>
                </div>

                {/* Recruiter Direct Contact Callout */}
                <div style={{
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem'
                }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        Looking to connect or discuss opportunities?
                    </p>
                    <a
                        href={`mailto:${personalData.socials.email}`}
                        className="btn btn-ghost btn-sm"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: '600' }}
                    >
                        <Mail size={16} /> {personalData.socials.email}
                    </a>
                </div>
            </div>
        </div>
    );
};
