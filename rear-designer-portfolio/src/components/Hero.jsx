import React from 'react';
import CustomIcon from './CustomIcon';
import Odometer from './Odometer';

export default function Hero() {
  return (
    <section id="header" className="bg__secondary">
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
              I'm <span className="theme-gradient-text">Lohith</span><br />
              Software Developer
            </h1>
            <p className="description">
              Aspiring Software Developer and recent B.Tech graduate with proficiency in Data Structures and Algorithms and
              a strong interest in designing efficient, user-focused applications. Actively developing my expertise in
              software development, problem-solving and system design while working toward building scalable and
              impactful solutions. Committed to continuous learning and excited to contribute to
              innovative development teams.
            </p>
            <div className="flex buttons">
              <div className="flex social__handles">
                <a href="https://leetcode.com/u/lohithJallipalli/" target="_blank" rel="noopener noreferrer" className="icon__container handle">
                  <CustomIcon name="leetcode" />
                </a>
                <a href="https://github.com/lohithjallipalli" target="_blank" rel="noopener noreferrer" className="icon__container handle">
                  <CustomIcon name="github" />
                </a>
                <a href="https://www.linkedin.com/in/lohith-j-380102200/" target="_blank" rel="noopener noreferrer" className="icon__container handle">
                  <CustomIcon name="linkedin" />
                </a>
              </div>
              <a href="#contact" className="btn btn__primary">Contact Me</a>
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
                <Odometer value={2} />
                <h3 className="sub__title">+</h3>
              </div>
              <p className="text__muted">Realtime projects delivered</p>
            </div>
            {/* Point End */}

            {/* Point Start */}
            <div className="point">
              <div className="flex">
                <Odometer value={5} />
                <h3 className="sub__title">+</h3>
              </div>
              <p className="text__muted">Active GitHub repos</p>
            </div>
            {/* Point End */}
          </div>
        </div>
      </div>
    </section>
  );
}
