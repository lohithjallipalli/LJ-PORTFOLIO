import React, { useState } from 'react';

const PURPOSES = {
  BUSINESS: 'business',
  STALKING: 'stalking',
};

const STALKING_RESPONSES = [
  "No judgment whatsoever 😏",
  "Curiosity is 100% valid 🔍",
  "We've all been there 👀",
  "Respect the hustle 💯",
];

function IntroScreen({ onComplete }) {
  const [phase, setPhase] = useState('intro'); // 'intro' | 'response'
  const [selectedPurpose, setSelectedPurpose] = useState(null);
  const [stalkingResponse] = useState(
    () => STALKING_RESPONSES[Math.floor(Math.random() * STALKING_RESPONSES.length)]
  );

  const handleSelect = (purpose) => {
    setSelectedPurpose(purpose);
    setPhase('response');

    // Auto complete after 1.8s
    setTimeout(() => {
      onComplete(purpose);
    }, 1800);
  };

  const handleSkip = () => {
    onComplete('skipped');
  };

  return (
    <div className="intro__overlay">
      {/* Decorative floating glows */}
      <div className="intro__glow intro__glow--1" />
      <div className="intro__glow intro__glow--2" />

      {/* Frame corners */}
      <div className="intro__corner intro__corner--tl" />
      <div className="intro__corner intro__corner--tr" />
      <div className="intro__corner intro__corner--bl" />
      <div className="intro__corner intro__corner--br" />

      {phase === 'intro' ? (
        <div className="intro__card animate-fade-in">
          <div className="intro__badge">Welcome to my space</div>

          <h1 className="intro__name">
            Hey, I'm <span className="intro__name-highlight">Lohith</span> 👋
          </h1>

          <p className="intro__subtitle">
            Techie
          </p>

          <div className="intro__divider" />

          <p className="intro__prompt-title">Quick check — what brings you here today?</p>

          <div className="intro__cards-grid">
            <button
              id="intro-business-btn"
              className="intro__choice-card intro__choice-card--business"
              onClick={() => handleSelect(PURPOSES.BUSINESS)}
            >
              <div className="intro__choice-icon-wrap">
                <span className="intro__choice-emoji">💼</span>
              </div>
              <div className="intro__choice-info">
                <span className="intro__choice-title">Business Purpose</span>
                <span className="intro__choice-desc">Hiring, projects, or collaboration</span>
              </div>
              <span className="intro__choice-arrow">→</span>
            </button>

            <button
              id="intro-stalking-btn"
              className="intro__choice-card intro__choice-card--stalking"
              onClick={() => handleSelect(PURPOSES.STALKING)}
            >
              <div className="intro__choice-icon-wrap">
                <span className="intro__choice-emoji">👀</span>
              </div>
              <div className="intro__choice-info">
                <span className="intro__choice-title">Just Stalking</span>
                <span className="intro__choice-desc">Curious, exploring, or checking out my work</span>
              </div>
              <span className="intro__choice-arrow">→</span>
            </button>
          </div>

          <button id="intro-skip-btn" className="intro__skip-action" onClick={handleSkip}>
            Skip &amp; dive straight into portfolio →
          </button>
        </div>
      ) : (
        <div className="intro__card intro__card--response animate-pop-in">
          {selectedPurpose === PURPOSES.BUSINESS ? (
            <>
              <div className="intro__response-icon">💼 🚀</div>
              <h2 className="intro__response-heading">Welcome, Partner!</h2>
              <p className="intro__response-text">
                Let's explore my projects, skills, and how we can work together.
              </p>
            </>
          ) : (
            <>
              <div className="intro__response-icon">🕵️‍♂️ ✨</div>
              <h2 className="intro__response-heading">{stalkingResponse}</h2>
              <p className="intro__response-text">
                Feel free to look around. Everything you're curious about is right here!
              </p>
            </>
          )}
          <div className="intro__loading-bar">
            <div className="intro__loading-fill" />
          </div>
        </div>
      )}
    </div>
  );
}

export default IntroScreen;
