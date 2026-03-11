import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeRedirect from './components/ResumeRedirect.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import GithubStats from './components/GithubStats.jsx';
import Education from './components/Education.jsx';
import Blogs from './components/Blogs.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import SystemHUD from './components/SystemHUD.jsx';
import Loader from './components/Loader.jsx';
import BackToTop from './components/BackToTop.jsx';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import SoundEffects from './components/SoundEffects.jsx';
import CursorBubble from './components/CursorBubble.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

function App() {
  const [loading, setLoading] = useState(true);



  return (
    <ThemeProvider>
      <CursorBubble />
      <SoundEffects />
      <Router>
        <Routes>
          <Route path="/resume" element={<ResumeRedirect />} />
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
                      <Skills />
                      <Projects />
                      <GithubStats />
                      {/* <Memories /> */}
                      <Education />
                      <Blogs />
                      <Contact />
                    </main>
                    <Footer />
                    <BackToTop />

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

export default App;