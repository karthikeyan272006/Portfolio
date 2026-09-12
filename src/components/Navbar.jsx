import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, BarChart2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    // Close mobile drawer on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Skills', path: '/skills' },
        { label: 'Projects', path: '/projects' },
        { label: 'Experience', path: '/experience' },
        { label: 'Education', path: '/education' },
        { label: 'Certifications', path: '/certifications' },
        { label: 'Resume', path: '/resume' },
        { label: 'Contact', path: '/contact' }
    ];

    return (
        <>
            <header className="navbar">
                <div className="container navbar-container">
                    <NavLink to="/" className="navbar-brand">
                        <div className="brand-icon">K</div>
                        <span>Karthikeyan</span>
                    </NavLink>

                    {/* Desktop Links */}
                    <nav>
                        <ul className="navbar-links">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            isActive ? 'nav-link active' : 'nav-link'
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Actions & Theme Toggle */}
                    <div className="nav-actions">
                        <ThemeToggle />

                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle navigation menu"
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer Overlay */}
            {mobileOpen && (
                <div
                    className="mobile-drawer-backdrop"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Mobile Drawer Slide-out */}
            <aside className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
                <div className="mobile-drawer-header">
                    <NavLink to="/" className="navbar-brand">
                        <div className="brand-icon">K</div>
                        <span>Karthikeyan</span>
                    </NavLink>
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={20} />
                    </button>
                </div>

                <ul className="mobile-drawer-links">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? 'mobile-drawer-link active' : 'mobile-drawer-link'
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
};
