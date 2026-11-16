import React, { useEffect } from 'react';
import { X, Home, User, Wrench, FolderGit2, Award, Mail, ExternalLink } from 'lucide-react';

export default function Sidebar({ sidebarOpen, setSidebarOpen, activeSection }) {
  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  const navLinks = [
    { href: '#header', label: 'Home', id: 'header', icon: Home },
    { href: '#about', label: 'About', id: 'about', icon: User },
    { href: '#skills', label: 'Skills', id: 'skills', icon: Wrench },
    { href: '#projects', label: 'Projects', id: 'projects', icon: FolderGit2 },
    { href: '#certifications', label: 'Certifications', id: 'certifications', icon: Award },
    { href: '#contact', label: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className={`sidebar-backdrop ${sidebarOpen ? 'visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in Mobile Drawer */}
      <aside className={`sidebar ${sidebarOpen ? 'visible' : ''}`} aria-label="Mobile Navigation">
        <div className="sidebar__wrapper">
          <div className="sidebar__top">
            <a href="#header" className="sidebar-brand" onClick={() => setSidebarOpen(false)}>
              <div className="avatar-circle">L</div>
              <span className="logo-name">Lohith Jallipalli</span>
            </a>
            <button 
              type="button"
              className="icon__container close-sidebar-btn" 
              onClick={() => setSidebarOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="sidebar__navlinks">
            {navLinks.map((link) => {
              const IconComp = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a 
                  key={link.id}
                  href={link.href} 
                  className={`sidebar__navitem ${isActive ? 'active' : ''}`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="navitem-icon-wrap">
                    <IconComp size={18} />
                  </span>
                  <span className="navitem-label">{link.label}</span>
                  {isActive && <span className="navitem-active-dot"></span>}
                </a>
              );
            })}
          </nav>

          <div className="sidebar__footer">
            <a
              href="https://learning.servicenow.com/lxp?id=nl_public&user=lohith8919344860"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar__cta-btn"
              onClick={() => setSidebarOpen(false)}
            >
              <span>ServiceNow Profile</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
