import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    {
      name: "Frontend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      skills: [
        {
          name: "React.js",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#61DAFB" /><circle cx="12" cy="12" r="2" fill="#61DAFB" /></svg>
        },
        {
          name: "React Native",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#61DAFB" /><circle cx="12" cy="12" r="2" fill="#61DAFB" /></svg>
        },
        {
          name: "Next.js",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#000000"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.5-16h2v12h-2V6zm8.5 10.5L10 6H8l8.5 11.5V16.5z" fill="#FFFFFF" /></svg>
        },
        {
          name: "TypeScript",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#3178C6"><path d="M2 2h20v20H2V2zm16 11h-2.5v-1h-2v1H11v4h2v1h5v-1h-2v-4zm-8-3h6v-2H6v2h2v7h2v-7z" /></svg>
        },
        {
          name: "JavaScript",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#F7DF1E"><path d="M3 3h18v18H3V3zm13 9h-2.5v4.5h2.5V12zm-6 0H7.5v4.5H10V12z" fill="#000" /></svg>
        },
        {
          name: "HTML5",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#E34F26"><path d="M4 21l-2-18h20l-2 18-8 3-8-3zm2.5-16l1.3 12.3 4.2 1.3 4.2-1.3 1.3-12.3H6.5z" /></svg>
        },
        {
          name: "CSS3",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#1572B6"><path d="M4 21l-2-18h20l-2 18-8 3-8-3zm2.5-16l1.3 12.3 4.2 1.3 4.2-1.3 1.3-12.3H6.5z" /></svg>
        },
        {
          name: "Tailwind CSS",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#38B2AC"><path d="M12.5 7.5c-1 2-2.5 3-4.5 3-3 0-4-3-6-2 .7 2.5 3 4 5.5 4 3 0 4.5-3.5 6.5-2.5 1.5.5 2 2 1.5 3.5 2.5-1.5 4-4 2.5-6.5-1.5-2.5-4-3.5-5.5-.5z" /></svg>
        }
      ]
    },
    {
      name: "Backend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: [
        {
          name: "Node.js",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#339933"><path d="M12 2l10 5.77v11.54L12 25.08 2 19.31V7.77L12 2zm0 2.37L4.19 8.94v8.83L12 22.28l7.81-4.51V8.94L12 4.37z" /></svg>
        },
        {
          name: "Express.js",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#000000" strokeWidth="2"><path d="M4 12h16M4 12l6-6m-6 6l6 6" stroke="#ffffff" /></svg>
        },
        {
          name: "Python",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none"><path d="M14.25 2.25c-3.5 0-4.25 1.5-4.25 3.75h4.25V7.5L10 7.5V6c0-1.25.25-2.5 3.25-2.5s2.75 1.25 2.75 2.5v1.25h1.25c2.25 0 3.75.75 3.75 4.25v2.5h-3.75 v4.25H21 c2.25 0 4-.25 4-3.25v-2.5c0-3-.5-4.5-5.25-4.5h-1.25l-.25-4.25c0-1.75-1.25-1.75-4-1.75z" fill="#3776AB" /><path d="M9.75 21.75c3.5 0 4.25-1.5 4.25-3.75h-4.25V16.5L14 16.5v1.5c0 1.25-.25 2.5-3.25 2.5s-2.75-1.25-2.75-2.5v-1.25H6.75C4.5 16.5 3 15.75 3 12.25v-2.5h3.75V5.5H3C.75 5.5 0 5.75 0 8.75v2.5c0 3 .5 4.5 5.25 4.5h1.25l.25 4.25c0 1.75 1.25 1.75 4 1.75z" fill="#FFD43B" /></svg>
        },
        {
          name: "Java",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#007396"><path d="M4 19v-2h2v-1h2v-1h2v-1h4v1h2v1h2v1h2v2H4zm8-16c-2.2 0-4 1.8-4 4h8c0-2.2-1.8-4-4-4z" /></svg>
        },
        {
          name: "REST APIs",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#FF5722" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
        },
        {
          name: "WebSockets",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#000000" strokeWidth="2"><path d="M8 3 4 7l4 4" /><path d="M4 7h16" /><path d="M16 21l4-4-4-4" /><path d="M20 17H4" stroke="#ffffff" /></svg>
        }
      ]
    },
    {
      name: "Database",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      skills: [
        {
          name: "SQL",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#4479A1"><path d="M12 2C6.48 2 2 4.24 2 7v10c0 2.76 4.48 5 10 5s10-2.24 10-5V7c0-2.76-4.48-5-10-5zm0 14c-5.52 0-8-2.24-8-5V9c1.93 1.25 4.83 2 8 2s6.07-.75 8-2v2c0 2.76-2.48 5-8 5z" /></svg>
        },
        {
          name: "MongoDB",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#47A248"><path d="M12 2s-6 10-6 16c0 3.31 2.69 6 6 6s6-2.69 6-6C18 12 12 2 12 2zm0 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" /></svg>
        },
        {
          name: "PostgreSQL",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#336791"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 15h-6v-2h6v2zm1-4H8v-2h8v2zm-1-4H9V7h6v2z" /></svg>
        }
      ]
    },
    {
      name: "DevOps & Tools",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      skills: [
        {
          name: "Git",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#F05032"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
        },
        {
          name: "Docker",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#2496ED"><path d="M2.5 12c0 0 2-3.5 9.5-3.5s9.5 3.5 9.5 3.5-2 3.5-9.5 3.5S2.5 12 2.5 12zM12 4c.83 0 1.5.67 1.5 1.5S12.83 7 12 7 10.5 6.33 10.5 5.5 11.17 4 12 4zm0 16c-1.38 0-2.5-1.12-2.5-2.5S10.62 15 12 15s2.5 1.12 2.5 2.5S13.38 20 12 20z" /></svg>
        },
        {
          name: "Google Gemini",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="url(#gemini-gradient)"><defs><linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4285F4" /><stop offset="100%" stopColor="#DB4437" /></linearGradient></defs><path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" /></svg>
        }
      ]
    },
    {
      name: "AI/ML",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" transform="rotate(45 12 12)"></path>
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" transform="rotate(-45 12 12)"></path>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
      skills: [
        {
          name: "Python",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z" fill="url(#python-gradient)" /><defs><linearGradient id="python-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3776AB" /><stop offset="100%" stopColor="#FFD43B" /></linearGradient></defs></svg>
        },
        {
          name: "TensorFlow",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FF6F00"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l-9-4 9 5 9-5-9 4z" /></svg>
        },
        {
          name: "PyTorch",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#EE4C2C"><path d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13.14 5.25 14.16 3.4L12 2C8 6 9 9 6 12C4.5 13.5 4.5 16 6 17.5C7.5 19 10 19 11.5 17.5C12 17 12.5 16.5 12.8 16C13.5 16.5 14.5 16.5 15.2 15.8C16.5 14.5 16.5 12.4 15.2 11.1C16.1 11.5 16.9 11.6 17.66 11.2Z" /></svg>
        },
        {
          name: "Scikit-learn",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#F7931E"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-4h2v2h-2v-2zm0-4h2v2h-2V8z" /></svg>
        },
        {
          name: "Keras",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#D00000"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M7 7v10h2v-4l4 4h3l-5-5 5-5h-3l-4 4v-4H7z" fill="#FFF" /></svg>
        }
      ]
    },
    {
      name: "IoT & Hardware",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 13.381h20M8.66 19.381V5.666M15.32 19.381V5.666M2.5 16.381h19M2.5 10.381h19" />
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" opacity="0.1" />
        </svg>
      ),
      skills: [
        {
          name: "C++",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#00599C"><path d="M11.6,15.6h-1.7v3.4c0,0.2-0.2,0.4-0.4,0.4H8.4c-0.2,0-0.4-0.2-0.4-0.4v-3.4H6.3c-0.2,0-0.4-0.2-0.4-0.4v-1.1c0-0.2,0.2-0.4,0.4-0.4h1.7v-3.4c0-0.2,0.2-0.4,0.4-0.4h1.1c0.2,0,0.4,0.2,0.4,0.4v3.4h1.7c0.2,0,0.4,0.2,0.4,0.4v1.1C12,15.4,11.8,15.6,11.6,15.6z M22.4,14.6c0,0.2-0.2,0.4-0.4,0.4h-1.7v3.4c0,0.2-0.2,0.4-0.4,0.4h-1.1c-0.2,0-0.4-0.2-0.4-0.4v-3.4h-1.7c-0.2,0-0.4-0.2-0.4-0.4v-1.1c0-0.2,0.2-0.4,0.4-0.4h1.7v-3.4c0-0.2,0.2-0.4,0.4-0.4h1.1c0.2,0,0.4,0.2,0.4,0.4v3.4h1.7c0.2,0,0.4,0.2,0.4,0.4V14.6z M10.4,4.2c2.5-1.4,5.6-0.5,7,2l-2.2,1.3C14.7,6.8,13.9,6.5,13,7c-2.3,1.3-3.1,4.3-1.8,6.6c1.3,2.3,4.3,3.1,6.6,1.8c0.9-0.5,1.6-1.3,1.9-2.2l2.2,1.3c-0.6,1.8-1.8,3.3-3.4,4.2C15.9,20.2,12.7,19.3,10.4,15.1C8,11,8.9,5.7,13,3.4L12.5,2.5C7.9,5.1,6.2,10.9,8.9,15.6l0.5,0.9L10.4,4.2z" /></svg>
        },
        {
          name: "Arduino",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#00979D"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z M7 13H5v-2h2V9h2v2h2v2H9v2H7V13z M17.5 13h-4v-2h4V13z" /></svg>
        },
        {
          name: "NodeMCU",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#4B5563"><path d="M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z M7 7h3v3H7z M14 7h3v3h-3z M7 14h3v3H7z M14 14h3v3h-3z" /></svg>
        },
        {
          name: "Firebase",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FFCA28"><path d="M3.89 15.67L6.44 2.87c.1-.48.74-.59 1-.16l2.36 4L3.89 15.67zM7.76 7.42l3.43 5.8 1.95-3.66-2.58-4.9c-.21-.4-.79-.42-1.03-.04L7.76 7.42zM12.9 14.12l-2.09-3.9 3.32-6.52c.2-.39.75-.4 1 .05l8.13 14.28L12.9 14.12zM2.82 17.5l9.16 5.16c.39.22.86.22 1.25 0l9.13-5.14-9.75-17.16L2.82 17.5z" /></svg>
        },
        {
          name: "IoT Cloud",
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#00A4E4"><path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z" /></svg>
        }
      ]
    }

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="section-padding bg-transparent">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">EXPERTISE</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category, i) => (
            <motion.div
              key={i}
              className="border border-muted/20 bg-secondary/50 p-6"
              variants={itemVariants}
            >
              <h3 className="text-light font-medium mb-4 pb-2 border-b border-muted border-opacity-20 flex items-center gap-2">
                <span className="text-accent">{category.icon}</span>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    className="group relative flex items-center px-3 py-2 border border-muted/10 bg-primary/20 transition-all duration-300 hover:border-light/20"
                    whileHover={{ y: -2 }}
                  >
                    <div className="mr-2 text-muted/60 group-hover:text-accent transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-muted group-hover:text-light transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col md:flex-row items-center justify-between p-6 border border-muted/20 bg-secondary/50"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-medium mb-2">Ready to collaborate?</h3>
            <p className="text-muted">Let's discuss how my skills can help your project.</p>
          </div>
          <a href="#contact" className="btn btn-primary whitespace-nowrap">
            Get in Touch
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;