import React, { useState } from 'react';
import {
  Code,
  Terminal,
  Flame,
  Database,
  Layers,
  Server,
  Braces,
  Wrench,
  GitBranch,
  Binary,
  X
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const SkillProgressRing = ({ percentage, color }) => {
  const radius = 18;
  const strokeWidth = 3;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-ring-container">
      <svg className="progress-ring" width="50" height="50">
        <circle
          className="progress-ring-track"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx="25"
          cy="25"
        />
        <circle
          className="progress-ring-indicator"
          stroke={color || 'var(--color-primary)'}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="25"
          cy="25"
          transform="rotate(-90 25 25)"
        />
      </svg>
      <span className="progress-text">{percentage}%</span>
    </div>
  );
};

const iconMap = {
  Code: <Code size={20} />,
  Terminal: <Terminal size={20} />,
  Flame: <Flame size={20} />,
  Database: <Database size={20} />,
  Layers: <Layers size={20} />,
  Server: <Server size={20} />,
  Braces: <Braces size={20} />,
  Wrench: <Wrench size={20} />,
  GitBranch: <GitBranch size={20} />,
  Binary: <Binary size={20} />,
};

const modalIconMap = {
  Code: <Code size={24} />,
  Terminal: <Terminal size={24} />,
  Flame: <Flame size={24} />,
  Database: <Database size={24} />,
  Layers: <Layers size={24} />,
  Server: <Server size={24} />,
  Braces: <Braces size={24} />,
  Wrench: <Wrench size={24} />,
  GitBranch: <GitBranch size={24} />,
  Binary: <Binary size={24} />,
};

export default function Skills() {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('ALL ARSENAL');
  const [skillSearchQuery, setSkillSearchQuery] = useState('');
  const [selectedSkillDetails, setSelectedSkillDetails] = useState(null);

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = selectedSkillCategory === 'ALL ARSENAL' || skill.category === selectedSkillCategory;
    const matchesSearch = skill.name.toLowerCase().includes(skillSearchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(skillSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="bg__secondary">
      <div className="container">
        <div className="section__header">
          <h2 className="sub__title">My <span className="primary">Skills</span></h2>
          <p className="description">
            My technical arsenal, categorized by language, frameworks & databases. Use filters or search to explore.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="skills-controls-container">
          <div className="skills-filter-tabs">
            {['ALL ARSENAL', 'LANGUAGES', 'FRAMEWORKS & BAAS', 'DATABASES & DEVOPS'].map((cat) => (
              <button
                key={cat}
                className={`skills-filter-btn ${selectedSkillCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedSkillCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="skills-search-wrapper">
            <input
              type="text"
              className="skills-search-input"
              placeholder="Search weapons of choice..."
              value={skillSearchQuery}
              onChange={(e) => setSkillSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card" onClick={() => setSelectedSkillDetails(skill)} style={{ cursor: 'pointer' }}>
              <div className="skill-card-header">
                <div className="skill-icon-container">
                  {iconMap[skill.icon] || <Code size={20} />}
                </div>
                <span className={`skill-level-badge ${skill.level.toLowerCase()}`}>
                  {skill.level}
                </span>
              </div>

              <div className="skill-card-body">
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-category">{skill.category}</p>
                </div>
                <div className="skill-progress-wrapper">
                  <SkillProgressRing percentage={skill.percentage} color={skill.color} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Details Modal Start */}
      {selectedSkillDetails && (
        <div className="skill-modal-overlay" onClick={() => setSelectedSkillDetails(null)}>
          <div className="skill-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="skill-modal-close-icon" onClick={() => setSelectedSkillDetails(null)}>
              <X size={24} />
            </button>

            <div className="skill-modal-header">
              <div className="skill-modal-icon-container">
                {modalIconMap[selectedSkillDetails.icon] || <Code size={24} />}
              </div>
              <div className="skill-modal-title-block">
                <h3 className="skill-modal-title">{selectedSkillDetails.name}</h3>
                <div className="skill-modal-badges">
                  <span className="skill-modal-badge category">{selectedSkillDetails.category}</span>
                  <span className={`skill-modal-badge level ${selectedSkillDetails.level.toLowerCase()}`}>
                    {selectedSkillDetails.level} ({selectedSkillDetails.percentage}%)
                  </span>
                </div>
              </div>
            </div>

            <div className="skill-modal-body">
              <h4 className="skill-modal-section-title">SKILL EVALUATION</h4>
              <hr className="skill-modal-divider" />
              <p className="skill-modal-description">
                {selectedSkillDetails.description || 'Details will be updated soon.'}
              </p>
            </div>

            <button className="skill-modal-close-btn" onClick={() => setSelectedSkillDetails(null)}>
              CLOSE EVALUATION
            </button>
          </div>
        </div>
      )}
      {/* Skill Details Modal End */}
    </section>
  );
}
