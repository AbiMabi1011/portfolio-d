import React, { useEffect, useState, useRef } from 'react';
import './index.css';
import daniImg from './images/dani.jpeg';

// Import all 18 About gallery images from your 4 category folders: Work, Academics, Assignments, CSR
import imgWork1 from './images/about img/Work/IMG-20260811-WA0004.jpg';

import imgAcad1 from './images/about img/Academics/IMG-20260811-WA0009.jpg';
import imgAcad2 from './images/about img/Academics/IMG-20260811-WA0010.jpg';
import imgAcad3 from './images/about img/Academics/IMG-20260811-WA0011.jpg';
import imgAcad4 from './images/about img/Academics/IMG-20260811-WA0012.jpg';
import imgAcad5 from './images/about img/Academics/IMG-20260811-WA0013.jpg';
import imgAcad6 from './images/about img/Academics/IMG-20260811-WA0014.jpg';
import imgAcad7 from './images/about img/Academics/IMG-20260811-WA0021.jpg';
import imgAcad8 from './images/about img/Academics/IMG-20260811-WA0023.jpg';
import imgAcad9 from './images/about img/Academics/IMG-20260811-WA0026.jpg';

import imgCsr1 from './images/about img/CSR/IMG-20260811-WA0016.jpg';
import imgCsr2 from './images/about img/CSR/IMG-20260811-WA0018.jpg';
import imgCsr3 from './images/about img/CSR/IMG-20260811-WA0020.jpg';
import imgCsr4 from './images/about img/CSR/IMG-20260811-WA0022.jpg';
import imgCsr5 from './images/about img/CSR/IMG-20260811-WA0027.jpg';

import imgAssign1 from './images/about img/Assignments/IMG-20260811-WA0008.jpg';
import imgAssign2 from './images/about img/Assignments/IMG-20260811-WA0024.jpg';
import imgAssign3 from './images/about img/Assignments/IMG-20260811-WA0025.jpg';

// Import Exact Real LinkedIn Post Images
import liHrImg from './images/linkedin posts/hr (1).png';
import liPost2Img from './images/linkedin posts/02.png';
import liPost3Img from './images/linkedin posts/03.png';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeTab, setActiveTab] = useState('All');
  const [expandedModule, setExpandedModule] = useState(0);
  const [expandedPosts, setExpandedPosts] = useState({});

  const togglePostExpand = (id, e) => {
    if (e) e.stopPropagation();
    setExpandedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Organized 18 photos matching your 4 folders: Work, Academics, Assignments, CSR
  const allGalleryImages = [
    { id: 1, src: imgWork1, title: "BBK Partnership Internship & Financial Analysis", tag: "Work", category: "Work" },
    { id: 2, src: imgAcad1, title: "SLIIT Business Analytics Coursework", tag: "Academics", category: "Academics" },
    { id: 3, src: imgAcad2, title: "Data Visualization & Query Project", tag: "Academics", category: "Academics" },
    { id: 4, src: imgAcad3, title: "University Hackathon & Analytics Study", tag: "Academics", category: "Academics" },
    { id: 5, src: imgAcad4, title: "Diploma in English & IT Graduation", tag: "Academics", category: "Academics" },
    { id: 6, src: imgAcad5, title: "Academic Research Presentation", tag: "Academics", category: "Academics" },
    { id: 7, src: imgAcad6, title: "Power BI Case Study Session", tag: "Academics", category: "Academics" },
    { id: 8, src: imgAcad7, title: "SQL Database Queries & Reporting", tag: "Academics", category: "Academics" },
    { id: 9, src: imgAcad8, title: "Field Research & Data Collection in Jaffna", tag: "Academics", category: "Academics" },
    { id: 10, src: imgAcad9, title: "A/L Stream Selection Academic Study", tag: "Academics", category: "Academics" },
    { id: 11, src: imgAssign1, title: "University Business Assignment & Group Work", tag: "Assignments", category: "Assignments" },
    { id: 12, src: imgAssign2, title: "Academic Project Modeling & Case Analysis", tag: "Assignments", category: "Assignments" },
    { id: 13, src: imgAssign3, title: "Collaborative Study Session & Problem Solving", tag: "Assignments", category: "Assignments" },
    { id: 14, src: imgCsr1, title: "Special Needs School Educational Workshop", tag: "CSR", category: "CSR" },
    { id: 15, src: imgCsr2, title: "Community Welfare & Activity Facilitation", tag: "CSR", category: "CSR" },
    { id: 16, src: imgCsr3, title: "Healthcare CSR & Hospital Engagement", tag: "CSR", category: "CSR" },
    { id: 17, src: imgCsr4, title: "Sivapoomi School Volunteering Program", tag: "CSR", category: "CSR" },
    { id: 18, src: imgCsr5, title: "Student Community CSR Team Project", tag: "CSR", category: "CSR" },
  ];

  const filteredImages = activeTab === 'All' 
    ? allGalleryImages 
    : allGalleryImages.filter(img => img.category === activeTab);

  // Lightbox navigation functions
  const handlePrevImg = (e) => {
    e.stopPropagation();
    if (!selectedImg) return;
    const currentIndex = allGalleryImages.findIndex(img => img.id === selectedImg.id);
    const prevIndex = (currentIndex - 1 + allGalleryImages.length) % allGalleryImages.length;
    setSelectedImg(allGalleryImages[prevIndex]);
  };

  const handleNextImg = (e) => {
    e.stopPropagation();
    if (!selectedImg) return;
    const currentIndex = allGalleryImages.findIndex(img => img.id === selectedImg.id);
    const nextIndex = (currentIndex + 1) % allGalleryImages.length;
    setSelectedImg(allGalleryImages[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImg) return;
      if (e.key === 'ArrowLeft') {
        const currentIndex = allGalleryImages.findIndex(img => img.id === selectedImg.id);
        const prevIndex = (currentIndex - 1 + allGalleryImages.length) % allGalleryImages.length;
        setSelectedImg(allGalleryImages[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = allGalleryImages.findIndex(img => img.id === selectedImg.id);
        const nextIndex = (currentIndex + 1) % allGalleryImages.length;
        setSelectedImg(allGalleryImages[nextIndex]);
      } else if (e.key === 'Escape') {
        setSelectedImg(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImg]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));

    const fills = document.querySelectorAll('.skill-fill, .bigskill-fill');
    const fillIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target;
            const pct = el.getAttribute('data-pct') || '0';
            requestAnimationFrame(() => {
              el.style.width = pct + '%';
            });
            fillIO.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    fills.forEach((el) => fillIO.observe(el));

    return () => {
      io.disconnect();
      fillIO.disconnect();
    };
  }, []);

  return (
    <>
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      <header>
        <nav className="wrap">
          <div className="brand">
            <span className="brand-mark">
              <span></span>
              <span></span>
              <span></span>
            </span>
            Danisha S.
          </div>
          <div className="navlinks">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#research">Research</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#certifications">Certifications</a></li>
            </ul>
            <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--ink-soft)', opacity: 0.55, letterSpacing: '0.04em' }}>
              REF · DS-2026
            </span>
            <a className="nav-cta" href="mailto:Sudhaseharandanisha@gmail.com">Let's talk</a>
          </div>
        </nav>
      </header>

      <section className="hero">
        <svg className="hero-watermark" viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg">
          <path className="p1" d="M10 210 L90 170 L160 190 L230 110 L300 140 L370 60 L460 90" />
          <path className="p2" d="M10 240 L90 235 L160 220 L230 225 L300 200 L370 205 L460 180" />
          <circle cx="460" cy="90" r="5" />
        </svg>
        <div className="wrap hero-grid" style={{ position: 'relative', zIndex: 1 }}>
          <div>
            <span className="eyebrow"><span className="dot"></span>Open to Business Analyst opportunities</span>
            <h1 className="hero-title">
              Turning raw data into decisions that <span className="accent">move business forward.</span>
            </h1>
            <p className="hero-sub">
              I'm Danisha Sudhaseharan, a Business Analytics undergraduate in Jaffna, Sri Lanka, learning to read numbers the way a business needs them read — through Excel, Power BI, SQL and Python.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="#experience">
                View my work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a className="btn-secondary" href="mailto:Sudhaseharandanisha@gmail.com">Contact me</a>
            </div>
            <div className="hero-meta">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Kantharmadam, Jaffna, LK
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 9h18M8 3v4M16 3v4" />
                </svg>
                BBA (Hons) Business Analytics — SLIIT Northern Uni
              </span>
            </div>
          </div>

          <div className="dash-card reveal hero-portrait-card">
            <div className="hero-img-container">
              <img src={daniImg} alt="Danisha Sudhaseharan" className="hero-portrait-img" />
              <div className="hero-img-badge">
                <span className="dot"></span> Open to Roles
              </div>
            </div>
            <div className="hero-profile-info">
              <div className="hero-profile-name">Danisha Sudhaseharan</div>
              <div className="hero-profile-role">Aspiring Business Analyst</div>
            </div>
          </div>
        </div>
      </section>

      <div className="cred-strip">
        <div className="wrap">
          <div className="cred-grid">
            <div className="cred-item">
              <span className="cred-val">2<span className="unit">yrs+</span></span>
              <span className="cred-label">In Business Analytics education</span>
            </div>
            <div className="cred-item">
              <span className="cred-val">6</span>
              <span className="cred-label">Professional certifications completed</span>
            </div>
            <div className="cred-item">
              <span className="cred-val">4</span>
              <span className="cred-label">Core tools — Excel, Power BI, SQL, Python</span>
            </div>
            <div className="cred-item">
              <span className="cred-val">3</span>
              <span className="cred-label">Languages spoken professionally</span>
            </div>
          </div>
        </div>
      </div>

      <section id="about">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="sec-label">01 — About</span>
              <h2 className="sec-title">The person behind the numbers.</h2>
            </div>
          </div>

          <div className="about-grid reveal">
            <div className="about-card">
              <div className="about-avatar">
                <img src={daniImg} alt="Danisha Sudhaseharan" />
              </div>
              <p className="about-card-quote">"I want to read business data the way a decision actually needs it read — clearly, and on time."</p>
              <div className="about-card-meta">
                <div className="about-meta-row"><span className="k">Based in</span><span className="v">Jaffna, LK</span></div>
                <div className="about-meta-row"><span className="k">Studying</span><span className="v">BBA (Hons), Analytics</span></div>
                <div className="about-meta-row"><span className="k">Currently</span><span className="v">BA Intern @ BBK</span></div>
                <div className="about-meta-row"><span className="k">Open to</span><span className="v">Internships / Entry-roles</span></div>
              </div>
            </div>

            <div>
              <div className="about-body">
                <p>I'm <strong>Danisha Sudhaseharan</strong>, a final-year Business Analytics undergraduate at SLIIT (Northern Uni), building a career around one idea: that good decisions come from data that's been read properly, not just reported.</p>
                <p>My path started with an Advanced Level exam in Kalpitiya and grew from there — diplomas in IT and English, self-directed certifications in Power BI, SQL, and decision intelligence, and now a live seat inside a real business as a Business Analytics Intern at BBK Partnership, where I work with financial records, VAT reporting, and compliance documentation day to day.</p>
                <p>Outside coursework, I've spent time on community CSR work at Nainathivu Divisional Hospital and with children with intellectual disabilities at Sivapoomi School — work that keeps the "business" in business analytics grounded in people, not just spreadsheets.</p>
              </div>

              <div className="about-highlights">
                <div className="about-highlight">
                  <div className="about-highlight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M3 3v18h18M7 15l4-4 3 3 5-6" />
                    </svg>
                  </div>
                  <div className="about-highlight-title">Analytical by habit</div>
                  <div className="about-highlight-desc">I default to asking what the data actually supports before I trust a conclusion.</div>
                </div>
                <div className="about-highlight">
                  <div className="about-highlight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <rect x="4" y="4" width="16" height="16" rx="3" />
                      <path d="M9 9h6M9 13h6M9 17h3" />
                    </svg>
                  </div>
                  <div className="about-highlight-title">Detail-driven</div>
                  <div className="about-highlight-desc">Financial reporting and VAT documentation taught me that accuracy isn't optional.</div>
                </div>
                <div className="about-highlight">
                  <div className="about-highlight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <circle cx="9" cy="8" r="3" />
                      <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
                      <circle cx="18" cy="8" r="2.5" />
                      <path d="M15 20c.2-2.6 1.9-4.7 4.2-5.5" />
                    </svg>
                  </div>
                  <div className="about-highlight-title">Team-oriented</div>
                  <div className="about-highlight-desc">Comfortable translating findings for both technical and non-technical stakeholders.</div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- INSTAGRAM STORY HIGHLIGHT RINGS & REEL CARDS ---------- */}
          <div className="about-reels-section reveal" style={{ marginTop: '36px' }}>
            <div className="reels-head">
              <div>
                <span className="skill-cat-label">Moments &amp; Highlights</span>
                <h3 className="story-deck-title">Visual Story Highlights</h3>
              </div>
              <span className="mono gallery-count">18 Photos • Tap ring or card</span>
            </div>

            {/* Circular Category Highlight Rings */}
            <div className="reels-rings-row">
              {[
                { name: 'Work', label: 'Work', count: allGalleryImages.filter(i => i.category === 'Work').length, cover: allGalleryImages.find(i => i.category === 'Work')?.src },
                { name: 'Academics', label: 'Academics', count: allGalleryImages.filter(i => i.category === 'Academics').length, cover: allGalleryImages.find(i => i.category === 'Academics')?.src },
                { name: 'Assignments', label: 'Assignments', count: allGalleryImages.filter(i => i.category === 'Assignments').length, cover: allGalleryImages.find(i => i.category === 'Assignments')?.src },
                { name: 'CSR', label: 'CSR Projects', count: allGalleryImages.filter(i => i.category === 'CSR').length, cover: allGalleryImages.find(i => i.category === 'CSR')?.src },
              ].map((category) => (
                <div
                  key={category.name}
                  className={`reel-ring-item ${activeTab === category.name ? 'active' : ''}`}
                  onClick={() => setActiveTab(activeTab === category.name ? 'All' : category.name)}
                >
                  <div className="reel-ring-border">
                    <div className="reel-ring-img">
                      <img src={category.cover} alt={category.label} />
                    </div>
                  </div>
                  <span className="reel-ring-label">{category.label}</span>
                  <span className="reel-ring-badge">{category.count}</span>
                </div>
              ))}
              {activeTab !== 'All' && (
                <button className="reel-reset-btn" onClick={() => setActiveTab('All')}>
                  Show All (18)
                </button>
              )}
            </div>

            {/* Grid of Highlight Reel Cards */}
            <div className="reels-grid">
              {filteredImages.map((img) => (
                <div
                  key={img.id}
                  className="reel-card"
                  onClick={() => setSelectedImg(img)}
                >
                  <div className="reel-card-img">
                    <img src={img.src} alt={img.title} loading="lazy" />
                    <div className="reel-card-gradient"></div>
                  </div>
                  <div className="reel-card-content">
                    <span className="reel-card-tag">{img.tag}</span>
                    <h4 className="reel-card-title">{img.title}</h4>
                  </div>
                  <div className="reel-card-play-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Prev/Next Navigation */}
      {selectedImg && (
        <div className="lightbox-modal" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImg(null)}>✕</button>
            
            <button className="lightbox-nav lightbox-prev" onClick={handlePrevImg} title="Previous (Left Arrow)">
              ‹
            </button>

            <div className="lightbox-img-wrap">
              <img src={selectedImg.src} alt={selectedImg.title} />
            </div>

            <button className="lightbox-nav lightbox-next" onClick={handleNextImg} title="Next (Right Arrow)">
              ›
            </button>

            <div className="lightbox-caption">
              <span className="lightbox-tag">{selectedImg.tag}</span>
              <h4>{selectedImg.title}</h4>
              <span className="mono lightbox-counter">
                {allGalleryImages.findIndex(img => img.id === selectedImg.id) + 1} / {allGalleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}

      <section id="skills">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="sec-label">02 — Capabilities</span>
              <h2 className="sec-title">Skills, structured like a stakeholder would want them.</h2>
            </div>
            <p className="sec-note">A mix of technical fluency, analytical instinct, and the soft skills that make findings land with a room.</p>
          </div>

          {/* ---------- EXECUTIVE CAPABILITY MATRIX TABLE ---------- */}
          <div className="matrix-wrapper reveal">
            <div className="matrix-table-card">
              <table className="capability-table">
                <thead>
                  <tr>
                    <th>Capability &amp; Tool</th>
                    <th>Category</th>
                    <th>Key Application &amp; Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="matrix-skill-item">
                        <div className="matrix-icon excel">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="8" y1="13" x2="16" y2="13" />
                            <line x1="8" y1="17" x2="16" y2="17" />
                          </svg>
                        </div>
                        <div>
                          <strong>Microsoft Excel</strong>
                          <span className="matrix-sub">Advanced Financial Modeling</span>
                        </div>
                      </div>
                    </td>
                    <td><span className="matrix-cat-tag technical">Technical</span></td>
                    <td>Financial records validation, VAT reporting, QuickBooks reconciliation &amp; PivotTable modeling.</td>
                  </tr>

                  <tr>
                    <td>
                      <div className="matrix-skill-item">
                        <div className="matrix-icon powerbi">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 20V10M12 20V4M6 20v-6" />
                          </svg>
                        </div>
                        <div>
                          <strong>Power BI</strong>
                          <span className="matrix-sub">Data Visualization &amp; DAX</span>
                        </div>
                      </div>
                    </td>
                    <td><span className="matrix-cat-tag technical">Technical</span></td>
                    <td>Interactive business performance dashboards, custom DAX metrics &amp; executive report design.</td>
                  </tr>

                  <tr>
                    <td>
                      <div className="matrix-skill-item">
                        <div className="matrix-icon sql">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <ellipse cx="12" cy="5" rx="9" ry="3" />
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                          </svg>
                        </div>
                        <div>
                          <strong>SQL &amp; MySQL</strong>
                          <span className="matrix-sub">Database Querying &amp; Joins</span>
                        </div>
                      </div>
                    </td>
                    <td><span className="matrix-cat-tag technical">Technical</span></td>
                    <td>Relational database querying, multi-table JOINs, subqueries, grouping &amp; structured data extraction.</td>
                  </tr>

                  <tr>
                    <td>
                      <div className="matrix-skill-item">
                        <div className="matrix-icon python">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                        </div>
                        <div>
                          <strong>Python</strong>
                          <span className="matrix-sub">Scripting &amp; Data Cleaning</span>
                        </div>
                      </div>
                    </td>
                    <td><span className="matrix-cat-tag technical">Technical</span></td>
                    <td>Basic pandas scripting, automated data cleaning, survey dataset processing &amp; EDA.</td>
                  </tr>

                  <tr>
                    <td>
                      <div className="matrix-skill-item">
                        <div className="matrix-icon analytical">📊</div>
                        <div>
                          <strong>Analytical Instinct</strong>
                          <span className="matrix-sub">Decision Intelligence</span>
                        </div>
                      </div>
                    </td>
                    <td><span className="matrix-cat-tag analytical">Analytical</span></td>
                    <td>Critical thinking, root cause analysis, verifying data accuracy before trusting business conclusions.</td>
                  </tr>

                  <tr>
                    <td>
                      <div className="matrix-skill-item">
                        <div className="matrix-icon soft">🗣️</div>
                        <div>
                          <strong>Communication &amp; Leadership</strong>
                          <span className="matrix-sub">Stakeholder Engagement</span>
                        </div>
                      </div>
                    </td>
                    <td><span className="matrix-cat-tag soft">Soft Skills</span></td>
                    <td>Translating technical data findings for non-technical stakeholders, CSR leadership &amp; team management.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="sec-label">03 — Applied work</span>
              <h2 className="sec-title">Projects &amp; case studies</h2>
            </div>
            <p className="sec-note">Key business analysis specifications, system design documentation, and web application developments.</p>
          </div>

          <div className="proj-grid reveal">
            {/* Project 01: Intelligent Physics LMS */}
            <div className="proj-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="proj-top">
                  <div className="proj-tags">
                    <span className="proj-tag">Business Analysis</span>
                    <span className="proj-tag">System Design</span>
                    <span className="proj-tag">Requirements Spec</span>
                  </div>
                  <span className="proj-num">01</span>
                </div>
                <h3 className="proj-title" style={{ fontSize: '1.25rem', fontWeight: 700, margin: '10px 0 8px 0', color: 'var(--ink)' }}>
                  Intelligent Physics LMS — Business Analysis
                </h3>
                <p className="proj-desc" style={{ color: 'var(--ink-soft)', lineHeight: 1.55, marginBottom: '16px', fontSize: '0.9rem' }}>
                  Prepared a comprehensive Business Analysis &amp; Functional Requirements Specification for an A/L Physics Learning Management System, covering student management, learning content, quizzes/exams, admin workflows, batch management, and exam-integrity monitoring.
                </p>
              </div>

              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', background: 'rgba(255, 255, 255, 0.03)', padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', marginBottom: '14px' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--ink-soft)', letterSpacing: '0.05em' }}>Role</span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--accent)' }}>Business Analyst</strong>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--ink-soft)', letterSpacing: '0.05em' }}>Company</span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--ink)' }}>Applomic</strong>
                  </div>
                </div>

                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--ink-soft)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Skills &amp; Tools:</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    <span style={{ background: 'var(--card-bg)', border: '1px solid var(--line)', padding: '3px 8px', borderRadius: '14px', fontSize: '0.75rem', color: 'var(--ink)' }}>Requirements Analysis</span>
                    <span style={{ background: 'var(--card-bg)', border: '1px solid var(--line)', padding: '3px 8px', borderRadius: '14px', fontSize: '0.75rem', color: 'var(--ink)' }}>Functional Requirements</span>
                    <span style={{ background: 'var(--card-bg)', border: '1px solid var(--line)', padding: '3px 8px', borderRadius: '14px', fontSize: '0.75rem', color: 'var(--ink)' }}>Business Rules</span>
                    <span style={{ background: 'var(--card-bg)', border: '1px solid var(--line)', padding: '3px 8px', borderRadius: '14px', fontSize: '0.75rem', color: 'var(--ink)' }}>System Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 02: Bright Brain */}
            <div className="proj-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="proj-top">
                  <div className="proj-tags">
                    <span className="proj-tag">Corporate Website</span>
                    <span className="proj-tag">Cloud &amp; IT Services</span>
                    <span className="proj-tag">Frontend</span>
                  </div>
                  <span className="proj-num">02</span>
                </div>
                <h3 className="proj-title" style={{ fontSize: '1.25rem', fontWeight: 700, margin: '10px 0 8px 0', color: 'var(--ink)' }}>
                  Bright Brain — IT Infrastructure &amp; Cloud Solutions
                </h3>
                <p className="proj-desc" style={{ color: 'var(--ink-soft)', lineHeight: 1.55, marginBottom: '16px', fontSize: '0.9rem' }}>
                  Designed and developed a professional corporate website showcasing cloud, server virtualization, cybersecurity, networking, hosting, backup, and managed IT services for enterprise clients.
                </p>
              </div>

              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', background: 'rgba(255, 255, 255, 0.03)', padding: '10px 12px', borderRadius: '6px', border: '1px solid var(--line)', marginBottom: '14px' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--ink-soft)', letterSpacing: '0.05em' }}>Role</span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--accent)' }}>Web Developer</strong>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--ink-soft)', letterSpacing: '0.05em' }}>Focus</span>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--ink)' }}>Responsive UI</strong>
                  </div>
                </div>

                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: 'var(--ink-soft)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Skills &amp; Tools:</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    <span style={{ background: 'var(--card-bg)', border: '1px solid var(--line)', padding: '3px 8px', borderRadius: '14px', fontSize: '0.75rem', color: 'var(--ink)' }}>HTML</span>
                    <span style={{ background: 'var(--card-bg)', border: '1px solid var(--line)', padding: '3px 8px', borderRadius: '14px', fontSize: '0.75rem', color: 'var(--ink)' }}>CSS</span>
                    <span style={{ background: 'var(--card-bg)', border: '1px solid var(--line)', padding: '3px 8px', borderRadius: '14px', fontSize: '0.75rem', color: 'var(--ink)' }}>JavaScript</span>
                    <span style={{ background: 'var(--card-bg)', border: '1px solid var(--line)', padding: '3px 8px', borderRadius: '14px', fontSize: '0.75rem', color: 'var(--ink)' }}>Netlify</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: WORK EXPERIENCE SHOWCASE */}
      <section id="experience">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="sec-label">04 — Track Record</span>
              <h2 className="sec-title">Work Experience</h2>
            </div>
            <p className="sec-note">Applying analytics in a real operating business environment.</p>
          </div>

          {/* ---------- HIGH-IMPACT INTERACTIVE TIMELINE TREE ---------- */}
          <div className="time-tree-container reveal">
            <div className="tree-stem">
              <div className="tree-node-pulse">
                <span className="node-glow"></span>
              </div>
            </div>

            <div className="tree-content-card">
              <div className="tree-card-head">
                <div className="tree-company-badge">
                  <div className="company-logo-box">BBK</div>
                  <div>
                    <h3 className="tree-role-title">Business Analytics Intern</h3>
                    <div className="tree-company-name">BBK Partnership · Jaffna, LK (Accounting &amp; Advisory)</div>
                  </div>
                </div>

                <div className="work-status-badge">
                  <span className="live-pulse"></span>
                  <span>JUNE 2026 — PRESENT</span>
                </div>
              </div>

              {/* Overall Concise Description */}
              <p className="tree-role-summary">
                Working in a live financial advisory seat managing daily accounting records, validating transaction accuracy, organizing VAT compliance documentation, and using QuickBooks &amp; Excel to support executive decision-making.
              </p>

              {/* Interactive Core Competency Tree Branches */}
              <div className="tree-branches-row">
                <div className="tree-branch-chip emerald">
                  <span className="branch-icon">📊</span>
                  <div>
                    <strong>Financial Auditing</strong>
                    <span className="chip-sub">Ledger Accuracy &amp; Validation</span>
                  </div>
                </div>

                <div className="tree-branch-chip amber">
                  <span className="branch-icon">📑</span>
                  <div>
                    <strong>QuickBooks &amp; Excel</strong>
                    <span className="chip-sub">Financial Reporting Models</span>
                  </div>
                </div>

                <div className="tree-branch-chip blue">
                  <span className="branch-icon">🏛️</span>
                  <div>
                    <strong>VAT &amp; Compliance</strong>
                    <span className="chip-sub">Tax Return Records</span>
                  </div>
                </div>

                <div className="tree-branch-chip purple">
                  <span className="branch-icon">💡</span>
                  <div>
                    <strong>Decision Intelligence</strong>
                    <span className="chip-sub">Executive Summaries</span>
                  </div>
                </div>
              </div>

              {/* Tools Tag Strip */}
              <div className="tree-tools-footer">
                <span className="tools-strip-label">Core Analytics Stack:</span>
                <span className="work-tool-pill">QuickBooks</span>
                <span className="work-tool-pill">Microsoft Excel</span>
                <span className="work-tool-pill">Financial Validation</span>
                <span className="work-tool-pill">VAT Reporting</span>
                <span className="work-tool-pill">Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: RESEARCH & COMMUNITY IMPACT */}
      {/* Academic Journey (Education) */}
      <section id="education">
        <div className="wrap">
          {/* Section Header */}
          <div className="sec-head reveal">
            <div>
              <span className="sec-label">05 — Academic Journey</span>
              <h2 className="sec-title">Education &amp; Academic Milestones</h2>
            </div>
          </div>

          {/* Infographic Timeline Layout */}
          <div className="edu-infographic-container reveal">
            {/* SVG Connected Classic Horizontal Pipeline Track */}
            <svg className="edu-pipeline-svg" viewBox="0 0 1000 400" preserveAspectRatio="none">
              <defs>
                <linearGradient id="infographic-pipe-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>

              {/* Glowing Outer Pipe Shadow */}
              <path
                d="M 20 200 L 150 200 C 260 200, 260 200, 380 200 C 500 200, 500 200, 620 200 C 740 200, 740 200, 850 200 L 980 200"
                className="pipe-glow-bg"
              />

              {/* Connected Horizontal Pipeline Track */}
              <path
                d="M 20 200 L 150 200 C 260 200, 260 200, 380 200 C 500 200, 500 200, 620 200 C 740 200, 740 200, 850 200 L 980 200"
                className="pipe-track-main"
              />
            </svg>

            {/* STEP 01: GCE A/L (Page Theme - Card DOWNSIDE below graph) */}
            <div className="info-step page-theme-step" style={{ left: '10%', top: '50%' }}>
              <div className="node-halo page-theme-halo">
                <div className="node-circle page-theme-node">
                  <span className="node-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
                      <path d="M9 21h6" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Pointer Callout Card DOWNSIDE */}
              <div className="callout-box pos-step-downside">
                <div className="callout-card page-theme-card">
                  <span className="info-badge page-theme-badge">2022 • COMPLETED</span>
                  <h3 className="callout-title">G.C.E. Advanced Level (A/L)</h3>
                  <span className="callout-inst">GRCTV Maha Vidyalaya, Kalpitiya</span>
                  <p className="callout-desc">Secondary education building core academic analytical and quantitative foundations.</p>
                  <div className="callout-tags">
                    <span>Secondary Education</span>
                    <span>Commerce</span>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 02: English Diploma (Page Theme - Card UPSIDE above graph) */}
            <div className="info-step page-theme-step" style={{ left: '30%', top: '50%' }}>
              <div className="node-halo page-theme-halo">
                <div className="node-circle page-theme-node">
                  <span className="node-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      <path d="M9 7h6" />
                      <path d="M9 11h4" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Pointer Callout Card UPSIDE */}
              <div className="callout-box pos-step-upside">
                <div className="callout-card page-theme-card">
                  <span className="info-badge page-theme-badge">2023 • COMPLETED</span>
                  <h3 className="callout-title">Diploma in English</h3>
                  <span className="callout-inst">E-Soft Metro College, Chilaw</span>
                  <p className="callout-desc">Professional business communication, report writing, and presentation delivery.</p>
                  <div className="callout-tags">
                    <span>Business Comm</span>
                    <span>Report Writing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 03: IT Diploma (Page Theme - Card DOWNSIDE below graph) */}
            <div className="info-step page-theme-step" style={{ left: '50%', top: '50%' }}>
              <div className="node-halo page-theme-halo">
                <div className="node-circle page-theme-node">
                  <span className="node-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="12" rx="2" />
                      <path d="M2 20h20" />
                      <path d="m9 9 2 2-2 2" />
                      <path d="M13 13h2" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Pointer Callout Card DOWNSIDE */}
              <div className="callout-box pos-step-downside">
                <div className="callout-card page-theme-card">
                  <span className="info-badge page-theme-badge">2023 • COMPLETED</span>
                  <h3 className="callout-title">Diploma in IT</h3>
                  <span className="callout-inst">E-Soft Metro College, Chilaw</span>
                  <p className="callout-desc">Computer applications, programming logic, software tools, and database management.</p>
                  <div className="callout-tags">
                    <span>IT Systems</span>
                    <span>Databases</span>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 04: BBA (Hons) Degree (Page Theme - CURRENT ENROLLED HIGHLIGHT) */}
            <div className="info-step page-theme-step is-current-degree" style={{ left: '70%', top: '50%' }}>
              <div className="node-halo page-theme-halo degree-halo-pulse">
                <div className="pulse-ring-outer"></div>
                <div className="node-circle page-theme-node">
                  <span className="node-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Pointer Callout Card UPSIDE */}
              <div className="callout-box pos-step-upside">
                <div className="callout-card page-theme-card highlight current-degree-card">
                  <div className="current-floating-tag">CURRENT DEGREE</div>
                  <span className="info-badge page-theme-badge live-pulse-badge">
                    <span className="live-dot"></span> 2024 — PRESENT • IN PROGRESS
                  </span>
                  <h3 className="callout-title">BBA (Hons) in Business Analytics</h3>
                  <span className="callout-inst">SLIIT (Northern Uni Campus, Jaffna)</span>
                  <p className="callout-desc">Data-driven business modeling, SQL querying, Power BI visualization, and managerial decision analysis.</p>
                  <div className="callout-tags">
                    <span>BI &amp; Analytics</span>
                    <span>SQL</span>
                    <span>Power BI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 05: Human Resource Management (HRM) — FUTURE ACADEMIC PLAN */}
            <div className="info-step page-theme-step" style={{ left: '90%', top: '50%' }}>
              <div className="node-halo page-theme-halo">
                <div className="node-circle page-theme-node" style={{ background: 'linear-gradient(135deg, #0A66C2 0%, #004182 100%)', color: '#FFF' }}>
                  <span className="node-icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Pointer Callout Card DOWNSIDE */}
              <div className="callout-box pos-step-downside">
                <div className="callout-card page-theme-card" style={{ borderLeft: '4px solid #0A66C2' }}>
                  <span className="info-badge page-theme-badge" style={{ background: 'rgba(10, 102, 194, 0.15)', color: '#0A66C2', fontWeight: 700 }}>
                    UPCOMING • FUTURE ACADEMIC GOAL
                  </span>
                  <h3 className="callout-title">Human Resource Management (HRM)</h3>
                  <span className="callout-inst">Diploma / Advanced Qualification (Planning Phase)</span>
                  <p className="callout-desc">Targeting specialized study in HRM to combine HR talent strategy, workforce analytics, and organizational development with Business Analytics expertise.</p>
                  <div className="callout-tags">
                    <span>HRM Studies</span>
                    <span>Talent Strategy</span>
                    <span>People Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Leadership */}
      <section id="research">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="sec-label">06 — Research &amp; Leadership</span>
              <h2 className="sec-title">Research &amp; Community Impact</h2>
            </div>
            <p className="sec-note">Academic inquiry and community CSR initiatives.</p>
          </div>

          {/* Academic Research */}
          <div className="exp-subsection reveal">
            <span className="skill-cat-label">Academic Research</span>
            <div className="info-card exp-card" style={{ marginTop: '14px' }}>
              <div className="info-card-top">
                <div>
                  <h3 className="exp-card-title">Determinants of GCE A/L Subject Stream Selection in Sri Lanka</h3>
                  <span className="exp-card-subtitle">A Study from Jaffna District</span>
                </div>
                <span className="info-card-tag">Ongoing Research</span>
              </div>
              <p className="exp-card-desc">Independent academic research examining demographic and socio-economic factors influencing subject stream selection among A/L students in Jaffna.</p>
            </div>
          </div>

          {/* CSR & Community Leadership */}
          <div className="exp-subsection reveal" style={{ marginTop: '36px' }}>
            <span className="skill-cat-label">CSR &amp; Community Leadership</span>
            <div className="card-grid" style={{ marginTop: '14px' }}>
              <div className="info-card exp-card">
                <div className="info-card-top">
                  <h3 className="exp-card-title">Nainathivu Divisional Hospital</h3>
                  <span className="info-card-tag">Community CSR</span>
                </div>
                <p className="exp-card-desc">Volunteered on community healthcare CSR initiatives and supported hospital engagement programs.</p>
              </div>
              <div className="info-card exp-card">
                <div className="info-card-top">
                  <h3 className="exp-card-title">Sivapoomi School</h3>
                  <span className="info-card-tag">Special Needs CSR</span>
                </div>
                <p className="exp-card-desc">Supported educational and welfare programs for children with intellectual disabilities.</p>
              </div>
            </div>
          </div>

          {/* Featured on LinkedIn Section (High-Accuracy Professional Layout) */}
          <div className="exp-subsection reveal" style={{ marginTop: '40px' }}>
            <div className="featured-li-header-bar">
              <div className="featured-li-header-left">
                <span className="featured-li-pill-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  FEATURED ON LINKEDIN
                </span>
              </div>
              <a
                href="https://www.linkedin.com/in/danisha-sudhaseharan-795135317"
                target="_blank"
                rel="noopener noreferrer"
                className="featured-li-profile-link"
              >
                Connect on LinkedIn ↗
              </a>
            </div>

            {/* 3-Column Scrollable LinkedIn Post Cards Grid */}
            <div className="featured-li-grid">
              {/* CARD 1: HR and Hiring Trends (2025 - EXACT LIVE USER SCREENSHOT DATA & REAL IMAGE hr (1).png) */}
              <div className="featured-li-card">
                <div className="featured-li-card-head">
                  <div className="featured-li-user">
                    <img src={daniImg} alt="Danisha Sudhaseharan" className="featured-li-avatar" />
                    <div>
                      <div className="featured-li-name-row">
                        <span className="featured-li-name">Danisha Sudhaseharan</span>
                        <span className="featured-li-dot">•</span>
                        <span className="featured-li-degree">1st</span>
                      </div>
                      <p className="featured-li-headline">Aspiring Business Analyst Intern | BBA Undergraduate (SLIIT) | Data Analysis • ...</p>
                      <span className="featured-li-time">10mo • 🌐</span>
                    </div>
                  </div>
                  <div className="featured-li-head-right">
                    <span className="li-text-logo">Linked<span className="li-box-logo">in</span></span>
                    <div className="featured-li-menu-dots">•••</div>
                  </div>
                </div>

                <div className="featured-li-card-scroll">
                  <div className="featured-li-text-wrap">
                    <p className="featured-li-text">
                      <strong>2025 HR and Hiring Trends</strong>
                    </p>
                    <p className="featured-li-text">
                      Today, I invested some time in expanding my HR knowledge by watching an insightful session on 2025 HR and Hiring Trends.
                    </p>
                    <p className="featured-li-text">
                      What stood out to me was how emerging trends like AI-driven recruitment, employee experience focus, and flexible work models are reshaping talent management. It reminded me that HR is not just about processes—it’s about understanding people, fostering growth, and creating environments where teams can thrive.
                    </p>
                    <p className="featured-li-text">
                      Excited to apply these insights in practice and continue learning every day.
                    </p>
                    <p className="featured-li-text">
                      📺 <a href="https://lnkd.in/gZW-Wfzf" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2', fontWeight: 600 }}>https://lnkd.in/gZW-Wfzf</a> ✔️
                    </p>
                  </div>

                  <div className="featured-li-tags">
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23humanresources" target="_blank" rel="noopener noreferrer">#HumanResources</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23hiringtrends" target="_blank" rel="noopener noreferrer">#HiringTrends</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23professionalgrowth" target="_blank" rel="noopener noreferrer">#ProfessionalGrowth</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23continuouslearning" target="_blank" rel="noopener noreferrer">#ContinuousLearning</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23hrinsights" target="_blank" rel="noopener noreferrer">#HRInsights</a>
                  </div>

                  {/* EXACT REAL LINKEDIN POST IMAGE 1 */}
                  <a
                    href="https://www.linkedin.com/posts/danisha-sudhaseharan-795135317_humanresources-hiringtrends-professionalgrowth-activity-7375185143742902272-jzQ3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-single-image-link"
                  >
                    <img src={liHrImg} alt="2025 HR and hiring trends" className="featured-single-post-img" />
                  </a>
                </div>

                {/* EXACT BOTTOM FOOTER MATCHING USER SCREENSHOT 2 */}
                <div className="featured-li-bottom-box">
                  <div className="featured-li-stats-row">
                    <div className="featured-li-react-cluster">
                      <span className="li-icon-circle like">👍</span>
                      <span className="li-stat-num">3</span>
                    </div>
                  </div>
                  <div className="featured-li-divider"></div>
                  <div className="featured-li-actions-row">
                    <a href="https://www.linkedin.com/posts/danisha-sudhaseharan-795135317_humanresources-hiringtrends-professionalgrowth-activity-7375185143742902272-jzQ3" target="_blank" rel="noopener noreferrer" className="featured-li-act-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                      <span>Like</span>
                    </a>
                    <a href="https://www.linkedin.com/posts/danisha-sudhaseharan-795135317_humanresources-hiringtrends-professionalgrowth-activity-7375185143742902272-jzQ3" target="_blank" rel="noopener noreferrer" className="featured-li-act-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                      <span>Comment</span>
                    </a>
                    <a href="https://www.linkedin.com/posts/danisha-sudhaseharan-795135317_humanresources-hiringtrends-professionalgrowth-activity-7375185143742902272-jzQ3" target="_blank" rel="noopener noreferrer" className="featured-li-act-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                      <span>Share</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* CARD 2: Business Leadership & Negotiation (4mo - EXACT LIVE USER SCREENSHOT DATA & REAL IMAGE 02.png) */}
              <div className="featured-li-card">
                <div className="featured-li-card-head">
                  <div className="featured-li-user">
                    <img src={daniImg} alt="Danisha Sudhaseharan" className="featured-li-avatar" />
                    <div>
                      <div className="featured-li-name-row">
                        <span className="featured-li-name">Danisha Sudhaseharan</span>
                        <span className="featured-li-dot">•</span>
                        <span className="featured-li-degree">1st</span>
                      </div>
                      <p className="featured-li-headline">Aspiring Business Analyst Intern | BBA Undergraduate (SLIIT) | Data Analysis • ...</p>
                      <span className="featured-li-time">4mo • 🌐</span>
                    </div>
                  </div>
                  <div className="featured-li-head-right">
                    <span className="li-text-logo">Linked<span className="li-box-logo">in</span></span>
                    <div className="featured-li-menu-dots">•••</div>
                  </div>
                </div>

                <div className="featured-li-card-scroll">
                  <div className="featured-li-text-wrap">
                    <p className="featured-li-text">
                      <strong>Shaping Tomorrow’s Business Leaders Today!</strong>
                    </p>
                    <p className="featured-li-text">
                      Our team had the privilege of facilitating an interactive session on Negotiation and Teamwork for Year 1, Semester 1 Business Management students. Through icebreakers, roleplays, and collaborative challenges, we highlighted how effective communication, teamwork, and problem-solving are crucial for success in both academic and professional settings.
                    </p>
                    <p className="featured-li-text">
                      A big thank you to our amazing team members for their dedication, creativity, and energy in making this session engaging and impactful.
                    </p>
                    <p className="featured-li-text">
                      We also extend our sincere gratitude to Mrs. Inthu Malmaruhan and Prof. B. Nimalathasan for their invaluable guidance and support in bringing this session to life.
                    </p>
                  </div>

                  <div className="featured-li-tags">
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23businessleadership" target="_blank" rel="noopener noreferrer">#BusinessLeadership</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23teamwork" target="_blank" rel="noopener noreferrer">#Teamwork</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23negotiationskills" target="_blank" rel="noopener noreferrer">#NegotiationSkills</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23futureleaders" target="_blank" rel="noopener noreferrer">#FutureLeaders</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23studentengagement" target="_blank" rel="noopener noreferrer">#StudentEngagement</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23collaboration" target="_blank" rel="noopener noreferrer">#Collaboration</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23problemsolving" target="_blank" rel="noopener noreferrer">#ProblemSolving</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23businessmanagement" target="_blank" rel="noopener noreferrer">#BusinessManagement</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23professionalgrowth" target="_blank" rel="noopener noreferrer">#ProfessionalGrowth</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23learninginaction" target="_blank" rel="noopener noreferrer">#LearningInAction</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23teamappreciation" target="_blank" rel="noopener noreferrer">#TeamAppreciation</a>
                  </div>

                  {/* EXACT REAL LINKEDIN POST IMAGE 2 (02.png) */}
                  <a
                    href="https://www.linkedin.com/posts/danisha-sudhaseharan-795135317_businessleadership-teamwork-negotiationskills-activity-7448092923595759616-6Azq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-single-image-link"
                  >
                    <img src={liPost2Img} alt="Negotiation and Teamwork session" className="featured-single-post-img" />
                  </a>
                </div>

                {/* EXACT BOTTOM FOOTER MATCHING USER SCREENSHOT 1 */}
                <div className="featured-li-bottom-box">
                  <div className="featured-li-stats-row">
                    <div className="featured-li-react-cluster">
                      <span className="li-icon-circle like">👍</span>
                      <span className="li-icon-circle heart">❤️</span>
                      <span className="li-icon-circle celebrate">👏</span>
                      <span className="li-stat-num">22</span>
                    </div>
                  </div>
                  <div className="featured-li-divider"></div>
                  <div className="featured-li-actions-row">
                    <a href="https://www.linkedin.com/posts/danisha-sudhaseharan-795135317_businessleadership-teamwork-negotiationskills-activity-7448092923595759616-6Azq" target="_blank" rel="noopener noreferrer" className="featured-li-act-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                      <span>Like</span>
                    </a>
                    <a href="https://www.linkedin.com/posts/danisha-sudhaseharan-795135317_businessleadership-teamwork-negotiationskills-activity-7448092923595759616-6Azq" target="_blank" rel="noopener noreferrer" className="featured-li-act-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                      <span>Comment</span>
                    </a>
                    <a href="https://www.linkedin.com/posts/danisha-sudhaseharan-795135317_businessleadership-teamwork-negotiationskills-activity-7448092923595759616-6Azq" target="_blank" rel="noopener noreferrer" className="featured-li-act-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                      <span>Share</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* CARD 3: Sivapoomi Special School CSR (4mo - EXACT LIVE USER SCREENSHOT DATA & REAL IMAGE 03.png) */}
              <div className="featured-li-card">
                <div className="featured-li-card-head">
                  <div className="featured-li-user">
                    <img src={daniImg} alt="Danisha Sudhaseharan" className="featured-li-avatar" />
                    <div>
                      <div className="featured-li-name-row">
                        <span className="featured-li-name">Danisha Sudhaseharan</span>
                        <span className="featured-li-dot">•</span>
                        <span className="featured-li-degree">1st</span>
                      </div>
                      <p className="featured-li-headline">Aspiring Business Analyst Intern | BBA Undergraduate (SLIIT) | Data Analysis • ...</p>
                      <span className="featured-li-time">4mo • Edited • 🌐</span>
                    </div>
                  </div>
                  <div className="featured-li-head-right">
                    <span className="li-text-logo">Linked<span className="li-box-logo">in</span></span>
                    <div className="featured-li-menu-dots">•••</div>
                  </div>
                </div>

                <div className="featured-li-card-scroll">
                  <div className="featured-li-text-wrap">
                    <p className="featured-li-text">
                      <strong>Bringing Smiles and Making an Impact 🌟</strong>
                    </p>
                    <p className="featured-li-text">
                      Our team had the privilege of participating in a meaningful CSR initiative at Sivapoomi School for Children with Special Needs on April 6th. Through creative activities like crown decoration, drawing, and coloring, along with refreshments and stationery gifts, Their smiles and enthusiasm made the experience truly unforgettable. 🌱
                    </p>
                    <p className="featured-li-text">
                      This project, “Community Support for Sivapoomi School,” was conducted at SLIIT Northern University.
                    </p>
                    <p className="featured-li-text">
                      A heartfelt thank you to Mr. Aravinth Swampillai and Prof. B. Nimalathasan for their guidance, and to all team members for their dedication and energy in making this initiative meaningful.
                    </p>
                    <p className="featured-li-text">
                      This session was a beautiful reminder that teamwork, empathy, and inclusion can create moments of genuine joy—and we truly enjoyed every second of it! ❤️
                    </p>
                  </div>

                  <div className="featured-li-tags">
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23csr" target="_blank" rel="noopener noreferrer">#CSR</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23leadership" target="_blank" rel="noopener noreferrer">#Leadership</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23teamwork" target="_blank" rel="noopener noreferrer">#Teamwork</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23sliit" target="_blank" rel="noopener noreferrer">#SLIIT</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23communityimpact" target="_blank" rel="noopener noreferrer">#CommunityImpact</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23inclusion" target="_blank" rel="noopener noreferrer">#Inclusion</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23givingback" target="_blank" rel="noopener noreferrer">#GivingBack</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23empathyinaction" target="_blank" rel="noopener noreferrer">#EmpathyInAction</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23makingadifference" target="_blank" rel="noopener noreferrer">#MakingADifference</a>
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23joyfullearning" target="_blank" rel="noopener noreferrer">#JoyfulLearning</a>
                  </div>

                  {/* EXACT REAL LINKEDIN POST IMAGE 3 (03.png) */}
                  <a
                    href="https://www.linkedin.com/posts/activity-7448086882036457472-iUBI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-single-image-link"
                  >
                    <img src={liPost3Img} alt="Sivapoomi Special School CSR" className="featured-single-post-img" />
                  </a>
                </div>

                {/* EXACT BOTTOM FOOTER MATCHING USER SCREENSHOT */}
                <div className="featured-li-bottom-box">
                  <div className="featured-li-stats-row">
                    <div className="featured-li-react-cluster">
                      <span className="li-icon-circle like">👍</span>
                      <span className="li-icon-circle heart">❤️</span>
                      <span className="li-icon-circle celebrate">👏</span>
                      <span className="li-stat-num">18</span>
                    </div>
                  </div>
                  <div className="featured-li-divider"></div>
                  <div className="featured-li-actions-row">
                    <a href="https://www.linkedin.com/posts/activity-7448086882036457472-iUBI" target="_blank" rel="noopener noreferrer" className="featured-li-act-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                      <span>Like</span>
                    </a>
                    <a href="https://www.linkedin.com/posts/activity-7448086882036457472-iUBI" target="_blank" rel="noopener noreferrer" className="featured-li-act-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                      <span>Comment</span>
                    </a>
                    <a href="https://www.linkedin.com/posts/activity-7448086882036457472-iUBI" target="_blank" rel="noopener noreferrer" className="featured-li-act-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                      <span>Share</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="sec-label">07 — Credentials</span>
              <h2 className="sec-title">Certifications &amp; Advanced Training</h2>
            </div>
            <p className="sec-note">Self-directed professional learning to back up academic theory with practical industry skills.</p>
          </div>

          <div className="cert-matrix-grid reveal">
            {/* Cert 1: Decision Intelligence */}
            <div className="cert-matrix-card">
              <div className="cert-card-header">
                <div className="cert-issuer-badge">
                  <span className="li-text-logo">Linked<span className="li-box-logo">in</span></span>
                  <span className="cert-issuer-name">LinkedIn Learning</span>
                </div>
                <span className="cert-verified-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
                  Verified
                </span>
              </div>
              <h3 className="cert-card-title">Decision Intelligence</h3>
              <p className="cert-card-desc">Cognitive decision modeling, bias mitigation, scenario planning, and quantitative framework evaluation for executive decision making.</p>
              <div className="cert-skills-tags">
                <span>Decision Modeling</span>
                <span>Bias Mitigation</span>
                <span>Strategic Frameworks</span>
              </div>
            </div>

            {/* Cert 2: Power BI */}
            <div className="cert-matrix-card">
              <div className="cert-card-header">
                <div className="cert-issuer-badge">
                  <span className="li-text-logo">Linked<span className="li-box-logo">in</span></span>
                  <span className="cert-issuer-name">LinkedIn Learning</span>
                </div>
                <span className="cert-verified-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
                  Verified
                </span>
              </div>
              <h3 className="cert-card-title">Power BI Essential Training</h3>
              <p className="cert-card-desc">Data transformation via Power Query, DAX measures, relational data modeling, and interactive executive dashboard design.</p>
              <div className="cert-skills-tags">
                <span>Power Query</span>
                <span>DAX Formulas</span>
                <span>Executive Dashboards</span>
              </div>
            </div>

            {/* Cert 3: Business Analysis Foundations */}
            <div className="cert-matrix-card">
              <div className="cert-card-header">
                <div className="cert-issuer-badge">
                  <span className="li-text-logo">Linked<span className="li-box-logo">in</span></span>
                  <span className="cert-issuer-name">LinkedIn Learning</span>
                </div>
                <span className="cert-verified-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
                  Verified
                </span>
              </div>
              <h3 className="cert-card-title">Business Analysis Foundations</h3>
              <p className="cert-card-desc">Requirements elicitation, process flow mapping, stakeholder engagement, gap analysis, and solution verification.</p>
              <div className="cert-skills-tags">
                <span>Requirements Elicitation</span>
                <span>Process Mapping</span>
                <span>Gap Analysis</span>
              </div>
            </div>

            {/* Cert 4: SQL Essential Training */}
            <div className="cert-matrix-card">
              <div className="cert-card-header">
                <div className="cert-issuer-badge">
                  <span className="li-text-logo">Linked<span className="li-box-logo">in</span></span>
                  <span className="cert-issuer-name">LinkedIn Learning</span>
                </div>
                <span className="cert-verified-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
                  Verified
                </span>
              </div>
              <h3 className="cert-card-title">SQL Essential Training</h3>
              <p className="cert-card-desc">Relational database querying, multi-table JOIN operations, aggregate analytics, subqueries, and database performance optimization.</p>
              <div className="cert-skills-tags">
                <span>Relational SQL</span>
                <span>JOIN Operations</span>
                <span>Data Aggregation</span>
              </div>
            </div>

            {/* Cert 5: Python Programming */}
            <div className="cert-matrix-card">
              <div className="cert-card-header">
                <div className="cert-issuer-badge mora">
                  <span className="mora-tag">UOM</span>
                  <span className="cert-issuer-name">University of Moratuwa</span>
                </div>
                <span className="cert-verified-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
                  Verified
                </span>
              </div>
              <h3 className="cert-card-title">Python Programming for Beginners</h3>
              <p className="cert-card-desc">Python fundamentals, data structures, conditional logic, automation scripts, and analytical problem-solving.</p>
              <div className="cert-skills-tags">
                <span>Python Scripts</span>
                <span>Data Structures</span>
                <span>Automation Logic</span>
              </div>
            </div>

            {/* Cert 6: Word Quick Tips */}
            <div className="cert-matrix-card">
              <div className="cert-card-header">
                <div className="cert-issuer-badge">
                  <span className="li-text-logo">Linked<span className="li-box-logo">in</span></span>
                  <span className="cert-issuer-name">LinkedIn Learning</span>
                </div>
                <span className="cert-verified-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
                  Verified
                </span>
              </div>
              <h3 className="cert-card-title">Word Quick Tips &amp; Document Design</h3>
              <p className="cert-card-desc">Advanced corporate document formatting, executive report structuring, automated styling, and professional layout standards.</p>
              <div className="cert-skills-tags">
                <span>Executive Reports</span>
                <span>Document Styling</span>
                <span>Corporate Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="languages">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="sec-label">07 — Communication</span>
              <h2 className="sec-title">Languages</h2>
            </div>
            <p className="sec-note">Working comfortably across Sri Lanka's linguistic landscape.</p>
          </div>

          <div className="lang-row reveal">
            <div className="lang-item">
              <span className="lang-name">Tamil</span>
              <div className="lang-track">
                <div className="lang-seg on"></div>
                <div className="lang-seg on"></div>
                <div className="lang-seg on"></div>
                <div className="lang-seg on"></div>
              </div>
              <span className="lang-tag">Native</span>
            </div>
            <div className="lang-item">
              <span className="lang-name">English</span>
              <div className="lang-track">
                <div className="lang-seg on"></div>
                <div className="lang-seg on"></div>
                <div className="lang-seg on"></div>
                <div className="lang-seg"></div>
              </div>
              <span className="lang-tag">Advanced</span>
            </div>
            <div className="lang-item">
              <span className="lang-name">Sinhala</span>
              <div className="lang-track">
                <div className="lang-seg on"></div>
                <div className="lang-seg on"></div>
                <div className="lang-seg"></div>
                <div className="lang-seg"></div>
              </div>
              <span className="lang-tag">Intermediate</span>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-title">
                Let's turn your next dataset into a decision. <span className="accent">→</span>
              </div>
              <p className="footer-sub">Open to Business Analyst internships and entry-level roles. Based in Jaffna, working across Sri Lanka.</p>
              <a className="btn-primary" href="mailto:Sudhaseharandanisha@gmail.com" style={{ display: 'inline-flex' }}>
                Email me
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
            <div>
              <div className="footer-links-title">Contact</div>
              <div className="footer-links">
                <a className="footer-link" href="mailto:Sudhaseharandanisha@gmail.com">Sudhaseharandanisha@gmail.com</a>
                <a className="footer-link" href="https://www.danisha.dev" target="_blank" rel="noopener noreferrer">www.danisha.dev</a>
                <a className="footer-link" href="https://linkedin.com/in/danisha-sudhaseharan" target="_blank" rel="noopener noreferrer">linkedin.com/in/danisha-sudhaseharan</a>
                <span className="footer-link" style={{ cursor: 'default' }}>Kantharmadam, Jaffna, Sri Lanka</span>
              </div>
            </div>
          </div>
          <div className="bottom-row">
            <span>© 2026 Danisha Sudhaseharan</span>
            <span>Built with care, not templates.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
