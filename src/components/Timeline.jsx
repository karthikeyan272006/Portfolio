import React from 'react';
import { MapPin, Award } from 'lucide-react';

export const Timeline = ({ items = [], type = 'experience' }) => {
    return (
        <div className="timeline">
            {items.map((item) => (
                <div key={item.id} className="timeline-item">
                    <div className="timeline-marker" />
                    <div className="timeline-card">
                        <div className="timeline-header">
                            <div>
                                <h3 className="timeline-role">
                                    {type === 'experience' ? item.role : item.degree}
                                </h3>
                                <div className="timeline-company">
                                    {type === 'experience' ? item.company : item.institution}
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {item.grade && (
                                    <span className="timeline-grade-badge">
                                        <Award size={13} /> {item.grade}
                                    </span>
                                )}
                                <span className="timeline-duration">{item.duration}</span>
                            </div>
                        </div>

                        {item.location && (
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.75rem' }}>
                                <MapPin size={14} /> {item.location}
                            </div>
                        )}

                        {item.details && (
                            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: '1.6' }}>
                                {item.details}
                            </p>
                        )}

                        {(item.highlights || item.responsibilities) && (item.highlights || item.responsibilities).length > 0 && (
                            <ul className="timeline-bullets">
                                {(item.highlights || item.responsibilities).map((bullet, idx) => (
                                    <li key={idx}>{bullet}</li>
                                ))}
                            </ul>
                        )}

                        {item.isPlaceholder && (
                            <div className="placeholder-notice">
                                <span>⚡ Editable placeholder - update in src/data/{type}.js</span>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};



