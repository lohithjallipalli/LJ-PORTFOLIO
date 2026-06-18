import React, { useState } from 'react';
import { Award, Globe, Code, Briefcase, ArrowUpRight, Terminal } from 'lucide-react';
import CustomIcon from './CustomIcon';

export default function Journey() {
  const [activeTab, setActiveTab] = useState('LEETCODE');

  return (
    <section id="journey">
      <div className="container">
        <div className="section__header">
          <h2 className="sub__title">
            CODING <span className="primary">JOURNEY</span>
          </h2>
          <p className="description">
            My active problem-solving stats, and competitive profiles.
          </p>
        </div>

        <hr className="journey-divider" />

        {/* Top Metrics Grid */}
        <div className="coding-journey-metrics">
          <div className="metric-card">
            <Award size={20} className="metric-icon" />
            <h3 className="metric-value">8.64</h3>
            <p className="metric-label">GPA METRIC</p>
          </div>
          <div className="metric-card">
            <Globe size={20} className="metric-icon" />
            <h3 className="metric-value">10 Active</h3>
            <p className="metric-label">GITHUB REPOS</p>
          </div>
          <div className="metric-card">
            <Code size={20} className="metric-icon" />
            <h3 className="metric-value">103</h3>
            <p className="metric-label">LEETCODE SOLVED</p>
          </div>
          <div className="metric-card">
            <Briefcase size={20} className="metric-icon" />
            <h3 className="metric-value">1 Month</h3>
            <p className="metric-label">INTERNSHIP</p>
          </div>
        </div>

        <hr className="journey-divider" />

        {/* Main Tabs Dashboard */}
        <div className="coding-journey-dashboard">
          <div className="coding-journey-tabs-menu">
            <button
              className={`journey-tab-btn ${activeTab === 'LEETCODE' ? 'active' : ''}`}
              onClick={() => setActiveTab('LEETCODE')}
            >
              <Code size={16} /> LEETCODE
            </button>
            <button
              className={`journey-tab-btn ${activeTab === 'GITHUB' ? 'active' : ''}`}
              onClick={() => setActiveTab('GITHUB')}
            >
              <Globe size={16} /> GITHUB
            </button>
            <button
              className={`journey-tab-btn ${activeTab === 'CODECHEF' ? 'active' : ''}`}
              onClick={() => setActiveTab('CODECHEF')}
            >
              <Terminal size={16} /> CODECHEF
            </button>
          </div>

          <div className="coding-journey-details-panel">
            {activeTab === 'LEETCODE' ? (
              <div className="journey-details-card">
                <div className="journey-details-header">
                  <div className="journey-profile-block">
                    <div className="journey-profile-icon-wrapper">
                      <Code size={24} />
                    </div>
                    <div className="journey-profile-info">
                      <h4 className="journey-profile-title">LeetCode</h4>
                      <p className="journey-profile-username">LOHITHJALLIPALLI</p>
                    </div>
                  </div>
                  <a
                    href="https://leetcode.com/u/lohithJallipalli/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="journey-profile-link-btn"
                  >
                    VIEW PROFILE <ArrowUpRight size={14} />
                  </a>
                </div>

                <div className="coding-journey-stats-grid">
                  <div className="journey-stat-card">
                    <p className="journey-stat-label">TOTAL SOLVED</p>
                    <h5 className="journey-stat-value">103</h5>
                  </div>
                  <div className="journey-stat-card">
                    <p className="journey-stat-label">GLOBAL RANKING</p>
                    <h5 className="journey-stat-value">3.3M</h5>
                  </div>
                </div>
              </div>
            ) : activeTab === 'GITHUB' ? (
              <div className="journey-details-card">
                <div className="journey-details-header">
                  <div className="journey-profile-block">
                    <div className="journey-profile-icon-wrapper">
                      <CustomIcon name="github" />
                    </div>
                    <div className="journey-profile-info">
                      <h4 className="journey-profile-title">GitHub</h4>
                      <p className="journey-profile-username">LOHITHJALLIPALLI</p>
                    </div>
                  </div>
                  <a
                    href="https://github.com/lohithjallipalli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="journey-profile-link-btn"
                  >
                    VIEW PROFILE <ArrowUpRight size={14} />
                  </a>
                </div>

                <div className="coding-journey-stats-grid">
                  <div className="journey-stat-card">
                    <p className="journey-stat-label">TOTAL REPOSITORIES</p>
                    <h5 className="journey-stat-value">5</h5>
                  </div>
                  <div className="journey-stat-card">
                    <p className="journey-stat-label">CONTRIBUTIONS</p>
                    <h5 className="journey-stat-value">10+</h5>
                  </div>
                </div>
              </div>
            ) : (
              <div className="journey-details-card">
                <div className="journey-details-header">
                  <div className="journey-profile-block">
                    <div className="journey-profile-icon-wrapper">
                      <Terminal size={24} />
                    </div>
                    <div className="journey-profile-info">
                      <h4 className="journey-profile-title">CodeChef</h4>
                      <p className="journey-profile-username">LOHITHJALLIPALLI</p>
                    </div>
                  </div>
                  <a
                    href="https://www.codechef.com/users/sedge_apple_06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="journey-profile-link-btn"
                  >
                    VIEW PROFILE <ArrowUpRight size={14} />
                  </a>
                </div>

                <div className="coding-journey-stats-grid">
                  <div className="journey-stat-card">
                    <p className="journey-stat-label">CURRENT RATING</p>
                    <h5 className="journey-stat-value">-</h5>
                  </div>
                  <div className="journey-stat-card">
                    <p className="journey-stat-label">STARS / DIVISION</p>
                    <h5 className="journey-stat-value">-</h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
