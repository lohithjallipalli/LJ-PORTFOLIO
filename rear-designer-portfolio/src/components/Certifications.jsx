import { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Database, 
  Terminal, 
  Code, 
  Globe, 
  Briefcase, 
  Layers, 
  Zap, 
  TrendingUp,
  SquareArrowOutUpRight,
  Sparkles
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const iconMap = {
  Shield: ShieldCheck,
  TrendingUp: TrendingUp,
  Layers: Layers,
  Database: Database,
  Zap: Zap,
  Award: Award,
  Terminal: Terminal,
  Briefcase: Briefcase,
  Globe: Globe,
  Code: Code,
  Sparkles: Sparkles,
};

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'SERVICENOW', 'DEVELOPMENT', 'AI & DATA', 'DEVOPS & LINUX', 'LANGUAGES'];

  const sortedCertifications = [...certificationsData].sort((a, b) => a.title.localeCompare(b.title));

  const filteredCertifications = selectedCategory === 'ALL'
    ? sortedCertifications
    : sortedCertifications.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certifications">
      <div className="container">
        <div className="section__header">
          <h2 className="sub__title">
            LICENSES & <span className="primary">CERTIFICATIONS</span>
          </h2>
          <p className="description">
            Officially verified credentials, industry certificates, and platform specializations.
          </p>

          <div className="cert-count-pill">
            <Sparkles size={14} className="primary" />
            <span>{certificationsData.length} Verified Credentials</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="cert-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cert-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
              {cat === 'ALL' && <span className="cert-filter-count">{certificationsData.length}</span>}
              {cat !== 'ALL' && (
                <span className="cert-filter-count">
                  {certificationsData.filter(c => c.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Certifications Mini Cards Grid */}
        <div className="certifications-grid">
          {filteredCertifications.map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || Award;
            return (
              <div key={index} className="cert-mini-card">
                <div className="cert-card-header">
                  <span className={`cert-badge ${cert.category.toLowerCase().replace(/[^a-z]/g, '-')}`}>
                    {cert.category}
                  </span>
                  <span className="cert-date">{cert.date}</span>
                </div>

                <div className="cert-card-body">
                  <div className="cert-title-row">
                    <div className="cert-icon-wrap">
                      {cert.logo ? (
                        <img
                          src={cert.logo}
                          alt={cert.issuer}
                          className="cert-company-logo"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.parentElement?.querySelector('.cert-icon-fallback');
                            if (fallback) fallback.style.display = 'block';
                          }}
                        />
                      ) : null}
                      <IconComponent
                        size={18}
                        className="cert-icon-fallback"
                        style={{ display: cert.logo ? 'none' : 'block' }}
                      />
                    </div>
                    <div>
                      <h3 className="cert-title">{cert.title}</h3>
                      <p className="cert-issuer">{cert.issuer}</p>
                    </div>
                  </div>

                  <p className="cert-one-liner">{cert.description}</p>
                </div>

                <div className="cert-card-footer">
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-view-btn"
                    >
                      <span>VIEW CREDENTIAL</span>
                      <SquareArrowOutUpRight size={13} />
                    </a>
                  ) : (
                    <span className="cert-verified-label">VERIFIED CREDENTIAL</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
