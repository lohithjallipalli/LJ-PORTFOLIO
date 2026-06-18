import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import hljs from 'highlight.js';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeSelector from './components/ThemeSelector';

import { themeColors } from './data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);

  const [accentTheme, setAccentTheme] = useState(() => {
    return localStorage.getItem('accentTheme') || 'Midnight Violet';
  });

  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme !== null) {
      return JSON.parse(storedTheme);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isDropped, setIsDropped] = useState(false);
  const [activeSection, setActiveSection] = useState('header');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Apply accent theme variables
  useEffect(() => {
    const colors = themeColors[accentTheme];
    if (colors) {
      document.documentElement.style.setProperty('--color-primary', colors.primary);
      document.documentElement.style.setProperty('--color-primary-accent', colors.accent);
      document.documentElement.style.setProperty('--color-primary-light', colors.light);
      localStorage.setItem('accentTheme', accentTheme);
    }
  }, [accentTheme]);

  // Apply dark mode theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', JSON.stringify(darkMode));
  }, [darkMode]);

  // Handle Scroll (Navbar drop and Scrollspy)
  useEffect(() => {
    const handleScroll = () => {
      setIsDropped(window.scrollY > 100);

      const sections = document.querySelectorAll('section');
      let currentActive = 'header';
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
          currentActive = id;
        }
      });
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize highlight.js
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  // GSAP Animations
  useGSAP(
    () => {
      // Header Animation Timeline (Snappy & staggered slide-up)
      const tlHeader = gsap.timeline();
      tlHeader
        .from('#header .me', { opacity: 0, y: 15, duration: 0.35, ease: 'power2.out' })
        .from(
          ['#header .user__info .opportunity-badge', '#header .user__info .title', '#header .user__info .description'],
          { opacity: 0, y: 15, stagger: 0.06, duration: 0.35, ease: 'power2.out' },
          '-=0.2'
        )
        .from('#header .user__info .buttons', { opacity: 0, y: 15, duration: 0.35, ease: 'power2.out' }, '-=0.15')
        .from('#header .points', { opacity: 0, y: 15, duration: 0.35, ease: 'power2.out' }, '-=0.15')
        .from('#header .point', { opacity: 0, y: 15, stagger: 0.06, duration: 0.35, ease: 'power2.out' }, '-=0.2');

      // About Scroll Animation (Staggered slide-up for blocks)
      gsap.from('#about .box', {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 85%',
        },
        opacity: 0,
        y: 15,
        stagger: 0.08,
        duration: 0.35,
        ease: 'power2.out',
      });

      // Skills Scroll Animation (Staggered header)
      const tlSkills = gsap.timeline({
        scrollTrigger: {
          trigger: '#skills',
          start: 'top 85%',
        },
      });
      tlSkills.from(
        ['#skills .section__header .sub__title', '#skills .section__header .description'],
        { opacity: 0, y: 15, stagger: 0.06, duration: 0.35, ease: 'power2.out' }
      );

      // Projects Scroll Animation (Staggered header)
      const tlProjects = gsap.timeline({
        scrollTrigger: {
          trigger: '#projects',
          start: 'top 85%',
        },
      });
      tlProjects.from(
        ['#projects .section__header .sub__title', '#projects .section__header .description'],
        { opacity: 0, y: 15, stagger: 0.06, duration: 0.35, ease: 'power2.out' }
      );

      // Journey Scroll Animation (Only header elements to prevent ScrollTrigger visibility bugs on grid cards)
      const tlJourney = gsap.timeline({
        scrollTrigger: {
          trigger: '#journey',
          start: 'top 85%',
        },
      });
      tlJourney.from(
        ['#journey .section__header .sub__title', '#journey .section__header .description'],
        { opacity: 0, y: 15, stagger: 0.06, duration: 0.35, ease: 'power2.out' }
      );

      // Contact Scroll Animation (Staggered side boxes and form)
      const tlContact = gsap.timeline({
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 85%',
        },
      });
      tlContact
        .from(
          '#contact .box',
          { opacity: 0, y: 15, stagger: 0.08, duration: 0.35, ease: 'power2.out' }
        )
        .from(
          '#contact .contact__form',
          { opacity: 0, y: 15, duration: 0.35, ease: 'power2.out' },
          '-=0.2'
        );
    },
    { scope: appRef }
  );

  return (
    <div ref={appRef}>
      <Navbar
        isDropped={isDropped}
        activeSection={activeSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setSidebarOpen={setSidebarOpen}
      />
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
      <ThemeSelector
        accentTheme={accentTheme}
        setAccentTheme={setAccentTheme}
        themeColors={themeColors}
      />
    </div>
  );
}

export default App;
