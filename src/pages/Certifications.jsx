import React from 'react';
import { certificationsData } from '../data/certifications';
import { CertificationCard } from '../components/CertificationCard';

export const Certifications = () => {
    return (
        <div className="certifications-page container" style={{ padding: '3rem 1.5rem' }}>
            <div className="section-header">
                <span className="section-subtitle">Credentials</span>
                <h1 className="section-title">Certifications</h1>
                <p className="section-description">
                    Verified professional certifications and technical domain accreditations.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
                {certificationsData.map((cert) => (
                    <CertificationCard key={cert.id} cert={cert} />
                ))}
            </div>
        </div>
    );
};
