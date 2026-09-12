import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getProjectById } from '../data/projects';
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
    Award
} from 'lucide-react';

export const ProjectDetails = () => {
    const { id } = useParams();
    const project = getProjectById(id);

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

    return (
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

                {/* Meta Bar: Tools & Action Links */}
                <div className="project-meta-bar">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', flexGrow: 1 }}>
                        {tools.map((t, idx) => (
                            <span key={idx} className="tech-tag" style={{ fontSize: '0.85rem' }}>
                                {t}
                            </span>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary btn-sm"
                            >
                                <Github size={14} /> Repository
                            </a>
                        )}
                        {demo && (
                            <a
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-sm"
                            >
                                <ExternalLink size={14} /> Live Dashboard
                            </a>
                        )}
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
    );
};
