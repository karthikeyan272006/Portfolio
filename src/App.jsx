import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { Experience } from './pages/Experience';
import { Education } from './pages/Education';
import { Certifications } from './pages/Certifications';
import { Resume } from './pages/Resume';
import { Contact } from './pages/Contact';

// Scroll to top component on route changes
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export function App() {
    const location = useLocation();

    return (
        <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <ScrollToTop />
            <Navbar />

            <main style={{ flexGrow: 1, position: 'relative' }}>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/:id" element={<ProjectDetails />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/certifications" element={<Certifications />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
}

export default App;
