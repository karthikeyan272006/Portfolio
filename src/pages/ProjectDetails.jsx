import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getProjectById } from '../data/projects';
import { personalData } from '../data/personal';
import {
    ArrowLeft,
    Github,
    ExternalLink,
    CheckCircle,
    TrendingUp,
    Database,
    Filter,
    BarChart2,
    PieChart,
    Lightbulb,
    Award,
    BarChart3,
    Code2,
    Download,
    Send,
    X,
    Mail,
    User,
    MessageSquare
} from 'lucide-react';

/* ─── Download Request Modal ─────────────────────────────────────────── */
const DownloadRequestModal = ({ project, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);

    const handleSend = () => {
        if (!name.trim() || !email.trim()) return;

        const subject = encodeURIComponent(
            `[Download Request] ${project.title} - Portfolio`
        );
        const body = encodeURIComponent(
            `Hi Karthikeyan,\n\nI would like to download / receive the project files for:\n\n` +
            `Project: ${project.title}\n` +
            `Category: ${project.category}\n\n` +
            `--- Requester Details ---\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message || 'No additional message.'}\n\n` +
            `Please send the files at your earliest convenience.\n\nThank you!`
        );

        window.open(
            `mailto:${personalData.socials.email}?subject=${subject}&body=${body}`,
            '_blank'
        );
        setSent(true);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-box"
                onClick={e => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Download Request"
            >
                {/* Modal Header */}
                <div className="modal-header">
                    <div className="modal-header-icon">
                        <Download size={20} />
                    </div>
                    <div>
                        <h2 className="modal-title">Request Project Files</h2>
                        <p className="modal-subtitle">
                            Fill in your details — Karthikeyan will receive your request via email.
                        </p>
                    </div>
                    <button className="modal-close-btn" onClick={onClose} aria-label="Close">
                        <X size={18} />
                    </button>
                </div>

                {sent ? (
                    <div className="modal-success">
                        <div className="modal-success-icon">✅</div>
                        <h3>Request Sent!</h3>
                        <p>
                            Your email client has opened with the request pre-filled.
                            Please send it to complete your download request.
                        </p>
                        <button className="btn btn-primary" onClick={onClose}>
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="modal-project-badge">
                            📊 {project.title}
                        </div>

                        <div className="modal-form">
                            <div className="modal-field">
                                <label htmlFor="req-name">
                                    <User size={14} /> Your Name *
                                </label>
                                <input
                                    id="req-name"
                                    type="text"
                                    placeholder="e.g. Priya Sharma"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="modal-field">
                                <label htmlFor="req-email">
                                    <Mail size={14} /> Your Email *
                                </label>
                                <input
                                    id="req-email"
                                    type="email"
                                    placeholder="e.g. priya@example.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="modal-field">
                                <label htmlFor="req-message">
                                    <MessageSquare size={14} /> Message (optional)
                                </label>
                                <textarea
                                    id="req-message"
                                    placeholder="Why do you need this project? Any specific files?"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    rows={3}
                                />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={onClose}>
                                Cancel
                            </button>
                            <button
                                className="btn btn-download"
                                onClick={handleSend}
                                disabled={!name.trim() || !email.trim()}
                            >
                                <Send size={15} /> Send Request
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

/* ─── Power BI Viewer Modal ──────────────────────────────────────────── */
const PowerBIModal = ({ project, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="powerbi-modal-box"
                onClick={e => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Power BI Dashboard"
            >
                <div className="modal-header">
                    <div className="modal-header-icon powerbi-icon">
                        <BarChart3 size={20} />
                    </div>
                    <div>
                        <h2 className="modal-title">{project.title}</h2>
                        <p className="modal-subtitle">Power BI Interactive Dashboard</p>
                    </div>
                    <button className="modal-close-btn" onClick={onClose} aria-label="Close">
                        <X size={18} />
                    </button>
                </div>

                {project.powerbiLink ? (
                    <div className="powerbi-frame-wrap">
                        <iframe
                            title={project.title}
                            src={project.powerbiLink}
                            frameBorder="0"
                            allowFullScreen
                            className="powerbi-iframe"
                        />
                    </div>
                ) : (
                    <div className="powerbi-placeholder">
                        <div className="powerbi-placeholder-icon">📊</div>
                        <h3>Dashboard Link Not Configured</h3>
                        <p>
                            To enable live Power BI viewing, add your{' '}
                            <strong>Publish-to-Web</strong> embed URL in{' '}
                            <code>src/data/projects.js</code> under the{' '}
                            <code>powerbiLink</code> field for this project.
                        </p>
                        <ol className="powerbi-steps">
                            <li>Open your report in Power BI Desktop / Service</li>
                            <li>Go to <strong>File → Publish to web (public)</strong></li>
                            <li>Copy the <strong>embed URL</strong> (iframe src)</li>
                            <li>Paste it in <code>projects.js → powerbiLink</code></li>
                        </ol>
                    </div>
                )}
            </div>
        </div>
    );
};

/* ─── Main ProjectDetails Page ───────────────────────────────────────── */
export const ProjectDetails = () => {
    const { id } = useParams();
    const project = getProjectById(id);
    const [showDownloadModal, setShowDownloadModal] = useState(false);
    const [showPowerBIModal, setShowPowerBIModal] = useState(false);

    if (!project) {
        return (
            <div className="container" style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
                <h2>Project Not Found</h2>
                <p style={{ margin: '1rem 0 2rem 0', color: 'var(--text-secondary)' }}>
                    The requested project could not be located.
                </p>
                <Link to="/projects" className="btn btn-primary">
                    <ArrowLeft size={16} /> Back to Projects Grid
                </Link>
            </div>
        );
    }

    const {
        title,
        category,
        description,
        tools = [],
        github,
        demo,
        powerbiLink,
        codeLink,
        objective,
        businessProblem,
        dataset,
        methodology = [],
        dataCleaning,
        analysis,
        visualizations = [],
        insights = [],
        recommendations = []
    } = project;

    const isPowerBI = category === 'Power BI';

    return (
        <>
            <div className="project-details-page container" style={{ padding: '3rem 1.5rem' }}>
                {/* Top Back Link */}
                <Link to="/projects" className="back-link">
                    <ArrowLeft size={16} /> Back to All Projects
                </Link>

                {/* Header Block */}
                <div className="project-detail-header">
                    <span className="section-subtitle">{category || 'Data Analytics'}</span>
                    <h1 className="project-detail-title">{title}</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                        {description}
                    </p>

                    {/* Meta Bar: Tools & Action Buttons */}
                    <div className="project-meta-bar">
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', flexGrow: 1 }}>
                            {tools.map((t, idx) => (
                                <span key={idx} className="tech-tag" style={{ fontSize: '0.85rem' }}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* ─── Primary Action Buttons ─── */}
                        <div className="project-action-buttons">
                            {/* View Dashboard (Power BI) */}
                            {isPowerBI && (
                                <button
                                    id="btn-view-dashboard"
                                    className="btn btn-powerbi"
                                    onClick={() => setShowPowerBIModal(true)}
                                    title="View live Power BI dashboard"
                                >
                                    <BarChart3 size={15} />
                                    View Dashboard
                                </button>
                            )}

                            {/* View Code */}
                            {(codeLink || github) && (
                                <a
                                    id="btn-view-code"
                                    href={codeLink || github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-code"
                                    title="View source code on GitHub"
                                >
                                    <Code2 size={15} />
                                    View Code
                                </a>
                            )}

                            {/* Request Download */}
                            <button
                                id="btn-request-download"
                                className="btn btn-download-req"
                                onClick={() => setShowDownloadModal(true)}
                                title="Request project files"
                            >
                                <Download size={15} />
                                Request Download
                            </button>
                        </div>
                    </div>
                </div>

                {/* Project Workflow Methodology Flowchart */}
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        Project Analytical Workflow
                    </h3>
                    <div className="methodology-flowchart">
                        {(methodology.length > 0
                            ? methodology
                            : ["Raw Data", "Data Cleaning", "Data Transformation", "Exploratory Data Analysis", "Data Analysis", "Dashboard", "Business Insights"]
                        ).map((step, idx, arr) => (
                            <React.Fragment key={idx}>
                                <div className="flow-step">
                                    <span>0{idx + 1}. {step}</span>
                                </div>
                                {idx < arr.length - 1 && <span className="flow-arrow">→</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Core Project Details Sections */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                    {/* Business Problem & Objective */}
                    <div className="project-section-block">
                        <h3><TrendingUp size={20} style={{ color: 'var(--accent-primary)' }} /> Business Problem</h3>
                        <p>{businessProblem || "Business challenge statement describing the core operational friction or analytical objective."}</p>

                        <h3 style={{ marginTop: '1.75rem' }}><CheckCircle size={20} style={{ color: 'var(--accent-primary)' }} /> Analytical Objective</h3>
                        <p>{objective || "Key target deliverables and decision support goals of the analytical workflow."}</p>
                    </div>

                    {/* Dataset & Tools */}
                    <div className="project-section-block">
                        <h3><Database size={20} style={{ color: 'var(--accent-primary)' }} /> Dataset Architecture</h3>
                        <p>{dataset || "Dataset specifications, features, volume, and data sources utilized for analysis."}</p>
                    </div>

                    {/* Data Cleaning & Preprocessing */}
                    <div className="project-section-block">
                        <h3><Filter size={20} style={{ color: 'var(--accent-primary)' }} /> Data Cleaning & Preprocessing</h3>
                        <p>{dataCleaning || "Details on missing value handling, deduplication, data type casting, and schema standardization."}</p>
                    </div>

                    {/* Analytical Techniques */}
                    <div className="project-section-block">
                        <h3><BarChart2 size={20} style={{ color: 'var(--accent-primary)' }} /> Exploratory & Advanced Analysis</h3>
                        <p>{analysis || "Exploratory data analysis, SQL CTE queries, statistical calculations, and DAX metric formulation."}</p>
                    </div>

                    {/* Visualizations / Dashboard Gallery */}
                    {visualizations.length > 0 && (
                        <div className="project-section-block">
                            <h3><PieChart size={20} style={{ color: 'var(--accent-primary)' }} /> Dashboards & Visualizations</h3>
                            <div className="gallery-grid">
                                {visualizations.map((vis, idx) => (
                                    <div key={idx} className="gallery-item">
                                        <img src={vis.url} alt={vis.title} className="gallery-image" />
                                        <div className="gallery-caption">
                                            <strong>{vis.title}:</strong> {vis.caption}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Key Findings / Insights */}
                    {insights.length > 0 && (
                        <div className="project-section-block">
                            <h3><Lightbulb size={20} style={{ color: '#f59e0b' }} /> Key Analytical Insights</h3>
                            <div className="insights-grid">
                                {insights.map((insight, idx) => (
                                    <div key={idx} className="insight-card">
                                        📌 {insight}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Business Recommendations */}
                    {recommendations.length > 0 && (
                        <div className="project-section-block">
                            <h3><Award size={20} style={{ color: '#10b981' }} /> Strategic Business Recommendations</h3>
                            <div className="insights-grid">
                                {recommendations.map((rec, idx) => (
                                    <div key={idx} className="recommendation-card">
                                        💡 {rec}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Navigation Back Button */}
                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <Link to="/projects" className="btn btn-secondary">
                        <ArrowLeft size={16} /> Return to Projects Grid
                    </Link>
                </div>
            </div>

            {/* Modals */}
            {showDownloadModal && (
                <DownloadRequestModal
                    project={project}
                    onClose={() => setShowDownloadModal(false)}
                />
            )}
            {showPowerBIModal && (
                <PowerBIModal
                    project={project}
                    onClose={() => setShowPowerBIModal(false)}
                />
            )}
        </>
    );
};
