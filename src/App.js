import React, { useState } from "react";
import portfolioData from "./portfolioData";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaDownload, FaGraduationCap, FaCertificate, FaBriefcase, FaProjectDiagram, FaTimes, FaPaperPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  React.useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  const { personal_info, skills, experience, languages, interests, certifications, education, avatar_url, cv_url } = portfolioData;

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        type: "spring",
        stiffness: 60,
      },
    }),
  };

  // Progress bar for skills
  const getSkillLevel = (cat, skill) => {
    // Just for demo: assign random levels for visual effect
    return 60 + (skill.length * 7) % 40;
  };

  // Parallax effect for hero blob/avatar
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const handleParallax = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;
    setParallax({ x, y });
  };

  return (
    <>
      {/* Floating animated background blob with parallax */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.18, scale: 1, x: parallax.x * 0.7, y: parallax.y * 0.7 }}
        transition={{ duration: 1.5, type: "spring" }}
        style={{
          position: "fixed",
          top: "-200px",
          right: "-200px",
          width: 500,
          height: 500,
          zIndex: 0,
          background: "radial-gradient(circle at 30% 30%, #6366f1 0%, #a21caf 100%)",
          filter: "blur(80px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      {/* Sticky Sidebar with animated border */}
      <aside style={{
        position: "fixed", left: 0, top: 0, height: "100vh", width: 80, background: "rgba(79,70,229,0.95)", zIndex: 20,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "2rem 0 1.5rem 0", boxShadow: "2px 0 24px #4f46e555",
        borderRight: "4px solid transparent", backgroundClip: "padding-box",
        animation: "sidebarBorderAnim 2.5s linear infinite alternate"
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
          <motion.img
            src={avatar_url}
            alt="avatar"
            style={{ borderRadius: "50%", width: 48, height: 48, border: "3px solid #fff", cursor: "pointer", boxShadow: "0 0 0 4px #a21caf55" }}
            whileHover={{ scale: 1.18, boxShadow: "0 0 0 8px #a21caf99" }}
            onClick={() => setShowAvatarModal(true)}
            tabIndex={0}
            aria-label="View profile picture"
          />
          <button className="toggle-mode" style={{ position: "static", margin: 0, background: "#fff", color: "#4f46e5" }} onClick={() => setDark((d) => !d)}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <a href={`mailto:${personal_info.contact.email}`} title="Email" style={{ color: "#fff", fontSize: 22 }}><FaEnvelope /></a>
          <a href={`tel:${personal_info.contact.phone}`} title="Phone" style={{ color: "#fff", fontSize: 22 }}><FaPhone /></a>
          <a href="#contact" title="Contact" style={{ color: "#fff", fontSize: 22 }} onClick={() => setShowContact(true)}><FaPaperPlane /></a>
          <motion.a
            href={cv_url}
            className="resume-btn"
            style={{ background: "#fff", color: "#4f46e5", fontSize: 22, borderRadius: 24, padding: 6, marginTop: 8, fontWeight: 700, boxShadow: "0 0 0 3px #6366f1aa" }}
            download
            whileHover={{ scale: 1.13, boxShadow: "0 0 0 8px #6366f1cc" }}
            animate={{ scale: [1, 1.08, 1], boxShadow: ["0 0 0 3px #6366f1aa", "0 0 0 8px #6366f1cc", "0 0 0 3px #6366f1aa"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            aria-label="Download CV"
          >
            <FaDownload />
          </motion.a>
        </div>
      </aside>
      {/* Main Content Layout */}
      <div style={{ marginLeft: 100, minHeight: "100vh", background: "none" }} onMouseMove={handleParallax}>
        {/* Hero Split Section */}
        <section style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", minHeight: 400, gap: 32, marginTop: 32, position: "relative" }}>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, type: "spring" }}
            style={{ position: "absolute", top: 18, right: 32, zIndex: 10 }}
          >
            <span style={{
              background: "linear-gradient(90deg, #4f46e5 0%, #a21caf 100%)",
              color: "#fff",
              padding: "0.5rem 1.2rem",
              borderRadius: 24,
              fontWeight: 700,
              fontSize: 18,
              boxShadow: "0 2px 12px #a21caf33",
              letterSpacing: 1,
              border: "2px solid #fff",
              animation: "badgePulse 2.5s infinite alternate"
            }}>
              Available for Hire
            </span>
          </motion.div>
          {/* Left: Name, Title, Social */}
          <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, type: "spring" }} style={{ flex: 1, minWidth: 260, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 18 }}>
            <h1 style={{ fontSize: "2.7rem", fontWeight: 900, margin: 0, letterSpacing: 1, color: "#4f46e5" }}>{personal_info.name}</h1>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, letterSpacing: 2, margin: 0, color: "#a21caf" }}>{personal_info.title}</h2>
            <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
              <a href={`mailto:${personal_info.contact.email}`} title="Email" style={{ color: "#6366f1", fontSize: 22 }}><FaEnvelope /></a>
              <a href={`tel:${personal_info.contact.phone}`} title="Phone" style={{ color: "#6366f1", fontSize: 22 }}><FaPhone /></a>
              <span title="Location" style={{ color: "#6366f1", fontSize: 22, display: "flex", alignItems: "center" }}><FaMapMarkerAlt style={{ marginRight: 4 }} />{personal_info.contact.location}</span>
            </div>
          </motion.div>
          {/* Right: Animated Bio & Highlights with parallax avatar */}
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, type: "spring" }} style={{ flex: 2, minWidth: 320, background: "rgba(255,255,255,0.7)", borderRadius: 24, boxShadow: "0 4px 32px #a21caf22", padding: 32, position: "relative", overflow: "visible" }}>
            <motion.img
              src={avatar_url}
              alt="avatar large"
              style={{
                position: "absolute",
                left: -90,
                top: 40,
                width: 120,
                height: 120,
                borderRadius: "50%",
                border: "5px solid #fff",
                boxShadow: "0 0 0 8px #6366f1aa",
                zIndex: 2,
                cursor: "pointer",
                background: "#fff",
                animation: "avatarBorderAnim 2.5s linear infinite alternate"
              }}
              animate={{ x: parallax.x * 0.3, y: parallax.y * 0.3 }}
              transition={{ type: "spring", stiffness: 40, damping: 20 }}
              onClick={() => setShowAvatarModal(true)}
              tabIndex={0}
              aria-label="View profile picture large"
            />
            <motion.p style={{ fontSize: "1.2rem", fontWeight: 500, color: "#18181b", marginBottom: 18, marginLeft: 60 }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
              {personal_info.bio}
            </motion.p>
            <motion.ul style={{ marginLeft: 78, color: "#6366f1", fontWeight: 500, fontSize: 16 }} initial="hidden" animate="visible" variants={fadeUp}>
              <li>6+ years of cross-platform mobile experience</li>
              <li>UI/UX, real-time features, backend integration</li>
              <li>Known for smooth, user-centric mobile apps</li>
            </motion.ul>
          </motion.div>
        </section>
        {/* Section Divider */}
        <motion.hr initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.5, duration: 1 }} style={{ border: 0, borderTop: "2px solid #a21caf33", margin: "2.5rem 0" }} />
        {/* Skills Grid */}
        <section>
          <h3 className="section-title" style={{ marginBottom: 24 }}>Skills</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
            {Object.entries(skills).map(([cat, arr], i) => (
              <motion.div key={cat} className="glass" style={{ padding: 18, borderRadius: 18 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1, duration: 0.7, type: "spring" }} viewport={{ once: true }}>
                <div style={{ fontWeight: 700, marginBottom: 8, color: "#a21caf", fontSize: 18 }}>{cat.replace(/_/g, " ").toUpperCase()}</div>
                {arr.map((skill, j) => (
                  <div key={skill} style={{ marginBottom: 10 }}>
                    <div style={{ fontWeight: 500, color: "#6366f1", fontSize: 15 }}>{skill}</div>
                    <motion.div className="skill-bar" style={{ marginTop: 4 }} initial={{ width: 0 }} whileInView={{ width: getSkillLevel(cat, skill) + "%" }} transition={{ delay: 0.2 + j * 0.07, duration: 0.7, type: "spring" }} viewport={{ once: true }}>
                      <div className="skill-bar-fill" style={{ width: "100%", height: "100%" }} />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </section>
        {/* Section Divider */}
        <motion.hr initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ delay: 0.5, duration: 1 }} style={{ border: 0, borderTop: "2px solid #6366f133", margin: "2.5rem 0" }} viewport={{ once: true }} />
        {/* Experience Timeline */}
        <section>
          <h3 className="section-title" style={{ marginBottom: 24 }}>Experience & Projects</h3>
          <div style={{ position: "relative", paddingLeft: 32, borderLeft: "4px solid #a21caf33" }}>
            {experience.map((exp, i) => (
              <motion.div key={i} style={{ position: "relative", marginBottom: 40, paddingLeft: 24 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1, duration: 0.7, type: "spring" }} viewport={{ once: true }}>
                <span style={{ position: "absolute", left: -38, top: 0, background: "#fff", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px #a21caf22", color: "#a21caf", fontSize: 18 }}>
                  {exp.company ? <FaBriefcase /> : <FaProjectDiagram />}
                </span>
                <div style={{ fontWeight: 700, fontSize: 18, color: "#4f46e5" }}>{exp.company || exp.project}</div>
                <div style={{ color: "#6366f1", fontSize: 13, marginBottom: 6 }}>{exp.duration}</div>
                {exp.budget && <div style={{ color: "#a21caf", fontSize: 13, marginBottom: 6 }}>Budget: {exp.budget}</div>}
                {exp.tech_stack && (
                  <div className="project-tech" style={{ marginBottom: 6 }}>
                    {exp.tech_stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                )}
                <ul style={{ marginLeft: 18, marginTop: 8 }}>
                  {exp.highlights.map((h, j) => (
                    <motion.li key={j} style={{ marginBottom: 4 }} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + j * 0.07, duration: 0.5 }} viewport={{ once: true }}>{h}</motion.li>
                  ))}
                </ul>
                <a href={ exp.link} target="_blank">
                  View on PlayStore
                </a>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Section Divider */}
        <motion.hr initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ delay: 0.5, duration: 1 }} style={{ border: 0, borderTop: "2px solid #a21caf33", margin: "2.5rem 0" }} viewport={{ once: true }} />
        {/* Education/Certifications Carousel */}
        <section>
          <h3 className="section-title" style={{ marginBottom: 24 }}>Education & Certifications</h3>
          <div style={{ display: "flex", overflowX: "auto", gap: 32, paddingBottom: 8 }}>
            {education.map((ed, i) => (
              <motion.div key={i} className="glass" style={{ minWidth: 260, padding: 18, borderRadius: 18, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1, duration: 0.7, type: "spring" }} viewport={{ once: true }}>
                <span style={{ color: "#6366f1", fontSize: 22 }}><FaGraduationCap /></span>
                <div style={{ fontWeight: 700, fontSize: 16 }}>{ed.degree}</div>
                <div style={{ color: "#a21caf", fontWeight: 500 }}>{ed.institution}</div>
                <div style={{ color: "#6366f1", fontSize: 13 }}>{ed.year}</div>
              </motion.div>
            ))}
            {certifications.map((cert, i) => (
              <motion.div key={i} className="glass" style={{ minWidth: 260, padding: 18, borderRadius: 18, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.7, type: "spring" }} viewport={{ once: true }}>
                <span style={{ color: "#a21caf", fontSize: 22 }}><FaCertificate /></span>
                <div style={{ fontWeight: 700, fontSize: 16 }}>{cert}</div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Section Divider */}
        <motion.hr initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ delay: 0.5, duration: 1 }} style={{ border: 0, borderTop: "2px solid #6366f133", margin: "2.5rem 0" }} viewport={{ once: true }} />
        {/* Languages & Interests Tag Cloud */}
        <section>
          <h3 className="section-title" style={{ marginBottom: 24 }}>Languages & Interests</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 12 }}>
            {languages.map((lang, i) => (
              <motion.span key={lang} className="skill-tag" style={{ fontSize: 16, background: "#6366f1", color: "#fff" }} initial={{ scale: 0.7, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 + i * 0.07, duration: 0.5, type: "spring" }} viewport={{ once: true }}>{lang}</motion.span>
            ))}
            {interests.map((interest, i) => (
              <motion.span key={interest} className="skill-tag" style={{ fontSize: 16, background: "#a21caf", color: "#fff" }} initial={{ scale: 0.7, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 + i * 0.07, duration: 0.5, type: "spring" }} viewport={{ once: true }}>{interest}</motion.span>
            ))}
          </div>
        </section>
      </div>
      {/* Avatar Modal */}
      <AnimatePresence>
        {showAvatarModal && (
          <motion.div
            key="avatar-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(24,24,27,0.7)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center" }}
            onClick={() => setShowAvatarModal(false)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="glass"
              style={{ padding: 32, borderRadius: 24, minWidth: 340, maxWidth: "90vw", position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setShowAvatarModal(false)} style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", fontSize: 22, color: "#a21caf", cursor: "pointer" }}><FaTimes /></button>
              <motion.img
                src={avatar_url}
                alt="avatar large modal"
                style={{ width: 180, height: 180, borderRadius: "50%", border: "6px solid #fff", boxShadow: "0 0 0 12px #6366f1aa", marginBottom: 18, background: "#fff" }}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
              />
              <h2 style={{ fontWeight: 800, fontSize: 28, margin: 0 }}>{personal_info.name}</h2>
              <h3 style={{ fontWeight: 600, fontSize: 18, color: "#a21caf", margin: 0 }}>{personal_info.title}</h3>
              <p style={{ marginTop: 12, fontSize: 16, color: "#6366f1", textAlign: "center" }}>{personal_info.bio}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Floating Contact Modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            key="contact-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(24,24,27,0.7)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="glass"
              style={{ padding: 32, borderRadius: 24, minWidth: 340, maxWidth: "90vw", position: "relative" }}
            >
              <button onClick={() => setShowContact(false)} style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", fontSize: 22, color: "#a21caf", cursor: "pointer" }}><FaTimes /></button>
              <h3 className="section-title" style={{ marginBottom: 18 }}>Contact Me</h3>
              <form className="contact-form" onSubmit={e => e.preventDefault()} style={{ maxWidth: 400 }}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows={4} required />
                <button type="submit">Send</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <footer style={{ textAlign: "center", padding: "2rem 0 1rem 0", color: "#a1a1aa", fontSize: 15, zIndex: 2, position: "relative", marginLeft: 100 }}>
        &copy; {new Date().getFullYear()} {personal_info.name} &mdash; Portfolio. Crafted with React.
      </footer>
      {/* Animations and glassmorphism */}
      <style>{`
        @keyframes sidebarBorderAnim {
          0% { border-right: 4px solid #4f46e5; }
          100% { border-right: 4px solid #a21caf; }
        }
        @keyframes badgePulse {
          0% { box-shadow: 0 2px 12px #a21caf33, 0 0 0 0 #a21caf44; }
          100% { box-shadow: 0 2px 24px #a21caf66, 0 0 0 12px #a21caf22; }
        }
        @keyframes avatarBorderAnim {
          0% { box-shadow: 0 0 0 8px #6366f1aa; }
          100% { box-shadow: 0 0 0 16px #a21caf99; }
        }
        .glass {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border-radius: 1.2rem;
          border: 1px solid rgba(99,102,241,0.10);
        }
        body.dark .glass {
          background: rgba(35,35,43,0.7);
          border: 1px solid rgba(99,102,241,0.18);
        }
        ::-webkit-scrollbar {
          width: 8px;
          background: #ede9fe;
        }
        ::-webkit-scrollbar-thumb {
          background: #a5b4fc;
          border-radius: 8px;
        }
        body.dark ::-webkit-scrollbar {
          background: #312e81;
        }
        body.dark ::-webkit-scrollbar-thumb {
          background: #6366f1;
        }
      `}</style>
    </>
  );
}

export default App;
