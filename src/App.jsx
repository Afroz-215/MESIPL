import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";



const SERVICES = [
  { id: 1, title: "On-site Accidental Repairs", desc: "Rapid-response mobile crews for Volvo & Scania — minimise downtime with full-site repairs and recovery." },
  { id: 2, title: "Dump Truck Repairs", desc: "Accidental and scheduled maintenance for Caterpillar, Komatsu and other OEM equipment." },
  { id: 3, title: "Engine & Gearbox Overhauls", desc: "Precision overhauls for MTU, CAT, Komatsu engines plus gearbox reconditioning." },
  { id: 4, title: "Complex Troubleshooting", desc: "Advanced diagnostics and repairs for electrical, electronic, hydraulic & pneumatic systems." },
];

const PROJECTS = [
  { id: 1, title: "Open-cast Mine Fleet Revamp", summary: "Comprehensive engine and driveline refurbishment for a 30-unit fleet.", img: "/assets/project-1.jpg" },
  { id: 2, title: "Emergency Recovery Service", summary: "24/7 on-site recovery and repair for tipper rollover incident.", img: "/assets/project-2.jpg" },
];

const NEWS = [
  { id: 1, title: "MESIPL expands workshop capacity", date: "2025-09-10", excerpt: "New machining bay and engine test cell now operational." },
  { id: 2, title: "OEM partnership established", date: "2025-05-20", excerpt: "Authorized service partner for key OEM components in the region." },
];

const CLIENTS = ["Reliance Power", "NCC", "Hindalco", "Dilip Buildcon", "Thriveni", "GRIL", "Sainik Mining"];
const BRANDS = ["Volvo", "Scania", "Komatsu", "Hyundai", "CAT", "Tata Motors", "MTU", "Hamm"];

const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 md:px-8 ${className}`}>{children}</div>
);

const IconCheck = ({ className = "w-5 h-5 inline-block mr-2" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const IconBriefcase = ({ className = "w-6 h-6 inline-block mr-2" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2" />
  </svg>
);

const App = () => {
  const companyName = "Machine Elements Singrauli India Pvt. Ltd. (MESIPL)";
  const shortName = "MESIPL";
  const phone = "+91 XXXXXXXXXX";
  const email = "info@mesipl.example";
  const addressLine1 = "Workshop & Head Office: Singrauli, Madhya Pradesh";
  const tagline = "Reliable solutions for mining & heavy construction equipment";
  const logo = "/assets/logo.png";
  const heroImage = "https://tse3.mm.bing.net/th/id/OIP.P-SoQRVzU5g9ch8J8fndfwHaE6?rs=1&pid=ImgDetMain&o=7&rm=3";

  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null);

  const update = (field, value) => setForm(f => ({ ...f, [field]: value }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.includes("@")) return "Please enter a valid email.";
    if (form.phone && form.phone.replace(/\D/g, "").length < 7) return "Please enter a valid phone number.";
    if (!form.message.trim()) return "Please enter a brief message.";
    return null;
  };

  const submit = (e) => {
    e?.preventDefault();
    const err = validate();
    if (err) { setStatus({ type: "error", msg: err }); return; }
    setStatus({ type: "pending", msg: "Sending..." });
    setTimeout(() => setStatus({ type: "success", msg: "Thank you — we will contact you shortly." }), 900);
  };

  return (
    <div className="min-h-screen text-slate-800 antialiased">

      <header className="bg-white shadow sticky top-0 z-50">
        <Container className="py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt={`${shortName} logo`} className="h-10 w-auto object-contain" />
            <div>
              <div className="font-semibold text-sm">{shortName}</div>
              <div className="text-xs text-slate-500">Mining & Construction Equipment</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-sky-700">About</a>
            <a href="#services" className="hover:text-sky-700">Services</a>
            <a href="#projects" className="hover:text-sky-700">Projects</a>
            <a href="#refurb" className="hover:text-sky-700">Refurbishment</a>
            <a href="#clients" className="hover:text-sky-700">Clients</a>
            <a href="#contact" className="font-medium">Contact</a>
          </nav>

          <div className="md:hidden">
            <button aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-md border">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {menuOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> : <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>}
              </svg>
            </button>
          </div>
        </Container>

        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <Container className="py-4">
              <div className="flex flex-col gap-3">
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#refurb" onClick={() => setMenuOpen(false)}>Refurbishment</a>
                <a href="#clients" onClick={() => setMenuOpen(false)}>Clients</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="font-medium">Contact</a>
              </div>
            </Container>
          </div>
        )}
      </header>

      {/* ---------------- HERO SECTION ---------------- */}
<section
  id="home"
  className="relative w-full h-screen flex items-center justify-center bg-gray-100"
>
  {/* Hero Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage:  "url(https://th.bing.com/th/id/OIP.6PoTOxfp8Zuhi_vXoUFmVAHaEp?w=241&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3)",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40" />
</section>
{/* ---------------- END HERO ---------------- */}


      <section id="home" className="pt-12 pb-10 bg-gradient-to-bg from-slate-50 to-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-sm text-slate-600 uppercase tracking-wide">Trusted · Professional · Quality</p>
              <h1 className="text-3xl md:text-4xl font-extrabold mt-3 leading-tight">{companyName}</h1>
              <p className="mt-4 text-slate-700 max-w-xl">{tagline} — field service, heavy overhaul, components refurbishment and emergency recovery for mining fleets.</p>

              <div className="mt-6 flex gap-3">
                <a href="#contact" className="inline-flex items-center bg-sky-700 text-white px-4 py-2 rounded-md shadow hover:opacity-95">Get a Quote</a>
                <a href="#services" className="inline-flex items-center border px-4 py-2 rounded-md">Our Services</a>
              </div>

              <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2"><IconBriefcase /> <span>Established MSME</span></div>
                <div>Phone: <a href={`tel:${phone}`} className="text-slate-800">{phone}</a></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="rounded-lg overflow-hidden shadow-lg">
              <img src={heroImage} alt="MESIPL Workshop" className="w-full h-72 object-cover" />
            </motion.div>
          </div>
        </Container>
      </section>

      <section id="about" className="py-12">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold">About MESIPL</h2>
              <p className="mt-4 text-slate-700">MESIPL is a hands-on engineering partner for mining and heavy construction companies in Central India. We focus on quality, traceability, and quick turnaround — whether it’s an emergency on-site repair or a scheduled engine rebuild in our workshop.</p>

              <ul className="mt-4 space-y-2">
                <li className="flex items-start"><IconCheck /> <span>Skilled technicians with OEM-level experience</span></li>
                <li className="flex items-start"><IconCheck /> <span>State-of-the-art machining & testing facilities</span></li>
                <li className="flex items-start"><IconCheck /> <span>Transparent R&O reports and warranty on workmanship</span></li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-md shadow-sm">
                <h4 className="font-semibold">Mission</h4>
                <p className="text-sm text-slate-600">To keep heavy equipment running safely and efficiently at competitive cost-per-hour.</p>
              </div>

              <div className="bg-white p-5 rounded-md shadow-sm">
                <h4 className="font-semibold">Vision</h4>
                <p className="text-sm text-slate-600">Become the preferred service partner for mining fleets in Central India.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="bg-slate-50 py-12">
        <Container>
          <h2 className="text-2xl font-bold">Our Services</h2>
          <p className="text-sm text-slate-600 mt-2">Field services, workshop overhauls, component refurbishment and diagnostics tailored for heavy equipment.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <article key={s.id} className="bg-white p-6 rounded-lg shadow-sm h-full hover:shadow-md transition">
                <div className="text-sky-700 mb-3 font-semibold">{s.title}</div>
                <p className="text-sm text-slate-600">{s.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="projects" className="py-12">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-2xl font-bold">Selected Projects</h2>

    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          id: 1,
          title: "Gearbox Overhaul Project",
          summary: "Complete disassembly and precision servicing of gearbox units.",
          img: "https://images.unsplash.com/photo-1527430253228-e93688616381"   // image 1
        },
        {
          id: 2,
          title: "Hydraulic Cylinder Repair",
          summary: "Honing, seal replacement, and pressure testing of cylinders.",
          img: "data:image/webp;base64,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"   // image 2
        }
      ].map((p) => (
        <article
          key={p.id}
          className="bg-white rounded-lg shadow-sm overflow-hidden flex gap-4"
        >
          <img
            src={p.img}
            alt={p.title}
            className="w-40 h-28 object-cover"
          />

          <div className="p-4">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-slate-600 mt-2">{p.summary}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


      <section id="refurb" className="bg-slate-50 py-12">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-bold">Sales & Refurbishment</h2>
              <p className="mt-3 text-slate-700">We buy, refurbish and sell components and assemblies with traceable parts and performance testing. Ideal for fleet managers looking to lower CAPEX.</p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li><IconCheck /> Quality-tested exchange units</li>
                <li><IconCheck /> Component-level refurbishment with warranty</li>
                <li><IconCheck /> Supply chain & OEM parts sourcing</li>
              </ul>
            </div>

            <div className="rounded-md overflow-hidden shadow-sm">
              <img src="https://th.bing.com/th/id/OIP.QFdQYUqfwtyVLxFKZ0z6NgHaD4?w=331&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Refurbishment" className="w-full h-56 object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section id="news" className="py-12">
        <Container>
          <h2 className="text-2xl font-bold">News & Updates</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {NEWS.map(n => (
              <article key={n.id} className="bg-white p-4 rounded shadow-sm">
                <div className="text-sm text-slate-500">{new Date(n.date).toLocaleDateString()}</div>
                <h3 className="font-semibold mt-1">{n.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{n.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="clients" className="bg-slate-50 py-12">
        <Container>
          <h2 className="text-2xl font-bold">Clients & Trusted Brands</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="font-semibold">Clients</h4>
              <ul className="text-sm mt-2 space-y-2">
                {CLIENTS.map(c => <li key={c}>• {c}</li>)}
              </ul>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="font-semibold">Brands</h4>
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                {BRANDS.map(b => (
                  <span key={b} className="px-3 py-2 bg-slate-100 rounded">{b}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="font-semibold">Gallery</h4>
              {/* <div className="mt-3 grid grid-cols-2 gap-2">
                <img src="/assets/gallery-1.jpg" alt="gallery1" className="h-20 w-full object-cover rounded" />
                <img src="/assets/gallery-2.jpg" alt="gallery2" className="h-20 w-full object-cover rounded" />
              </div> */}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="bg-white rounded-lg shadow-md p-8 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold">Why Choose MESIPL?</h2>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex items-start"><IconCheck /> Registered MSME in Singrauli.</li>
                <li className="flex items-start"><IconCheck /> Transparent diagnostics & reporting.</li>
                <li className="flex items-start"><IconCheck /> Full engine overhaul capability.</li>
                <li className="flex items-start"><IconCheck /> Refurbishment & tested exchange units.</li>
                <li className="flex items-start"><IconCheck /> Trusted by major contractors across Central India.</li>
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <img src="https://slidemodel.com/wp-content/uploads/21818-01-why-choose-us-template-for-powerpoint-16x9-4-870x489.jpg" alt="Why choose" className="rounded-md shadow-md w-full h-56 object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="py-12 bg-slate-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-start">

            <form onSubmit={submit} className="bg-white rounded-md p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Get a Quote / Enquiry</h3>
              <div className="mt-4 space-y-3">
                <input value={form.name} onChange={e=>update('name', e.target.value)} type="text" placeholder="Name" className="w-full border px-3 py-2 rounded" />
                <input value={form.email} onChange={e=>update('email', e.target.value)} type="email" placeholder="Email" className="w-full border px-3 py-2 rounded" />
                <input value={form.phone} onChange={e=>update('phone', e.target.value)} type="tel" placeholder="Phone" className="w-full border px-3 py-2 rounded" />
                <textarea value={form.message} onChange={e=>update('message', e.target.value)} placeholder="Project / enquiry details" className="w-full border px-3 py-2 rounded h-28"></textarea>

                <div className="flex items-center gap-3">
                  <button type="submit" className="bg-sky-700 text-white px-4 py-2 rounded-md">Send Enquiry</button>
                  <button type="button" className="px-4 py-2 rounded-md border" onClick={()=>setForm({ name:'', email:'', phone:'', message:'' })}>Reset</button>
                </div>

                {status && (
                  <div className={`text-sm mt-2 ${status.type === 'error' ? 'text-red-600' : status.type === 'success' ? 'text-green-600' : 'text-slate-600'}`}>{status.msg}</div>
                )}
              </div>
            </form>

            <div>
              <h4 className="font-semibold">Contact Details</h4>
              <p className="text-sm mt-2">{addressLine1}</p>
              <p className="text-sm">Phone: <a href={`tel:${phone}`}>{phone}</a></p>
              <p className="text-sm">Email: <a href={`mailto:${email}`}>{email}</a></p>

              <div className="mt-6 bg-white p-4 rounded-md shadow-sm text-sm">
                <div className="font-semibold">Operating Hours</div>
                <div className="mt-1">Mon - Sat: 08:00 - 18:00</div>
                <div className="mt-2">Emergency contact available 24/7 for site recovery.</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <footer className="bg-slate-900 text-slate-200 mt-16">
        <Container className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="MESIPL" className="h-12 mb-3" />
            <p className="text-sm leading-relaxed">{companyName} — Registered MSME. Fully equipped workshop in Singrauli.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-sm">{addressLine1}</p>
            <p className="text-sm">Phone: {phone}</p>
            <p className="text-sm">Email: {email}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#services">Services</a></li>
              <li><a href="#refurb">Sales & Refurbishment</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Get a Quote</a></li>
            </ul>
          </div>
        </Container>

        <div className="bg-slate-800 text-slate-400 text-xs py-3 text-center">
          © {new Date().getFullYear()} {shortName}. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
