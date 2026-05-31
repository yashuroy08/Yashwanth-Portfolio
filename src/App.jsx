import { useState, Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeRedirect from './components/features/ResumeRedirect.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header.jsx';
import Hero from './components/sections/Hero.jsx';
import Projects from './components/sections/Projects.jsx';
import TerminalFeature from './components/features/TerminalFeature.jsx';
import FloatingTerminal from './components/features/FloatingTerminal.jsx';
import ChatAssistant from './components/features/ChatAssistant.jsx';
import Skills from './components/sections/Skills.jsx';
import GithubStats from './components/features/GithubStats.jsx';
import Education from './components/sections/Education.jsx';
import MusicPlayer from './components/features/MusicPlayer.jsx';
import Blogs from './components/sections/Blogs.jsx';
import BlogPost from './components/sections/BlogPost.jsx';
import Contact from './components/sections/Contact.jsx';
import Footer from './components/layout/Footer.jsx';
import Loader from './components/features/Loader.jsx';
import AnimatedBackground from './components/effects/AnimatedBackground.jsx';
import CursorBubble from './components/effects/CursorBubble.jsx';
import SoundEffects from './components/effects/SoundEffects.jsx';
import SectionDivider from './components/ui/SectionDivider.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import NotFound from './components/sections/NotFound.jsx';

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
      <Router>
        <Routes>
          <Route path="/resume" element={<ResumeRedirect />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route
            path="/"
            element={
              <AnimatePresence>
                {loading ? (
                  <Loader key="loader" onComplete={() => setLoading(false)} />
                ) : (
                    <motion.div
                    key="app"
                    id="main-portfolio-wrapper"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-primary text-accent min-h-screen relative z-0"
                  >
                    {/* <SystemHUD /> */}
                    <AnimatedBackground />
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
                    <TerminalFeature />
                    <FloatingTerminal />
                    <ChatAssistant />
                    <MusicPlayer />
                    <CursorBubble />
                    <SoundEffects />
                  </motion.div>
                )}
              </AnimatePresence>
            }
          />
          <Route path="*" element={<NotFound />} />
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