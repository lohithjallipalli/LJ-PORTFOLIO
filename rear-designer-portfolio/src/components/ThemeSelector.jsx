import React, { useState } from 'react';
import { Palette } from 'lucide-react';

export default function ThemeSelector({ accentTheme, setAccentTheme, themeColors }) {
  const [themePanelOpen, setThemePanelOpen] = useState(false);

  return (
    <div className="theme-selector-container">
      <button
        className="theme-selector-btn"
        onClick={() => setThemePanelOpen(!themePanelOpen)}
        aria-label="Toggle Theme Menu"
      >
        <Palette size={20} />
      </button>

      {themePanelOpen && (
        <div className="theme-selector-panel">
          <div className="theme-selector-header">Accent Colors</div>
          {Object.keys(themeColors).map((themeName) => (
            <div
              key={themeName}
              className={`theme-option ${accentTheme === themeName ? 'active' : ''}`}
              onClick={() => {
                setAccentTheme(themeName);
                setThemePanelOpen(false);
              }}
            >
              <span
                className="theme-dot"
                style={{ backgroundColor: themeColors[themeName].primary }}
              />
              <span className="theme-name">{themeName}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
