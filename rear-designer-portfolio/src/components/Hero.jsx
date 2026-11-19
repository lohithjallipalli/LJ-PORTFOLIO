import React from 'react';
import { ExternalLink } from 'lucide-react';
import CustomIcon from './CustomIcon';
import Odometer from './Odometer';

export default function Hero() {
  return (
    <section id="header">
      <div className="spotlight"></div>
      <div className="container">
        <div className="grid">
          <div className="me">
            <img src="./assets/me.png" alt="Lohith jallipalli" />
          </div>
          <div className="user__info">
            <div className="opportunity-badge">
              <span className="dot"></span>
              Available for opportunities
            </div>
            <h1 className="title hero-title">
              I'm <span className="theme-gradient-text">Lohith Jallipalli</span><br />
              <span className="hero-designation">ServiceNow Administrator</span>
            </h1>
            <p className="description">
              Aspiring ServiceNow Administrator and recent B.Tech graduate with hands-on expertise in platform configuration, ITSM workflows, and process automation. Proficient in managing Users, Groups, Roles, ACLs, UI Policies, Flow Designer, and custom scripting via Business Rules and Client Scripts. Passionate about streamlining enterprise operations, maintaining system integrity, and delivering scalable, user-centric service management solutions.
            </p>
            <div className="flex buttons">
              <div className="flex social__handles">
                <a href="https://leetcode.com/u/lohithJallipalli/" target="_blank" rel="noopener noreferrer" className="icon__container handle" title="LeetCode">
                  <CustomIcon name="leetcode" />
                </a>
                <a href="https://github.com/lohithjallipalli" target="_blank" rel="noopener noreferrer" className="icon__container handle" title="GitHub">
                  <CustomIcon name="github" />
                </a>
                <a href="https://www.linkedin.com/in/jlohith11/" target="_blank" rel="noopener noreferrer" className="icon__container handle" title="LinkedIn">
                  <CustomIcon name="linkedin" />
                </a>
              </div>
              <a
                href="https://learning.servicenow.com/lxp?id=nl_public&user=lohith8919344860"
                target="_blank"
                rel="noopener noreferrer"
                className="btn hero-servicenow-btn"
              >
                ServiceNow profile
                <ExternalLink size={16} />
              </a>
              <a href="#contact" className="btn btn__primary">Contact Me</a>
            </div>
          </div>
        </div>

        <div className="points">
          <div className="spotlight"></div>
          {/* Point Start */}
          <div className="point">
            <div className="flex">
              <Odometer value={2} />
              <h3 className="sub__title">+</h3>
            </div>
            <p className="text__muted">Internships</p>
          </div>
          {/* Point End */}

          {/* Point Start */}
          <div className="point">
            <div className="flex">
              <Odometer value={100} />
              <h3 className="sub__title">+</h3>
            </div>
            <p className="text__muted">Leet code problems</p>
          </div>
          {/* Point End */}

          {/* Point Start */}
          <div className="point">
            <div className="flex">
              <Odometer value={5} />
              <h3 className="sub__title">+</h3>
            </div>
            <p className="text__muted">Realtime projects delivered</p>
          </div>
          {/* Point End */}

          {/* Point Start */}
          <div className="point">
            <div className="flex">
              <Odometer value={6} />
              <h3 className="sub__title">+</h3>
            </div>
            <p className="text__muted">Active GitHub repos</p>
          </div>
          {/* Point End */}
        </div>
      </div>
    </section>
  );
}
