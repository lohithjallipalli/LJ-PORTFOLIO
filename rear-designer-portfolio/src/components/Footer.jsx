import React from 'react';
import { Mail } from 'lucide-react';
import CustomIcon from './CustomIcon';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="spotlight"></div>
      <div className="container">
        <div className="grid">
          {/* Column 1: Brand details */}
          <div className="column">
            <div className="footer-brand-logo">
              <div className="footer-brand-badge">JS</div>
              <span className="footer-brand-name">LOHITH</span>
            </div>
            <p className="footer-brand-description">
              AI/DS undergraduate student and Java developer passionate
              about building amazing digital experiences and solving complex problems.
            </p>
            <div className="footer-socials">
              <a
                href="https://github.com/lohithjallipalli"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-circle"
                title="GitHub"
              >
                <CustomIcon name="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/lohith-j-380102200/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-circle"
                title="LinkedIn"
              >
                <CustomIcon name="linkedin" />
              </a>
              <a
                href="mailto:lohithjallipalli@gmail.com"
                className="footer-social-circle"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="column">
            <h3 className="footer-group-title">NAVIGATION</h3>
            <div className="footer-links-list">
              <a href="#header" className="footer-link-item">HOME</a>
              <a href="#about" className="footer-link-item">ABOUT ME</a>
              <a href="#skills" className="footer-link-item">MY SKILLS</a>
            </div>
          </div>

          {/* Column 3: Work & Projects */}
          <div className="column">
            <h3 className="footer-group-title">WORK & PROJECTS</h3>
            <div className="footer-links-list">
              <a href="#about" className="footer-link-item">EXPERIENCE</a>
              <a href="#projects" className="footer-link-item">PROJECTS</a>
              <a href="#about" className="footer-link-item">CERTIFICATIONS</a>
              <a href="#journey" className="footer-link-item">CODING JOURNEY</a>
            </div>
          </div>

          {/* Column 4: Contact Callouts */}
          <div className="column">
            <h3 className="footer-group-title">GET IN TOUCH</h3>
            <p className="footer-get-in-touch-text">
              Ready to collaborate? Reach out and let's create something amazing together.
            </p>
            <a href="#contact" className="footer-contact-btn">
              <Mail size={16} /> CONTACT ME
            </a>

            <div className="footer-email-box">
              <span className="footer-email-label">EMAIL ME AT</span>
              <a href="mailto:lohithjallipalli@gmail.com" className="footer-email-value">
                lohithjallipalli@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="copyright">
          <span className="footer-bottom-text">
            &copy; 2026 JALLIPALLI LOHITH. CRAFTED WITH ❤️ USING REACT & VITE.
          </span>
          <div className="footer-bottom-links">
            <a href="#skills" className="footer-bottom-link">SKILLS</a>
            <a href="#contact" className="footer-bottom-link">CONTACT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
