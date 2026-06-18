import React, { useState } from 'react';
import {
  Code,
  Rocket,
  CheckCircle2,
  Globe,
  FileText,
  Download,
  GraduationCap,
  Briefcase,
  FileCheck,
  Award,
  SquareArrowOutUpRight
} from 'lucide-react';
import CustomIcon from './CustomIcon';
import { tabData } from '../data/portfolioData';

export default function About() {
  const [activeTab, setActiveTab] = useState('Education');

  return (
    <section id="about">
      <div className="container grid">
        {/* Box Start */}
        <div className="box about-profile-card">
          <img src="./assets/me1.png" className="profile-bg" alt="Jallipalli Lohith" />

          <div className="profile-stats-container">
            <div className="profile-stat-item">
              <div className="profile-stat-icon-wrapper">
                <Code size={16} />
              </div>
              <div className="profile-stat-details">
                <span className="profile-stat-number">1055+</span>
                <span className="profile-stat-label">Hours Coding</span>
              </div>
            </div>

            <div className="profile-stat-item">
              <div className="profile-stat-icon-wrapper">
                <Rocket size={16} />
              </div>
              <div className="profile-stat-details">
                <span className="profile-stat-number">2+</span>
                <span className="profile-stat-label">Projects</span>
              </div>
            </div>

            <div className="profile-stat-item">
              <div className="profile-stat-icon-wrapper">
                <CheckCircle2 size={16} />
              </div>
              <div className="profile-stat-details">
                <span className="profile-stat-number">100+</span>
                <span className="profile-stat-label">DSA Problems</span>
              </div>
            </div>
          </div>

          <div className="profile-card-details-panel">
            <h3 className="name">Lohith Jallipalli</h3>
            <p className="subtitle">AI&DS Graduate and Dev</p>
            <div className="location">
              <Globe /> Andhra Pradesh, India
            </div>
            <div className="profile-card-buttons">
              <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="profile-btn view-btn">
                <FileText size={14} /> VIEW RESUME
              </a>
              <a href="/assets/resume.pdf" download="Lohith_Jallipalli_Resume.pdf" className="profile-btn download-btn">
                <Download size={14} /> DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </div>
        {/* Box End */}

        {/* Box Start */}
        <div className="col-2 box about-tabs-card">
          <div className="tabs-header">
            <button
              className={`tab-btn ${activeTab === 'Education' ? 'active' : ''}`}
              onClick={() => setActiveTab('Education')}
            >
              <GraduationCap size={14} /> Education
            </button>
            <button
              className={`tab-btn ${activeTab === 'Experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('Experience')}
            >
              <Briefcase size={14} /> Experience
            </button>
            <button
              className={`tab-btn ${activeTab === 'Certificates' ? 'active' : ''}`}
              onClick={() => setActiveTab('Certificates')}
            >
              <FileCheck size={14} /> Certificates
            </button>
            <button
              className={`tab-btn ${activeTab === 'Achievements' ? 'active' : ''}`}
              onClick={() => setActiveTab('Achievements')}
            >
              <Award size={14} /> Achievements
            </button>
          </div>

          <div className="tabs-content-scroll">
            <div className="timeline-container">
              {tabData[activeTab].map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <span className="timeline-dot"></span>
                  <div className="timeline-header">
                    <h4 className="timeline-title">
                      {item.title}
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="timeline-link" title="View Certificate">
                          <SquareArrowOutUpRight size={12} />
                        </a>
                      )}
                    </h4>
                    {item.date && <span className="timeline-date">{item.date}</span>}
                  </div>
                  {item.subtitle && <p className="timeline-subtitle">{item.subtitle}</p>}
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="timeline-bullets">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Box End */}

        {/* Box Start */}
        <div className="col-2 box my-drive-compact">
          <div className="spotlight"></div>
          <div className="my__drive">
            <h2 className="sub__title">
              What <span className="primary">Drives Me</span>
            </h2>
            <p className="description">
              I'm passionate about solving problems through technology 💻 and turning ideas into meaningful software solutions 🚀.
              With a strong foundation in Data Structures & Algorithms 🧩 and a growing expertise in software development ⚙️,
              I enjoy building applications that are efficient, scalable, and user-friendly.
              I approach every challenge with curiosity, persistence, and a commitment to continuous improvement.
            </p>
          </div>
          <CustomIcon name="grid-wire-frame" className="kit grid__wireframe" />
        </div>
        {/* Box End */}
      </div>
    </section>
  );
}
