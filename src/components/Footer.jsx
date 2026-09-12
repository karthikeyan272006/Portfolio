import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalData } from '../data/personal';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3>{personalData.name}</h3>
                        <p>{personalData.headline}</p>
                    </div>

                    <div className="footer-socials">
                        <a
                            href={personalData.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-link"
                            aria-label="GitHub Profile"
                            title="GitHub Profile"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href={personalData.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-link"
                            aria-label="LinkedIn Profile"
                            title="LinkedIn Profile"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href={`mailto:${personalData.socials.email}`}
                            className="social-icon-link"
                            aria-label="Email Contact"
                            title="Email Contact"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
                    <button
                        onClick={scrollToTop}
                        className="btn btn-secondary btn-sm"
                        aria-label="Scroll to top"
                    >
                        Back to Top <ArrowUp size={14} />
                    </button>
                </div>
            </div>
        </footer>
    );
};
