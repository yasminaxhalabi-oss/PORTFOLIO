import { useState, useEffect, useRef } from "react";
import { FaBasketballBall, FaDog, FaDumbbell } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

const skillsWithLogos = {
  Frontend: [
    { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { name: "HTML5", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
  ],
  Backend: [
    { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "Express", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
  ],
  Tools: [
    { name: "Git", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
    { name: "VS Code", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
    { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  ],
};

const projects = [
  { id: 1, emoji: "🛒", title: "Electronics Store", sub: "Full-stack rental platform", desc: "Real-time rental platform for electronics. Features include live inventory management and dynamic product catalog.", stack: ["React", "Node.js"], github: "https://github.com/yasminaxhalabi-oss", demo: "https://portfolio-git-master-yasminaxhalabi-oss-projects.vercel.app/" },
  { id: 2, emoji: "🌍", title: "IP Tracker", sub: "Live Geolocation Mapping", desc: "Interactive map visualization using LeafletJS. Tracks IP addresses or domains with real-time API integration.", stack: ["React", "LeafletJS", "API"], github: "https://github.com/yasminaxhalabi-oss", demo: "https://portfolio-git-master-yasminaxhalabi-oss-projects.vercel.app/" },
  { id: 3, emoji: "🌤️", title: "Weather App", sub: "7-day & Hourly Forecast", desc: "Comprehensive weather dashboard featuring real-time conditions.", stack: ["React", "Open-Meteo", "CSS"], github: "https://github.com/yasminaxhalabi-oss", demo: "https://portfolio-git-master-yasminaxhalabi-oss-projects.vercel.app/" },
  { id: 4, emoji: "🏀", title: "Hoopix", sub: "Basketball Gear E-commerce", desc: "A clean online store for sports gear. Includes advanced filtering and a seamless shopping cart.", stack: ["React", "JavaScript", "CSS"], github: "https://github.com/yasminaxhalabi-oss", demo: "https://portfolio-git-master-yasminaxhalabi-oss-projects.vercel.app/" },
];

const timeline = [
  { date: "2025", title: "Full-Stack Development", location: "Technion Continuing Education", desc: "Deep dive into MERN stack, database design, and modern web architecture." },
  { date: "2025 - 2027", title: "National Service & Professional Developer", location: "Community Support", desc: "Serving as a professional developer while contributing to the community." }
];

const testimonials = [
  { id: 1, name: "מרצה מהטכניון", role: "מרצה לפיתוח Full-Stack", text: "סטודנטית בעלת יכולת למידה עצמית גבוהה מאוד. הפרויקטים שלה מציגים הבנה מעמיקה של קצה לקצה.", avatar: "/lecturer.jpg" },
  { id: 2, name: "צוות פיתוח בשירות לאומי", role: "מפתחות תוכנה", text: "מפתחת מקצועית, יצירתית ובעלת יכולת פתרון בעיות גבוהה, שתורמת משמעותית לצוות ומשפרת תהליכים ומוצרים באופן עקבי", avatar: "/friendstsevet.jpeg" }
];

export default function App() {
  const [open, setOpen] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState({});
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const refs = useRef({});

  const handleContactClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("yasminaxhalabi@gmail.com");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { 
        if (e.isIntersecting) {
          setVisible((v) => ({ ...v, [e.target.dataset.key]: true }));
          setActiveSection(e.target.id);
        }
      });
    }, { threshold: 0.2 });

    Object.values(refs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const anim = (key, delay = 0) => ({
    "data-key": key,
    id: key, 
    ref: (el) => { refs.current[key] = el; },
    style: {
      transition: `opacity 0.65s ${delay}ms, transform 0.65s ${delay}ms`,
      opacity: visible[key] ? 1 : 0,
      transform: visible[key] ? "translateY(0)" : "translateY(28px)",
    },
  });

  const colors = {
    bg: darkMode ? "#0f172a" : "#faf9ff",
    text: darkMode ? "#f1f5f9" : "#1a1523",
    subText: darkMode ? "#94a3b8" : "#6b5e8a",
    card: darkMode ? "#1e293b" : "#fff",
    border: darkMode ? "#334155" : "#ede9fe",
    accent: "#7c3aed"
  };

  return (
    <div style={{ background: colors.bg, color: colors.text, fontFamily: "'Instrument Sans', sans-serif", minHeight: "100vh", direction: "ltr", transition: "0.3s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .nav-a { font-size:13px; color:${colors.subText}; cursor:pointer; transition:0.3s; text-decoration:none; text-transform: capitalize; position: relative; padding: 4px 0; }
        .nav-a:hover { color:${colors.accent}; }
        .nav-a.active { color:${colors.accent}; font-weight: 600; }
        .nav-a.active::after { content: ""; position: absolute; bottom: -2px; left: 0; width: 100%; height: 2px; background: ${colors.accent}; border-radius: 2px; }
        .mode-btn { background: ${darkMode ? "#1e293b" : "#fff"}; border: 1.5px solid ${colors.border}; padding: 8px; border-radius: 12px; cursor: pointer; color: ${colors.accent}; display: flex; align-items: center; justify-content: center; transition: 0.2s; }
        .mode-btn:hover { border-color: ${colors.accent}; transform: scale(1.05); }
        .chip { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: ${colors.card}; border: 1px solid ${colors.border}; border-radius: 100px; font-size: 13px; color: ${colors.text}; }
        .chip img { width: 18px; height: 18px; object-fit: contain; }
        .proj-card { border: 1.5px solid ${colors.border}; border-radius: 20px; padding: 28px; background: ${colors.card}; cursor: pointer; transition: 0.3s; color: ${colors.text}; }
        .proj-card:hover { border-color: ${colors.accent}; transform: translateY(-4px); }
        .tl-item { position: relative; padding-left: 30px; border-left: 2px solid ${colors.border}; padding-bottom: 40px; }
        .tl-item::before { content: ""; position: absolute; left: -7px; top: 0; width: 12px; height: 12px; border-radius: 50%; background: ${colors.accent}; border: 3px solid ${colors.bg}; }
        .toast { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: ${colors.accent}; color: white; padding: 12px 24px; border-radius: 100px; font-size: 14px; z-index: 1000; box-shadow: 0 10px 25px rgba(124,58,237,0.3); animation: popUp 0.3s ease; }
        @keyframes popUp { from { bottom: -50px; opacity:0; } to { bottom: 30px; opacity:1; } }
        .clink { display:flex; align-items:center; gap:14px; padding:18px 22px; border-radius:14px; border:1.5px solid ${colors.border}; background: ${colors.card}; text-decoration:none; color:${colors.text}; transition:0.2s; }
        .clink:hover { border-color: ${colors.accent}; transform: translateY(-2px); }
      `}</style>

      {showToast && <div className="toast">✅ Email copied to clipboard!</div>}

      <nav style={{ position:"sticky", top:0, zIndex:50, background: scrollY > 20 ? (darkMode ? "rgba(15,23,42,0.9)" : "rgba(250,249,255,0.9)") : "transparent", backdropFilter: "blur(10px)", borderBottom: scrollY > 20 ? `1px solid ${colors.border}` : "none", padding:"0 32px" }}>
        <div style={{ maxWidth:1000, margin:"0 auto", height:60, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <span style={{ fontFamily:"'Instrument Serif'", fontSize:24, color:colors.accent, fontStyle:"italic" }}>yh</span>
          <div style={{ display:"flex", gap:25, alignItems: "center" }}>
            {["projects","skills","testimonials","experience","about","contact"].map(s => (
              <a key={s} href={`#${s}`} className={`nav-a ${activeSection === s ? "active" : ""}`}>{s}</a>
            ))}
            <button onClick={() => setDarkMode(!darkMode)} className="mode-btn">
              {darkMode ? <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg> : <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}
            </button>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth:1000, margin:"0 auto", padding:"0 32px" }}>
        {/* Home */}
        <section id="home" style={{ paddingTop:80, paddingBottom:100 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 30, marginBottom: 40, flexWrap: "wrap" }}>
            <div style={{ width: 130, height: 130, borderRadius: "50%", border: `5px solid ${darkMode ? colors.border : 'white'}`, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <img src="/profile.jpg" alt="Yasmina" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h1 style={{ fontFamily:"'Instrument Serif'", fontSize:"clamp(50px, 9vw, 85px)", color:colors.text, lineHeight: 1 }}>Yasmina</h1>
              <h1 style={{ fontFamily:"'Instrument Serif'", fontSize:"clamp(50px, 9vw, 85px)", fontStyle: "italic", color: colors.accent, lineHeight: 1 }}>Halabi</h1>
            </div>
          </div>
          <p style={{ fontSize:20, color:colors.subText, maxWidth:700, lineHeight:1.7, marginBottom:35 }}>
            Full-Stack Engineer building clean, functional web applications. Dedicated professional developer.
          </p>
          <div style={{ display:"flex", gap:15, flexWrap: "wrap" }}>
            <a href="#projects" style={{ padding:"14px 28px", borderRadius:100, background:colors.accent, color:"#fff", textDecoration:"none", fontSize:14, fontWeight:500 }}>View Projects</a>
            <a href="/cv.pdf" download="Yasmina_Halabi_CV.pdf" style={{ padding:"14px 28px", borderRadius:100, border:`1.5px solid ${colors.accent}`, color:colors.accent, textDecoration:"none", fontSize:14, fontWeight:500 }}>Download CV</a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" {...anim("projects")} style={{ paddingBottom:100 }}>
          <h2 style={{ fontFamily:"'Instrument Serif'", fontSize:38, color:colors.text, marginBottom:40 }}>Featured Projects</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:20 }}>
            {projects.map((p) => (
              <div key={p.id} className="proj-card" onClick={() => setOpen(open === p.id ? null : p.id)}>
                <div style={{ fontSize:35, marginBottom:15 }}>{p.emoji}</div>
                <h3 style={{ fontSize:22, marginBottom:5, color:colors.text }}>{p.title}</h3>
                <p style={{ fontSize:14, color:colors.subText, marginBottom:15 }}>{p.sub}</p>
                {open === p.id && (
                  <div style={{ borderTop:`1px solid ${colors.border}`, paddingTop:12 }}>
                    <p style={{ fontSize:14, color:colors.subText, lineHeight:1.6, marginBottom:15 }}>{p.desc}</p>
                    <div style={{ display: "flex", gap: 20, marginBottom: 15 }}>
                      <a href={p.github} target="_blank" rel="noreferrer" style={{ color: colors.accent, fontSize: 12, fontWeight: 600, textDecoration: "none" }}>GitHub ↗</a>
                      <a href={p.demo} target="_blank" rel="noreferrer" style={{ color: colors.accent, fontSize: 12, fontWeight: 600, textDecoration: "none" }}>Live Demo ↗</a>
                    </div>
                  </div>
                )}
                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>{p.stack.map(s => <span key={s} style={{ fontSize:10, background:darkMode ? "#2e1065" : "#f5f3ff", color:colors.accent, padding:"4px 10px", borderRadius:100 }}>{s}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" {...anim("skills")} style={{ paddingBottom: 100 }}>
          <h2 style={{ fontFamily: "'Instrument Serif'", fontSize: 38, color: colors.text, marginBottom: 40 }}>Skills & Stack</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 30 }}>
            {Object.entries(skillsWithLogos).map(([category, items]) => (
              <div key={category}>
                <h3 style={{ fontSize: 14, textTransform: "uppercase", tracking: "0.1em", color: colors.subText, marginBottom: 20 }}>{category}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  {items.map((s) => (
                    <div key={s.name} className="chip">
                      <img src={s.logo} alt={s.name} />
                      {s.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" {...anim("testimonials")} style={{ paddingBottom: 100 }}>
          <h2 style={{ fontFamily: "'Instrument Serif'", fontSize: 38, color: colors.text, marginBottom: 40 }}>Testimonials</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {testimonials.map((t) => (
              <div key={t.id} style={{ background: colors.card, border: `1.5px solid ${colors.border}`, borderRadius: 20, padding: 28, direction: "rtl" }}>
                <p style={{ fontSize: 15, color: colors.text, lineHeight: 1.8, marginBottom: 24 }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 46, height: 46, borderRadius: "50%", background: t.avatar ? "transparent" : colors.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, overflow: "hidden", border: t.avatar ? `2px solid ${colors.accent}` : "none" }}>
                    {t.avatar ? <img src={t.avatar} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : t.name.charAt(0)}
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontWeight: 700, fontSize: 15, color: colors.text }}>{t.name}</p>
                    <p style={{ fontSize: 13, color: colors.accent }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" {...anim("experience")} style={{ paddingBottom: 100 }}>
          <h2 style={{ fontFamily: "'Instrument Serif'", fontSize: 38, color:colors.text, marginBottom: 40 }}>Experience</h2>
          {timeline.map((item, i) => (
            <div key={i} className="tl-item">
              <p style={{ fontSize: 12, color: colors.accent, fontWeight: 600, marginBottom: 5 }}>{item.date}</p>
              <h4 style={{ fontSize: 18, color:colors.text }}>{item.title}</h4>
              <p style={{ fontSize: 14, color: colors.subText }}>{item.location}</p>
              <p style={{ fontSize: 14, marginTop: 5, color:colors.text }}>{item.desc}</p>
            </div>
          ))}
        </section>

        {/* About Me */}
        <section id="about" {...anim("about")} style={{ paddingBottom:100 }}>
          <h2 style={{ fontFamily:"'Instrument Serif'", fontSize:38, color:colors.text, marginBottom:40 }}>About Me</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:50 }}>
            <div>
              <p style={{ fontSize:18, color:colors.text, lineHeight:1.8, marginBottom:20 }}>
                I discovered my passion for programming during my National Service, where I realized how much I enjoy solving complex problems through code. I completed a comprehensive Full-Stack development course at the Technion, focusing on the MERN stack and modern web technologies.
              </p>
              <p style={{ fontSize:18, color:colors.text, lineHeight:1.8, marginBottom:20 }}>
                Beyond coding, I have a wide range of interests that keep me balanced and creative:
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 40, padding: "20px 0", borderTop: `1px solid ${colors.border}`, marginTop: 10 }}>
                <div style={{ textAlign: "center" }}><FaBasketballBall style={{ fontSize: 45, color: colors.accent }} /><p style={{ fontSize: 10, marginTop: 5 }}>Sports</p></div>
                <div style={{ textAlign: "center" }}><FaDog style={{ fontSize: 45, color: colors.accent }} /><p style={{ fontSize: 10, marginTop: 5 }}>Animals</p></div>
                <div style={{ textAlign: "center" }}><FaDumbbell style={{ fontSize: 45, color: colors.accent }} /><p style={{ fontSize: 10, marginTop: 5 }}>Fitness</p></div>
                <div style={{ textAlign: "center" }}><FaComputer style={{ fontSize: 45, color: colors.accent }} /><p style={{ fontSize: 10, marginTop: 5 }}>Tech</p></div>
              </div>
            </div>
            <div style={{ background:colors.card, borderRadius:20, padding:32, border:`1px solid ${colors.border}` }}>
              {[
                ["Training", "Technion Full-Stack"],
                ["Location", "Israel"],
                ["Experience", "2 years"],
                ["Seeking", "Junior Full-Stack Role"],
                ["Passion", "UI/UX & Scalability"]
              ].map(([k, v]) => (
                <div key={k} style={{ display:"flex", justifyContent:"space-between", padding: "15px 0", borderBottom:`1px solid ${colors.border}` }}>
                  <span style={{ fontSize:13, color:colors.subText }}>{k}</span>
                  <span style={{ fontSize:13, color:colors.accent, fontWeight:600 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" {...anim("contact")} style={{ paddingBottom: 120, textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Instrument Serif'", fontSize: 38, color:colors.text, marginBottom: 40 }}>Let's Connect</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
            <a href="#" className="clink" onClick={handleContactClick} style={{ minWidth: 280 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <div style={{ textAlign: "left" }}><p style={{ fontSize: 10, color: colors.subText }}>EMAIL</p><p style={{ fontSize: 14, color: colors.text }}>yasminaxhalabi@gmail.com</p></div>
            </a>
            <a href="https://github.com/yasminaxhalabi-oss" target="_blank" rel="noreferrer" className="clink" style={{ minWidth: 280 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              <div style={{ textAlign: "left" }}><p style={{ fontSize: 10, color: colors.subText }}>GITHUB</p><p style={{ fontSize: 14, color: colors.text }}>yasminaxhalabi-oss</p></div>
            </a>
          </div>
        </section>
      </div>
      <footer style={{ textAlign:"center", padding:40, color:colors.subText, fontSize:12 }}>Yasmina Halabi · 2026</footer>
    </div>
  );
}