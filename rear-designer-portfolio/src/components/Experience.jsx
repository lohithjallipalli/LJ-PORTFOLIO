import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Compass,
  Award,
  ExternalLink,
  SquareArrowOutUpRight
} from 'lucide-react';
import { tabData } from '../data/portfolioData';

const TimelineList = ({ items }) => {
  if (!items || items.length === 0) {
    return <p className="timeline-empty-message">No records found</p>;
  }

  return (
    <div className="modern-timeline-container">
      {items.map((item, idx) => (
        <div key={idx} className="modern-timeline-item">
          {/* Glowing node dot */}
          <span className="modern-timeline-dot"></span>

          {/* Timeline Content */}
          <div className="modern-timeline-content">
            <div className="modern-timeline-header">
              <div className="modern-timeline-title-wrap">
                <h4 className="modern-timeline-title">
                  {item.title}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modern-timeline-ext-link"
                      title="View Verification / Certificate"
                    >
                      <SquareArrowOutUpRight size={13} />
                    </a>
                  )}
                </h4>
                {item.subtitle && (
                  <p className="modern-timeline-subtitle">{item.subtitle}</p>
                )}
              </div>

              {item.date && (
                <div className="modern-timeline-date-pill">
                  {item.date}
                </div>
              )}
            </div>

            {/* Bullets */}
            {item.bullets && item.bullets.length > 0 && (
              <ul className="modern-timeline-bullets">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="modern-timeline-bullet">
                    <span className="bullet-square-icon">▪</span>
                    <span className="bullet-text">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Verification / Profile Link */}
            {item.link && (
              <div className="modern-timeline-action">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-timeline-btn"
                >
                  <span>View Verification</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Experience() {
  const [activeTab, setActiveTab] = useState('Experience');

  const tabs = [
    { id: 'Experience', label: 'Work Experience', icon: Briefcase, tag: '3 Roles' },
    { id: 'Education', label: 'Education', icon: GraduationCap, tag: 'B.Tech' },
    { id: 'Journey', label: 'Coding Journey', icon: Compass, tag: '103+ DSA' },
    { id: 'Achievements', label: 'Achievements', icon: Award, tag: 'Honors' },
  ];

  return (
    <section id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section__header">
          <h2 className="sub__title">
            My <span className="primary">Experience</span> & Education
          </h2>
        </div>

        {/* Tab Filters */}
        <div className="experience-tabs-container">
          {tabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                className={`experience-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon-wrap">
                  <IconComp size={15} />
                </span>
                <span className="tab-label">{tab.label}</span>
                <span className="tab-tag-pill">{tab.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Timeline Panel */}
        <div className="timeline-panel-card full-width">
          <div className="timeline-panel-header">
            <div className="panel-header-icon-wrap">
              {activeTab === 'Experience' && <Briefcase size={18} />}
              {activeTab === 'Education' && <GraduationCap size={18} />}
              {activeTab === 'Journey' && <Compass size={18} />}
              {activeTab === 'Achievements' && <Award size={18} />}
            </div>
            <div className="panel-header-text">
              <h3 className="panel-header-title">
                {activeTab === 'Experience' && 'Work Experience'}
                {activeTab === 'Education' && 'Education'}
                {activeTab === 'Journey' && 'Coding Journey & Milestones'}
                {activeTab === 'Achievements' && 'Honors & Achievements'}
              </h3>
              <p className="panel-header-subtitle">
                {activeTab === 'Experience' && 'Professional training and internship roles'}
                {activeTab === 'Education' && 'Academic qualifications and degrees'}
                {activeTab === 'Journey' && 'Algorithmic problem-solving and open source contributions'}
                {activeTab === 'Achievements' && 'Merit awards, scholarships, and academic ranks'}
              </p>
            </div>
            <span className="panel-count-pill">{tabData[activeTab]?.length || 0} Records</span>
          </div>
          <TimelineList items={tabData[activeTab] || []} />
        </div>
      </div>
    </section>
  );
}
