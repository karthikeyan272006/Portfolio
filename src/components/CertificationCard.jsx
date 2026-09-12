import React from 'react';
import { Award, ExternalLink, Calendar, Download, FileText } from 'lucide-react';

export const CertificationCard = ({ cert }) => {
    const { name, provider, year, type, fileUrl, skills, description } = cert;

    return (
        <div className="cert-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', marginBottom: '1rem' }}>
                <div className="cert-icon-box">
                    <Award size={26} />
                </div>

                <div className="cert-content" style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.35rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--accent-primary)', letterSpacing: '0.05em' }}>
                            {type || 'Certificate'}
                        </span>
                        <span style={{ fontSize: '0.825rem', fontWeight: '600', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                            <Calendar size={13} /> {year}
                        </span>
                    </div>

                    <h3 className="cert-title" style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                        {name}
                    </h3>
                    <p className="cert-provider" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                        {provider}
                    </p>
                </div>
            </div>

            {description && (
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.5' }}>
                    {description}
                </p>
            )}

            {skills && skills.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem', marginTop: 'auto' }}>
                    {skills.map((skill, idx) => (
                        <span key={idx} style={{
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            padding: '0.2rem 0.6rem',
                            borderRadius: 'var(--radius-md)',
                            backgroundColor: 'var(--bg-tertiary)',
                            color: 'var(--text-secondary)',
                            border: '1px solid var(--border-color)'
                        }}>
                            {skill}
                        </span>
                    ))}
                </div>
            )}

            <div className="cert-footer" style={{ marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px dashed var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                {fileUrl ? (
                    <>
                        <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                        >
                            <ExternalLink size={14} /> View Certificate (PDF)
                        </a>
                        <a
                            href={fileUrl}
                            download
                            className="btn btn-outline btn-sm"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                        >
                            <Download size={14} /> Download PDF
                        </a>
                    </>
                ) : (
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                        <FileText size={14} /> PDF Document
                    </span>
                )}
            </div>
        </div>
    );
};


