import { useState } from "react";

/* ── FONTS ── */
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap";
document.head.appendChild(fontLink);

/* ── GLOBAL STYLES ── */
const gs = document.createElement("style");
gs.textContent = `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg: #f4f6fb;
  --white: #ffffff;
  --surface: #ffffff;
  --surface2: #f8fafc;
  --border: #e8edf5;
  --border2: #d1d9e8;
  --sidebar: #1e2a3b;
  --sidebar2: #273548;
  --sidebar-border: #2e3d52;
  --text: #1a2233;
  --text2: #4a5568;
  --text3: #94a3b8;
  --teal: #0d9488;
  --teal-light: #f0fdfa;
  --teal-mid: #ccfbf1;
  --indigo: #4f46e5;
  --indigo-light: #eef2ff;
  --amber: #d97706;
  --amber-light: #fffbeb;
  --rose: #e11d48;
  --rose-light: #fff1f2;
  --green: #059669;
  --green-light: #ecfdf5;
  --blue: #2563eb;
  --blue-light: #eff6ff;
  --purple: #7c3aed;
  --purple-light: #f5f3ff;
  --admin-color: #7c3aed;
  --student-color: #2563eb;
  --company-color: #0d9488;
  --faculty-color: #d97706;
  --shadow-sm: 0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04);
  --shadow: 0 4px 16px rgba(0,0,0,.07), 0 1px 4px rgba(0,0,0,.04);
  --shadow-lg: 0 10px 40px rgba(0,0,0,.10), 0 2px 8px rgba(0,0,0,.05);
}
body { font-family: 'Plus Jakarta Sans', sans-serif; background: var(--bg); color: var(--text); }
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: var(--surface2); }
::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 3px; }
input, textarea, select {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: var(--white);
  border: 1.5px solid var(--border2);
  color: var(--text);
  border-radius: 9px;
  padding: 9px 13px;
  font-size: 13px;
  outline: none;
  width: 100%;
  transition: border-color .18s, box-shadow .18s;
}
input:focus, textarea:focus, select:focus {
  border-color: var(--indigo);
  box-shadow: 0 0 0 3px rgba(79,70,229,.1);
}
select option { background: #fff; }
@keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }
@keyframes slideRight { from { opacity:0; transform:translateX(-8px); } to { opacity:1; transform:none; } }
.fade-up { animation: fadeUp .32s ease both; }
.mono { font-family: 'JetBrains Mono', monospace; }
.card {
  background: var(--white);
  border: 1.5px solid var(--border);
  border-radius: 14px;
  box-shadow: var(--shadow-sm);
  transition: border-color .18s, box-shadow .18s;
}
.card-hover:hover { border-color: var(--border2); box-shadow: var(--shadow); }
.btn {
  font-family: 'Plus Jakarta Sans', sans-serif;
  border: none; cursor: pointer;
  font-size: 12.5px; font-weight: 600;
  border-radius: 9px; padding: 8px 16px;
  transition: all .18s;
  display: inline-flex; align-items: center; gap: 6px;
  letter-spacing: .01em;
}
.btn-primary { background: var(--indigo); color: #fff; }
.btn-primary:hover { background: #4338ca; box-shadow: 0 4px 14px rgba(79,70,229,.35); transform: translateY(-1px); }
.btn-teal { background: var(--teal); color: #fff; }
.btn-teal:hover { background: #0f766e; box-shadow: 0 4px 14px rgba(13,148,136,.3); transform: translateY(-1px); }
.btn-ghost { background: transparent; color: var(--text2); border: 1.5px solid var(--border2); }
.btn-ghost:hover { background: var(--surface2); color: var(--text); border-color: var(--border2); }
.btn-amber { background: var(--amber-light); color: var(--amber); border: 1.5px solid #fde68a; }
.btn-amber:hover { background: #fef3c7; }
.btn-danger { background: var(--rose-light); color: var(--rose); border: 1.5px solid #fecdd3; }
.tag {
  display: inline-flex; align-items: center;
  padding: 3px 9px; border-radius: 20px;
  font-size: 11px; font-weight: 600;
  letter-spacing: .01em;
}
.tag-teal { background: var(--teal-mid); color: #0f766e; }
.tag-indigo { background: var(--indigo-light); color: var(--indigo); }
.tag-amber { background: var(--amber-light); color: var(--amber); }
.tag-rose { background: var(--rose-light); color: var(--rose); }
.tag-green { background: var(--green-light); color: var(--green); }
.tag-blue { background: var(--blue-light); color: var(--blue); }
.tag-purple { background: var(--purple-light); color: var(--purple); }
.tag-slate { background: #f1f5f9; color: #475569; border: 1px solid #e2e8f0; }
.section-title {
  font-size: 11px; font-weight: 700; letter-spacing: .07em;
  text-transform: uppercase; color: var(--text3); margin-bottom: 14px;
}
.nav-link {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 12px; border-radius: 9px;
  font-size: 13px; font-weight: 500;
  cursor: pointer; color: rgba(255,255,255,.55);
  transition: all .15s; border: 1px solid transparent;
  white-space: nowrap;
}
.nav-link:hover { color: rgba(255,255,255,.9); background: rgba(255,255,255,.08); }
.nav-link.active { color: #fff; background: rgba(255,255,255,.13); border-color: rgba(255,255,255,.12); }
table { width: 100%; border-collapse: collapse; }
thead th {
  padding: 11px 16px; text-align: left;
  font-size: 10.5px; font-weight: 700; letter-spacing: .06em;
  text-transform: uppercase; color: var(--text3);
  background: var(--surface2); border-bottom: 1.5px solid var(--border);
}
thead th:first-child { border-radius: 10px 0 0 0; }
thead th:last-child { border-radius: 0 10px 0 0; }
tbody tr { border-bottom: 1px solid var(--border); transition: background .1s; }
tbody tr:last-child { border-bottom: none; }
tbody tr:hover { background: var(--surface2); }
tbody td { padding: 13px 16px; color: var(--text2); font-size: 13px; vertical-align: middle; }
tbody td:first-child { color: var(--text); font-weight: 600; }
.modal-overlay {
  position: fixed; inset: 0; background: rgba(15,23,42,.45);
  backdrop-filter: blur(5px); z-index: 200;
  display: flex; align-items: center; justify-content: center; padding: 20px;
}
.modal-box {
  background: var(--white); border: 1.5px solid var(--border);
  border-radius: 18px; width: 100%; max-width: 500px;
  max-height: 90vh; overflow-y: auto;
  box-shadow: var(--shadow-lg); animation: fadeUp .22s ease;
}
.progress-track { background: var(--border); border-radius: 99px; overflow: hidden; }
.progress-fill { height: 100%; border-radius: 99px; transition: width .5s ease; }
`;
document.head.appendChild(gs);

/* ── MOCK DATA ── */
const MOCK = {
  students: [
    { id:1, name:"Arjun Mehta", email:"arjun@college.edu", dept:"Computer Science", year:"2025", cgpa:8.7, skills:["React","Node.js","Python","MongoDB"], certs:["AWS Cloud Practitioner","Meta Frontend Dev"], internships:[1], approved:true, resume:true, progress:72 },
    { id:2, name:"Priya Sharma", email:"priya@college.edu", dept:"Electronics", year:"2026", cgpa:7.9, skills:["C++","VLSI","MATLAB","Embedded C"], certs:["NPTEL Embedded Systems"], internships:[], approved:true, resume:true, progress:0 },
    { id:3, name:"Rohan Das", email:"rohan@college.edu", dept:"Mechanical", year:"2025", cgpa:8.1, skills:["CAD","SolidWorks","ANSYS"], certs:[], internships:[2], approved:false, resume:false, progress:45 },
    { id:4, name:"Sneha Iyer", email:"sneha@college.edu", dept:"Computer Science", year:"2026", cgpa:9.1, skills:["Python","TensorFlow","SQL","Tableau","Power BI"], certs:["Google Data Analytics","IBM Data Science"], internships:[1,3], approved:true, resume:true, progress:100 },
    { id:5, name:"Vikram Nair", email:"vikram@college.edu", dept:"MBA", year:"2025", cgpa:7.5, skills:["Marketing","Excel","Salesforce"], certs:[], internships:[], approved:false, resume:false, progress:0 },
  ],
  companies: [
    { id:1, name:"TechNova Labs", industry:"Software / AI", location:"Bengaluru", website:"technova.io", contact:"hr@technova.io", approved:true, logo:"TN" },
    { id:2, name:"AutoDesk India", industry:"Manufacturing Tech", location:"Pune", website:"autodesk.in", contact:"intern@autodesk.in", approved:true, logo:"AD" },
    { id:3, name:"DataBridge Analytics", industry:"Data & Analytics", location:"Hyderabad", website:"databridge.ai", contact:"talent@databridge.ai", approved:true, logo:"DB" },
    { id:4, name:"GreenFuture Ventures", industry:"CleanTech", location:"Mumbai", website:"greenfuture.in", contact:"jobs@greenfuture.in", approved:false, logo:"GF" },
  ],
  internships: [
    { id:1, company:1, role:"Full Stack Developer Intern", skills:["React","Node.js","MongoDB"], duration:"3 months", openings:4, mode:"Remote", stipend:"₹15,000/mo", type:"Paid", dept:["Computer Science","IT"], deadline:"2025-03-20", applications:[{studentId:1,status:"Shortlisted",feedback:"Strong React skills"},{studentId:4,status:"Selected",feedback:"Exceptional candidate"}] },
    { id:2, company:2, role:"Product Design Intern", skills:["CAD","SolidWorks","3D Modeling"], duration:"2 months", openings:2, mode:"Onsite", stipend:"₹10,000/mo", type:"Paid", dept:["Mechanical","Civil"], deadline:"2025-03-25", applications:[{studentId:3,status:"Applied",feedback:""}] },
    { id:3, company:3, role:"Data Science Intern", skills:["Python","SQL","Tableau","ML"], duration:"6 months", openings:3, mode:"Hybrid", stipend:"Performance-based", type:"Performance", dept:["Computer Science","Statistics"], deadline:"2025-04-01", applications:[{studentId:4,status:"Shortlisted",feedback:"Great portfolio"}] },
    { id:4, company:1, role:"UI/UX Research Intern", skills:["Figma","User Research","Prototyping"], duration:"2 months", openings:2, mode:"Remote", stipend:"Unpaid", type:"Unpaid", dept:["Computer Science","Design"], deadline:"2025-04-10", applications:[] },
  ],
  certs: [
    { id:1, studentId:1, name:"AWS Cloud Practitioner", issuer:"Amazon Web Services", date:"2024-08", verified:true },
    { id:2, studentId:1, name:"Meta Frontend Dev", issuer:"Meta / Coursera", date:"2024-11", verified:true },
    { id:3, studentId:2, name:"NPTEL Embedded Systems", issuer:"IIT Madras", date:"2024-09", verified:false },
    { id:4, studentId:4, name:"Google Data Analytics", issuer:"Google / Coursera", date:"2024-07", verified:true },
    { id:5, studentId:4, name:"IBM Data Science", issuer:"IBM / Coursera", date:"2024-10", verified:false },
  ],
  notifications: [
    { id:1, to:"student_1", msg:"Your application to TechNova Labs has been shortlisted!", type:"success", time:"2h ago" },
    { id:2, to:"student_1", msg:"Internship progress update required for TechNova Labs.", type:"warning", time:"1d ago" },
    { id:3, to:"admin", msg:"GreenFuture Ventures awaiting company approval.", type:"warning", time:"3h ago" },
    { id:4, to:"admin", msg:"2 new certificate verifications pending.", type:"info", time:"5h ago" },
    { id:5, to:"company_1", msg:"2 new applications for Full Stack Developer Intern.", type:"info", time:"4h ago" },
    { id:6, to:"faculty", msg:"3 students need internship progress validation.", type:"warning", time:"1d ago" },
  ],
};

/* ── TINY HELPERS ── */
function Tag({ text, v = "slate" }) {
  return <span className={`tag tag-${v}`}>{text}</span>;
}

function Avatar({ name, size = 34, bg = "#eef2ff", color = "#4f46e5" }) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: bg, color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: size * .34, flexShrink: 0 }}>
      {initials}
    </div>
  );
}

function Bar({ value, color = "#4f46e5", h = 7 }) {
  return (
    <div className="progress-track" style={{ height: h }}>
      <div className="progress-fill" style={{ width: `${Math.min(100, value)}%`, background: color, height: h }} />
    </div>
  );
}

function StatCard({ label, value, sub, accent = "#4f46e5" }) {
  return (
    <div className="card" style={{ padding: "20px 22px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: 56, height: 56, background: accent, opacity: .06, borderRadius: "0 14px 0 100%" }} />
      <div style={{ fontSize: 26, fontWeight: 800, color: accent, fontFamily: "'JetBrains Mono',monospace", marginBottom: 3 }}>{value}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 2 }}>{label}</div>
      {sub && <div style={{ fontSize: 11, color: "var(--text3)" }}>{sub}</div>}
    </div>
  );
}

function Modal({ title, onClose, children }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px 16px", borderBottom: "1.5px solid var(--border)" }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text)" }}>{title}</div>
          <button className="btn btn-ghost" style={{ padding: "4px 10px", fontSize: 13 }} onClick={onClose}>✕</button>
        </div>
        <div style={{ padding: "20px 24px 24px" }}>{children}</div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "var(--text2)", marginBottom: 6, letterSpacing: ".03em", textTransform: "uppercase" }}>{label}</label>
      {children}
    </div>
  );
}

function Toast({ msg }) {
  return (
    <div style={{ position: "fixed", bottom: 28, right: 28, background: "#fff", border: "1.5px solid #bbf7d0", borderRadius: 12, padding: "13px 20px", color: "#059669", fontSize: 13, fontWeight: 600, boxShadow: "0 8px 30px rgba(0,0,0,.12)", animation: "fadeUp .2s ease", zIndex: 400, display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ fontSize: 16 }}>✓</span> {msg}
    </div>
  );
}

function NotifPanel({ notifs, portalKey }) {
  const mine = notifs.filter(n => n.to === portalKey);
  const typeIcon = { success: "🟢", warning: "🟡", info: "🔵" };
  return (
    <div className="card" style={{ position: "absolute", top: 50, right: 0, width: 300, zIndex: 100, boxShadow: "var(--shadow-lg)", animation: "fadeUp .18s ease" }}>
      <div style={{ padding: "13px 16px 10px", borderBottom: "1.5px solid var(--border)", fontWeight: 700, fontSize: 13, color: "var(--text)" }}>Notifications</div>
      {mine.length === 0
        ? <div style={{ padding: "24px", textAlign: "center", color: "var(--text3)", fontSize: 13 }}>All caught up! 🎉</div>
        : mine.map(n => (
          <div key={n.id} style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", display: "flex", gap: 10 }}>
            <div style={{ marginTop: 1 }}>{typeIcon[n.type] || "⚪"}</div>
            <div>
              <div style={{ fontSize: 12.5, color: "var(--text)", lineHeight: 1.5 }}>{n.msg}</div>
              <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 3 }}>{n.time}</div>
            </div>
          </div>
        ))}
    </div>
  );
}

/* ── SIDEBAR ── */
function Sidebar({ items, active, onNav, portalLabel, accentColor, userName, onLogout }) {
  const NAV_ICONS = { dashboard:"⊞", students:"◈", companies:"◉", internships:"◈", certs:"◎", reports:"▦", profile:"◈", browse:"◉", applications:"◎", skills:"★", upload:"⬆", monitor:"▦", validate:"✓", analytics:"◉", post:"＋", listings:"◉", search:"⌕" };
  return (
    <div style={{ width: 218, minHeight: "100vh", background: "var(--sidebar)", display: "flex", flexDirection: "column", flexShrink: 0 }}>
      {/* Branding */}
      <div style={{ padding: "22px 16px 18px", borderBottom: "1px solid var(--sidebar-border)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: accentColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: "#fff" }}>◈</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#fff", letterSpacing: "-.02em" }}>InternTrack</div>
            <div style={{ fontSize: 10, color: accentColor, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", marginTop: 1 }}>{portalLabel}</div>
          </div>
        </div>
        {/* User chip */}
        <div style={{ display: "flex", alignItems: "center", gap: 9, padding: "9px 11px", background: "rgba(255,255,255,.07)", borderRadius: 10, border: "1px solid var(--sidebar-border)" }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: accentColor + "33", border: `1.5px solid ${accentColor}66`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: accentColor }}>
            {userName.split(" ").map(w => w[0]).join("").slice(0, 2)}
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#fff", maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{userName}</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,.35)" }}>{portalLabel}</div>
          </div>
        </div>
      </div>
      {/* Nav */}
      <nav style={{ flex: 1, padding: "14px 10px", overflowY: "auto" }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "rgba(255,255,255,.25)", padding: "0 6px", marginBottom: 8 }}>Menu</div>
        {items.map(item => (
          <div key={item.id}
            className={`nav-link${active === item.id ? " active" : ""}`}
            style={active === item.id ? { color: "#fff", borderColor: `${accentColor}44`, background: `${accentColor}22` } : {}}
            onClick={() => onNav(item.id)}>
            <span style={{ fontSize: 13, opacity: .75 }}>{NAV_ICONS[item.id] || "◈"}</span>
            {item.label}
          </div>
        ))}
      </nav>
      {/* Logout */}
      <div style={{ padding: "12px 10px", borderTop: "1px solid var(--sidebar-border)" }}>
        <div className="nav-link" onClick={onLogout} style={{ color: "#fca5a5" }}>
          <span>⏻</span> Logout
        </div>
      </div>
    </div>
  );
}

/* ── TOPBAR ── */
function TopBar({ title, notifCount, notifKey, notifs }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ height: 58, background: "var(--white)", borderBottom: "1.5px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", position: "sticky", top: 0, zIndex: 50, flexShrink: 0, boxShadow: "0 1px 0 var(--border)" }}>
      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text)" }}>{title}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, position: "relative" }}>
        <button className="btn btn-ghost" style={{ padding: "7px 13px", position: "relative" }} onClick={() => setOpen(o => !o)}>
          🔔
          {notifCount > 0 && <span style={{ position: "absolute", top: 4, right: 6, width: 8, height: 8, background: "#e11d48", borderRadius: "50%", border: "2px solid #fff" }} />}
        </button>
        {open && <NotifPanel notifs={notifs} portalKey={notifKey} />}
        <div style={{ width: 1, height: 22, background: "var(--border2)" }} />
        <div className="mono" style={{ fontSize: 11, color: "var(--text3)" }}>v2.4</div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════
   COLLEGE SELECT PAGE
═══════════════════════════════ */
const COLLEGES = [
  { id:"vce",    name:"Vardhaman College of Engineering",    domain:"vardhaman.interntrack.in",    city:"Hyderabad",       state:"Telangana",      students:4200, acronym:"VCE",  color:"#1d4ed8", bg:"#eff6ff"  },
  { id:"scient", name:"Scient Institute of Technology",      domain:"scient.interntrack.in",       city:"Hyderabad",       state:"Telangana",      students:1800, acronym:"SIT",  color:"#dc2626", bg:"#fff1f2"  },
  { id:"jntu",   name:"JNTU College of Engineering",         domain:"jntu.interntrack.in",         city:"Hyderabad",       state:"Telangana",      students:8500, acronym:"JNTU", color:"#059669", bg:"#ecfdf5"  },
  { id:"iit",    name:"IIT Hyderabad",                       domain:"iith.interntrack.in",         city:"Sangareddy",      state:"Telangana",      students:3100, acronym:"IITH", color:"#7c3aed", bg:"#f5f3ff"  },
  { id:"bits",   name:"BITS Pilani Hyderabad Campus",        domain:"bits-hyd.interntrack.in",     city:"Hyderabad",       state:"Telangana",      students:3800, acronym:"BITS", color:"#0d9488", bg:"#f0fdfa"  },
  { id:"cbit",   name:"Chaitanya Bharathi Institute of Technology", domain:"cbit.interntrack.in",  city:"Hyderabad",       state:"Telangana",      students:5200, acronym:"CBIT", color:"#d97706", bg:"#fffbeb"  },
  { id:"mit",    name:"Manipal Institute of Technology",     domain:"mit.interntrack.in",          city:"Manipal",         state:"Karnataka",      students:7800, acronym:"MIT",  color:"#e11d48", bg:"#fff1f2"  },
  { id:"vit",    name:"VIT University",                      domain:"vit.interntrack.in",          city:"Vellore",         state:"Tamil Nadu",     students:12000,acronym:"VIT",  color:"#2563eb", bg:"#eff6ff"  },
];

function CollegeSelect({ onSelect }) {
  const [search, setSearch]   = useState("");
  const [hovered, setHovered] = useState(null);

  const filtered = COLLEGES.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.city.toLowerCase().includes(search.toLowerCase()) ||
    c.state.toLowerCase().includes(search.toLowerCase()) ||
    c.acronym.toLowerCase().includes(search.toLowerCase())
  );

  // Group by state
  const byState = filtered.reduce((acc, c) => {
    if (!acc[c.state]) acc[c.state] = [];
    acc[c.state].push(c);
    return acc;
  }, {});

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(145deg,#f0f4ff 0%,#fafbff 40%,#f5f0ff 100%)", display:"flex", flexDirection:"column" }}>

      {/* Rainbow top strip */}
      <div style={{ height:4, background:"linear-gradient(90deg,#4f46e5,#0d9488,#d97706,#e11d48)", flexShrink:0 }} />

      {/* Top nav bar */}
      <div style={{ padding:"0 32px", height:58, display:"flex", alignItems:"center", justifyContent:"space-between", background:"rgba(255,255,255,.75)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(79,70,229,.10)", flexShrink:0 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:34, height:34, borderRadius:10, background:"linear-gradient(135deg,#4f46e5,#7c3aed)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, color:"#fff" }}>◈</div>
          <div>
            <div style={{ fontSize:15, fontWeight:800, color:"#1a2233", letterSpacing:"-.02em" }}>InternTrack</div>
            <div style={{ fontSize:9.5, color:"#94a3b8", fontWeight:600, letterSpacing:".06em", textTransform:"uppercase", marginTop:-1 }}>Skill Tracking Platform</div>
          </div>
        </div>
        <div style={{ fontSize:12.5, color:"#94a3b8" }}>© 2025 InternTrack. All rights reserved.</div>
      </div>

      {/* Main content */}
      <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-start", padding:"56px 24px 48px" }}>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:36, animation:"fadeUp .35s ease" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:7, padding:"5px 14px", background:"#eef2ff", border:"1.5px solid #c7d2fe", borderRadius:30, marginBottom:16 }}>
            <span style={{ color:"#4f46e5", fontSize:13 }}>🏛</span>
            <span style={{ fontSize:11, fontWeight:700, color:"#4f46e5", letterSpacing:".07em", textTransform:"uppercase" }}>Institution Portal</span>
          </div>
          <h1 style={{ fontSize:"clamp(26px,4vw,38px)", fontWeight:800, color:"#1a2233", letterSpacing:"-.03em", lineHeight:1.15, marginBottom:10 }}>
            Select Your College
          </h1>
          <p style={{ fontSize:14.5, color:"#4a5568", maxWidth:420, margin:"0 auto", lineHeight:1.65 }}>
            Choose your institution to continue to the login page
          </p>
        </div>

        {/* Search box */}
        <div style={{ width:"100%", maxWidth:580, marginBottom:28, animation:"fadeUp .4s ease", position:"relative" }}>
          <span style={{ position:"absolute", left:18, top:"50%", transform:"translateY(-50%)", fontSize:17, color:"#94a3b8", pointerEvents:"none" }}>🔍</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search for your college, city or state..."
            style={{
              width:"100%", padding:"15px 18px 15px 48px",
              borderRadius:14, border:"1.5px solid #e2e8f0",
              fontSize:14.5, background:"#fff",
              boxShadow:"0 4px 20px rgba(0,0,0,.07), 0 1px 4px rgba(0,0,0,.04)",
              outline:"none", color:"#1a2233",
              transition:"border-color .18s, box-shadow .18s",
              fontFamily:"'Plus Jakarta Sans',sans-serif"
            }}
            onFocus={e=>{e.target.style.borderColor="#a5b4fc";e.target.style.boxShadow="0 0 0 3px rgba(79,70,229,.12),0 4px 20px rgba(0,0,0,.07)";}}
            onBlur={e=>{e.target.style.borderColor="#e2e8f0";e.target.style.boxShadow="0 4px 20px rgba(0,0,0,.07)";}}
          />
          {search && (
            <button onClick={()=>setSearch("")} style={{ position:"absolute", right:14, top:"50%", transform:"translateY(-50%)", background:"#f1f5f9", border:"none", borderRadius:"50%", width:26, height:26, cursor:"pointer", fontSize:12, color:"#64748b", display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
          )}
        </div>

        {/* College list */}
        <div style={{ width:"100%", maxWidth:580, animation:"fadeUp .45s ease" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign:"center", padding:"52px 20px", color:"#94a3b8" }}>
              <div style={{ fontSize:38, marginBottom:12 }}>🔍</div>
              <div style={{ fontWeight:600, fontSize:15, marginBottom:6, color:"#64748b" }}>No colleges found</div>
              <div style={{ fontSize:13 }}>Try a different search term</div>
            </div>
          ) : (
            Object.entries(byState).map(([state, colleges]) => (
              <div key={state} style={{ marginBottom:24 }}>
                {/* State header */}
                <div style={{ fontSize:10.5, fontWeight:700, color:"#94a3b8", letterSpacing:".08em", textTransform:"uppercase", marginBottom:8, paddingLeft:4 }}>
                  📍 {state}
                </div>
                {/* College cards */}
                <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                  {colleges.map((c, i) => (
                    <div
                      key={c.id}
                      onClick={() => onSelect(c)}
                      onMouseEnter={() => setHovered(c.id)}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        display:"flex", alignItems:"center", gap:16,
                        padding:"16px 20px",
                        background: hovered===c.id ? "#fafbff" : "#fff",
                        borderRadius:14,
                        border: hovered===c.id ? `1.5px solid ${c.color}44` : "1.5px solid #e8edf5",
                        cursor:"pointer",
                        boxShadow: hovered===c.id ? `0 4px 20px ${c.color}18, 0 1px 4px rgba(0,0,0,.04)` : "0 1px 4px rgba(0,0,0,.04)",
                        transition:"all .18s",
                        animation:`fadeUp ${.1+i*.07}s ease both`,
                      }}>
                      {/* College logo / acronym */}
                      <div style={{ width:46, height:46, borderRadius:12, background:c.bg, border:`1.5px solid ${c.color}33`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                        <span style={{ fontWeight:800, fontSize:11, color:c.color, letterSpacing:"-.01em", textAlign:"center", lineHeight:1.1 }}>{c.acronym}</span>
                      </div>
                      {/* Info */}
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ fontWeight:700, fontSize:14, color:"#1a2233", marginBottom:3, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{c.name}</div>
                        <div style={{ display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
                          <span style={{ fontSize:12, color:"#94a3b8", fontFamily:"'JetBrains Mono',monospace" }}>{c.domain}</span>
                          <span style={{ fontSize:11, color:c.color, fontWeight:600, background:c.bg, padding:"1px 8px", borderRadius:20, border:`1px solid ${c.color}22` }}>{c.city}</span>
                          <span style={{ fontSize:11, color:"#94a3b8" }}>{c.students.toLocaleString()} students</span>
                        </div>
                      </div>
                      {/* Arrow */}
                      <div style={{ width:32, height:32, borderRadius:9, background: hovered===c.id ? c.color : "#f1f5f9", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, transition:"all .18s" }}>
                        <span style={{ color: hovered===c.id ? "#fff" : "#94a3b8", fontSize:14, transition:"all .18s", transform: hovered===c.id ? "translateX(2px)" : "none", display:"inline-block" }}>→</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Stats row */}
        <div style={{ display:"flex", gap:32, marginTop:36, animation:"fadeUp .55s ease" }}>
          {[["🏛","8 Institutions","Partner colleges"],["👥","36,600+","Registered students"],["💼","200+","Active companies"],["🏅","500+","Internship listings"]].map(([icon,val,sub])=>(
            <div key={val} style={{ textAlign:"center" }}>
              <div style={{ fontSize:20, marginBottom:4 }}>{icon}</div>
              <div style={{ fontWeight:800, fontSize:15, color:"#1a2233" }}>{val}</div>
              <div style={{ fontSize:11.5, color:"#94a3b8" }}>{sub}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Footer */}
      <div style={{ textAlign:"center", padding:"16px 24px", fontSize:12.5, color:"#94a3b8", borderTop:"1px solid rgba(0,0,0,.06)", background:"rgba(255,255,255,.6)", backdropFilter:"blur(8px)", flexShrink:0 }}>
        © 2025 InternTrack · All rights reserved · <span style={{ color:"#4f46e5", cursor:"pointer", fontWeight:600 }}>Privacy Policy</span> · <span style={{ color:"#4f46e5", cursor:"pointer", fontWeight:600 }}>Contact Support</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════
   LANDING  — Login + Register
═══════════════════════════════ */
function Landing({ onSelect, college, onChangeCollege }) {
  const [role, setRole]       = useState("student");
  const [tab, setTab]         = useState("login");   // "login" | "register"
  const [showPwd, setShowPwd] = useState(false);
  const [showCPwd, setShowCPwd] = useState(false);
  const [regStep, setRegStep] = useState(1);         // register multi-step: 1 | 2
  const [regDone, setRegDone] = useState(false);

  const roleMap = {
    student: { id:"student", label:"Student",              accent:"#2563eb", icon:"◈", iconBg:"#eff6ff" },
    admin:   { id:"admin",   label:"Administrator",        accent:"#7c3aed", icon:"⬡", iconBg:"#f5f3ff" },
    company: { id:"company", label:"Company / Recruiter",  accent:"#0d9488", icon:"◉", iconBg:"#f0fdfa" },
    faculty: { id:"faculty", label:"Faculty / Placement",  accent:"#d97706", icon:"▦", iconBg:"#fffbeb" },
  };
  const cur = roleMap[role];

  const heroGrad = {
    student: "linear-gradient(145deg,#1d4ed8 0%,#3b82f6 55%,#60a5fa 100%)",
    admin:   "linear-gradient(145deg,#5b21b6 0%,#7c3aed 55%,#a78bfa 100%)",
    company: "linear-gradient(145deg,#0f766e 0%,#0d9488 55%,#2dd4bf 100%)",
    faculty: "linear-gradient(145deg,#92400e 0%,#d97706 55%,#fbbf24 100%)",
  };

  const heroContent = {
    login: {
      eyebrow: "Welcome Back",
      heading: "Your Internship\nHub Awaits",
      sub: "Sign in to access your personalised portal and manage your internship journey end-to-end.",
    },
    register: {
      eyebrow: "New Here?",
      heading: "Create Your\nAccount",
      sub: "Join InternTrack and get connected with internship opportunities, skill tracking tools, and placement support.",
    },
  };

  const roleFeatures = {
    student: ["Browse & apply for internships","Track application status live","Upload certificates & map skills"],
    admin:   ["Approve students & companies","Verify certificates & reports","Generate system-wide analytics"],
    company: ["Post internship opportunities","Review & shortlist applicants","Provide feedback to interns"],
    faculty: ["Monitor student internships","Validate skills & progress","Generate accreditation reports"],
  };

  // role-specific register fields — step 1: basics, step 2: role-specific details
  const registerFields = {
    student: {
      step1: [
        { label:"Full Name",       placeholder:"e.g. Arjun Mehta",         type:"text",     icon:"👤" },
        { label:"Email Address",   placeholder:"you@college.edu",           type:"email",    icon:"✉" },
        { label:"Roll Number",     placeholder:"e.g. 21CS101",              type:"text",     icon:"◈" },
      ],
      step2: [
        { label:"Department",      placeholder:"e.g. Computer Science",     type:"text",     icon:"🏛" },
        { label:"College Name",    placeholder:"e.g. VCE Hyderabad",        type:"text",     icon:"🎓" },
        { label:"Graduation Year", placeholder:"e.g. 2026",                 type:"number",   icon:"📅" },
        { label:"Password",        placeholder:"Create a strong password",  type:"password", icon:"🔒", pw:true },
        { label:"Confirm Password",placeholder:"Re-enter password",         type:"password", icon:"🔒", cpw:true },
      ],
    },
    admin: {
      step1: [
        { label:"Full Name",       placeholder:"e.g. Ravi Kumar",           type:"text",     icon:"👤" },
        { label:"Email Address",   placeholder:"admin@institution.edu",     type:"email",    icon:"✉" },
        { label:"Employee ID",     placeholder:"e.g. EMP2024001",           type:"text",     icon:"◈" },
      ],
      step2: [
        { label:"Institution Name",placeholder:"e.g. VCE Hyderabad",        type:"text",     icon:"🏛" },
        { label:"Designation",     placeholder:"e.g. System Administrator", type:"text",     icon:"💼" },
        { label:"Contact Number",  placeholder:"e.g. +91 9876543210",       type:"tel",      icon:"📞" },
        { label:"Password",        placeholder:"Create a strong password",  type:"password", icon:"🔒", pw:true },
        { label:"Confirm Password",placeholder:"Re-enter password",         type:"password", icon:"🔒", cpw:true },
      ],
    },
    company: {
      step1: [
        { label:"Company Name",    placeholder:"e.g. TechNova Labs",        type:"text",     icon:"🏢" },
        { label:"Official Email",  placeholder:"hr@company.com",            type:"email",    icon:"✉" },
        { label:"Website",         placeholder:"https://yourcompany.com",   type:"url",      icon:"🌐" },
      ],
      step2: [
        { label:"Industry Type",   placeholder:"e.g. Software / AI",       type:"text",     icon:"🏭" },
        { label:"Location / City", placeholder:"e.g. Bengaluru",            type:"text",     icon:"📍" },
        { label:"Contact Person",  placeholder:"HR Manager name",           type:"text",     icon:"👤" },
        { label:"Password",        placeholder:"Create a strong password",  type:"password", icon:"🔒", pw:true },
        { label:"Confirm Password",placeholder:"Re-enter password",         type:"password", icon:"🔒", cpw:true },
      ],
    },
    faculty: {
      step1: [
        { label:"Full Name",       placeholder:"e.g. Dr. Meena Iyer",       type:"text",     icon:"👤" },
        { label:"Email Address",   placeholder:"faculty@college.edu",       type:"email",    icon:"✉" },
        { label:"Faculty ID",      placeholder:"e.g. FAC2024001",           type:"text",     icon:"◈" },
      ],
      step2: [
        { label:"College / Institution",placeholder:"e.g. VCE Hyderabad",  type:"text",     icon:"🎓" },
        { label:"Department",      placeholder:"e.g. Computer Science",     type:"text",     icon:"🏛" },
        { label:"Designation",     placeholder:"e.g. Placement Officer",    type:"text",     icon:"💼" },
        { label:"Password",        placeholder:"Create a strong password",  type:"password", icon:"🔒", pw:true },
        { label:"Confirm Password",placeholder:"Re-enter password",         type:"password", icon:"🔒", cpw:true },
      ],
    },
  };

  const Shape = ({ size, top, left, radius }) => (
    <div style={{ position:"absolute", width:size, height:size, borderRadius:radius||size*0.28, background:"rgba(255,255,255,0.10)", top, left, pointerEvents:"none" }} />
  );

  const hc = heroContent[tab];
  const fields = registerFields[role];

  const LabeledInput = ({ f }) => {
    const [vis, setVis] = useState(false);
    const isPw  = f.pw || f.cpw;
    const inputType = isPw ? (vis ? "text" : "password") : f.type;
    return (
      <div style={{ marginBottom:12 }}>
        <label style={{ display:"block", fontSize:11, fontWeight:700, color:"var(--text2)", marginBottom:6, letterSpacing:".04em", textTransform:"uppercase" }}>{f.label}</label>
        <div style={{ position:"relative" }}>
          <span style={{ position:"absolute", left:12, top:"50%", transform:"translateY(-50%)", fontSize:14, color:"var(--text3)", pointerEvents:"none" }}>{f.icon}</span>
          <input type={inputType} placeholder={f.placeholder} style={{ paddingLeft:36, paddingRight: isPw ? 40 : 12 }} />
          {isPw && (
            <button onClick={() => setVis(v=>!v)} style={{ position:"absolute", right:11, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", fontSize:14, color:"var(--text3)", padding:0 }}>
              {vis ? "🙈" : "👁"}
            </button>
          )}
        </div>
      </div>
    );
  };

  /* ── REGISTER SUCCESS STATE ── */
  if (regDone) return (
    <div style={{ minHeight:"100vh", background:"var(--bg)", display:"flex", alignItems:"center", justifyContent:"center", padding:"24px" }}>
      <div style={{ position:"fixed", top:0, left:0, right:0, height:4, background:"linear-gradient(90deg,#4f46e5,#0d9488,#d97706,#e11d48)", zIndex:99 }} />
      <div style={{ background:"#fff", borderRadius:22, padding:"52px 48px", maxWidth:480, width:"100%", textAlign:"center", boxShadow:"0 24px 80px rgba(0,0,0,.12)", animation:"fadeUp .4s ease" }}>
        <div style={{ width:72, height:72, borderRadius:"50%", background:"#ecfdf5", border:"2px solid #a7f3d0", display:"flex", alignItems:"center", justifyContent:"center", fontSize:32, margin:"0 auto 22px" }}>✓</div>
        <h2 style={{ fontSize:24, fontWeight:800, color:"var(--text)", marginBottom:10 }}>Registration Submitted!</h2>
        <p style={{ fontSize:14, color:"var(--text2)", lineHeight:1.65, marginBottom:28 }}>
          Your <strong style={{ color:cur.accent }}>{cur.label}</strong> account has been submitted for review.
          {role === "admin" || role === "faculty"
            ? " An existing admin will verify and approve your account within 24 hours."
            : role === "company"
            ? " Our team will review your company details and approve your account shortly."
            : " Once approved by your college admin, you can sign in and start browsing internships."}
        </p>
        <div style={{ padding:"14px 18px", background:cur.iconBg, borderRadius:12, border:`1.5px solid ${cur.accent}22`, marginBottom:28, textAlign:"left" }}>
          <div style={{ fontSize:11.5, fontWeight:700, color:cur.accent, letterSpacing:".04em", textTransform:"uppercase", marginBottom:6 }}>What happens next?</div>
          {["Your details are reviewed by the admin","You'll receive an email once approved","Sign in and complete your profile"].map((s,i)=>(
            <div key={i} style={{ display:"flex", gap:9, alignItems:"center", marginTop:8 }}>
              <div style={{ width:18, height:18, borderRadius:"50%", background:cur.accent+"22", color:cur.accent, display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, fontWeight:700, flexShrink:0 }}>{i+1}</div>
              <span style={{ fontSize:12.5, color:"var(--text2)" }}>{s}</span>
            </div>
          ))}
        </div>
        <button className="btn" style={{ width:"100%", justifyContent:"center", padding:"12px", fontSize:14, fontWeight:700, background:cur.accent, color:"#fff", borderRadius:11 }}
          onClick={() => { setRegDone(false); setTab("login"); setRegStep(1); }}>
          Back to Sign In →
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight:"100vh", background:"var(--bg)", display:"flex", alignItems:"center", justifyContent:"center", padding:"24px" }}>
      <div style={{ position:"fixed", top:0, left:0, right:0, height:4, background:"linear-gradient(90deg,#4f46e5,#0d9488,#d97706,#e11d48)", zIndex:99 }} />

      <div style={{ display:"flex", width:"100%", maxWidth:980, minHeight:600, borderRadius:22, overflow:"hidden", boxShadow:"0 24px 80px rgba(0,0,0,.14)", animation:"fadeUp .4s ease" }}>

        {/* ── LEFT HERO PANEL ── */}
        <div style={{ flex:"0 0 41%", background:heroGrad[role], position:"relative", display:"flex", flexDirection:"column", justifyContent:"center", padding:"48px 40px", overflow:"hidden", transition:"background .5s ease" }}>
          <Shape size={110} top={-28}  left={-28}  radius={28} />
          <Shape size={72}  top={55}   left={225}  />
          <Shape size={140} top={350}  left={-40}  radius={36} />
          <Shape size={64}  top={470}  left={260}  radius={16} />
          <Shape size={90}  top={200}  left={155}  radius={22} />

          {/* Brand */}
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:40, position:"relative" }}>
            <div style={{ width:44, height:44, borderRadius:12, background:"rgba(255,255,255,.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, border:"1.5px solid rgba(255,255,255,.3)" }}>
              <span style={{ color:"#fff" }}>◈</span>
            </div>
            <div>
              <div style={{ fontSize:18, fontWeight:800, color:"#fff", letterSpacing:"-.02em" }}>InternTrack</div>
              <div style={{ fontSize:10, color:"rgba(255,255,255,.6)", fontWeight:600, letterSpacing:".07em", textTransform:"uppercase" }}>Skill Tracking Platform</div>
            </div>
          </div>

          {/* Dynamic copy */}
          <div style={{ position:"relative" }}>
            <div style={{ fontSize:10.5, fontWeight:700, color:"rgba(255,255,255,.6)", letterSpacing:".09em", textTransform:"uppercase", marginBottom:10 }}>{hc.eyebrow}</div>
            <h2 style={{ fontSize:"clamp(24px,2.8vw,32px)", fontWeight:800, color:"#fff", lineHeight:1.22, letterSpacing:"-.02em", marginBottom:14, whiteSpace:"pre-line" }}>
              {hc.heading}
            </h2>
            <p style={{ fontSize:13, color:"rgba(255,255,255,.75)", lineHeight:1.65, marginBottom:28, maxWidth:270 }}>{hc.sub}</p>

            {/* Feature bullets */}
            <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
              {roleFeatures[role].map((f,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <div style={{ width:20, height:20, borderRadius:"50%", background:"rgba(255,255,255,.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:10, color:"#fff", fontWeight:700 }}>✓</div>
                  <span style={{ fontSize:12.5, color:"rgba(255,255,255,.82)", fontWeight:500 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Role badge */}
          <div style={{ position:"absolute", bottom:26, left:40, display:"flex", alignItems:"center", gap:8, padding:"7px 14px", background:"rgba(255,255,255,.15)", borderRadius:30, backdropFilter:"blur(6px)", border:"1px solid rgba(255,255,255,.22)" }}>
            <span style={{ fontSize:13, color:"#fff" }}>{cur.icon}</span>
            <span style={{ fontSize:12, fontWeight:600, color:"rgba(255,255,255,.9)" }}>{cur.label} Portal</span>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div style={{ flex:1, background:"#fff", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"40px 44px", overflowY:"auto" }}>

          {/* College chip + change */}
          {college && (
            <div style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 14px", background:college.bg||"#eef2ff", border:`1.5px solid ${college.color||"#c7d2fe"}33`, borderRadius:30, marginBottom:18, flexShrink:0 }}>
              <div style={{ width:26, height:26, borderRadius:8, background:college.color||"#4f46e5", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontSize:9.5, fontWeight:800, color:"#fff" }}>{college.acronym}</span>
              </div>
              <span style={{ fontSize:12.5, fontWeight:700, color:college.color||"#4f46e5", maxWidth:220, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{college.name}</span>
              <span style={{ fontSize:11, color:"#94a3b8", fontFamily:"'JetBrains Mono',monospace" }}>· {college.city}</span>
              <button onClick={onChangeCollege} style={{ marginLeft:4, fontSize:11, fontWeight:700, color:"#94a3b8", background:"none", border:"none", cursor:"pointer", textDecoration:"underline", fontFamily:"'Plus Jakarta Sans',sans-serif", padding:0 }}>Change</button>
            </div>
          )}

          {/* Icon */}
          <div style={{ width:50, height:50, borderRadius:14, background:cur.accent+"18", border:`1.5px solid ${cur.accent}33`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, color:cur.accent, marginBottom:18, flexShrink:0 }}>
            {cur.icon}
          </div>

          {/* Tab switcher */}
          <div style={{ display:"flex", background:"var(--surface2)", borderRadius:12, padding:4, marginBottom:24, border:"1.5px solid var(--border)", gap:2 }}>
            {[["login","Sign In"],["register","Create Account"]].map(([t,label])=>(
              <button key={t} onClick={()=>{setTab(t);setRegStep(1);}}
                style={{ padding:"8px 20px", borderRadius:9, border:"none", cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, fontWeight:700, transition:"all .18s",
                  background: tab===t ? cur.accent : "transparent",
                  color: tab===t ? "#fff" : "var(--text2)",
                  boxShadow: tab===t ? `0 2px 10px ${cur.accent}44` : "none" }}>
                {label}
              </button>
            ))}
          </div>

          {/* ── LOGIN FORM ── */}
          {tab === "login" && (
            <div style={{ width:"100%", maxWidth:360, animation:"fadeUp .25s ease" }}>
              <div style={{ textAlign:"center", marginBottom:24 }}>
                <h1 style={{ fontSize:22, fontWeight:800, color:"var(--text)", letterSpacing:"-.02em", marginBottom:5 }}>Welcome back!</h1>
                <p style={{ fontSize:13, color:"var(--text2)" }}>
                  {college
                    ? <>Sign in to <strong style={{ color:"var(--text)" }}>{college.name}</strong> portal</>
                    : <>Sign in to your <strong style={{ color:"var(--text)" }}>InternTrack</strong> account</>}
                </p>
              </div>

              {/* User ID */}
              <div style={{ marginBottom:14 }}>
                <label style={{ display:"block", fontSize:11, fontWeight:700, color:"var(--text2)", marginBottom:6, letterSpacing:".04em", textTransform:"uppercase" }}>User ID / Roll Number</label>
                <div style={{ position:"relative" }}>
                  <span style={{ position:"absolute", left:12, top:"50%", transform:"translateY(-50%)", fontSize:14, color:"var(--text3)" }}>◈</span>
                  <input placeholder="Enter your user ID" style={{ paddingLeft:36 }} />
                </div>
              </div>

              {/* Password */}
              <div style={{ marginBottom:12 }}>
                <label style={{ display:"block", fontSize:11, fontWeight:700, color:"var(--text2)", marginBottom:6, letterSpacing:".04em", textTransform:"uppercase" }}>Password</label>
                <div style={{ position:"relative" }}>
                  <span style={{ position:"absolute", left:12, top:"50%", transform:"translateY(-50%)", fontSize:14, color:"var(--text3)" }}>🔒</span>
                  <input type={showPwd?"text":"password"} placeholder="Enter your password" style={{ paddingLeft:36, paddingRight:40 }} />
                  <button onClick={()=>setShowPwd(s=>!s)} style={{ position:"absolute", right:11, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer", fontSize:14, color:"var(--text3)", padding:0 }}>
                    {showPwd?"🙈":"👁"}
                  </button>
                </div>
              </div>

              {/* Account type */}
              <div style={{ marginBottom:8 }}>
                <label style={{ display:"block", fontSize:11, fontWeight:700, color:"var(--text2)", marginBottom:6, letterSpacing:".04em", textTransform:"uppercase" }}>Account Type</label>
                <select value={role} onChange={e=>setRole(e.target.value)} style={{ background:"var(--surface2)", fontWeight:500 }}>
                  <option value="student">Student</option>
                  <option value="admin">Administrator</option>
                  <option value="company">Company / Recruiter</option>
                  <option value="faculty">Faculty / Placement Officer</option>
                </select>
              </div>

              <div style={{ textAlign:"right", marginBottom:20 }}>
                <span style={{ fontSize:12.5, color:cur.accent, fontWeight:600, cursor:"pointer" }}>Forgot password?</span>
              </div>

              <button className="btn" style={{ width:"100%", justifyContent:"center", padding:"12px", fontSize:14, fontWeight:700, background:cur.accent, color:"#fff", borderRadius:11, boxShadow:`0 4px 18px ${cur.accent}44`, letterSpacing:".02em" }}
                onClick={()=>onSelect(role)}>
                Sign In →
              </button>

              <div style={{ textAlign:"center", marginTop:20, fontSize:12.5, color:"var(--text3)" }}>
                Don't have an account?{" "}
                <span style={{ color:cur.accent, fontWeight:700, cursor:"pointer" }} onClick={()=>setTab("register")}>Create one →</span>
              </div>
              <div style={{ textAlign:"center", marginTop:10, fontSize:12.5, color:"var(--text3)" }}>
                Need help?{" "}<span style={{ color:cur.accent, fontWeight:600, cursor:"pointer" }}>Contact Support</span>
              </div>
            </div>
          )}

          {/* ── REGISTER FORM ── */}
          {tab === "register" && (
            <div style={{ width:"100%", maxWidth:380, animation:"fadeUp .25s ease" }}>
              {/* Title + progress */}
              <div style={{ textAlign:"center", marginBottom:20 }}>
                <h1 style={{ fontSize:22, fontWeight:800, color:"var(--text)", letterSpacing:"-.02em", marginBottom:5 }}>Create Account</h1>
                <p style={{ fontSize:13, color:"var(--text2)" }}>Step {regStep} of 2 — {regStep===1?"Basic Details":"Profile Information"}</p>
              </div>

              {/* Step progress bar */}
              <div style={{ display:"flex", gap:6, marginBottom:22 }}>
                {[1,2].map(s=>(
                  <div key={s} style={{ flex:1, height:4, borderRadius:4, background: s<=regStep ? cur.accent : "var(--border)", transition:"background .3s" }} />
                ))}
              </div>

              {/* Account type selector (shown on step 1) */}
              {regStep===1&&(
                <div style={{ marginBottom:14 }}>
                  <label style={{ display:"block", fontSize:11, fontWeight:700, color:"var(--text2)", marginBottom:6, letterSpacing:".04em", textTransform:"uppercase" }}>Registering As</label>
                  <select value={role} onChange={e=>setRole(e.target.value)} style={{ background:"var(--surface2)", fontWeight:600 }}>
                    <option value="student">Student</option>
                    <option value="admin">Administrator</option>
                    <option value="company">Company / Recruiter</option>
                    <option value="faculty">Faculty / Placement Officer</option>
                  </select>
                </div>
              )}

              {/* Dynamic fields */}
              {(regStep===1 ? fields.step1 : fields.step2).map((f,i)=>(
                <LabeledInput key={i} f={f} />
              ))}

              {/* Terms on step 2 */}
              {regStep===2&&(
                <div style={{ display:"flex", alignItems:"flex-start", gap:9, margin:"10px 0 16px", padding:"11px 13px", background:"var(--surface2)", borderRadius:9, border:"1.5px solid var(--border)" }}>
                  <input type="checkbox" style={{ width:15, height:15, marginTop:2, flexShrink:0, accentColor:cur.accent }} />
                  <span style={{ fontSize:12, color:"var(--text2)", lineHeight:1.5 }}>
                    I agree to the <span style={{ color:cur.accent, fontWeight:600, cursor:"pointer" }}>Terms of Service</span> and <span style={{ color:cur.accent, fontWeight:600, cursor:"pointer" }}>Privacy Policy</span>. I understand my account is subject to admin approval.
                  </span>
                </div>
              )}

              {/* Nav buttons */}
              <div style={{ display:"flex", gap:10, marginTop:4 }}>
                {regStep===2&&(
                  <button className="btn btn-ghost" style={{ flex:1, justifyContent:"center", padding:"11px" }} onClick={()=>setRegStep(1)}>
                    ← Back
                  </button>
                )}
                <button className="btn" style={{ flex:2, justifyContent:"center", padding:"11px", fontSize:13.5, fontWeight:700, background:cur.accent, color:"#fff", borderRadius:11, boxShadow:`0 4px 14px ${cur.accent}33` }}
                  onClick={()=>{ if(regStep===1) setRegStep(2); else setRegDone(true); }}>
                  {regStep===1 ? "Continue →" : "Submit Registration →"}
                </button>
              </div>

              <div style={{ textAlign:"center", marginTop:16, fontSize:12.5, color:"var(--text3)" }}>
                Already have an account?{" "}
                <span style={{ color:cur.accent, fontWeight:700, cursor:"pointer" }} onClick={()=>setTab("login")}>Sign in →</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════
   ADMIN PORTAL
═══════════════════════════════ */
function AdminPortal({ data, setData, onExit }) {
  const [page, setPage] = useState("dashboard");
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState(null);

  const toast_ = (m) => { setToast(m); setTimeout(() => setToast(null), 3000); };
  const approveStudent = (id) => { setData(d => ({ ...d, students: d.students.map(s => s.id === id ? { ...s, approved: true } : s) })); toast_("Student approved!"); };
  const approveCompany = (id) => { setData(d => ({ ...d, companies: d.companies.map(c => c.id === id ? { ...c, approved: true } : c) })); toast_("Company approved!"); };
  const verifyCert = (id) => { setData(d => ({ ...d, certs: d.certs.map(c => c.id === id ? { ...c, verified: true } : c) })); toast_("Certificate verified!"); };

  const nav = [
    { id:"dashboard",label:"Dashboard" }, { id:"students",label:"Students" },
    { id:"companies",label:"Companies" }, { id:"internships",label:"Internships" },
    { id:"certs",label:"Certificates" }, { id:"reports",label:"Reports" },
  ];
  const titles = { dashboard:"Dashboard Overview", students:"Manage Students", companies:"Manage Companies", internships:"Internship Listings", certs:"Certificate Verification", reports:"Reports & Analytics" };
  const adminNotifs = data.notifications.filter(n => n.to === "admin");

  return (
    <div style={{ display:"flex", minHeight:"100vh" }}>
      <Sidebar items={nav} active={page} onNav={setPage} portalLabel="Admin" accentColor="#7c3aed" userName="Ravi Kumar" onLogout={onExit} />
      <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden", background:"var(--bg)" }}>
        <TopBar title={titles[page]} notifCount={adminNotifs.length} notifKey="admin" notifs={data.notifications} />
        <div style={{ flex:1, overflowY:"auto", padding:"26px 28px" }}>

          {page === "dashboard" && (
            <div className="fade-up">
              <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14, marginBottom:22 }}>
                <StatCard label="Total Students" value={data.students.length} sub={`${data.students.filter(s=>s.approved).length} approved`} accent="#7c3aed" />
                <StatCard label="Companies" value={data.companies.length} sub={`${data.companies.filter(c=>c.approved).length} active`} accent="#0d9488" />
                <StatCard label="Internship Listings" value={data.internships.length} sub="Across all companies" accent="#2563eb" />
                <StatCard label="Pending Actions" value={data.students.filter(s=>!s.approved).length+data.companies.filter(c=>!c.approved).length+data.certs.filter(c=>!c.verified).length} sub="Require your attention" accent="#e11d48" />
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                {/* Pending */}
                <div className="card" style={{ padding:"22px" }}>
                  <div className="section-title">Pending Approvals</div>
                  {[...data.students.filter(s=>!s.approved).map(s=>({...s,_t:"student"})),...data.companies.filter(c=>!c.approved).map(c=>({...c,_t:"company"}))].map(item=>(
                    <div key={`${item._t}-${item.id}`} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"11px 13px", background:"var(--surface2)", borderRadius:10, marginBottom:8, border:"1.5px solid var(--border)" }}>
                      <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                        <Avatar name={item.name} size={32} bg={item._t==="student"?"#eff6ff":"#f0fdfa"} color={item._t==="student"?"#2563eb":"#0d9488"} />
                        <div>
                          <div style={{ fontSize:13, fontWeight:600 }}>{item.name}</div>
                          <div style={{ fontSize:11, color:"var(--text3)" }}>{item._t==="student"?`${item.dept} · Student`:`${item.industry} · Company`}</div>
                        </div>
                      </div>
                      <button className="btn btn-primary" style={{ fontSize:11.5, padding:"6px 14px" }} onClick={()=>item._t==="student"?approveStudent(item.id):approveCompany(item.id)}>Approve</button>
                    </div>
                  ))}
                  {data.students.filter(s=>!s.approved).length===0 && data.companies.filter(c=>!c.approved).length===0 && (
                    <div style={{ textAlign:"center", padding:"22px", color:"var(--text3)", fontSize:13 }}>No pending approvals ✓</div>
                  )}
                </div>
                {/* Skill distribution */}
                <div className="card" style={{ padding:"22px" }}>
                  <div className="section-title">Skill Distribution</div>
                  {(()=>{
                    const counts={};
                    data.students.flatMap(s=>s.skills).forEach(sk=>{counts[sk]=(counts[sk]||0)+1;});
                    const COLORS=["#4f46e5","#0d9488","#d97706","#2563eb","#7c3aed","#e11d48","#059669"];
                    return Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,7).map(([sk,cnt],i)=>(
                      <div key={sk} style={{ marginBottom:11 }}>
                        <div style={{ display:"flex", justifyContent:"space-between", fontSize:12.5, marginBottom:5, color:"var(--text2)" }}><span>{sk}</span><span className="mono" style={{ fontSize:11 }}>{cnt}</span></div>
                        <Bar value={(cnt/data.students.length)*100} color={COLORS[i%COLORS.length]} h={6} />
                      </div>
                    ));
                  })()}
                </div>
                {/* Applications */}
                <div className="card" style={{ padding:"22px" }}>
                  <div className="section-title">Application Activity</div>
                  {data.internships.map(i=>{
                    const co=data.companies.find(c=>c.id===i.company);
                    return (
                      <div key={i.id} style={{ marginBottom:14 }}>
                        <div style={{ display:"flex", justifyContent:"space-between", fontSize:12.5, marginBottom:5 }}>
                          <span style={{ fontWeight:500 }}>{i.role}</span>
                          <span style={{ color:"var(--text3)" }} className="mono">{i.applications.length}/{i.openings}</span>
                        </div>
                        <Bar value={(i.applications.length/i.openings)*100} color="#2563eb" h={7} />
                      </div>
                    );
                  })}
                </div>
                {/* Dept */}
                <div className="card" style={{ padding:"22px" }}>
                  <div className="section-title">Dept — Internship Rate</div>
                  {["Computer Science","Electronics","Mechanical","MBA"].map((dept,i)=>{
                    const total=data.students.filter(s=>s.dept===dept).length;
                    const wi=data.students.filter(s=>s.dept===dept&&s.internships.length>0).length;
                    if(!total) return null;
                    const pct=Math.round((wi/total)*100);
                    const C=["#4f46e5","#0d9488","#d97706","#e11d48"];
                    return (
                      <div key={dept} style={{ marginBottom:11 }}>
                        <div style={{ display:"flex", justifyContent:"space-between", fontSize:12.5, marginBottom:5, color:"var(--text2)" }}>
                          <span>{dept}</span><span className="mono" style={{ fontSize:11 }}>{pct}% ({wi}/{total})</span>
                        </div>
                        <Bar value={pct} color={C[i]} h={6} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {page === "students" && (
            <div className="fade-up">
              <div className="card" style={{ overflow:"hidden" }}>
                <div style={{ padding:"14px 20px", borderBottom:"1.5px solid var(--border)", display:"flex", justifyContent:"space-between", alignItems:"center", background:"var(--surface2)" }}>
                  <span style={{ fontSize:13, color:"var(--text2)" }}>{data.students.length} students registered</span>
                  <button className="btn btn-primary" onClick={()=>setModal("addStudent")}>+ Add Student</button>
                </div>
                <table>
                  <thead><tr><th>Student</th><th>Department</th><th>CGPA</th><th>Skills</th><th>Internships</th><th>Certs</th><th>Status</th><th>Action</th></tr></thead>
                  <tbody>
                    {data.students.map(s=>(
                      <tr key={s.id}>
                        <td><div style={{ display:"flex",gap:10,alignItems:"center" }}><Avatar name={s.name} size={30} bg="#eff6ff" color="#2563eb" /><div><div>{s.name}</div><div style={{ fontSize:11,color:"var(--text3)" }}>{s.email}</div></div></div></td>
                        <td><Tag text={s.dept.split(" ")[0]} v="indigo" /></td>
                        <td><span className="mono" style={{ color:s.cgpa>=8.5?"#059669":s.cgpa>=7?"#d97706":"#e11d48", fontWeight:600 }}>{s.cgpa}</span></td>
                        <td><div style={{ display:"flex",gap:4,flexWrap:"wrap" }}>{s.skills.slice(0,2).map(sk=><Tag key={sk} text={sk} v="slate" />)}{s.skills.length>2&&<Tag text={`+${s.skills.length-2}`} v="slate" />}</div></td>
                        <td><span className="mono">{s.internships.length}</span></td>
                        <td><span className="mono">{data.certs.filter(c=>c.studentId===s.id).length}</span></td>
                        <td><Tag text={s.approved?"Approved":"Pending"} v={s.approved?"green":"amber"} /></td>
                        <td>{!s.approved&&<button className="btn btn-primary" style={{ fontSize:11 }} onClick={()=>approveStudent(s.id)}>Approve</button>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {page === "companies" && (
            <div className="fade-up">
              <div className="card" style={{ overflow:"hidden" }}>
                <div style={{ padding:"14px 20px", borderBottom:"1.5px solid var(--border)", display:"flex", justifyContent:"space-between", alignItems:"center", background:"var(--surface2)" }}>
                  <span style={{ fontSize:13, color:"var(--text2)" }}>{data.companies.length} companies registered</span>
                  <button className="btn btn-teal" onClick={()=>setModal("addCompany")}>+ Add Company</button>
                </div>
                <table>
                  <thead><tr><th>Company</th><th>Industry</th><th>Location</th><th>Listings</th><th>Status</th><th>Action</th></tr></thead>
                  <tbody>
                    {data.companies.map(c=>(
                      <tr key={c.id}>
                        <td><div style={{ display:"flex",gap:10,alignItems:"center" }}><Avatar name={c.name} size={30} bg="#f0fdfa" color="#0d9488" /><div><div>{c.name}</div><div style={{ fontSize:11,color:"var(--text3)" }}>{c.website}</div></div></div></td>
                        <td><Tag text={c.industry} v="teal" /></td>
                        <td>{c.location}</td>
                        <td><span className="mono">{data.internships.filter(i=>i.company===c.id).length}</span></td>
                        <td><Tag text={c.approved?"Active":"Pending"} v={c.approved?"green":"amber"} /></td>
                        <td>{!c.approved&&<button className="btn btn-primary" style={{ fontSize:11 }} onClick={()=>approveCompany(c.id)}>Approve</button>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {page === "internships" && (
            <div className="fade-up" style={{ display:"flex",flexDirection:"column",gap:12 }}>
              {data.internships.map(i=>{
                const co=data.companies.find(c=>c.id===i.company);
                return (
                  <div key={i.id} className="card" style={{ padding:"20px 24px" }}>
                    <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12 }}>
                      <div>
                        <div style={{ fontWeight:700,fontSize:15,color:"var(--text)",marginBottom:4 }}>{i.role}</div>
                        <div style={{ fontSize:12.5,color:"var(--text2)" }}>{co?.name} · {co?.location}</div>
                      </div>
                      <div style={{ textAlign:"right" }}>
                        <div style={{ fontWeight:700,color:"#059669",fontSize:14 }}>{i.stipend}</div>
                        <div style={{ fontSize:11,color:"var(--text3)",marginTop:2 }}>{i.applications.length} applications</div>
                      </div>
                    </div>
                    <div style={{ display:"flex",gap:7,flexWrap:"wrap",marginBottom:10 }}>
                      <Tag text={i.mode} v={i.mode==="Remote"?"teal":i.mode==="Onsite"?"blue":"purple"} />
                      <Tag text={i.type} v={i.type==="Paid"?"green":i.type==="Unpaid"?"rose":"amber"} />
                      <Tag text={i.duration} v="slate" />
                      <Tag text={`${i.openings} openings`} v="slate" />
                      <Tag text={`Deadline: ${i.deadline}`} v="rose" />
                    </div>
                    <div style={{ display:"flex",gap:6,flexWrap:"wrap" }}>{i.skills.map(sk=><Tag key={sk} text={sk} v="indigo" />)}</div>
                  </div>
                );
              })}
            </div>
          )}

          {page === "certs" && (
            <div className="fade-up">
              <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginBottom:20 }}>
                <StatCard label="Total Certs" value={data.certs.length} accent="#4f46e5" />
                <StatCard label="Verified" value={data.certs.filter(c=>c.verified).length} accent="#059669" />
                <StatCard label="Pending" value={data.certs.filter(c=>!c.verified).length} accent="#d97706" />
              </div>
              <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
                {data.certs.map(cert=>{
                  const student=data.students.find(s=>s.id===cert.studentId);
                  return (
                    <div key={cert.id} className="card" style={{ padding:"16px 22px",display:"flex",alignItems:"center",justifyContent:"space-between" }}>
                      <div style={{ display:"flex",gap:14,alignItems:"center" }}>
                        <div style={{ width:42,height:42,borderRadius:11,background:cert.verified?"#ecfdf5":"#fffbeb",border:`1.5px solid ${cert.verified?"#a7f3d0":"#fde68a"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20 }}>
                          {cert.verified?"🏆":"⏳"}
                        </div>
                        <div>
                          <div style={{ fontWeight:600,fontSize:14 }}>{cert.name}</div>
                          <div style={{ fontSize:12,color:"var(--text2)",marginTop:2 }}>{student?.name} · {cert.issuer} · <span className="mono">{cert.date}</span></div>
                        </div>
                      </div>
                      <div style={{ display:"flex",gap:10,alignItems:"center" }}>
                        <Tag text={cert.verified?"✓ Verified":"Pending Review"} v={cert.verified?"green":"amber"} />
                        {!cert.verified&&<button className="btn btn-teal" style={{ fontSize:11.5 }} onClick={()=>verifyCert(cert.id)}>Verify Now</button>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {page === "reports" && (
            <div className="fade-up">
              <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14 }}>
                {[
                  { title:"Internship Summary",  desc:"Overall stats, company-wise breakdown & mode distribution",   icon:"📊", accent:"#4f46e5", bg:"#eef2ff" },
                  { title:"Student Participation",desc:"Dept-wise participation & CGPA vs internship correlation",     icon:"👩‍🎓",accent:"#2563eb", bg:"#eff6ff" },
                  { title:"Skill Distribution",   desc:"Top skills across students with industry-gap analysis",         icon:"🧩", accent:"#7c3aed", bg:"#f5f3ff" },
                  { title:"Company Engagement",   desc:"Active companies, listing counts & application rates",          icon:"🏢", accent:"#0d9488", bg:"#f0fdfa" },
                  { title:"Placement Readiness",  desc:"Students with 2+ internships, cert counts & readiness score",  icon:"🎯", accent:"#d97706", bg:"#fffbeb" },
                  { title:"Certificate Audit",    desc:"Verified vs pending breakdown by student & department",         icon:"🏅", accent:"#e11d48", bg:"#fff1f2" },
                ].map(r=>(
                  <div key={r.title} className="card card-hover" style={{ padding:"22px",cursor:"pointer",transition:"all .2s" }}>
                    <div style={{ width:44,height:44,borderRadius:12,background:r.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,marginBottom:14,border:`1.5px solid ${r.accent}22` }}>{r.icon}</div>
                    <div style={{ fontWeight:700,fontSize:14,marginBottom:7 }}>{r.title}</div>
                    <div style={{ fontSize:12.5,color:"var(--text2)",lineHeight:1.55,marginBottom:16 }}>{r.desc}</div>
                    <button className="btn btn-ghost" style={{ fontSize:11.5 }}>Generate Report →</button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {modal==="addStudent"&&<Modal title="Add New Student" onClose={()=>setModal(null)}>
        {["Full Name","Email Address","Department","Graduation Year","CGPA"].map(f=><Field key={f} label={f}><input placeholder={`Enter ${f.toLowerCase()}`}/></Field>)}
        <button className="btn btn-primary" style={{ width:"100%",justifyContent:"center",padding:"11px" }} onClick={()=>{toast_("Student added!");setModal(null);}}>Add Student</button>
      </Modal>}
      {modal==="addCompany"&&<Modal title="Add New Company" onClose={()=>setModal(null)}>
        {["Company Name","Industry Type","Location","Website","Contact Email"].map(f=><Field key={f} label={f}><input placeholder={`Enter ${f.toLowerCase()}`}/></Field>)}
        <button className="btn btn-primary" style={{ width:"100%",justifyContent:"center",padding:"11px" }} onClick={()=>{toast_("Company added!");setModal(null);}}>Add Company</button>
      </Modal>}
      {toast&&<Toast msg={toast}/>}
    </div>
  );
}

/* ═══════════════════════════════
   STUDENT PORTAL
═══════════════════════════════ */
function StudentPortal({ data, setData, onExit }) {
  const [page, setPage] = useState("dashboard");
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState(null);
  const [flt, setFlt] = useState({ mode:"All", type:"All", search:"" });

  const student = data.students[0];
  const myCerts = data.certs.filter(c=>c.studentId===student.id);
  const myApps = data.internships.filter(i=>i.applications.some(a=>a.studentId===student.id));
  const toast_ = m => { setToast(m); setTimeout(()=>setToast(null),3000); };
  const [careerGoal, setCareerGoal] = useState(null);
  const [customGoal, setCustomGoal] = useState("");

  const apply = id => {
    setData(d=>({...d,internships:d.internships.map(i=>i.id===id?{...i,applications:[...i.applications,{studentId:student.id,status:"Applied",feedback:""}]}:i)}));
    toast_("Application submitted!");
  };

  const filtered = data.internships.filter(i=>{
    if(flt.mode!=="All"&&i.mode!==flt.mode) return false;
    if(flt.type!=="All"&&i.type!==flt.type) return false;
    if(flt.search&&!i.role.toLowerCase().includes(flt.search.toLowerCase())&&!data.companies.find(c=>c.id===i.company)?.name.toLowerCase().includes(flt.search.toLowerCase())) return false;
    return true;
  });

  const nav=[{id:"dashboard",label:"Dashboard"},{id:"roadmap",label:"Career Roadmap"},{id:"profile",label:"My Profile"},{id:"browse",label:"Browse Internships"},{id:"applications",label:"My Applications"},{id:"upload",label:"Certificates"},{id:"skills",label:"Skill Tracker"}];
  const titles={dashboard:"My Dashboard",roadmap:"Career Goal & Roadmap",profile:"My Profile",browse:"Browse Internships",applications:"My Applications",upload:"Certificates & Docs",skills:"Skill Tracker"};
  const studentNotifs=data.notifications.filter(n=>n.to==="student_1");

  return (
    <div style={{ display:"flex",minHeight:"100vh" }}>
      <Sidebar items={nav} active={page} onNav={setPage} portalLabel="Student" accentColor="#2563eb" userName={student.name} onLogout={onExit}/>
      <div style={{ flex:1,display:"flex",flexDirection:"column",overflow:"hidden",background:"var(--bg)" }}>
        <TopBar title={titles[page]} notifCount={studentNotifs.length} notifKey="student_1" notifs={data.notifications}/>
        <div style={{ flex:1,overflowY:"auto",padding:"26px 28px" }}>

          {page==="dashboard"&&(
            <div className="fade-up">
              {/* Hero card */}
              <div className="card" style={{ padding:"24px",marginBottom:20,background:"linear-gradient(130deg,#1e40af 0%,#3b82f6 60%,#60a5fa 100%)",border:"none",borderRadius:16,color:"#fff" }}>
                <div style={{ display:"flex",alignItems:"center",gap:16,marginBottom:14 }}>
                  <div style={{ width:54,height:54,borderRadius:14,background:"rgba(255,255,255,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:22 }}>{student.name.split(" ").map(w=>w[0]).join("")}</div>
                  <div>
                    <div style={{ fontWeight:800,fontSize:20 }}>{student.name}</div>
                    <div style={{ fontSize:13,opacity:.85,marginTop:2 }}>{student.dept} · Class of {student.year} · CGPA <strong>{student.cgpa}</strong></div>
                  </div>
                </div>
                <div style={{ display:"flex",gap:7,flexWrap:"wrap" }}>
                  {student.skills.map(sk=><span key={sk} style={{ background:"rgba(255,255,255,.2)",color:"#fff",padding:"3px 10px",borderRadius:20,fontSize:11.5,fontWeight:600,backdropFilter:"blur(4px)" }}>{sk}</span>)}
                </div>
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:20 }}>
                <StatCard label="Applications" value={myApps.length} accent="#2563eb"/>
                <StatCard label="Shortlisted" value={myApps.filter(i=>i.applications.find(a=>a.studentId===student.id)?.status==="Shortlisted").length} accent="#059669"/>
                <StatCard label="Skills Listed" value={student.skills.length} accent="#7c3aed"/>
                <StatCard label="Certificates" value={myCerts.length} accent="#d97706"/>
              </div>

              {/* Career Goal Progress Card */}
              {careerGoal ? (
                <GoalDashboardCard goal={careerGoal} student={student} data={data} onApply={apply} onViewRoadmap={()=>setPage("roadmap")} />
              ) : (
                <div className="card" style={{ padding:"22px 26px",marginBottom:20,background:"linear-gradient(135deg,#f5f3ff,#eef2ff)",border:"1.5px solid #c7d2fe",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,flexWrap:"wrap" }}>
                  <div style={{ display:"flex",gap:14,alignItems:"center" }}>
                    <div style={{ width:48,height:48,borderRadius:14,background:"linear-gradient(135deg,#4f46e5,#7c3aed)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22 }}>🎯</div>
                    <div>
                      <div style={{ fontWeight:700,fontSize:15,color:"var(--text)",marginBottom:3 }}>Set Your Career Goal</div>
                      <div style={{ fontSize:12.5,color:"var(--text2)" }}>Get a personalised AI roadmap, skill gap analysis &amp; internship recommendations.</div>
                    </div>
                  </div>
                  <button className="btn btn-primary" style={{ flexShrink:0,padding:"10px 20px",fontSize:13 }} onClick={()=>setPage("roadmap")}>Set Career Goal →</button>
                </div>
              )}

              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
                <div className="card" style={{ padding:"22px" }}>
                  <div className="section-title">Application Status</div>
                  {myApps.length===0?<div style={{ textAlign:"center",padding:"22px",color:"var(--text3)",fontSize:13 }}>No applications yet. Browse to apply!</div>
                  :myApps.map(i=>{
                    const app=i.applications.find(a=>a.studentId===student.id);
                    const co=data.companies.find(c=>c.id===i.company);
                    const SV={Applied:"amber",Shortlisted:"teal",Selected:"green",Rejected:"rose"};
                    return(
                      <div key={i.id} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"11px 0",borderBottom:"1px solid var(--border)" }}>
                        <div><div style={{ fontWeight:600,fontSize:13 }}>{i.role}</div><div style={{ fontSize:11,color:"var(--text3)",marginTop:1 }}>{co?.name}</div></div>
                        <Tag text={app.status} v={SV[app.status]||"slate"}/>
                      </div>
                    );
                  })}
                </div>
                <div className="card" style={{ padding:"22px" }}>
                  <div className="section-title">Internship Progress</div>
                  {student.internships.length===0?<div style={{ textAlign:"center",padding:"22px",color:"var(--text3)",fontSize:13 }}>No active internships</div>
                  :student.internships.map(id=>{
                    const i=data.internships.find(x=>x.id===id);
                    const co=data.companies.find(c=>c.id===i?.company);
                    return i?(
                      <div key={id} style={{ marginBottom:16 }}>
                        <div style={{ display:"flex",justifyContent:"space-between",fontSize:12.5,marginBottom:6 }}>
                          <span style={{ fontWeight:500 }}>{i.role}</span>
                          <span className="mono" style={{ color:"#059669",fontSize:12 }}>{student.progress}%</span>
                        </div>
                        <Bar value={student.progress} color="#059669" h={9}/>
                        <div style={{ fontSize:11,color:"var(--text3)",marginTop:4 }}>{co?.name} · {i.duration}</div>
                      </div>
                    ):null;
                  })}
                </div>
              </div>
            </div>
          )}

          {page==="roadmap"&&(
            <CareerRoadmapPage
              student={student}
              data={data}
              careerGoal={careerGoal}
              setCareerGoal={setCareerGoal}
              customGoal={customGoal}
              setCustomGoal={setCustomGoal}
              onApply={apply}
              toast_={toast_}
            />
          )}

          {page==="profile"&&(
            <div className="fade-up" style={{ maxWidth:580 }}>
              <div className="card" style={{ padding:"24px",marginBottom:16 }}>
                <div className="section-title">Personal Information</div>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
                  {[["Full Name",student.name],["Email",student.email],["Department",student.dept],["Graduation Year",student.year],["CGPA",student.cgpa]].map(([l,v])=>(
                    <Field key={l} label={l}><input defaultValue={v}/></Field>
                  ))}
                </div>
                <button className="btn btn-primary" onClick={()=>toast_("Profile updated!")}>Save Changes</button>
              </div>
              <div className="card" style={{ padding:"24px",marginBottom:16 }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14 }}>
                  <div className="section-title" style={{ marginBottom:0 }}>Technical Skills</div>
                  <button className="btn btn-ghost" style={{ fontSize:11.5 }} onClick={()=>setModal("addSkill")}>+ Add Skill</button>
                </div>
                <div style={{ display:"flex",flexWrap:"wrap",gap:8 }}>
                  {student.skills.map(sk=>(
                    <div key={sk} style={{ display:"flex",alignItems:"center",gap:6,padding:"6px 13px",background:"#eff6ff",border:"1.5px solid #bfdbfe",borderRadius:20,fontSize:12.5,fontWeight:600,color:"#1d4ed8" }}>
                      {sk}<span style={{ cursor:"pointer",color:"#93c5fd",fontSize:11 }}>✕</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card" style={{ padding:"24px" }}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12 }}>
                  <div className="section-title" style={{ marginBottom:0 }}>Resume</div>
                  <button className="btn btn-ghost" style={{ fontSize:11.5 }}>⬆ Upload</button>
                </div>
                {student.resume?(
                  <div style={{ display:"flex",alignItems:"center",gap:12,padding:"13px 16px",background:"#f8fafc",borderRadius:10,border:"1.5px solid var(--border)" }}>
                    <span style={{ fontSize:22 }}>📄</span>
                    <div><div style={{ fontWeight:600,fontSize:13 }}>arjun_resume_2025.pdf</div><div style={{ fontSize:11,color:"var(--text3)" }}>Uploaded Jan 12, 2025</div></div>
                    <button className="btn btn-ghost" style={{ marginLeft:"auto",fontSize:11 }}>View</button>
                  </div>
                ):<div style={{ padding:"22px",border:"2px dashed var(--border2)",borderRadius:10,textAlign:"center",color:"var(--text3)",fontSize:13 }}>No resume uploaded yet</div>}
              </div>
            </div>
          )}

          {page==="browse"&&(
            <div className="fade-up">
              <div className="card" style={{ padding:"14px 18px",marginBottom:16,display:"flex",gap:12,flexWrap:"wrap",alignItems:"center" }}>
                <input style={{ flex:1,minWidth:180 }} placeholder="🔍  Search by role or company..." value={flt.search} onChange={e=>setFlt(f=>({...f,search:e.target.value}))}/>
                {[["mode",["All","Remote","Onsite","Hybrid"]],["type",["All","Paid","Unpaid","Performance"]]].map(([key,opts])=>(
                  <select key={key} style={{ width:130 }} value={flt[key]} onChange={e=>setFlt(f=>({...f,[key]:e.target.value}))}>
                    {opts.map(o=><option key={o}>{o}</option>)}
                  </select>
                ))}
                <span style={{ fontSize:12,color:"var(--text3)",whiteSpace:"nowrap" }}>{filtered.length} results</span>
              </div>
              <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
                {filtered.map(i=>{
                  const co=data.companies.find(c=>c.id===i.company);
                  const applied=i.applications.some(a=>a.studentId===student.id);
                  return(
                    <div key={i.id} className="card card-hover" style={{ padding:"20px 24px" }}>
                      <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14 }}>
                        <div style={{ display:"flex",gap:14,alignItems:"center" }}>
                          <Avatar name={co?.name||"?"} size={42} bg="#f0fdfa" color="#0d9488"/>
                          <div>
                            <div style={{ fontWeight:700,fontSize:15 }}>{i.role}</div>
                            <div style={{ fontSize:12.5,color:"var(--text2)",marginTop:2 }}>{co?.name} · {co?.location}</div>
                          </div>
                        </div>
                        <div style={{ textAlign:"right" }}>
                          <div style={{ fontWeight:700,color:"#059669",fontSize:14 }}>{i.stipend}</div>
                          <div style={{ fontSize:11,color:"var(--text3)",marginTop:2 }}>{i.openings} openings</div>
                        </div>
                      </div>
                      <div style={{ display:"flex",gap:7,flexWrap:"wrap",marginBottom:12 }}>
                        <Tag text={i.mode} v={i.mode==="Remote"?"teal":i.mode==="Onsite"?"blue":"purple"}/>
                        <Tag text={i.type} v={i.type==="Paid"?"green":i.type==="Unpaid"?"rose":"amber"}/>
                        <Tag text={i.duration} v="slate"/>
                        <Tag text={`Deadline: ${i.deadline}`} v="rose"/>
                      </div>
                      <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                        <div style={{ display:"flex",gap:6,flexWrap:"wrap" }}>{i.skills.map(sk=><Tag key={sk} text={sk} v="indigo"/>)}</div>
                        <button className={`btn ${applied?"btn-ghost":"btn-primary"}`} style={{ marginLeft:12,flexShrink:0 }} onClick={()=>!applied&&apply(i.id)} disabled={applied}>
                          {applied?"✓ Applied":"Apply Now →"}
                        </button>
                      </div>
                    </div>
                  );
                })}
                {filtered.length===0&&<div style={{ textAlign:"center",padding:"40px",color:"var(--text3)" }}>No internships match the current filters.</div>}
              </div>
            </div>
          )}

          {page==="applications"&&(
            <div className="fade-up" style={{ display:"flex",flexDirection:"column",gap:12 }}>
              {myApps.length===0?(
                <div style={{ textAlign:"center",padding:"60px 20px" }}>
                  <div style={{ fontSize:36,marginBottom:12 }}>📭</div>
                  <div style={{ color:"var(--text2)" }}>No applications yet. <span style={{ color:"#2563eb",cursor:"pointer",fontWeight:600 }} onClick={()=>setPage("browse")}>Browse internships →</span></div>
                </div>
              ):myApps.map(i=>{
                const app=i.applications.find(a=>a.studentId===student.id);
                const co=data.companies.find(c=>c.id===i.company);
                const SV={Applied:"amber",Shortlisted:"teal",Selected:"green",Rejected:"rose"};
                return(
                  <div key={i.id} className="card" style={{ padding:"20px 24px" }}>
                    <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12 }}>
                      <div style={{ display:"flex",gap:14 }}>
                        <Avatar name={co?.name||"?"} size={42} bg="#f0fdfa" color="#0d9488"/>
                        <div>
                          <div style={{ fontWeight:700,fontSize:15 }}>{i.role}</div>
                          <div style={{ fontSize:12.5,color:"var(--text2)",marginTop:2 }}>{co?.name} · {i.mode} · {i.duration}</div>
                        </div>
                      </div>
                      <Tag text={app.status} v={SV[app.status]||"slate"}/>
                    </div>
                    {app.feedback&&<div style={{ padding:"10px 14px",background:"#ecfdf5",border:"1.5px solid #a7f3d0",borderRadius:9,fontSize:12.5,color:"#065f46",marginBottom:12 }}>💬 <strong>Recruiter:</strong> {app.feedback}</div>}
                    <div style={{ display:"flex",gap:8 }}>
                      <button className="btn btn-ghost" style={{ fontSize:11.5 }} onClick={()=>setModal({type:"progress",i})}>Update Progress</button>
                      <button className="btn btn-ghost" style={{ fontSize:11.5 }}>Upload Report</button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {page==="upload"&&(
            <div className="fade-up">
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16 }}>
                <span style={{ fontSize:13,color:"var(--text2)" }}>{myCerts.length} certificates</span>
                <button className="btn btn-primary" onClick={()=>setModal("uploadCert")}>⬆ Upload Certificate</button>
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12 }}>
                {myCerts.map(cert=>(
                  <div key={cert.id} className="card" style={{ padding:"20px 22px" }}>
                    <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12 }}>
                      <div style={{ width:44,height:44,borderRadius:12,background:cert.verified?"#ecfdf5":"#fffbeb",border:`1.5px solid ${cert.verified?"#a7f3d0":"#fde68a"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22 }}>
                        {cert.verified?"🏆":"⏳"}
                      </div>
                      <Tag text={cert.verified?"✓ Verified":"Pending"} v={cert.verified?"green":"amber"}/>
                    </div>
                    <div style={{ fontWeight:700,fontSize:14,marginBottom:4 }}>{cert.name}</div>
                    <div style={{ fontSize:12.5,color:"var(--text2)" }}>{cert.issuer}</div>
                    <div className="mono" style={{ fontSize:11,color:"var(--text3)",marginTop:6 }}>{cert.date}</div>
                  </div>
                ))}
                {myCerts.length===0&&<div className="card" style={{ padding:"40px",textAlign:"center",color:"var(--text3)",gridColumn:"span 2" }}>No certificates uploaded yet.</div>}
              </div>
            </div>
          )}

          {page==="skills"&&(
            <div className="fade-up">
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
                <div className="card" style={{ padding:"22px" }}>
                  <div className="section-title">Skill Proficiency</div>
                  {student.skills.map((sk,i)=>{
                    const profArr=[85,75,90,65,80];
                    const prof=profArr[i%profArr.length];
                    const C=["#4f46e5","#0d9488","#d97706","#2563eb","#7c3aed"];
                    return(
                      <div key={sk} style={{ marginBottom:16 }}>
                        <div style={{ display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:6 }}>
                          <span style={{ fontWeight:600 }}>{sk}</span>
                          <span className="mono" style={{ color:C[i%C.length],fontSize:12 }}>{prof}%</span>
                        </div>
                        <Bar value={prof} color={C[i%C.length]} h={8}/>
                        <div style={{ fontSize:11,color:"var(--text3)",marginTop:4 }}>Source: {i<2?"Internship":"Online Course"}</div>
                      </div>
                    );
                  })}
                </div>
                <div style={{ display:"flex",flexDirection:"column",gap:14 }}>
                  <div className="card" style={{ padding:"22px" }}>
                    <div className="section-title">Skills from Certifications</div>
                    {myCerts.map(cert=>(
                      <div key={cert.id} style={{ display:"flex",justifyContent:"space-between",padding:"9px 0",borderBottom:"1px solid var(--border)",fontSize:13 }}>
                        <span style={{ fontWeight:500 }}>{cert.name}</span>
                        <Tag text={cert.verified?"Validated":"Unverified"} v={cert.verified?"green":"slate"}/>
                      </div>
                    ))}
                  </div>
                  <div className="card" style={{ padding:"22px" }}>
                    <div className="section-title">Recommended Skills</div>
                    <div style={{ display:"flex",flexWrap:"wrap",gap:8 }}>
                      {["TypeScript","Docker","GraphQL","Redis","AWS","Kubernetes","TensorFlow"].map(s=>(
                        <button key={s} className="btn btn-ghost" style={{ fontSize:11.5 }} onClick={()=>toast_(`${s} added!`)}>+ {s}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {modal==="uploadCert"&&<Modal title="Upload Certificate" onClose={()=>setModal(null)}>
        {[["Certificate Name","e.g. AWS Cloud Practitioner"],["Issuing Organization","e.g. Amazon Web Services"]].map(([l,p])=><Field key={l} label={l}><input placeholder={p}/></Field>)}
        <Field label="Date Issued"><input type="month"/></Field>
        <div style={{ border:"2px dashed var(--border2)",borderRadius:10,padding:"26px",textAlign:"center",marginBottom:14,cursor:"pointer",background:"var(--surface2)" }}>
          <div style={{ fontSize:26,marginBottom:6 }}>📎</div>
          <div style={{ fontSize:12.5,color:"var(--text2)" }}>Click to upload PDF or Image</div>
        </div>
        <button className="btn btn-primary" style={{ width:"100%",justifyContent:"center",padding:"11px" }} onClick={()=>{toast_("Certificate uploaded!");setModal(null);}}>Upload</button>
      </Modal>}
      {modal==="addSkill"&&<Modal title="Add Skill" onClose={()=>setModal(null)}>
        <Field label="Skill Name"><input placeholder="e.g. React, Python"/></Field>
        <Field label="Proficiency"><select><option>Beginner</option><option>Intermediate</option><option>Advanced</option><option>Expert</option></select></Field>
        <Field label="Source"><select><option>Internship</option><option>Online Course</option><option>Academic Project</option><option>Self-taught</option></select></Field>
        <button className="btn btn-primary" style={{ width:"100%",justifyContent:"center",padding:"11px" }} onClick={()=>{toast_("Skill added!");setModal(null);}}>Add Skill</button>
      </Modal>}
      {modal?.type==="progress"&&<Modal title="Update Progress" onClose={()=>setModal(null)}>
        <Field label="Completion (%)"><input type="range" min="0" max="100" defaultValue="72"/></Field>
        <Field label="Weekly Update"><textarea rows="3" placeholder="What did you work on this week?"/></Field>
        <Field label="Blockers"><textarea rows="2" placeholder="Any challenges faced?"/></Field>
        <button className="btn btn-primary" style={{ width:"100%",justifyContent:"center",padding:"11px" }} onClick={()=>{toast_("Progress saved!");setModal(null);}}>Save Update</button>
      </Modal>}
      {toast&&<Toast msg={toast}/>}

      {/* ── AI CHATBOT (floating, always visible in student portal) ── */}
      <ResumeChatbot data={data} student={student} onApply={(id)=>{apply(id);}} careerGoal={careerGoal} />
    </div>
  );
}

/* ═══════════════════════════════
   CAREER GOALS DATA
═══════════════════════════════ */
const CAREER_GOALS = {
  "Machine Learning Engineer": {
    icon: "🤖", accent: "#7c3aed", bg: "#f5f3ff",
    desc: "Build intelligent systems using ML/DL algorithms and deploy models at scale.",
    requiredSkills: ["Python","Machine Learning","Deep Learning","TensorFlow","PyTorch","Model Deployment","MLOps","Statistics","Data Preprocessing","Git"],
    roadmap: [
      { step:1, title:"Strengthen Python for Data Science",     skills:["Python","NumPy","Pandas"],                     duration:"3–4 weeks",  resources:["Kaggle Python Course","CS50P"],          status:"current" },
      { step:2, title:"Master Machine Learning Fundamentals",   skills:["Machine Learning","Statistics","Scikit-learn"]},
      { step:3, title:"Learn Deep Learning Concepts",           skills:["Deep Learning","Neural Networks"],              duration:"6–8 weeks",  resources:["fast.ai","deeplearning.ai Specialization"] },
      { step:4, title:"TensorFlow / PyTorch in Practice",       skills:["TensorFlow","PyTorch"],                         duration:"4–6 weeks",  resources:["TensorFlow Official Docs","PyTorch Tutorials"] },
      { step:5, title:"Build End-to-End ML Projects",           skills:["Model Deployment","MLOps","Docker"],            duration:"6–8 weeks",  resources:["Build & Deploy ML Apps","Towards Data Science"] },
      { step:6, title:"Apply for ML Internships",               skills:["Internship Applications"],                     duration:"Ongoing",    resources:["InternTrack Portal","LinkedIn"],           status:"goal" },
    ],
  },
  "Data Scientist": {
    icon: "📊", accent: "#2563eb", bg: "#eff6ff",
    desc: "Extract insights from complex datasets using statistical analysis and visualization.",
    requiredSkills: ["Python","SQL","Statistics","Machine Learning","Tableau","Power BI","R","Data Visualization","Pandas","NumPy"],
    roadmap: [
      { step:1, title:"Master Python & SQL for Data",           skills:["Python","SQL","Pandas"] },
      { step:2, title:"Statistical Analysis & Probability",     skills:["Statistics","R"] },
      { step:3, title:"Data Visualization Tools",               skills:["Tableau","Power BI","Matplotlib"] },
      { step:4, title:"Machine Learning for Data Science",      skills:["Machine Learning","Scikit-learn"] },
      { step:5, title:"Real-World Data Projects",               skills:["Data Storytelling","Kaggle Competitions"] },
      { step:6, title:"Apply for Data Science Internships",     skills:["Internship Applications"],                     status:"goal" },
    ],
  },
  "Web Developer": {
    icon: "🌐", accent: "#0d9488", bg: "#f0fdfa",
    desc: "Design and build modern, responsive websites and web applications.",
    requiredSkills: ["HTML","CSS","JavaScript","React","Node.js","TypeScript","REST APIs","Git","MongoDB","Tailwind CSS"],
    roadmap: [
      { step:1, title:"HTML, CSS & JavaScript Foundations",     skills:["HTML","CSS","JavaScript"] },
      { step:2, title:"React & Modern Frontend Development",    skills:["React","TypeScript","Tailwind CSS"] },
      { step:3, title:"Backend Development with Node.js",       skills:["Node.js","REST APIs","Express"] },
      { step:4, title:"Databases & Full-Stack Integration",     skills:["MongoDB","SQL","Authentication"] },
      { step:5, title:"Build & Deploy Full-Stack Projects",     skills:["Git","Docker","Deployment"] },
      { step:6, title:"Apply for Web Dev Internships",          skills:["Internship Applications"],                     status:"goal" },
    ],
  },
  "Cybersecurity Analyst": {
    icon: "🔐", accent: "#e11d48", bg: "#fff1f2",
    desc: "Protect systems and networks from cyber threats through analysis and response.",
    requiredSkills: ["Networking","Linux","Python","Ethical Hacking","SIEM","Cryptography","Penetration Testing","Firewalls","Incident Response","OWASP"],
    roadmap: [
      { step:1, title:"Networking & Linux Fundamentals",        skills:["Networking","Linux","TCP/IP"] },
      { step:2, title:"Security Concepts & Cryptography",       skills:["Cryptography","Firewalls","VPN"] },
      { step:3, title:"Ethical Hacking & Penetration Testing",  skills:["Ethical Hacking","Penetration Testing","Kali Linux"] },
      { step:4, title:"SIEM Tools & Incident Response",         skills:["SIEM","Incident Response","Splunk"] },
      { step:5, title:"OWASP Top 10 & Web Security",            skills:["OWASP","Burp Suite","Security Audits"] },
      { step:6, title:"Apply for Cybersecurity Internships",    skills:["Internship Applications"],                     status:"goal" },
    ],
  },
  "UI/UX Designer": {
    icon: "🎨", accent: "#d97706", bg: "#fffbeb",
    desc: "Create beautiful, user-centric digital experiences through research and design.",
    requiredSkills: ["Figma","User Research","Wireframing","Prototyping","Adobe XD","Design Systems","Accessibility","Usability Testing","HTML","CSS"],
    roadmap: [
      { step:1, title:"Design Principles & Color Theory",       skills:["Design Theory","Typography","Color"] },
      { step:2, title:"Figma & Wireframing",                    skills:["Figma","Wireframing","Sketching"] },
      { step:3, title:"User Research & Usability Testing",      skills:["User Research","Usability Testing","Personas"] },
      { step:4, title:"Interactive Prototyping",                skills:["Prototyping","Adobe XD","Design Systems"] },
      { step:5, title:"Build a Portfolio of Projects",          skills:["Portfolio","Case Studies","Accessibility"] },
      { step:6, title:"Apply for UI/UX Internships",            skills:["Internship Applications"],                     status:"goal" },
    ],
  },
};

/* ── skill match helper ── */
function skillMatch(required, mySkills) {
  return required.filter(r => mySkills.some(s => s.toLowerCase().includes(r.toLowerCase()) || r.toLowerCase().includes(s.toLowerCase())));
}

/* ═══════════════════════════════
   GOAL DASHBOARD CARD
═══════════════════════════════ */
function GoalDashboardCard({ goal, student, data, onApply, onViewRoadmap }) {
  const gd = CAREER_GOALS[goal];
  if (!gd) return null;
  const matched    = skillMatch(gd.requiredSkills, student.skills);
  const missing    = gd.requiredSkills.filter(r => !matched.includes(r));
  const pct        = Math.round((matched.length / gd.requiredSkills.length) * 100);
  const pctColor   = pct >= 70 ? "#059669" : pct >= 40 ? "#d97706" : "#4f46e5";

  // internship matches
  const matches = data.internships.map(i => {
    const co = data.companies.find(c => c.id === i.company);
    const m  = skillMatch(i.skills, student.skills);
    return { ...i, co, matchPct: Math.round((m.length / Math.max(i.skills.length,1)) * 100) };
  }).filter(i => i.matchPct > 0).sort((a,b) => b.matchPct - a.matchPct).slice(0, 3);

  return (
    <div className="card" style={{ padding:0, marginBottom:20, overflow:"hidden", borderColor:"#c7d2fe" }}>
      {/* Card header */}
      <div style={{ background:`linear-gradient(135deg,${gd.accent}18,${gd.accent}08)`, borderBottom:"1.5px solid #e8edf5", padding:"18px 22px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div style={{ display:"flex", gap:12, alignItems:"center" }}>
          <div style={{ width:42, height:42, borderRadius:12, background:gd.bg, border:`1.5px solid ${gd.accent}33`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>{gd.icon}</div>
          <div>
            <div style={{ fontWeight:700, fontSize:14, color:"var(--text)" }}>Career Goal: <span style={{ color:gd.accent }}>{goal}</span></div>
            <div style={{ fontSize:12, color:"var(--text2)", marginTop:2 }}>{matched.length}/{gd.requiredSkills.length} skills achieved · {missing.length} remaining</div>
          </div>
        </div>
        <button className="btn btn-ghost" style={{ fontSize:12 }} onClick={onViewRoadmap}>View Roadmap →</button>
      </div>

      <div style={{ padding:"18px 22px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
        {/* Progress */}
        <div>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8, alignItems:"center" }}>
            <span style={{ fontSize:12.5, fontWeight:700, color:"var(--text2)" }}>Goal Progress</span>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:18, fontWeight:800, color:pctColor }}>{pct}%</span>
          </div>
          {/* Circular-ish progress using conic gradient */}
          <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:14 }}>
            <div style={{ width:64, height:64, borderRadius:"50%", background:`conic-gradient(${pctColor} ${pct*3.6}deg, #e8edf5 0deg)`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <div style={{ width:46, height:46, borderRadius:"50%", background:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:800, color:pctColor }}>{pct}%</div>
            </div>
            <div style={{ flex:1 }}>
              <Bar value={pct} color={pctColor} h={8} />
              <div style={{ fontSize:11.5, color:"var(--text2)", marginTop:6 }}>
                <span style={{ color:"#059669", fontWeight:600 }}>✓ {matched.length} achieved</span>
                {" · "}
                <span style={{ color:"#e11d48", fontWeight:600 }}>✗ {missing.length} remaining</span>
              </div>
            </div>
          </div>

          {/* Skills achieved */}
          <div style={{ marginBottom:8 }}>
            <div style={{ fontSize:10.5, fontWeight:700, color:"var(--text3)", textTransform:"uppercase", letterSpacing:".05em", marginBottom:6 }}>Achieved</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
              {matched.slice(0,5).map(sk=>(
                <span key={sk} style={{ padding:"2px 9px", borderRadius:20, background:"#ecfdf5", color:"#059669", fontSize:11, fontWeight:600, border:"1px solid #a7f3d0" }}>✓ {sk}</span>
              ))}
            </div>
          </div>
          {/* Skills remaining */}
          <div>
            <div style={{ fontSize:10.5, fontWeight:700, color:"var(--text3)", textTransform:"uppercase", letterSpacing:".05em", marginBottom:6 }}>Still Needed</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
              {missing.slice(0,5).map(sk=>(
                <span key={sk} style={{ padding:"2px 9px", borderRadius:20, background:"#fff1f2", color:"#e11d48", fontSize:11, fontWeight:600, border:"1px solid #fecdd3" }}>✗ {sk}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended internships */}
        <div>
          <div style={{ fontSize:12.5, fontWeight:700, color:"var(--text2)", marginBottom:10 }}>Matched Internships</div>
          {matches.map(i => (
            <div key={i.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 12px", background:"var(--surface2)", borderRadius:10, marginBottom:7, border:"1.5px solid var(--border)" }}>
              <div>
                <div style={{ fontWeight:600, fontSize:12.5 }}>{i.role}</div>
                <div style={{ fontSize:11, color:"var(--text3)" }}>{i.co?.name} · {i.mode}</div>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:8, flexShrink:0 }}>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:12, fontWeight:700, color: i.matchPct>=70?"#059669":i.matchPct>=50?"#d97706":"#4f46e5" }}>{i.matchPct}%</span>
                <button style={{ padding:"4px 12px", borderRadius:7, border:"none", background:"linear-gradient(135deg,#4f46e5,#7c3aed)", color:"#fff", fontSize:11, fontWeight:700, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif" }}
                  onClick={()=>onApply(i.id)}>Apply</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════
   CAREER ROADMAP PAGE
═══════════════════════════════ */
function CareerRoadmapPage({ student, data, careerGoal, setCareerGoal, customGoal, setCustomGoal, onApply, toast_ }) {
  const [selectedGoal, setSelectedGoal] = useState(careerGoal || "");
  const [customInput,  setCustomInput]  = useState(customGoal || "");
  const [useCustom,    setUseCustom]    = useState(false);
  const [generating,   setGenerating]   = useState(false);
  const [activeStep,   setActiveStep]   = useState(null);
  const [completedSteps, setCompleted]  = useState({});

  const goalKey  = selectedGoal || (useCustom && customInput ? customInput : null);
  const goalData = CAREER_GOALS[goalKey] || (useCustom && customInput ? CAREER_GOALS["Machine Learning Engineer"] : null);

  const matched  = goalData ? skillMatch(goalData.requiredSkills, student.skills) : [];
  const missing  = goalData ? goalData.requiredSkills.filter(r => !matched.includes(r)) : [];
  const pct      = goalData ? Math.round((matched.length / goalData.requiredSkills.length) * 100) : 0;
  const pctColor = pct >= 70 ? "#059669" : pct >= 40 ? "#d97706" : "#4f46e5";

  const stepStatus = (step) => {
    if (completedSteps[step.step]) return "done";
    const stepSkills = step.skills.filter(s => s !== "Internship Applications");
    const have = skillMatch(stepSkills, student.skills);
    if (have.length === stepSkills.length) return "done";
    if (have.length > 0) return "inprogress";
    return "todo";
  };
  const sColor = { done:"#059669", inprogress:"#d97706", todo:"#94a3b8", goal:"#4f46e5" };
  const sBg    = { done:"#ecfdf5", inprogress:"#fffbeb", todo:"#f8fafc", goal:"#eef2ff" };
  const sLabel = { done:"Completed", inprogress:"In Progress", todo:"Not Started", goal:"🎯 Goal" };

  const matches = data.internships.map(i => {
    const co  = data.companies.find(c => c.id === i.company);
    const m   = skillMatch(i.skills, student.skills);
    return { ...i, co, matchPct: Math.round((m.length / Math.max(i.skills.length,1)) * 100) };
  }).filter(i => i.matchPct > 0).sort((a,b) => b.matchPct - a.matchPct);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setCareerGoal(goalKey);
      toast_(`🎯 Roadmap generated for "${goalKey}"!`);
    }, 1800);
  };

  /* ── Step 1: Goal Selection ── */
  if (!careerGoal && !generating) return (
    <div className="fade-up">
      {/* Banner */}
      <div className="card" style={{ padding:"28px 30px", marginBottom:22, background:"linear-gradient(135deg,#4f46e5,#7c3aed)", border:"none", borderRadius:18, color:"#fff" }}>
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:".08em", textTransform:"uppercase", opacity:.7, marginBottom:8 }}>Step 1 of 6</div>
        <h2 style={{ fontSize:22, fontWeight:800, marginBottom:8, letterSpacing:"-.02em" }}>Set Your Career Goal</h2>
        <p style={{ fontSize:13.5, opacity:.85, lineHeight:1.6, maxWidth:560 }}>Choose a career path and we'll generate a personalised step-by-step learning roadmap, identify your skill gaps, and recommend internships that match your current level.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:22 }}>
        {/* Preset goals */}
        <div className="card" style={{ padding:"22px", gridColumn:"span 2" }}>
          <div className="section-title">Choose a Career Path</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(190px,1fr))", gap:12 }}>
            {Object.entries(CAREER_GOALS).map(([name,gd])=>{
              const sel = selectedGoal === name && !useCustom;
              return (
                <div key={name}
                  onClick={()=>{setSelectedGoal(name);setUseCustom(false);}}
                  style={{ padding:"16px 18px", borderRadius:13, border:`2px solid ${sel?gd.accent:"var(--border)"}`, background:sel?gd.bg:"var(--white)", cursor:"pointer", transition:"all .18s", boxShadow:sel?`0 4px 18px ${gd.accent}22`:"none" }}>
                  <div style={{ fontSize:24, marginBottom:8 }}>{gd.icon}</div>
                  <div style={{ fontWeight:700, fontSize:13.5, color:"var(--text)", marginBottom:4 }}>{name}</div>
                  <div style={{ fontSize:11.5, color:"var(--text2)", lineHeight:1.5 }}>{gd.desc}</div>
                  {sel && <div style={{ marginTop:8, fontSize:11, fontWeight:700, color:gd.accent }}>✓ Selected</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom goal */}
      <div className="card" style={{ padding:"20px 22px", marginBottom:22 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
          <input type="checkbox" checked={useCustom} onChange={e=>{setUseCustom(e.target.checked);if(e.target.checked)setSelectedGoal("");}} style={{ width:16,height:16,accentColor:"#4f46e5" }}/>
          <span style={{ fontWeight:700, fontSize:13.5, color:"var(--text)" }}>Or type a custom career goal</span>
        </div>
        {useCustom && (
          <div style={{ display:"flex", gap:10 }}>
            <input value={customInput} onChange={e=>setCustomInput(e.target.value)} placeholder="e.g. Blockchain Developer, Product Manager, DevOps Engineer…" style={{ flex:1 }}/>
          </div>
        )}
      </div>

      {/* Preview current skills */}
      <div className="card" style={{ padding:"20px 22px", marginBottom:22 }}>
        <div className="section-title">Your Current Skills (from Profile)</div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
          {student.skills.map(sk=>(
            <span key={sk} style={{ padding:"4px 12px", borderRadius:20, background:"#eef2ff", color:"#4f46e5", fontSize:12.5, fontWeight:600, border:"1px solid #c7d2fe" }}>{sk}</span>
          ))}
        </div>
      </div>

      <button
        className="btn btn-primary"
        disabled={!selectedGoal && !(useCustom && customInput.trim())}
        style={{ padding:"13px 32px", fontSize:14, fontWeight:700, opacity:(!selectedGoal&&!(useCustom&&customInput.trim()))?0.45:1, boxShadow:"0 4px 18px rgba(79,70,229,.4)" }}
        onClick={handleGenerate}>
        🚀 Generate My Roadmap →
      </button>
    </div>
  );

  /* Generating animation */
  if (generating) return (
    <div className="fade-up" style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", minHeight:400 }}>
      <div style={{ width:72, height:72, borderRadius:"50%", background:"linear-gradient(135deg,#4f46e5,#7c3aed)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:32, marginBottom:20, animation:"fadeUp .4s ease infinite alternate" }}>🤖</div>
      <div style={{ fontWeight:700, fontSize:18, color:"var(--text)", marginBottom:8 }}>Generating Your Roadmap…</div>
      <div style={{ fontSize:13.5, color:"var(--text2)", marginBottom:20 }}>Analysing your skills and crafting a personalised learning path</div>
      <div style={{ display:"flex", gap:10 }}>
        {["Scanning Skills","Detecting Gaps","Matching Internships","Building Roadmap"].map((s,i)=>(
          <div key={s} style={{ padding:"6px 14px", borderRadius:20, background:"#eef2ff", color:"#4f46e5", fontSize:12, fontWeight:600, border:"1px solid #c7d2fe", animation:`fadeUp .6s ${i*0.3}s ease both` }}>{s}</div>
        ))}
      </div>
    </div>
  );

  /* ── Full Roadmap View ── */
  return (
    <div className="fade-up">
      {/* Header */}
      <div className="card" style={{ padding:"22px 26px", marginBottom:20, background:`linear-gradient(135deg,${goalData.accent}22,${goalData.accent}08)`, border:`1.5px solid ${goalData.accent}44`, borderRadius:16, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
        <div style={{ display:"flex", gap:14, alignItems:"center" }}>
          <div style={{ width:50, height:50, borderRadius:14, background:goalData.bg, border:`1.5px solid ${goalData.accent}44`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:26 }}>{goalData.icon}</div>
          <div>
            <div style={{ fontSize:11, fontWeight:700, color:goalData.accent, textTransform:"uppercase", letterSpacing:".06em", marginBottom:3 }}>Career Goal</div>
            <div style={{ fontWeight:800, fontSize:18, color:"var(--text)", marginBottom:2 }}>{careerGoal}</div>
            <div style={{ fontSize:12.5, color:"var(--text2)" }}>{goalData.desc}</div>
          </div>
        </div>
        <div style={{ display:"flex", gap:10 }}>
          <div style={{ textAlign:"center", padding:"10px 18px", background:"var(--white)", borderRadius:12, border:"1.5px solid var(--border)" }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:22, fontWeight:800, color:pctColor }}>{pct}%</div>
            <div style={{ fontSize:11, color:"var(--text3)", fontWeight:600 }}>Goal Complete</div>
          </div>
          <div style={{ textAlign:"center", padding:"10px 18px", background:"var(--white)", borderRadius:12, border:"1.5px solid var(--border)" }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:22, fontWeight:800, color:"#059669" }}>{matched.length}</div>
            <div style={{ fontSize:11, color:"var(--text3)", fontWeight:600 }}>Skills Achieved</div>
          </div>
          <div style={{ textAlign:"center", padding:"10px 18px", background:"var(--white)", borderRadius:12, border:"1.5px solid var(--border)" }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:22, fontWeight:800, color:"#e11d48" }}>{missing.length}</div>
            <div style={{ fontSize:11, color:"var(--text3)", fontWeight:600 }}>Skills Remaining</div>
          </div>
          <button className="btn btn-ghost" style={{ fontSize:12 }} onClick={()=>{setCareerGoal(null);setSelectedGoal("");}}>Change Goal</button>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:18 }}>
        {/* LEFT: Skill analysis + Roadmap */}
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>

          {/* Skill gap analysis */}
          <div className="card" style={{ padding:"22px" }}>
            <div className="section-title">Step 2–3: Skill Analysis & Gap Detection</div>
            <div style={{ marginBottom:14 }}>
              <div style={{ fontSize:12.5, fontWeight:700, color:"var(--text)", marginBottom:10 }}>Required Skills for <span style={{ color:goalData.accent }}>{careerGoal}</span></div>
              <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
                {goalData.requiredSkills.map(sk => {
                  const have = matched.includes(sk);
                  return (
                    <div key={sk} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"8px 12px", borderRadius:9, background:have?"#ecfdf5":"#fff1f2", border:`1.5px solid ${have?"#a7f3d0":"#fecdd3"}` }}>
                      <div style={{ display:"flex", alignItems:"center", gap:9 }}>
                        <span style={{ fontSize:15 }}>{have?"✅":"❌"}</span>
                        <span style={{ fontWeight:600, fontSize:13, color: have?"#065f46":"#9f1239" }}>{sk}</span>
                      </div>
                      <span style={{ fontSize:11.5, fontWeight:700, color:have?"#059669":"#e11d48" }}>{have?"Achieved":"Missing"}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Overall bar */}
            <div style={{ padding:"12px 14px", background:"var(--surface2)", borderRadius:10, border:"1.5px solid var(--border)" }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:7, fontSize:12.5 }}>
                <span style={{ fontWeight:700 }}>Overall Goal Progress</span>
                <span style={{ fontFamily:"'JetBrains Mono',monospace", color:pctColor, fontWeight:700 }}>{pct}%</span>
              </div>
              <Bar value={pct} color={pctColor} h={10}/>
            </div>
          </div>

          {/* Roadmap timeline */}
          <div className="card" style={{ padding:"22px" }}>
            <div className="section-title">Step 4: AI-Generated Learning Roadmap</div>
            <div style={{ position:"relative", paddingLeft:28 }}>
              {/* Vertical line */}
              <div style={{ position:"absolute", left:9, top:8, bottom:8, width:2, background:"var(--border)", borderRadius:2 }} />
              {goalData.roadmap.map((step, idx) => {
                const st    = step.status === "goal" ? "goal" : stepStatus(step);
                const col   = sColor[st];
                const bg    = sBg[st];
                const open  = activeStep === idx;
                const stepsSkillsHave = step.skills.filter(s=>s!=="Internship Applications"&&matched.includes(s));
                return (
                  <div key={idx} style={{ position:"relative", marginBottom:14 }}>
                    {/* Node */}
                    <div style={{ position:"absolute", left:-28, top:12, width:18, height:18, borderRadius:"50%", background:col, border:`3px solid ${bg}`, boxShadow:`0 0 0 2px ${col}` }} />
                    <div style={{ padding:"14px 16px", borderRadius:12, border:`1.5px solid ${open?"#c7d2fe":"var(--border)"}`, background:open?"#fafbff":"var(--white)", cursor:"pointer", transition:"all .18s" }}
                      onClick={()=>setActiveStep(open?null:idx)}>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                        <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, fontWeight:700, color:col, background:bg, padding:"2px 7px", borderRadius:6 }}>Step {step.step}</span>
                          <span style={{ fontWeight:700, fontSize:13, color:"var(--text)" }}>{step.title}</span>
                        </div>
                        <div style={{ display:"flex", gap:6, alignItems:"center" }}>
                          <span style={{ fontSize:11, fontWeight:700, color:col, background:bg, padding:"3px 9px", borderRadius:20, border:`1px solid ${col}33` }}>{sLabel[st]}</span>
                          <span style={{ color:"var(--text3)", fontSize:12 }}>{open?"▲":"▼"}</span>
                        </div>
                      </div>
                      {open && (
                        <div style={{ marginTop:12, paddingTop:12, borderTop:"1px solid var(--border)", animation:"fadeUp .18s ease" }}>
                          <div style={{ marginBottom:10 }}>
                            <div style={{ fontSize:11, fontWeight:700, color:"var(--text3)", textTransform:"uppercase", letterSpacing:".05em", marginBottom:7 }}>Skills in this step</div>
                            <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                              {step.skills.map(sk=>{
                                const have = matched.includes(sk);
                                return <span key={sk} style={{ padding:"3px 10px", borderRadius:20, background:have?"#ecfdf5":"#f8fafc", color:have?"#059669":"var(--text2)", fontSize:11.5, fontWeight:600, border:`1px solid ${have?"#a7f3d0":"var(--border)"}` }}>{have?"✓":""} {sk}</span>;
                              })}
                            </div>
                          </div>
                          {step.duration && (
                            <div style={{ fontSize:12.5, color:"var(--text2)", marginBottom:8 }}>⏱ <strong>Duration:</strong> {step.duration}</div>
                          )}
                          {step.resources && (
                            <div>
                              <div style={{ fontSize:11, fontWeight:700, color:"var(--text3)", textTransform:"uppercase", letterSpacing:".05em", marginBottom:6 }}>Recommended Resources</div>
                              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                                {step.resources.map(r=>(
                                  <span key={r} style={{ padding:"3px 10px", borderRadius:20, background:"#eef2ff", color:"#4f46e5", fontSize:11.5, fontWeight:600, border:"1px solid #c7d2fe", cursor:"pointer" }}>🔗 {r}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          {step.status!=="goal"&&(
                            <div style={{ marginTop:12 }}>
                              <button style={{ padding:"6px 16px", borderRadius:8, border:"none", background:"linear-gradient(135deg,#4f46e5,#7c3aed)", color:"#fff", fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif" }}
                                onClick={()=>setCompleted(c=>({...c,[step.step]:!c[step.step]}))}>
                                {completedSteps[step.step]?"↩ Mark Incomplete":"✓ Mark Complete"}
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT: Progress + Internships */}
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>

          {/* Progress ring + skills */}
          <div className="card" style={{ padding:"22px" }}>
            <div className="section-title">Step 5: Progress Tracking</div>
            <div style={{ display:"flex", gap:16, alignItems:"center", marginBottom:18 }}>
              <div style={{ width:90, height:90, borderRadius:"50%", background:`conic-gradient(${pctColor} ${pct*3.6}deg, #e8edf5 0deg)`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <div style={{ width:68, height:68, borderRadius:"50%", background:"#fff", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:18, fontWeight:800, color:pctColor, lineHeight:1 }}>{pct}%</span>
                  <span style={{ fontSize:9, color:"var(--text3)", fontWeight:600 }}>Complete</span>
                </div>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:14, color:"var(--text)", marginBottom:4 }}>Goal Progress</div>
                <div style={{ fontSize:12.5, color:"var(--text2)", lineHeight:1.6 }}>
                  You've achieved <strong style={{ color:"#059669" }}>{matched.length}</strong> of <strong>{goalData.requiredSkills.length}</strong> required skills.
                  {missing.length > 0 && <> Learn <strong style={{ color:"#e11d48" }}>{missing[0]}</strong> next.</>}
                </div>
              </div>
            </div>

            {/* Skill progress bars */}
            {goalData.requiredSkills.slice(0, 6).map((sk,i) => {
              const have = matched.includes(sk);
              const COLORS = ["#4f46e5","#0d9488","#d97706","#2563eb","#7c3aed","#059669"];
              return (
                <div key={sk} style={{ marginBottom:10 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", fontSize:12.5, marginBottom:5 }}>
                    <span style={{ fontWeight:500, color:have?"var(--text)":"var(--text3)" }}>{sk}</span>
                    <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:11, color:have?COLORS[i%COLORS.length]:"var(--text3)" }}>{have?"100%":"0%"}</span>
                  </div>
                  <Bar value={have?100:0} color={have?COLORS[i%COLORS.length]:"#e8edf5"} h={6}/>
                </div>
              );
            })}
          </div>

          {/* Internship recommendations */}
          <div className="card" style={{ padding:"22px" }}>
            <div className="section-title">Step 6: Recommended Internships</div>
            {matches.slice(0, 4).map(i => {
              const alreadyApplied = i.applications?.some(a => a.studentId === student.id);
              const mc = i.matchPct >= 70 ? "#059669" : i.matchPct >= 50 ? "#d97706" : "#4f46e5";
              return (
                <div key={i.id} style={{ padding:"14px", borderRadius:12, border:"1.5px solid var(--border)", marginBottom:10, background:"var(--white)" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                    <div>
                      <div style={{ fontWeight:700, fontSize:13.5, color:"var(--text)", marginBottom:2 }}>{i.role}</div>
                      <div style={{ fontSize:11.5, color:"var(--text2)" }}>{i.co?.name} · {i.mode}</div>
                    </div>
                    <div style={{ textAlign:"right", flexShrink:0, marginLeft:8 }}>
                      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:16, fontWeight:800, color:mc }}>{i.matchPct}%</div>
                      <div style={{ fontSize:10, color:mc, fontWeight:600 }}>Match</div>
                    </div>
                  </div>
                  <div style={{ background:"var(--border)", borderRadius:99, height:5, marginBottom:9, overflow:"hidden" }}>
                    <div style={{ width:`${i.matchPct}%`, height:"100%", background:`linear-gradient(90deg,${mc},${mc}88)`, borderRadius:99, transition:"width .6s" }} />
                  </div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:4, marginBottom:9 }}>
                    {i.skills.map(sk=><span key={sk} style={{ fontSize:10.5, padding:"2px 8px", borderRadius:20, background:"#eef2ff", color:"#4f46e5", fontWeight:600, border:"1px solid #c7d2fe" }}>{sk}</span>)}
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <span style={{ fontSize:12, color:"#059669", fontWeight:700 }}>{i.stipend}</span>
                    <button style={{ padding:"5px 14px", borderRadius:8, border:"none", cursor:alreadyApplied?"default":"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:11.5, fontWeight:700,
                      background:alreadyApplied?"var(--surface2)":"linear-gradient(135deg,#4f46e5,#7c3aed)",
                      color:alreadyApplied?"var(--text3)":"#fff" }}
                      onClick={()=>!alreadyApplied&&onApply(i.id)}>
                      {alreadyApplied?"✓ Applied":"Apply Now"}
                    </button>
                  </div>
                </div>
              );
            })}
            {matches.length===0&&<div style={{ textAlign:"center",padding:"20px",color:"var(--text3)",fontSize:13 }}>No matching internships found. Keep building skills!</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════
   AI RESUME CHATBOT
═══════════════════════════════ */
function ResumeChatbot({ data, student, onApply }) {
  const [open, setOpen]         = useState(false);
  const [input, setInput]       = useState("");
  const [scanning, setScanning] = useState(false);
  const [typing, setTyping]     = useState(false);
  const [extractedSkills, setExtractedSkills] = useState(null);
  const [messages, setMessages] = useState([
    {
      id: 1, role: "bot",
      type: "greeting",
      text: "👋 Hi! I'm your **AI Career Assistant**. I can help you:\n• Analyse your resume & extract skills\n• Match you with the best internships\n• Answer career goal & roadmap questions\n• Identify your skill gaps\n\nUpload your resume or ask me anything!",
    }
  ]);

  const messagesEndRef = { current: null };

  // Simulated AI resume parsing — maps file name / keywords to skills
  const simulateResumeScan = (fileName) => {
    const base = [...student.skills];
    const extra = ["Machine Learning","Data Analysis","TensorFlow","SQL","TypeScript","Docker","REST APIs","Git"];
    const merged = [...new Set([...base, ...extra.slice(0, 3)])];
    return {
      name: student.name,
      education: `B.Tech ${student.dept} · CGPA ${student.cgpa} · Class of ${student.year}`,
      skills: merged,
      technologies: merged.slice(0, 5),
      projects: ["E-Commerce Web App (React + Node)", "Sentiment Analysis using Python"],
      certifications: ["AWS Cloud Practitioner", "Meta Frontend Dev"],
    };
  };

  // Compute skill match % between internship required skills and extracted skills
  const matchScore = (internshipSkills, mySkills) => {
    if (!mySkills || mySkills.length === 0) return 0;
    const matched = internshipSkills.filter(s =>
      mySkills.some(ms => ms.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(ms.toLowerCase()))
    );
    return Math.round((matched.length / internshipSkills.length) * 100);
  };

  // Get top internship matches
  const getMatches = (mySkills) => {
    return data.internships
      .map(i => {
        const co = data.companies.find(c => c.id === i.company);
        const score = matchScore(i.skills, mySkills);
        return { ...i, company: co, score };
      })
      .filter(i => i.score > 0)
      .sort((a, b) => b.score - a.score);
  };

  // Handle natural language queries
  const handleQuery = (q) => {
    const lower = q.toLowerCase();
    const mySkills = extractedSkills?.skills || student.skills;

    // Career goal queries
    if (lower.includes("need for data science") || lower.includes("skills for data science")) {
      const gd = CAREER_GOALS["Data Scientist"];
      return { type: "skill_gap", role: "Data Scientist", missing: gd.requiredSkills.filter(s => !skillMatch([s], mySkills).length), text: "Here are the skills required for a **Data Scientist** role:" };
    }
    if (lower.includes("machine learning engineer") || (lower.includes("close") && lower.includes("machine learning"))) {
      const gd = CAREER_GOALS["Machine Learning Engineer"];
      const m  = skillMatch(gd.requiredSkills, mySkills);
      const pct = Math.round((m.length/gd.requiredSkills.length)*100);
      return { type: "text", text: `You're **${pct}% of the way** to becoming a Machine Learning Engineer! ✅ You have: ${m.join(", ")}. ❌ Still needed: ${gd.requiredSkills.filter(r=>!m.includes(r)).join(", ")}.` };
    }
    if (lower.includes("what should i learn") || lower.includes("learn next")) {
      const goals = Object.values(CAREER_GOALS);
      const topGoal = goals.find(g => skillMatch(g.requiredSkills, mySkills).length > 0) || goals[0];
      const missing = topGoal.requiredSkills.filter(r => !skillMatch([r], mySkills).length);
      return { type: "text", text: `Based on your current skills, I recommend learning **${missing[0]}** next. It's highly demanded and aligns with your existing knowledge. Follow up with **${missing[1] || "project work"}** to strengthen your profile.` };
    }
    if (lower.includes("suggest internship") || lower.includes("current skill")) {
      const matches = getMatches(mySkills);
      return { type: "recommendations", internships: matches, text: "Here are internships that match your current skills:" };
    }
    if (lower.includes("python")) {
      const matches = data.internships.filter(i => i.skills.some(s => s.toLowerCase().includes("python")));
      return { type: "internship_list", internships: matches, text: "Here are internships for **Python** developers:" };
    }
    if (lower.includes("missing") || lower.includes("gap")) {
      const target = data.internships.find(i => i.role.toLowerCase().includes("ai") || i.role.toLowerCase().includes("data"));
      if (target) {
        const missing = target.skills.filter(s => !mySkills.some(ms => ms.toLowerCase().includes(s.toLowerCase())));
        return { type: "skill_gap", role: target.role, missing, text: `For **${target.role}**, you're missing these skills:` };
      }
    }
    if (lower.includes("recommend") || lower.includes("profile") || lower.includes("suggest")) {
      const matches = getMatches(mySkills);
      return { type: "recommendations", internships: matches, text: "Based on your profile, here are your top matches:" };
    }
    if (lower.includes("skill") || lower.includes("what can i")) {
      return { type: "skills_list", skills: mySkills, text: "Here are the skills currently on your profile:" };
    }
    // Default: general search
    const q_lower = q.toLowerCase();
    const matches = data.internships.filter(i =>
      i.role.toLowerCase().includes(q_lower) ||
      i.skills.some(s => s.toLowerCase().includes(q_lower))
    );
    if (matches.length > 0) {
      return { type: "internship_list", internships: matches, text: `I found internships matching "**${q}**":` };
    }
    return { type: "fallback", text: `I couldn't find specific results for "*${q}*". Try asking:\n• "What skills do I need for Data Science?"\n• "How close am I to becoming a Machine Learning Engineer?"\n• "What should I learn next?"\n• "Suggest internships for my current skills"` };
  };

  const addBotMsg = (msg) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(ms => [...ms, { id: Date.now(), role: "bot", ...msg }]);
    }, 1200);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), role: "user", type: "text", text: input };
    setMessages(ms => [...ms, userMsg]);
    const response = handleQuery(input);
    setInput("");
    addBotMsg(response);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const userMsg = { id: Date.now(), role: "user", type: "file", text: `📎 Uploaded: **${file.name}**` };
    setMessages(ms => [...ms, userMsg]);
    setScanning(true);
    // Step 1 — scanning message
    setTimeout(() => {
      setScanning(false);
      const parsed = simulateResumeScan(file.name);
      setExtractedSkills(parsed);
      setMessages(ms => [...ms, { id: Date.now()+1, role: "bot", type: "resume_parsed", parsed }]);
      // Step 2 — recommendations after short delay
      setTimeout(() => {
        const matches = getMatches(parsed.skills);
        setMessages(ms => [...ms, {
          id: Date.now()+2, role: "bot", type: "recommendations",
          text: "Based on your resume, here are your best internship matches:",
          internships: matches,
        }]);
      }, 900);
    }, 2200);
  };

  const scoreColor = (s) => s >= 75 ? "#059669" : s >= 50 ? "#d97706" : "#e11d48";
  const scoreLabel = (s) => s >= 75 ? "Strong Match" : s >= 50 ? "Good Match" : "Partial Match";

  const renderText = (t) =>
    t.split("**").map((seg, i) =>
      i % 2 === 1
        ? <strong key={i} style={{ color: "var(--text)" }}>{seg}</strong>
        : <span key={i}>{seg}</span>
    );

  const InternshipCard = ({ i, applied }) => {
    const alreadyApplied = applied || i.applications?.some(a => a.studentId === student.id);
    return (
      <div style={{ background: "var(--white)", border: "1.5px solid var(--border)", borderRadius: 12, padding: "14px 15px", marginTop: 10, boxShadow: "var(--shadow-sm)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: "var(--text)", marginBottom: 2 }}>{i.role}</div>
            <div style={{ fontSize: 11.5, color: "var(--text2)" }}>{i.company?.name || "Company"} · {i.mode}</div>
          </div>
          {i.score !== undefined && (
            <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 8 }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: scoreColor(i.score), fontFamily: "'JetBrains Mono',monospace" }}>{i.score}%</div>
              <div style={{ fontSize: 10, color: scoreColor(i.score), fontWeight: 600 }}>{scoreLabel(i.score)}</div>
            </div>
          )}
        </div>
        {/* Match bar */}
        {i.score !== undefined && (
          <div style={{ background: "var(--border)", borderRadius: 99, height: 5, marginBottom: 10, overflow: "hidden" }}>
            <div style={{ width: `${i.score}%`, height: "100%", borderRadius: 99, background: `linear-gradient(90deg,${scoreColor(i.score)},${scoreColor(i.score)}99)`, transition: "width .6s ease" }} />
          </div>
        )}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 10 }}>
          {(i.skills || []).map(sk => (
            <span key={sk} style={{ fontSize: 10.5, padding: "2px 8px", borderRadius: 20, background: "#eef2ff", color: "#4f46e5", fontWeight: 600, border: "1px solid #c7d2fe" }}>{sk}</span>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11.5, color: "#059669", fontWeight: 700 }}>{i.stipend}</span>
          <button
            style={{ padding: "5px 14px", borderRadius: 8, border: "none", cursor: alreadyApplied ? "default" : "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11.5, fontWeight: 700,
              background: alreadyApplied ? "var(--surface2)" : "linear-gradient(135deg,#4f46e5,#7c3aed)",
              color: alreadyApplied ? "var(--text3)" : "#fff",
              boxShadow: alreadyApplied ? "none" : "0 3px 10px rgba(79,70,229,.35)" }}
            onClick={() => !alreadyApplied && onApply(i.id)}>
            {alreadyApplied ? "✓ Applied" : "Apply Now"}
          </button>
        </div>
      </div>
    );
  };

  const renderMsg = (msg) => {
    const isBot = msg.role === "bot";
    return (
      <div key={msg.id} style={{ display: "flex", flexDirection: isBot ? "row" : "row-reverse", gap: 8, marginBottom: 14, alignItems: "flex-start" }}>
        {isBot && (
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg,#4f46e5,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0, marginTop: 2 }}>🤖</div>
        )}
        <div style={{ maxWidth: "82%", display: "flex", flexDirection: "column", gap: 0 }}>
          {/* Bubble */}
          {(msg.type === "text" || msg.type === "greeting" || msg.type === "fallback" || msg.type === "file") && (
            <div style={{ padding: "10px 14px", borderRadius: isBot ? "4px 14px 14px 14px" : "14px 4px 14px 14px",
              background: isBot ? "var(--white)" : "linear-gradient(135deg,#4f46e5,#6d28d9)",
              color: isBot ? "var(--text2)" : "#fff",
              border: isBot ? "1.5px solid var(--border)" : "none",
              fontSize: 13, lineHeight: 1.6, boxShadow: "var(--shadow-sm)" }}>
              {renderText(msg.text)}
            </div>
          )}

          {/* Skill gap */}
          {msg.type === "skill_gap" && (
            <div style={{ padding: "12px 14px", borderRadius: "4px 14px 14px 14px", background: "var(--white)", border: "1.5px solid var(--border)", fontSize: 13, lineHeight: 1.6 }}>
              <div style={{ marginBottom: 8 }}>{renderText(msg.text)}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {msg.missing.map(sk => (
                  <span key={sk} style={{ padding: "3px 10px", borderRadius: 20, background: "#fff1f2", color: "#e11d48", fontSize: 11.5, fontWeight: 600, border: "1px solid #fecdd3" }}>⚠ {sk}</span>
                ))}
              </div>
              {msg.missing.length === 0 && <div style={{ color: "#059669", fontSize: 12.5, fontWeight: 600 }}>✓ You already have all required skills!</div>}
            </div>
          )}

          {/* Skills list */}
          {msg.type === "skills_list" && (
            <div style={{ padding: "12px 14px", borderRadius: "4px 14px 14px 14px", background: "var(--white)", border: "1.5px solid var(--border)", fontSize: 13 }}>
              <div style={{ marginBottom: 9 }}>{renderText(msg.text)}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {msg.skills.map(sk => (
                  <span key={sk} style={{ padding: "3px 10px", borderRadius: 20, background: "#eef2ff", color: "#4f46e5", fontSize: 11.5, fontWeight: 600, border: "1px solid #c7d2fe" }}>{sk}</span>
                ))}
              </div>
            </div>
          )}

          {/* Parsed resume */}
          {msg.type === "resume_parsed" && (
            <div style={{ padding: "14px 16px", borderRadius: "4px 14px 14px 14px", background: "var(--white)", border: "1.5px solid #bbf7d0", fontSize: 13, lineHeight: 1.6 }}>
              <div style={{ fontWeight: 700, color: "#059669", marginBottom: 10, fontSize: 13.5 }}>✅ Resume Analysed Successfully!</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "👤 Name", val: msg.parsed.name },
                  { label: "🎓 Education", val: msg.parsed.education },
                  { label: "📁 Projects", val: msg.parsed.projects.join(", ") },
                  { label: "🏅 Certifications", val: msg.parsed.certifications.join(", ") },
                ].map(row => (
                  <div key={row.label} style={{ fontSize: 12.5 }}>
                    <span style={{ color: "var(--text3)", fontWeight: 600 }}>{row.label}: </span>
                    <span style={{ color: "var(--text)" }}>{row.val}</span>
                  </div>
                ))}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text3)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 6 }}>Extracted Skills</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {msg.parsed.skills.map(sk => (
                      <span key={sk} style={{ padding: "2px 9px", borderRadius: 20, background: "#eef2ff", color: "#4f46e5", fontSize: 11, fontWeight: 600, border: "1px solid #c7d2fe" }}>{sk}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Internship recommendations / list */}
          {(msg.type === "recommendations" || msg.type === "internship_list") && (
            <div style={{ padding: "12px 14px", borderRadius: "4px 14px 14px 14px", background: "var(--white)", border: "1.5px solid var(--border)", fontSize: 13 }}>
              <div style={{ marginBottom: 4, lineHeight: 1.6 }}>{renderText(msg.text)}</div>
              {(msg.internships || []).length === 0
                ? <div style={{ color: "var(--text3)", fontSize: 12.5, marginTop: 8 }}>No matches found for this query.</div>
                : (msg.internships || []).slice(0, 3).map(i => <InternshipCard key={i.id} i={i} />)
              }
            </div>
          )}
        </div>
      </div>
    );
  };

  const PROMPTS = [
    "What skills do I need for Data Science?",
    "How close am I to ML Engineer?",
    "What should I learn next?",
    "Suggest internships for my skills",
  ];

  return (
    <>
      {/* ── FLOATING BUTTON ── */}
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 300,
          width: 56, height: 56, borderRadius: "50%",
          background: "linear-gradient(135deg,#4f46e5,#7c3aed)",
          boxShadow: "0 6px 24px rgba(79,70,229,.5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", fontSize: 24,
          transition: "all .2s",
          transform: open ? "rotate(90deg) scale(1.05)" : "none",
        }}>
        {open ? "✕" : "🤖"}
      </div>

      {/* Unread dot */}
      {!open && (
        <div style={{ position: "fixed", bottom: 72, right: 28, width: 10, height: 10, borderRadius: "50%", background: "#e11d48", border: "2px solid #fff", zIndex: 301 }} />
      )}

      {/* ── CHAT WINDOW ── */}
      {open && (
        <div style={{
          position: "fixed", bottom: 94, right: 28, zIndex: 300,
          width: 390, height: 580,
          background: "var(--white)",
          borderRadius: 20,
          border: "1.5px solid var(--border)",
          boxShadow: "0 20px 60px rgba(0,0,0,.18), 0 4px 16px rgba(79,70,229,.12)",
          display: "flex", flexDirection: "column",
          overflow: "hidden",
          animation: "fadeUp .22s ease",
        }}>

          {/* Header */}
          <div style={{ padding: "14px 18px", background: "linear-gradient(135deg,#4f46e5,#7c3aed)", display: "flex", alignItems: "center", gap: 11 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🤖</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>AI Career Assistant</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,.7)", display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                Online · Powered by InternTrack AI
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: "rgba(255,255,255,.15)", border: "none", color: "#fff", width: 28, height: 28, borderRadius: 8, cursor: "pointer", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 14px 8px", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
            {messages.map(renderMsg)}
            {(scanning || typing) && (
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 14 }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg,#4f46e5,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>🤖</div>
                <div style={{ padding: "10px 16px", background: "var(--white)", border: "1.5px solid var(--border)", borderRadius: "4px 14px 14px 14px", fontSize: 13 }}>
                  {scanning
                    ? <span style={{ color: "#4f46e5", fontWeight: 600 }}>🔍 Scanning resume with AI…</span>
                    : <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
                        {[0,1,2].map(i => <span key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: "#4f46e5", animation: `fadeUp .6s ${i*0.2}s infinite alternate` }} />)}
                      </span>}
                </div>
              </div>
            )}
            <div ref={el => { messagesEndRef.current = el; }} />
          </div>

          {/* Suggested prompts */}
          {messages.length <= 2 && (
            <div style={{ padding: "6px 12px 4px", background: "var(--bg)", display: "flex", gap: 6, flexWrap: "wrap", borderTop: "1px solid var(--border)" }}>
              {PROMPTS.map(p => (
                <button key={p} onClick={() => { setInput(p); }}
                  style={{ fontSize: 11, padding: "4px 10px", borderRadius: 20, border: "1.5px solid #c7d2fe", background: "#eef2ff", color: "#4f46e5", cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, whiteSpace: "nowrap" }}>
                  {p.length > 28 ? p.slice(0, 28) + "…" : p}
                </button>
              ))}
            </div>
          )}

          {/* Input bar */}
          <div style={{ padding: "10px 12px", background: "var(--white)", borderTop: "1.5px solid var(--border)", display: "flex", alignItems: "center", gap: 8 }}>
            {/* File upload */}
            <label title="Upload Resume" style={{ width: 36, height: 36, borderRadius: 10, background: "#eef2ff", border: "1.5px solid #c7d2fe", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, fontSize: 16, color: "#4f46e5" }}>
              📎
              <input type="file" accept=".pdf,.docx" style={{ display: "none" }} onChange={handleFileUpload} />
            </label>
            {/* Text input */}
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything or upload resume…"
              style={{ flex: 1, padding: "9px 13px", borderRadius: 12, border: "1.5px solid var(--border2)", fontSize: 13, background: "var(--surface2)", outline: "none", fontFamily: "'Plus Jakarta Sans',sans-serif" }}
            />
            {/* Send */}
            <button onClick={handleSend}
              style={{ width: 36, height: 36, borderRadius: 10, border: "none", background: input.trim() ? "linear-gradient(135deg,#4f46e5,#7c3aed)" : "var(--border)", color: input.trim() ? "#fff" : "var(--text3)", cursor: input.trim() ? "pointer" : "default", flexShrink: 0, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", transition: "all .18s", boxShadow: input.trim() ? "0 3px 10px rgba(79,70,229,.35)" : "none" }}>
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ═══════════════════════════════
   COMPANY PORTAL
═══════════════════════════════ */
function CompanyPortal({ data, setData, onExit }) {
  const [page,setPage]=useState("dashboard");
  const [modal,setModal]=useState(null);
  const [toast,setToast]=useState(null);
  const [sFilter,setSFilter]=useState({dept:"All",year:"All",skill:""});
  const company=data.companies[0];
  const myI=data.internships.filter(i=>i.company===company.id);
  const allApps=myI.flatMap(i=>i.applications.map(a=>({...a,internship:i})));
  const toast_=m=>{setToast(m);setTimeout(()=>setToast(null),3000);};
  const updateStatus=(iid,sid,st)=>{
    setData(d=>({...d,internships:d.internships.map(i=>i.id===iid?{...i,applications:i.applications.map(a=>a.studentId===sid?{...a,status:st}:a)}:i)}));
    toast_(`Status → ${st}`);
  };
  const filtStudents=data.students.filter(s=>{
    if(!s.approved) return false;
    if(sFilter.dept!=="All"&&s.dept!==sFilter.dept) return false;
    if(sFilter.year!=="All"&&s.year!==sFilter.year) return false;
    if(sFilter.skill&&!s.skills.some(sk=>sk.toLowerCase().includes(sFilter.skill.toLowerCase()))) return false;
    return true;
  });
  const nav=[{id:"dashboard",label:"Dashboard"},{id:"profile",label:"Company Profile"},{id:"post",label:"Post Internship"},{id:"listings",label:"My Listings"},{id:"applications",label:"Applications"},{id:"search",label:"Student Search"}];
  const titles={dashboard:"Company Dashboard",profile:"Company Profile",post:"Post New Internship",listings:"My Listings",applications:"Student Applications",search:"Student Search"};
  const compNotifs=data.notifications.filter(n=>n.to==="company_1");

  return (
    <div style={{ display:"flex",minHeight:"100vh" }}>
      <Sidebar items={nav} active={page} onNav={setPage} portalLabel="Company" accentColor="#0d9488" userName={company.name} onLogout={onExit}/>
      <div style={{ flex:1,display:"flex",flexDirection:"column",overflow:"hidden",background:"var(--bg)" }}>
        <TopBar title={titles[page]} notifCount={compNotifs.length} notifKey="company_1" notifs={data.notifications}/>
        <div style={{ flex:1,overflowY:"auto",padding:"26px 28px" }}>

          {page==="dashboard"&&(
            <div className="fade-up">
              <div className="card" style={{ padding:"20px 24px",marginBottom:20,display:"flex",justifyContent:"space-between",alignItems:"center",background:"linear-gradient(130deg,#0f766e,#0d9488,#14b8a6)",border:"none",color:"#fff",borderRadius:16 }}>
                <div style={{ display:"flex",gap:14,alignItems:"center" }}>
                  <div style={{ width:50,height:50,borderRadius:13,background:"rgba(255,255,255,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:18 }}>{company.logo}</div>
                  <div><div style={{ fontWeight:800,fontSize:18 }}>{company.name}</div><div style={{ fontSize:13,opacity:.85,marginTop:2 }}>{company.industry} · {company.location}</div></div>
                </div>
                <span style={{ background:"rgba(255,255,255,.2)",color:"#fff",padding:"4px 14px",borderRadius:20,fontSize:12,fontWeight:600 }}>Verified Partner ✓</span>
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:20 }}>
                <StatCard label="Active Listings" value={myI.length} accent="#0d9488"/>
                <StatCard label="Total Applications" value={allApps.length} accent="#2563eb"/>
                <StatCard label="Shortlisted" value={allApps.filter(a=>a.status==="Shortlisted").length} accent="#7c3aed"/>
                <StatCard label="Selected" value={allApps.filter(a=>a.status==="Selected").length} accent="#059669"/>
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
                <div className="card" style={{ padding:"22px" }}>
                  <div className="section-title">Application Pipeline</div>
                  {myI.map(i=>(
                    <div key={i.id} style={{ marginBottom:14 }}>
                      <div style={{ display:"flex",justifyContent:"space-between",fontSize:12.5,marginBottom:5 }}>
                        <span style={{ fontWeight:500 }}>{i.role}</span>
                        <span className="mono" style={{ fontSize:11,color:"var(--text3)" }}>{i.applications.length}/{i.openings}</span>
                      </div>
                      <Bar value={(i.applications.length/i.openings)*100} color="#0d9488" h={7}/>
                    </div>
                  ))}
                </div>
                <div className="card" style={{ padding:"22px" }}>
                  <div className="section-title">Applicant Skills Overview</div>
                  {(()=>{
                    const ids=[...new Set(allApps.map(a=>a.studentId))];
                    const counts={};
                    data.students.filter(s=>ids.includes(s.id)).flatMap(s=>s.skills).forEach(sk=>{counts[sk]=(counts[sk]||0)+1;});
                    return Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([sk,cnt],i)=>(
                      <div key={sk} style={{ marginBottom:9 }}>
                        <div style={{ display:"flex",justifyContent:"space-between",fontSize:12.5,marginBottom:4,color:"var(--text2)" }}><span>{sk}</span><span className="mono" style={{ fontSize:11 }}>{cnt}</span></div>
                        <Bar value={ids.length?( cnt/ids.length)*100:0} color="#2563eb" h={5}/>
                      </div>
                    ));
                  })()}
                </div>
              </div>
            </div>
          )}

          {page==="profile"&&(
            <div className="fade-up" style={{ maxWidth:580 }}>
              <div className="card" style={{ padding:"24px" }}>
                <div className="section-title">Company Information</div>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
                  {[["Company Name",company.name],["Industry",company.industry],["Location",company.location],["Website",company.website],["Contact Email",company.contact]].map(([l,v])=>(
                    <Field key={l} label={l}><input defaultValue={v}/></Field>
                  ))}
                </div>
                <Field label="About the Company"><textarea rows="3" defaultValue="TechNova Labs is an AI-first software company building next-generation developer tools and platforms."/></Field>
                <button className="btn btn-teal" onClick={()=>toast_("Profile updated!")}>Save Changes</button>
              </div>
            </div>
          )}

          {page==="post"&&(
            <div className="fade-up" style={{ maxWidth:620 }}>
              <div className="card" style={{ padding:"26px" }}>
                <div className="section-title">New Internship Details</div>
                <Field label="Role / Position Title"><input placeholder="e.g. Full Stack Developer Intern"/></Field>
                <Field label="Required Skills (comma-separated)"><input placeholder="e.g. React, Node.js, MongoDB"/></Field>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12 }}>
                  <Field label="Duration"><input placeholder="e.g. 3 months"/></Field>
                  <Field label="Openings"><input type="number" placeholder="e.g. 4"/></Field>
                  <Field label="Mode"><select><option>Remote</option><option>Onsite</option><option>Hybrid</option></select></Field>
                  <Field label="Stipend Type"><select><option>Paid</option><option>Unpaid</option><option>Performance-based</option></select></Field>
                  <Field label="Stipend Amount"><input placeholder="e.g. ₹15,000/month"/></Field>
                  <Field label="Application Deadline"><input type="date"/></Field>
                </div>
                <Field label="Target Departments"><select><option>All Departments</option><option>Computer Science</option><option>Electronics</option><option>Mechanical</option><option>MBA</option></select></Field>
                <Field label="Role Description"><textarea rows="4" placeholder="Describe responsibilities and requirements..."/></Field>
                <button className="btn btn-teal" style={{ width:"100%",justifyContent:"center",padding:"12px" }} onClick={()=>{toast_("Internship posted!");setPage("listings");}}>Post Internship →</button>
              </div>
            </div>
          )}

          {page==="listings"&&(
            <div className="fade-up" style={{ display:"flex",flexDirection:"column",gap:12 }}>
              <div style={{ display:"flex",justifyContent:"flex-end" }}>
                <button className="btn btn-teal" onClick={()=>setPage("post")}>+ Post New Internship</button>
              </div>
              {myI.map(i=>(
                <div key={i.id} className="card" style={{ padding:"20px 24px" }}>
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12 }}>
                    <div>
                      <div style={{ fontWeight:700,fontSize:15 }}>{i.role}</div>
                      <div style={{ fontSize:12.5,color:"var(--text2)",marginTop:3 }}>Deadline: {i.deadline}</div>
                    </div>
                    <div style={{ textAlign:"right" }}>
                      <div style={{ fontWeight:700,color:"#059669",fontSize:14 }}>{i.stipend}</div>
                      <div style={{ fontSize:11,color:"var(--text3)",marginTop:2 }}>{i.applications.length} applications</div>
                    </div>
                  </div>
                  <div style={{ display:"flex",gap:7,flexWrap:"wrap",marginBottom:12 }}>
                    <Tag text={i.mode} v={i.mode==="Remote"?"teal":i.mode==="Onsite"?"blue":"purple"}/>
                    <Tag text={i.type} v={i.type==="Paid"?"green":i.type==="Unpaid"?"rose":"amber"}/>
                    <Tag text={`${i.openings} openings`} v="slate"/>
                    <Tag text={i.duration} v="slate"/>
                  </div>
                  <div style={{ display:"flex",gap:6,flexWrap:"wrap",marginBottom:14 }}>{i.skills.map(sk=><Tag key={sk} text={sk} v="indigo"/>)}</div>
                  <div style={{ display:"flex",gap:8 }}>
                    <button className="btn btn-ghost" style={{ fontSize:11.5 }} onClick={()=>setPage("applications")}>View Applications ({i.applications.length})</button>
                    <button className="btn btn-ghost" style={{ fontSize:11.5 }}>Edit</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {page==="applications"&&(
            <div className="fade-up">
              {myI.map(i=>(
                <div key={i.id} style={{ marginBottom:26 }}>
                  <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:10 }}>
                    <div style={{ fontWeight:700,fontSize:14 }}>{i.role}</div>
                    <Tag text={`${i.applications.length} applicants`} v="slate"/>
                  </div>
                  {i.applications.length===0
                    ?<div className="card" style={{ padding:"20px",textAlign:"center",color:"var(--text3)",fontSize:13 }}>No applications received yet</div>
                    :i.applications.map(app=>{
                      const s=data.students.find(st=>st.id===app.studentId);
                      const SV={Applied:"amber",Shortlisted:"teal",Selected:"green",Rejected:"rose"};
                      return s?(
                        <div key={app.studentId} className="card" style={{ padding:"16px 20px",marginBottom:8 }}>
                          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                            <div style={{ display:"flex",gap:14,alignItems:"center" }}>
                              <Avatar name={s.name} size={38} bg="#eff6ff" color="#2563eb"/>
                              <div>
                                <div style={{ fontWeight:600,fontSize:14 }}>{s.name}</div>
                                <div style={{ fontSize:12,color:"var(--text2)",marginTop:2 }}>{s.dept} · Year {s.year} · <span className="mono" style={{ fontSize:11 }}>CGPA {s.cgpa}</span></div>
                                <div style={{ display:"flex",gap:4,marginTop:6,flexWrap:"wrap" }}>
                                  {s.skills.slice(0,3).map(sk=><Tag key={sk} text={sk} v="slate"/>)}
                                  {data.certs.filter(c=>c.studentId===s.id&&c.verified).length>0&&<Tag text={`${data.certs.filter(c=>c.studentId===s.id&&c.verified).length} certs`} v="green"/>}
                                </div>
                              </div>
                            </div>
                            <div style={{ display:"flex",alignItems:"center",gap:8 }}>
                              <Tag text={app.status} v={SV[app.status]||"slate"}/>
                              <select value={app.status} onChange={e=>updateStatus(i.id,app.studentId,e.target.value)} style={{ width:130,fontSize:12 }}>
                                <option>Applied</option><option>Shortlisted</option><option>Selected</option><option>Rejected</option>
                              </select>
                              <button className="btn btn-ghost" style={{ fontSize:11 }} onClick={()=>setModal({type:"fb",s,i})}>+ Feedback</button>
                            </div>
                          </div>
                          {app.feedback&&<div style={{ marginTop:10,padding:"9px 13px",background:"#ecfdf5",border:"1.5px solid #a7f3d0",borderRadius:9,fontSize:12.5,color:"#065f46" }}>💬 {app.feedback}</div>}
                        </div>
                      ):null;
                    })}
                </div>
              ))}
            </div>
          )}

          {page==="search"&&(
            <div className="fade-up">
              <div className="card" style={{ padding:"14px 18px",marginBottom:16,display:"flex",gap:12,flexWrap:"wrap",alignItems:"center" }}>
                <input style={{ flex:1 }} placeholder="🔍  Search by skill..." value={sFilter.skill} onChange={e=>setSFilter(f=>({...f,skill:e.target.value}))}/>
                <select style={{ width:170 }} value={sFilter.dept} onChange={e=>setSFilter(f=>({...f,dept:e.target.value}))}>
                  <option>All</option><option>Computer Science</option><option>Electronics</option><option>Mechanical</option><option>MBA</option>
                </select>
                <select style={{ width:110 }} value={sFilter.year} onChange={e=>setSFilter(f=>({...f,year:e.target.value}))}>
                  <option>All</option><option>2025</option><option>2026</option>
                </select>
                <span style={{ fontSize:12,color:"var(--text3)" }}>{filtStudents.length} students</span>
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12 }}>
                {filtStudents.map(s=>(
                  <div key={s.id} className="card card-hover" style={{ padding:"20px" }}>
                    <div style={{ display:"flex",gap:12,alignItems:"center",marginBottom:12 }}>
                      <Avatar name={s.name} size={40} bg="#eff6ff" color="#2563eb"/>
                      <div>
                        <div style={{ fontWeight:700,fontSize:14 }}>{s.name}</div>
                        <div style={{ fontSize:12,color:"var(--text2)" }}>{s.dept} · <span className="mono">CGPA {s.cgpa}</span> · {s.year}</div>
                      </div>
                    </div>
                    <div style={{ display:"flex",flexWrap:"wrap",gap:6,marginBottom:10 }}>{s.skills.map(sk=><Tag key={sk} text={sk} v="indigo"/>)}</div>
                    <div style={{ display:"flex",gap:12,fontSize:12,color:"var(--text2)",marginBottom:12 }}>
                      <span>🏆 {data.certs.filter(c=>c.studentId===s.id).length} certs</span>
                      <span>💼 {s.internships.length} internships</span>
                    </div>
                    <button className="btn btn-ghost" style={{ fontSize:11.5,width:"100%",justifyContent:"center" }}>View Full Profile →</button>
                  </div>
                ))}
                {filtStudents.length===0&&<div style={{ gridColumn:"span 2",textAlign:"center",padding:"40px",color:"var(--text3)" }}>No students match the filters.</div>}
              </div>
            </div>
          )}

        </div>
      </div>
      {modal?.type==="fb"&&<Modal title={`Feedback — ${modal.s?.name}`} onClose={()=>setModal(null)}>
        <div style={{ fontSize:13,color:"var(--text2)",marginBottom:14 }}>For: <strong style={{ color:"var(--text)" }}>{modal.i?.role}</strong></div>
        <Field label="Rating"><div style={{ display:"flex",gap:8 }}>{[1,2,3,4,5].map(r=><button key={r} style={{ width:38,height:38,borderRadius:9,background:"#fffbeb",border:"1.5px solid #fde68a",cursor:"pointer",fontSize:18 }}>⭐</button>)}</div></Field>
        <Field label="Written Feedback"><textarea rows="4" placeholder="Your assessment of this candidate..."/></Field>
        <button className="btn btn-teal" style={{ width:"100%",justifyContent:"center" }} onClick={()=>{toast_("Feedback saved!");setModal(null);}}>Save Feedback</button>
      </Modal>}
      {toast&&<Toast msg={toast}/>}
    </div>
  );
}

/* ═══════════════════════════════
   FACULTY PORTAL
═══════════════════════════════ */
function FacultyPortal({ data, setData, onExit }) {
  const [page,setPage]=useState("dashboard");
  const [modal,setModal]=useState(null);
  const [toast,setToast]=useState(null);
  const [flt,setFlt]=useState({dept:"All",year:"All",hasIntern:"All",skill:""});
  const toast_=m=>{setToast(m);setTimeout(()=>setToast(null),3000);};

  const filtered=data.students.filter(s=>{
    if(flt.dept!=="All"&&s.dept!==flt.dept) return false;
    if(flt.year!=="All"&&s.year!==flt.year) return false;
    if(flt.hasIntern==="Yes"&&s.internships.length===0) return false;
    if(flt.hasIntern==="No"&&s.internships.length>0) return false;
    if(flt.skill&&!s.skills.some(sk=>sk.toLowerCase().includes(flt.skill.toLowerCase()))) return false;
    return true;
  });
  const readiness=s=>Math.min(100,s.cgpa*5+s.internships.length*20+data.certs.filter(c=>c.studentId===s.id&&c.verified).length*10+s.skills.length*3);
  const rColor=r=>r>70?"#059669":r>40?"#d97706":"#e11d48";

  const nav=[{id:"dashboard",label:"Dashboard"},{id:"monitor",label:"Student Monitor"},{id:"validate",label:"Validate Skills"},{id:"internships",label:"Internship Activity"},{id:"analytics",label:"Analytics"},{id:"reports",label:"Reports"}];
  const titles={dashboard:"Faculty Dashboard",monitor:"Student Monitor",validate:"Validate Skills",internships:"Internship Activity",analytics:"Skill Analytics",reports:"Reports & Accreditation"};
  const facNotifs=data.notifications.filter(n=>n.to==="faculty");

  return (
    <div style={{ display:"flex",minHeight:"100vh" }}>
      <Sidebar items={nav} active={page} onNav={setPage} portalLabel="Faculty" accentColor="#d97706" userName="Dr. Meena Iyer" onLogout={onExit}/>
      <div style={{ flex:1,display:"flex",flexDirection:"column",overflow:"hidden",background:"var(--bg)" }}>
        <TopBar title={titles[page]} notifCount={facNotifs.length} notifKey="faculty" notifs={data.notifications}/>
        <div style={{ flex:1,overflowY:"auto",padding:"26px 28px" }}>

          {page==="dashboard"&&(
            <div className="fade-up">
              <div className="card" style={{ padding:"20px 24px",marginBottom:20,background:"linear-gradient(130deg,#92400e,#d97706,#fbbf24)",border:"none",color:"#fff",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"space-between" }}>
                <div>
                  <div style={{ fontSize:13,opacity:.8,marginBottom:4 }}>Welcome back,</div>
                  <div style={{ fontWeight:800,fontSize:20 }}>Dr. Meena Iyer</div>
                  <div style={{ fontSize:13,opacity:.85,marginTop:2 }}>Placement Officer · Computer Science</div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontWeight:800,fontSize:32,fontFamily:"'JetBrains Mono',monospace" }}>{Math.round((data.students.filter(s=>s.internships.length>0).length/data.students.length)*100)}%</div>
                  <div style={{ fontSize:12,opacity:.8 }}>internship coverage</div>
                </div>
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:20 }}>
                <StatCard label="Total Students" value={data.students.length} accent="#d97706"/>
                <StatCard label="With Internship" value={data.students.filter(s=>s.internships.length>0).length} accent="#059669"/>
                <StatCard label="Pending Certs" value={data.certs.filter(c=>!c.verified).length} accent="#e11d48"/>
                <StatCard label="Placement Ready" value={data.students.filter(s=>s.internships.length>=1&&data.certs.filter(c=>c.studentId===s.id&&c.verified).length>=1).length} accent="#2563eb"/>
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
                <div className="card" style={{ padding:"22px" }}>
                  <div className="section-title">Dept-wise Coverage</div>
                  {["Computer Science","Electronics","Mechanical","MBA"].map((dept,i)=>{
                    const tot=data.students.filter(s=>s.dept===dept).length;
                    const wi=data.students.filter(s=>s.dept===dept&&s.internships.length>0).length;
                    if(!tot) return null;
                    const pct=Math.round((wi/tot)*100);
                    const C=["#4f46e5","#0d9488","#d97706","#e11d48"];
                    return(
                      <div key={dept} style={{ marginBottom:12 }}>
                        <div style={{ display:"flex",justifyContent:"space-between",fontSize:12.5,marginBottom:5,color:"var(--text2)" }}>
                          <span>{dept}</span><span className="mono" style={{ fontSize:11 }}>{pct}% ({wi}/{tot})</span>
                        </div>
                        <Bar value={pct} color={C[i]} h={7}/>
                      </div>
                    );
                  })}
                </div>
                <div className="card" style={{ padding:"22px" }}>
                  <div className="section-title">Students Needing Attention</div>
                  {data.students.filter(s=>s.internships.length===0||!s.resume).map(s=>(
                    <div key={s.id} style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 12px",background:"var(--surface2)",borderRadius:10,marginBottom:8,border:"1.5px solid var(--border)" }}>
                      <div style={{ display:"flex",gap:10,alignItems:"center" }}>
                        <Avatar name={s.name} size={30} bg="#fffbeb" color="#d97706"/>
                        <div>
                          <div style={{ fontSize:13,fontWeight:600 }}>{s.name}</div>
                          <div style={{ fontSize:11,color:"var(--text3)" }}>
                            {s.internships.length===0?"No internship":""}
                            {s.internships.length===0&&!s.resume?" · ":""}
                            {!s.resume?"No resume":""}
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-amber" style={{ fontSize:11 }} onClick={()=>setModal({type:"mentor",s})}>Mentor</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {page==="monitor"&&(
            <div className="fade-up">
              <div className="card" style={{ padding:"14px 18px",marginBottom:16,display:"flex",gap:12,flexWrap:"wrap",alignItems:"center" }}>
                <input style={{ flex:1,minWidth:150 }} placeholder="🔍  Filter by skill..." value={flt.skill} onChange={e=>setFlt(f=>({...f,skill:e.target.value}))}/>
                <select style={{ width:170 }} value={flt.dept} onChange={e=>setFlt(f=>({...f,dept:e.target.value}))}>
                  <option>All</option><option>Computer Science</option><option>Electronics</option><option>Mechanical</option><option>MBA</option>
                </select>
                <select style={{ width:100 }} value={flt.year} onChange={e=>setFlt(f=>({...f,year:e.target.value}))}>
                  <option>All</option><option>2025</option><option>2026</option>
                </select>
                <select style={{ width:150 }} value={flt.hasIntern} onChange={e=>setFlt(f=>({...f,hasIntern:e.target.value}))}>
                  <option>All</option><option value="Yes">Has Internship</option><option value="No">No Internship</option>
                </select>
                <span style={{ fontSize:12,color:"var(--text3)" }}>{filtered.length} students</span>
              </div>
              <div className="card" style={{ overflow:"hidden" }}>
                <table>
                  <thead><tr><th>Student</th><th>Dept</th><th>CGPA</th><th>Skills</th><th>Internships</th><th>Readiness</th><th>Certs</th><th>Action</th></tr></thead>
                  <tbody>
                    {filtered.map(s=>{
                      const r=readiness(s);
                      return(
                        <tr key={s.id}>
                          <td><div style={{ display:"flex",gap:10,alignItems:"center" }}><Avatar name={s.name} size={28} bg="#eff6ff" color="#2563eb"/><div><div>{s.name}</div><div style={{ fontSize:11,color:"var(--text3)" }}>{s.email}</div></div></div></td>
                          <td><Tag text={s.dept.split(" ")[0]} v="amber"/></td>
                          <td><span className="mono" style={{ color:s.cgpa>=8.5?"#059669":s.cgpa>=7?"#d97706":"#e11d48",fontWeight:600 }}>{s.cgpa}</span></td>
                          <td><div style={{ display:"flex",gap:3,flexWrap:"wrap" }}>{s.skills.slice(0,2).map(sk=><Tag key={sk} text={sk} v="slate"/>)}{s.skills.length>2&&<Tag text={`+${s.skills.length-2}`} v="slate"/>}</div></td>
                          <td><span className="mono">{s.internships.length}</span></td>
                          <td style={{ minWidth:130 }}>
                            <div style={{ display:"flex",alignItems:"center",gap:8 }}>
                              <Bar value={r} color={rColor(r)} h={7}/>
                              <span className="mono" style={{ fontSize:11,color:rColor(r),flexShrink:0 }}>{Math.round(r)}%</span>
                            </div>
                          </td>
                          <td><span className="mono">{data.certs.filter(c=>c.studentId===s.id).length}</span></td>
                          <td><button className="btn btn-ghost" style={{ fontSize:11 }} onClick={()=>setModal({type:"mentor",s})}>Feedback</button></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {page==="validate"&&(
            <div className="fade-up">
              <div style={{ padding:"13px 18px",background:"#fffbeb",border:"1.5px solid #fde68a",borderRadius:12,marginBottom:16,fontSize:13,color:"#92400e" }}>
                ℹ️ Validate skills demonstrated by students through internship work, academic projects, or coursework assessments.
              </div>
              {data.students.filter(s=>s.approved).map(s=>(
                <div key={s.id} className="card" style={{ padding:"20px",marginBottom:12 }}>
                  <div style={{ display:"flex",gap:12,alignItems:"center",marginBottom:14 }}>
                    <Avatar name={s.name} size={40} bg="#eff6ff" color="#2563eb"/>
                    <div style={{ flex:1 }}>
                      <div style={{ fontWeight:700,fontSize:14 }}>{s.name}</div>
                      <div style={{ fontSize:12,color:"var(--text2)" }}>{s.dept} · {s.year} · <span className="mono">CGPA {s.cgpa}</span></div>
                    </div>
                    <Tag text={`${s.internships.length} internships`} v={s.internships.length>0?"green":"slate"}/>
                  </div>
                  <div className="section-title" style={{ marginBottom:10 }}>Skills to Validate</div>
                  <div style={{ display:"flex",flexWrap:"wrap",gap:8 }}>
                    {s.skills.map(sk=>(
                      <button key={sk} className="btn btn-ghost" style={{ fontSize:11.5,border:"1.5px solid #bbf7d0",color:"#065f46",background:"#f0fdf4" }} onClick={()=>toast_(`"${sk}" validated for ${s.name}`)}>
                        ✓ {sk}
                      </button>
                    ))}
                  </div>
                  {s.internships.length>0&&<div style={{ marginTop:12 }}><button className="btn btn-amber" style={{ fontSize:11.5 }} onClick={()=>setModal({type:"mentor",s})}>Add Mentor Feedback</button></div>}
                </div>
              ))}
            </div>
          )}

          {page==="internships"&&(
            <div className="fade-up" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14 }}>
              {data.internships.map(i=>{
                const co=data.companies.find(c=>c.id===i.company);
                const applicants=i.applications.map(a=>data.students.find(s=>s.id===a.studentId)).filter(Boolean);
                return(
                  <div key={i.id} className="card" style={{ padding:"20px" }}>
                    <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12 }}>
                      <div>
                        <div style={{ fontWeight:700,fontSize:14 }}>{i.role}</div>
                        <div style={{ fontSize:12,color:"var(--text2)",marginTop:2 }}>{co?.name} · {i.mode}</div>
                      </div>
                      <Tag text={i.type} v={i.type==="Paid"?"green":i.type==="Unpaid"?"rose":"amber"}/>
                    </div>
                    <div style={{ display:"flex",gap:5,flexWrap:"wrap",marginBottom:12 }}>{i.skills.map(sk=><Tag key={sk} text={sk} v="indigo"/>)}</div>
                    <div style={{ fontSize:12,color:"var(--text2)",marginBottom:8,fontWeight:600 }}>Applicants ({applicants.length})</div>
                    {applicants.map(s=>{
                      const app=i.applications.find(a=>a.studentId===s.id);
                      const SV={Applied:"amber",Shortlisted:"teal",Selected:"green"};
                      return(
                        <div key={s.id} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",background:"var(--surface2)",borderRadius:8,marginBottom:6 }}>
                          <div style={{ display:"flex",gap:8,alignItems:"center" }}>
                            <Avatar name={s.name} size={24} bg="#eff6ff" color="#2563eb"/>
                            <span style={{ fontSize:12.5,fontWeight:500 }}>{s.name}</span>
                          </div>
                          <div style={{ display:"flex",gap:6,alignItems:"center" }}>
                            <Tag text={app.status} v={SV[app.status]||"slate"}/>
                            {s.progress>0&&<span className="mono" style={{ fontSize:10,color:"#059669" }}>{s.progress}%</span>}
                          </div>
                        </div>
                      );
                    })}
                    {applicants.length===0&&<div style={{ fontSize:12,color:"var(--text3)",textAlign:"center",padding:"8px" }}>No student applications</div>}
                  </div>
                );
              })}
            </div>
          )}

          {page==="analytics"&&(
            <div className="fade-up">
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
                <div className="card" style={{ padding:"22px" }}>
                  <div className="section-title">Placement Readiness Score</div>
                  {data.students.map(s=>{
                    const r=readiness(s);
                    return(
                      <div key={s.id} style={{ marginBottom:12 }}>
                        <div style={{ display:"flex",justifyContent:"space-between",fontSize:12.5,marginBottom:5 }}>
                          <span style={{ fontWeight:500 }}>{s.name}</span>
                          <span className="mono" style={{ color:rColor(r),fontSize:12 }}>{Math.round(r)}%</span>
                        </div>
                        <Bar value={r} color={rColor(r)} h={8}/>
                        <div style={{ fontSize:11,color:"var(--text3)",marginTop:3 }}>{s.dept} · {s.internships.length} intern · {data.certs.filter(c=>c.studentId===s.id&&c.verified).length} cert</div>
                      </div>
                    );
                  })}
                </div>
                <div className="card" style={{ padding:"22px" }}>
                  <div className="section-title">Skill Gap Analysis</div>
                  <table>
                    <thead><tr><th>Skill</th><th>Students</th><th>Demand</th><th>Gap</th></tr></thead>
                    <tbody>
                      {[["React",1,"High","Medium"],["Python",1,"Very High","High"],["Cloud/AWS",1,"High","Medium"],["ML / AI",0,"Very High","Critical"],["DevOps",0,"High","High"]].map(([sk,cnt,demand,gap])=>(
                        <tr key={sk}>
                          <td>{sk}</td>
                          <td><span className="mono">{cnt}/{data.students.length}</span></td>
                          <td><Tag text={demand} v={demand==="Very High"?"rose":"amber"}/></td>
                          <td><Tag text={gap} v={gap==="Critical"?"rose":gap==="High"?"amber":"teal"}/></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="card" style={{ padding:"22px" }}>
                  <div className="section-title">Internship Mode Distribution</div>
                  {["Remote","Onsite","Hybrid"].map((mode,i)=>{
                    const cnt=data.internships.filter(x=>x.mode===mode).length;
                    const C=["#0d9488","#2563eb","#7c3aed"];
                    return(
                      <div key={mode} style={{ marginBottom:12 }}>
                        <div style={{ display:"flex",justifyContent:"space-between",fontSize:12.5,marginBottom:5,color:"var(--text2)" }}>
                          <span>{mode}</span><span className="mono" style={{ fontSize:11 }}>{cnt} listings</span>
                        </div>
                        <Bar value={(cnt/data.internships.length)*100} color={C[i]} h={8}/>
                      </div>
                    );
                  })}
                  <div style={{ marginTop:18 }}>
                    <div className="section-title">Stipend Type</div>
                    {["Paid","Unpaid","Performance"].map((type,i)=>{
                      const cnt=data.internships.filter(x=>x.type===type).length;
                      const C=["#059669","#e11d48","#d97706"];
                      return(
                        <div key={type} style={{ marginBottom:10 }}>
                          <div style={{ display:"flex",justifyContent:"space-between",fontSize:12.5,marginBottom:5,color:"var(--text2)" }}>
                            <span>{type}</span><span className="mono" style={{ fontSize:11 }}>{Math.round((cnt/data.internships.length)*100)}%</span>
                          </div>
                          <Bar value={(cnt/data.internships.length)*100} color={C[i]} h={6}/>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="card" style={{ padding:"22px" }}>
                  <div className="section-title">Certification Summary</div>
                  {data.students.map(s=>{
                    const mine=data.certs.filter(c=>c.studentId===s.id);
                    return(
                      <div key={s.id} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0",borderBottom:"1px solid var(--border)" }}>
                        <span style={{ fontSize:13,fontWeight:500 }}>{s.name}</span>
                        <div style={{ display:"flex",gap:6 }}>
                          {mine.filter(c=>c.verified).length>0&&<Tag text={`${mine.filter(c=>c.verified).length} verified`} v="green"/>}
                          {mine.filter(c=>!c.verified).length>0&&<Tag text={`${mine.filter(c=>!c.verified).length} pending`} v="amber"/>}
                          {mine.length===0&&<Tag text="None" v="slate"/>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {page==="reports"&&(
            <div className="fade-up">
              <div style={{ padding:"13px 18px",background:"#fffbeb",border:"1.5px solid #fde68a",borderRadius:12,marginBottom:20,fontSize:13,color:"#92400e" }}>
                📋 Generate reports for placement preparation, NAAC / NBA accreditation documentation, and internal academic review.
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14 }}>
                {[
                  { title:"Placement Readiness",  desc:"Student-wise readiness scores with internship, skill & cert breakdown",  icon:"🎯", bg:"#eef2ff", acc:"#4f46e5" },
                  { title:"Internship Engagement", desc:"Dept-wise participation rates and company engagement data",              icon:"💼", bg:"#eff6ff", acc:"#2563eb" },
                  { title:"Skill Distribution",    desc:"Skills across departments with industry gap analysis",                   icon:"🧩", bg:"#f5f3ff", acc:"#7c3aed" },
                  { title:"NAAC Accreditation",    desc:"Industry exposure & placement stats formatted for accreditation",        icon:"🏛️", bg:"#fffbeb", acc:"#d97706" },
                  { title:"Certificate Audit",     desc:"Verified vs pending certificate listing by student and department",      icon:"🏅", bg:"#fff1f2", acc:"#e11d48" },
                  { title:"Mentor Activity",        desc:"Mentor-wise assignments, feedback submissions & validation counts",    icon:"👩‍🏫",bg:"#f0fdfa", acc:"#0d9488" },
                ].map(r=>(
                  <div key={r.title} className="card card-hover" style={{ padding:"22px",cursor:"pointer" }}>
                    <div style={{ width:46,height:46,borderRadius:12,background:r.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,marginBottom:14,border:`1.5px solid ${r.acc}22` }}>{r.icon}</div>
                    <div style={{ fontWeight:700,fontSize:14,marginBottom:7 }}>{r.title}</div>
                    <div style={{ fontSize:12.5,color:"var(--text2)",lineHeight:1.55,marginBottom:16 }}>{r.desc}</div>
                    <div style={{ display:"flex",gap:8 }}>
                      <button className="btn btn-ghost" style={{ fontSize:11.5 }}>Preview</button>
                      <button className="btn btn-primary" style={{ fontSize:11.5 }} onClick={()=>toast_(`${r.title} exported!`)}>Export PDF</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
      {modal?.type==="mentor"&&<Modal title={`Mentor Feedback — ${modal.s?.name}`} onClose={()=>setModal(null)}>
        <div style={{ display:"flex",gap:12,alignItems:"center",padding:"12px 14px",background:"var(--surface2)",borderRadius:10,marginBottom:16,border:"1.5px solid var(--border)" }}>
          <Avatar name={modal.s?.name} size={36} bg="#eff6ff" color="#2563eb"/>
          <div><div style={{ fontWeight:600,fontSize:13 }}>{modal.s?.name}</div><div style={{ fontSize:11,color:"var(--text3)" }}>{modal.s?.dept} · CGPA {modal.s?.cgpa}</div></div>
        </div>
        <Field label="Progress Status"><select><option>On Track</option><option>Needs Improvement</option><option>Excellent Progress</option><option>At Risk</option></select></Field>
        <Field label="Mentor Feedback"><textarea rows="4" placeholder="Your assessment and guidance for this student..."/></Field>
        <Field label="Recommended Actions"><textarea rows="2" placeholder="e.g. Apply for more internships, improve SQL skills..."/></Field>
        <button className="btn btn-amber" style={{ width:"100%",justifyContent:"center",padding:"11px" }} onClick={()=>{toast_("Feedback saved!");setModal(null);}}>Save Mentor Feedback</button>
      </Modal>}
      {toast&&<Toast msg={toast}/>}
    </div>
  );
}

/* ═══════════════════════════════
   ROOT
═══════════════════════════════ */
export default function App() {
  const [screen,  setScreen]  = useState("college"); // "college" | "login" | portal key
  const [college, setCollege] = useState(null);
  const [data,    setData]    = useState(MOCK);

  if (screen === "college") return <CollegeSelect onSelect={c => { setCollege(c); setScreen("login"); }} />;
  if (screen === "login")   return <Landing onSelect={s => setScreen(s)} college={college} onChangeCollege={() => setScreen("college")} />;

  const p = { data, setData, onExit: () => setScreen("login") };
  if (screen === "admin")   return <AdminPortal   {...p}/>;
  if (screen === "student") return <StudentPortal {...p}/>;
  if (screen === "company") return <CompanyPortal {...p}/>;
  if (screen === "faculty") return <FacultyPortal {...p}/>;
}
