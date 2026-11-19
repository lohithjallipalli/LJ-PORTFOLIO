import { useState } from 'react';
import {
  Code,
  Rocket,
  CheckCircle2,
  Globe,
  FileText,
  Download,
  Award,
  Briefcase,
  Terminal,
  Flame,
  Database,
  Layers,
  Server,
  Braces,
  Wrench,
  GitBranch,
  Binary,
  Shield,
  ClipboardList,
  FileCode,
  X,
  Sparkles
} from 'lucide-react';
import CustomIcon from './CustomIcon';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code: <Code size={16} />,
  Terminal: <Terminal size={16} />,
  Flame: <Flame size={16} />,
  Database: <Database size={16} />,
  Layers: <Layers size={16} />,
  Server: <Server size={16} />,
  Braces: <Braces size={16} />,
  Wrench: <Wrench size={16} />,
  GitBranch: <GitBranch size={16} />,
  Binary: <Binary size={16} />,
  Shield: <Shield size={16} />,
  ClipboardList: <ClipboardList size={16} />,
  FileCode: <FileCode size={16} />,
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
  Shield: <Shield size={24} />,
  ClipboardList: <ClipboardList size={24} />,
  FileCode: <FileCode size={24} />,
};

export default function About() {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('ALL');
  const [selectedSkillDetails, setSelectedSkillDetails] = useState(null);

  const categories = [
    { id: 'ALL', label: 'All Arsenal' },
    { id: 'SERVICENOW', label: 'ServiceNow' },
    { id: 'LANGUAGES', label: 'Languages' },
    { id: 'FRAMEWORKS & BAAS', label: 'Frameworks' },
    { id: 'DATABASES & DEVOPS', label: 'DB & Tools' },
  ];

  const filteredSkills = skillsData.filter((skill) => {
    return selectedSkillCategory === 'ALL' || skill.category === selectedSkillCategory;
  });

  return (
    <section id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section__header">
          <h2 className="sub__title">
            About <span className="primary">Me</span>
          </h2>
        </div>

        <div className="grid">
          {/* Box 1: Profile Card */}
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
                <span className="profile-stat-number">5+</span>
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
        {/* Box 1 End */}

        {/* Box 2 (col-2): Technical Skills Capsules Card (Replaces old tabs card) */}
        <div className="col-2 box about-skills-card">
          {/* Card Top Header */}
          <div className="about-skills-header">
            <div className="about-skills-title-group">
              <span className="skills-badge-icon">
                <Sparkles size={16} />
              </span>
              <h3 className="about-skills-title">
                Technical <span className="primary">Skills</span>
              </h3>
            </div>
            <span className="skills-count-pill">
              {filteredSkills.length} of {skillsData.length} Skills
            </span>
          </div>

          {/* Category Filter Tabs */}
          <div className="about-skills-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`about-skills-tab-btn ${selectedSkillCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedSkillCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills Capsules Grid */}
          <div className="about-skills-scroll">
            <div className="skills-capsules-container">
              {filteredSkills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-capsule"
                  onClick={() => setSelectedSkillDetails(skill)}
                  title="Click to view details"
                >
                  <div
                    className="capsule-icon-wrap"
                    style={{ color: skill.color || 'var(--color-primary)' }}
                  >
                    {iconMap[skill.icon] || <Code size={16} />}
                  </div>
                  <span className="capsule-name">{skill.name}</span>
                  <div
                    className="capsule-indicator-wrap"
                    title={`${skill.percentage}% Proficiency`}
                  >
                    <svg
                      className="capsule-indicator-svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <circle
                        className="capsule-indicator-track"
                        cx="10"
                        cy="10"
                        r="7"
                        strokeWidth="2.2"
                      />
                      <circle
                        className="capsule-indicator-fill"
                        cx="10"
                        cy="10"
                        r="7"
                        strokeWidth="2.2"
                        stroke={skill.color || 'var(--color-primary)'}
                        strokeDasharray={43.98}
                        strokeDashoffset={43.98 - (43.98 * skill.percentage) / 100}
                        strokeLinecap="round"
                        transform="rotate(-90 10 10)"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Box 2 End */}

        {/* Box 3: What Drives Me */}
        <div className="box my-drive-compact">
          <div className="spotlight"></div>
          <div className="my__drive">
            <h2 className="sub__title">
              What <span className="primary">Drives Me</span>
            </h2>
            <p className="description">
              I'm passionate about solving problems through technology 💻 and turning ideas into meaningful software solutions 🚀.
              With a strong foundation in Data Structures & Algorithms 🧩 and full-stack development ⚙️,
              I build scalable, user-friendly applications with curiosity and continuous improvement.
            </p>
          </div>
          <CustomIcon name="grid-wire-frame" className="kit grid__wireframe" />
        </div>
        {/* Box 3 End */}

        {/* Box 4: Journey Metrics beside What Drives Me */}
        <div className="box about-journey-metrics-box">
          <div className="about-journey-metrics-grid">
            <div className="about-metric-card">
              <Award size={20} className="about-metric-icon" />
              <h3 className="about-metric-value">8.64</h3>
              <p className="about-metric-label">GPA METRIC</p>
            </div>
            <div className="about-metric-card">
              <Globe size={20} className="about-metric-icon" />
              <h3 className="about-metric-value">10 Active</h3>
              <p className="about-metric-label">GITHUB REPOS</p>
            </div>
            <div className="about-metric-card">
              <Code size={20} className="about-metric-icon" />
              <h3 className="about-metric-value">103</h3>
              <p className="about-metric-label">LEETCODE SOLVED</p>
            </div>
            <div className="about-metric-card">
              <Briefcase size={20} className="about-metric-icon" />
              <h3 className="about-metric-value">1 Month</h3>
              <p className="about-metric-label">INTERNSHIP</p>
            </div>
          </div>
        </div>
        {/* Box 4 End */}
        </div>
      </div>

      {/* Skill Details Modal */}
      {selectedSkillDetails && (
        <div className="skill-modal-overlay" onClick={() => setSelectedSkillDetails(null)}>
          <div className="skill-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="skill-modal-close-icon"
              onClick={() => setSelectedSkillDetails(null)}
              aria-label="Close modal"
            >
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

            <button
              type="button"
              className="skill-modal-close-btn"
              onClick={() => setSelectedSkillDetails(null)}
            >
              CLOSE EVALUATION
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
