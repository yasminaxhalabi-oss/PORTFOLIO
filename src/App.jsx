import { useState, useEffect, useRef } from "react";
const skillsWithLogos = {
  Frontend: [
    { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { name: "HTML5", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
    { name: "Sass", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" },
  ],
  Backend: [
    { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "Express", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
    { name: "MySQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
  ],
  Tools: [
    { name: "Git", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
    { name: "VS Code", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
    { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  ],
};

const projects = [
  { id: 1, emoji: "🛒", title: "Electronics Store", sub: "Full-stack rental platform", desc: "Real-time rental platform for electronics. Features include live inventory management, role-based admin access, and dynamic product catalog.", stack: ["React", "Node.js", "MySQL"] },
  { id: 2, emoji: "🌍", title: "IP Tracker", sub: "Live Geolocation Mapping", desc: "Interactive map visualization using LeafletJS. Tracks IP addresses or domains with real-time API integration.", stack: ["React", "LeafletJS", "API"] },
  { id: 3, emoji: "🌤️", title: "Weather App", sub: "7-day & Hourly Forecast", desc: "Comprehensive weather dashboard featuring real-time conditions and unit conversion (°C/°F).", stack: ["React", "Open-Meteo", "CSS"] },
  { id: 4, emoji: "🏀", title: "Hoopix", sub: "Basketball Gear E-commerce", desc: "A clean, UX-focused online store for sports gear. Includes advanced filtering and a seamless shopping cart experience.", stack: ["React", "JavaScript", "CSS"] },
];

export default function App() {
  const [open, setOpen] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState({});
  const refs = useRef({});

  const handleContactClick = (e) => {
    const email = "yasminaxhalabi@gmail.com";
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setVisible((v) => ({ ...v, [e.target.dataset.key]: true }));
      }),
      { threshold: 0.12 }
    );
    Object.values(refs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const reg = (key) => (el) => { refs.current[key] = el; };
  const anim = (key, delay = 0) => ({
    "data-key": key,
    ref: reg(key),
    style: {
      transition: `opacity 0.65s ${delay}ms, transform 0.65s ${delay}ms`,
      opacity: visible[key] ? 1 : 0,
      transform: visible[key] ? "translateY(0)" : "translateY(28px)",
    },
  });

  return (
    <div style={{ background: "#faf9ff", color: "#1a1523", fontFamily: "'Instrument Sans', sans-serif", minHeight: "100vh", direction: "ltr" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .nav-a { font-size:13px; color:#9d8ec0; cursor:pointer; transition:color 0.2s; text-decoration:none; text-transform: capitalize; }
        .nav-a:hover { color:#7c3aed; }
        .chip { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: white; border: 1px solid #ede9fe; border-radius: 100px; font-size: 13px; transition: 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
        .chip img { width: 18px; height: 18px; object-fit: contain; }
        .proj-card { border: 1.5px solid #ede9fe; border-radius: 20px; padding: 28px; background: #fff; cursor: pointer; text-align: left; transition: 0.3s; }
        .proj-card:hover { border-color: #a78bfa; transform: translateY(-4px); box-shadow: 0 12px 30px rgba(124,58,237,0.08); }
        .clink { display:flex; align-items:center; gap:14px; padding:18px 22px; border-radius:14px; border:1.5px solid #ede9fe; background:#fff; text-decoration:none; color:#1a1523; transition:0.2s; cursor: pointer; }
        .clink:hover { border-color:#a78bfa; box-shadow:0 4px 20px rgba(167,139,250,0.1); }
        .dot-bg { position:absolute; inset:0; background-image:radial-gradient(#c4b5fd44 1px, transparent 1px); background-size:28px 28px; pointer-events:none; }
      `}</style>

      {/* Navbar */}
      <nav style={{ position:"sticky", top:0, zIndex:50, background: scrollY > 20 ? "rgba(250,249,255,0.9)" : "transparent", backdropFilter: "blur(10px)", borderBottom: scrollY > 20 ? "1px solid #ede9fe" : "none", transition:"0.3s", padding:"0 32px" }}>
        <div style={{ maxWidth:1000, margin:"0 auto", height:60, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <span style={{ fontFamily:"'Instrument Serif'", fontSize:24, color:"#7c3aed", fontStyle:"italic" }}>yh</span>
          <div style={{ display:"flex", gap:25 }}>
            {["projects","skills","about","contact"].map(s => (<a key={s} href={`#${s}`} className="nav-a">{s}</a>))}
          </div>
        </div>
      </nav>

      <div style={{ maxWidth:1000, margin:"0 auto", padding:"0 32px" }}>
        
        {/* Hero Section */}
        <section style={{ paddingTop:80, paddingBottom:100, position:"relative" }}>
          <div className="dot-bg" />
          <div style={{ display: "flex", alignItems: "center", gap: 30, marginBottom: 40, flexWrap: "wrap" }}>
            <div style={{ width: 130, height: 130, borderRadius: "50%", border: "5px solid white", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", overflow: "hidden" }}>
              <img src="/profile.jpg" alt="Yasmina" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => e.target.style.display='none'} />
            </div>
            <div>
              <h1 style={{ fontFamily:"'Instrument Serif'", fontSize:"clamp(50px, 9vw, 85px)", lineHeight: 1 }}>Yasmina</h1>
              <h1 style={{ fontFamily:"'Instrument Serif'", fontSize:"clamp(50px, 9vw, 85px)", fontStyle: "italic", color: "#7c3aed", lineHeight: 1 }}>Halabi</h1>
            </div>
          </div>
          <p style={{ fontSize:20, color:"#6b5e8a", maxWidth:500, lineHeight:1.7, marginBottom:35 }}>
            Full-Stack Engineer building clean, functional web applications. Ready for my first professional role.
          </p>
          <div style={{ display:"flex", gap:15, flexWrap:"wrap" }}>
            <a href="#projects" style={{ padding:"14px 28px", borderRadius:100, background:"#7c3aed", color:"#fff", textDecoration:"none", fontSize:14, fontWeight:500 }}>View Projects</a>
            <a href="/Yasmina_Halabi_CV.pdf" target="_blank" style={{ padding:"14px 28px", borderRadius:100, border:"1.5px solid #7c3aed", color:"#7c3aed", textDecoration:"none", fontSize:14, fontWeight:500 }}>Download CV</a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ paddingBottom:100 }}>
          <h2 style={{ fontFamily:"'Instrument Serif'", fontSize:38, marginBottom:40 }}>Featured Projects</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:20 }}>
            {projects.map((p, i) => (
              <div key={p.id} className="proj-card" onClick={() => setOpen(open === p.id ? null : p.id)} {...anim(`p${p.id}`, i*50)}>
                <div style={{ fontSize:35, marginBottom:15 }}>{p.emoji}</div>
                <h3 style={{ fontSize:22, marginBottom:5 }}>{p.title}</h3>
                <p style={{ fontSize:14, color:"#9d8ec0", marginBottom:15 }}>{p.sub}</p>
                {open === p.id && <p style={{ fontSize:14, color:"#4a3b6b", lineHeight:1.6, borderTop:"1px solid #eee", paddingTop:12 }}>{p.desc}</p>}
                <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginTop:15 }}>
                  {p.stack.map(s => <span key={s} style={{ fontSize:10, background:"#f5f3ff", color:"#7c3aed", padding:"4px 10px", borderRadius:100, border:"1px solid #ede9fe" }}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ paddingBottom:100 }}>
          <h2 style={{ fontFamily:"'Instrument Serif'", fontSize:38, marginBottom:40 }}>Technical Skills</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:40 }}>
            {Object.entries(skillsWithLogos).map(([category, list], i) => (
              <div key={category} {...anim(category, i*100)}>
                <h3 style={{ fontSize:12, textTransform:"uppercase", color:"#9d8ec0", letterSpacing:1, marginBottom:20 }}>{category}</h3>
                <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
                  {list.map(s => (
                    <div key={s.name} className="chip">
                      <img src={s.logo} alt={s.name} onError={(e) => e.target.style.display='none'} />
                      {s.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{ paddingBottom:100 }}>
          <h2 style={{ fontFamily:"'Instrument Serif'", fontSize:38, marginBottom:40 }}>About Me</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:50, alignItems:"start" }}>
            <div {...anim("ab-text")}>
              <p style={{ fontSize:18, color:"#4a3b6b", lineHeight:1.8, marginBottom:20 }}>
                I discovered my passion for programming during my National Service. I completed a comprehensive Full-Stack course at the Technion, where I fell in love with building things that solve real-world problems.
              </p>
              <p style={{ fontSize:18, color:"#4a3b6b", lineHeight:1.8 }}>
                I’ve built four end-to-end projects. My focus is on creating smooth user experiences backed by robust architecture. I'm now looking for my first professional role to contribute and grow.
              </p>
            </div>
            <div {...anim("ab-table")} style={{ background:"#f5f3ff", borderRadius:24, padding:32, border:"1px solid #ede9fe" }}>
              {[
                ["Training", "Technion Full-Stack"],
                ["Location", "Israel"],
                ["Seeking", "Junior Full-Stack Role"],
                ["Portfolio", "4 Projects"],
                ["Favorite Stack", "React · Node · MySQL"]
              ].map(([k, v]) => (
                <div key={k} style={{ display:"flex", justifyContent:"space-between", paddingBottom:15, marginBottom:15, borderBottom:"1px solid #ede9fe" }}>
                  <span style={{ fontSize:13, color:"#9d8ec0" }}>{k}</span>
                  <span style={{ fontSize:13, color:"#5b21b6", fontWeight:600 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Updated with Icons and Aesthetic GitHub styling */}
        <section id="contact" style={{ paddingBottom: 120, textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Instrument Serif'", fontSize: 38, marginBottom: 15 }}>Get In Touch</h2>
          
          <div style={{ margin: "0 auto", maxWidth: 450 }}>
            <p style={{ color: "#9d8ec0", marginBottom: 40, lineHeight: 1.6 }}>
              I'm currently looking for new opportunities. My inbox is always open!
            </p>
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: 20,
            justifyContent: "center" 
          }}>
            {/* Email Card with Icon */}
            <a 
              href="mailto:yasminaxhalabi@gmail.com" 
              className="clink" 
              onClick={handleContactClick}
              style={{ textAlign: "left" }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "#f5f3ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 10, color: "#9d8ec0", textTransform: "uppercase", letterSpacing: 1 }}>Email</p>
                <p style={{ fontSize: 14, fontWeight: 500 }}>yasminaxhalabi@gmail.com</p>
              </div>
            </a>

            {/* Aesthetic GitHub Card with CTA Button */}
            <div 
              className="clink" 
              style={{ textAlign: "left", cursor: "default", flexDirection: "column", alignItems: "start", gap: 15, padding: 22 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#a78bfa";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(167,139,250,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#ede9fe";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, width: "100%" }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "#f5f3ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div style={{ flexGrow: 1 }}>
                  <p style={{ fontSize: 10, color: "#9d8ec0", textTransform: "uppercase", letterSpacing: 1 }}>GitHub</p>
                  <p style={{ fontSize: 16, fontWeight: 600, color: "#1a1523" }}>yasminaxhalabi-oss</p>
                </div>
              </div>
              <a 
                href="https://github.com/yasminaxhalabi-oss" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#fff",
                  background: "#7c3aed",
                  border: "none",
                  borderRadius: 100,
                  padding: "10px 20px",
                  textDecoration: "none",
                  transition: "background 0.2s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#6d28d9"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#7c3aed"}
              >
                View Profile
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12,5 19,12 12,19"></polyline>
                </svg>
              </a>
            </div>

            {/* LinkedIn Card with Icon */}
            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer" 
              className="clink" 
              style={{ textAlign: "left" }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "#f5f3ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 10, color: "#9d8ec0", textTransform: "uppercase", letterSpacing: 1 }}>LinkedIn</p>
                <p style={{ fontSize: 14, fontWeight: 500 }}>Connect on LinkedIn</p>
              </div>
            </a>
          </div>
        </section>
      </div>

      <footer style={{ textAlign:"center", padding:40, borderTop:"1px solid #ede9fe", color:"#c4b5fd", fontSize:12 }}>
        Yasmina Halabi · 2025 · Built with React
      </footer>
    </div>
  );
}