import React from 'react';
import { X } from 'lucide-react';
import CustomIcon from './CustomIcon';

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <aside className={`sidebar ${sidebarOpen ? 'visible' : ''}`}>
      <div className="sidebar__wrapper">
        <div className="flex__center top">
          <div className="logo">
            <CustomIcon name="logo" />
          </div>
          <div className="icon__container" id="close-sidebar-btn" onClick={() => setSidebarOpen(false)}>
            <X />
          </div>
        </div>
        <div className="middle navlinks" onClick={() => setSidebarOpen(false)}>
          <a href="#header" className="navitem">Home</a>
          <a href="#about" className="navitem">About</a>
          <a href="#skills" className="navitem">Skills</a>
          <a href="#projects" className="navitem">Projects</a>
          <a href="#journey" className="navitem">Journey</a>
          <a href="#contact" className="navitem">Contact</a>
        </div>
      </div>
    </aside>
  );
}
