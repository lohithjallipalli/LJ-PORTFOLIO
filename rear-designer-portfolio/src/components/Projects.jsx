import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ArrowUpRight, X } from 'lucide-react';
import CustomIcon from './CustomIcon';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedProjectDetails, setSelectedProjectDetails] = useState(null);

  return (
    <section id="projects">
      <div className="container">
        <div className="section__header">
          <h2 className="sub__title">
            My Recent <span className="primary">Projects</span>
          </h2>
          <p className="description">
            Explore my latest work, blending creativity and code for functional,
            responsive applications with clean design and seamless user experiences.
          </p>
        </div>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="project-card" 
              onClick={() => setSelectedProjectDetails(project)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-card-header">
                <div className="project-icon-wrapper">
                  <Briefcase size={20} />
                </div>
              </div>
              
              <div className="project-card-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-role">{project.role}</p>
              </div>

              <div className="project-meta">
                <span className="project-meta-item">
                  <Calendar size={14} /> {project.duration}
                </span>
                <span className="project-meta-item">
                  <MapPin size={14} /> {project.type}
                </span>
              </div>

              <div className="project-skills-section">
                <h4 className="project-skills-title">SKILLS & TECHNOLOGIES</h4>
                <div className="project-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <button 
                className="project-view-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProjectDetails(project);
                }}
              >
                VIEW DETAILS <ArrowUpRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal Start */}
      {selectedProjectDetails && (
        <div className="project-modal-overlay" onClick={() => setSelectedProjectDetails(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close-icon" onClick={() => setSelectedProjectDetails(null)}>
              <X size={24} />
            </button>

            <div className="project-modal-header">
              <div className="project-modal-title-row">
                <h3 className="project-modal-title">{selectedProjectDetails.title}</h3>
                {selectedProjectDetails.link && selectedProjectDetails.link !== '#' && (
                  <a
                    href={selectedProjectDetails.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-modal-github-link"
                    title="View GitHub Repository"
                  >
                    <CustomIcon name="github" />
                  </a>
                )}
              </div>
              <p className="project-modal-role">{selectedProjectDetails.role}</p>

              <div className="project-modal-badges">
                <span className="project-modal-badge type">
                  <Briefcase size={12} /> {selectedProjectDetails.type.toUpperCase()}
                </span>
                <span className="project-modal-badge duration">
                  <Calendar size={12} /> {selectedProjectDetails.duration.toUpperCase()}
                </span>
                <span className="project-modal-badge location">
                  <MapPin size={12} /> {selectedProjectDetails.location.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="project-modal-body">
              <p className="project-modal-description">
                {selectedProjectDetails.longDescription || selectedProjectDetails.description}
              </p>

              {/* Render bullet highlights directly in the main modal body */}
              {selectedProjectDetails.keyProjects && selectedProjectDetails.keyProjects.length > 0 && 
                selectedProjectDetails.keyProjects[0].bullets && selectedProjectDetails.keyProjects[0].bullets.length > 0 && (
                  <ul className="project-modal-bullets">
                    {selectedProjectDetails.keyProjects[0].bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="project-modal-bullet-item">
                        {bullet}
                      </li>
                    ))}
                  </ul>
              )}

              <div className="project-modal-skills-section">
                <h4 className="project-modal-section-title">SKILLS & TECHNOLOGIES</h4>
                <div className="project-modal-skills-tags">
                  {selectedProjectDetails.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="project-modal-skill-tag">
                      {skill.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button className="project-modal-close-btn" onClick={() => setSelectedProjectDetails(null)}>
              CLOSE DETAILS
            </button>
          </div>
        </div>
      )}
      {/* Project Details Modal End */}
    </section>
  );
}
