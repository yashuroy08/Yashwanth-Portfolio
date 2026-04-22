import { useState, Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeRedirect from './components/ResumeRedirect.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import TerminalFeature from './components/TerminalFeature.jsx';
import Skills from './components/Skills.jsx';
import GithubStats from './components/GithubStats.jsx';
import Education from './components/Education.jsx';
import Blogs from './components/Blogs.jsx';
import BlogPost from './components/BlogPost.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import SystemHUD from './components/SystemHUD.jsx';
import Loader from './components/Loader.jsx';
import BackToTop from './components/BackToTop.jsx';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import SoundEffects from './components/SoundEffects.jsx';
import CursorBubble from './components/CursorBubble.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import SectionDivider from './components/SectionDivider.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import NotFound from './components/NotFound.jsx';

/* ── Error Boundary ── */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', color: '#ff3333', fontFamily: 'monospace', padding: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>// SYSTEM_FAULT</h1>
          <p style={{ color: '#888', maxWidth: '400px' }}>Something went wrong. Please reload the page.</p>
          <button onClick={() => window.location.reload()} style={{ marginTop: '1.5rem', padding: '0.75rem 2rem', background: '#ff3333', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'monospace', fontWeight: 'bold', letterSpacing: '0.1em' }}>RELOAD</button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [loading, setLoading] = useState(true);



  return (
    <ThemeProvider>
      <CursorBubble />
      <SoundEffects />
      <Router>
        <Routes>
          <Route path="/resume" element={<ResumeRedirect />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/404" element={<NotFound />} />
          <Route
            path="/*"
            element={
              <AnimatePresence>
                {loading ? (
                  <Loader key="loader" onComplete={() => setLoading(false)} />
                ) : (
                  <motion.div
                    key="app"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-primary text-accent min-h-screen relative z-0"
                  >
                    <SystemHUD />
                    <AnimatedBackground />
                    <ScrollProgress />
                    <Header />
                    <main>
                      <Hero />
                      <SectionDivider />
                      <Skills />
                      <SectionDivider />
                      <Projects />
                      <SectionDivider />
                      <GithubStats />
                      <SectionDivider />
                      <Education />
                      <SectionDivider />
                      <Blogs />
                      <SectionDivider />
                      <Contact />
                    </main>
                    <Footer />
                    <BackToTop />
                    <TerminalFeature />
                  </motion.div>
                )}
              </AnimatePresence>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

const AppWithBoundary = () => (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

export default AppWithBoundary;