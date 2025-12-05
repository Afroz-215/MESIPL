const Ace = () => {
  return (
    <div className="w-full min-h-screen text-gray-800 bg-white antialiased overflow-x-hidden">

      {/* ============================= */}
      {/* NAVBAR */}
      {/* ============================= */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Machine Element Singrauli</h1>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-amber-500">About</a>
            <a href="#services" className="hover:text-amber-500">Services</a>
            <a href="#projects" className="hover:text-amber-500">Projects</a>
            <a href="#clients" className="hover:text-amber-500">Clients</a>
            <a href="#contact" className="hover:text-amber-500">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-24 w-full">

        {/* ============================= */}
        {/* HERO SECTION – FULL WIDTH */}
        {/* ============================= */}
        <section className="w-full h-[90vh] flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: "url(https://tse3.mm.bing.net/th/id/OIP.P-SoQRVzU5g9ch8J8fndfwHaE6?rs=1&pid=ImgDetMain&o=7&rm=3)" }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-6 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">World‑Class Engineering, Precision Manufacturing & Heavy Fabrication</h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">Delivering industrial-grade engineering excellence with cutting-edge machining, fabrication, and turnkey project capabilities.</p>
            <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 rounded text-white font-semibold text-lg">Get a Quote</button>
          </div>
        </section>

        {/* ============================= */}
        {/* ABOUT SECTION */}
        {/* ============================= */}
        <section id="about" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">About Us</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Machine Element Singrauli Heavy Engineering is a leading industrial solutions provider specializing in high-precision machining, custom fabrication, heavy equipment design, and turnkey engineering projects.</p>
              <p className="text-gray-700 leading-relaxed mb-4">With advanced CNC machinery, in-house design expertise, and world-class project execution capabilities—we serve multiple sectors including manufacturing, industrial automation, automotive, power plants, construction, and infrastructure.</p>
              <p className="text-gray-700 leading-relaxed">We combine innovative engineering with powerful fabrication capability to deliver unmatched quality and reliability.</p>
            </div>
            <div className="bg-gray-200 h-72 rounded-lg shadow-lg bg-no-repeat bg-cover bg-center autofill:wrap-normal" style={{ backgroundImage: "url('https://alchetron.com/cdn/machine-element-b5e6ad7d-9142-46c2-854f-a4cf355623f-resize-750.jpg')" }} />
          </div>
        </section>

        {/* ============================= */}
        {/* SERVICES */}
        {/* ============================= */}
        <section id="services" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-4xl font-bold text-center mb-16">Our Services</h3>

            <div className="grid md:grid-cols-3 gap-10">

              {[{
                title: "Gearbox Repair and Overhaul",
                desc: "High precision CNC machining solutions for all industrial requirements.",
                img: "https://th.bing.com/th/id/OIP.2SXgLypYRFcxPbXypdna0AHaEK?w=282&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              },{
                title: "Excavator Engine Servicing",
                desc: "Complete fabrication services including cutting, welding, and assembly.",
                img: "https://th.bing.com/th/id/OIP.DkjX4nGjNOPysHj-WvgSfQHaDw?w=322&h=177&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              },{
                title: "Wheel Loader Maintenance",
                desc: "On-site installation and commissioning for industrial systems.",
                img: "https://th.bing.com/th/id/OIP.6W7RLoIta0zyOWERCLo5mAHaEK?w=321&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              },{
                title: "On‑Site Field Support",
                desc: "Professional maintenance and repair for mechanical equipment.",
                img: "https://th.bing.com/th/id/OIP.3xSPZQ3qO0PCfdJg0mgM-wHaE8?w=233&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              },{
                title: "Preventive Maintenance Programs",
                desc: "Tailored engineering solutions designed for your specific needs.",
                img: "https://th.bing.com/th/id/OIP.xiVjpHXDud_TI3ZEN6KONwHaEK?w=260&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              },{
                title: "Parts Supply and Component Testing",
                desc: "Automation system development and integration for industries.",
                img: "https://www.andt.co.in/images/blogs/unnamed-11-20200523183326-1_crop.png"
              }].map((service, i) => (
                <div key={i} className="p-0 border rounded-xl shadow hover:shadow-lg transition bg-white w-full h-52 relative overflow-hidden group">
                  <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${service.img})` }}></div>
                  <div className="absolute bottom-0 left-0 w-full bg-transparent bg-opacity-30 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-xl font-semibold mb-1 text-amber-500">{service.title}</h4>
                    <p className="text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ============================= */}
        {/* CLIENTS SECTION */}
        {/* ============================= */}
        <section id="clients" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-4xl font-bold text-center mb-16">Our Trusted Clients</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center opacity-80">
              {[
                "https://th.bing.com/th/id/R.05acfb15e40b00fbe993eb6ee2a2f0cf?rik=JOQQ7dFCfQ45GA&riu=http%3a%2f%2fgoodlogo.com%2fimages%2flogos%2fntpc_logo_3865.gif",
                "https://cdn.testbook.com/child_pages/logo_og_63b5553a7cd434e8323a7277_1672828254_tb.jpeg",
                "https://static.toiimg.com/thumb/msid-113764979,imgsize-184824,width-400,resizemode-4/113764979.jpg",
                "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/62MQJX4MOJOYTCVF7WHCWEHIYI.jpg",
                "https://etimg.etb2bimg.com/thumb/msid-55715185,imgsize-17551,width-800,height-434,overlay-etenergyworld/essar-power-commissions-hazira-unit-completes-270-mw-project.jpg",
                "https://alchetron.com/cdn/jaypee-group-45610f9a-f94f-4b83-8b64-30e6de10563-resize-750.jpg",
                "https://3.bp.blogspot.com/-IemwZLYlLXc/UCyFQm3xcgI/AAAAAAAAEFk/LrOVzzBANjk/s1600/aditya+birla+hindalco+logo-2.jpg",
                "https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Construction-Company-Contractor-Handyman-Logo-Design-Template-scaled.jpg"
              ].map((src, i) => (
                <div key={i} className="h-20 flex items-center justify-center">
                  <img src={src} alt={`Client ${i+1}`} className="h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================= */}
        {/* WHY CHOOSE US */}
        {/* ============================= */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-4xl font-bold text-center mb-12">Why Choose Us</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[{
                img: "https://www.bing.com/th/id/OIP.2qdSLmcpb5AagJ8p0tBKqgHaFB?w=244&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                title: "Precision Manufacturing",
                desc: "We deliver high-precision engineering and manufacturing solutions with unmatched accuracy."
              },{
                img: "https://th.bing.com/th/id/OIP.xFLD37ewvErEucgZ2kXvnAHaEK?w=287&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                title: "Turnkey Project Execution",
                desc: "From concept to commissioning, we manage projects with efficiency and expertise."
              },{
                img: "https://th.bing.com/th/id/OIP.g1Q0wYh-YX5GMmv7wuPevgHaE7?w=208&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                title: "Reliable Support",
                desc: "Our dedicated support team ensures smooth operations and timely assistance for all projects."
              }].map((item, i) => (
                <div key={i} className="p-6 bg-white border shadow rounded-xl flex flex-col items-center">
                  <img src={item.img} alt={item.title} className="h-24 mb-4 object-contain" />
                  <h4 className="text-xl font-semibold mb-2 text-amber-500">{item.title}</h4>
                  <p className="text-gray-600 text-center leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================= */}
        {/* PROJECTS SECTION */}
        {/* ============================= */}
        <section id="projects" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-4xl font-bold text-center mb-16">Major Projects Delivered</h3>
            <div className="grid md:grid-cols-4 gap-12">
              {[
                "https://rajog.in/wp-content/uploads/2024/02/Custom-Heavy-Fabrication.jpg",
                "https://ktgindustrial.com/wp-content/uploads/2025/04/Overhead-cranes-in-factories-6.jpg",
                "https://i.ytimg.com/vi/wjJXShVEF8Y/maxresdefault.jpg",
                "https://hccindia.com/uploads//product_gallery/0_61987000_1452160748_bogibeel1-%282%29.jpg"
              ].map((src, i) => (
                <div key={i} className="rounded-lg overflow-hidden shadow">
                  <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${src})` }}></div>
                  <div className="p-6 bg-white">
                    <h4 className="text-xl font-semibold mb-3">Project Title {i+1}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Detailed engineering, fabrication, installation and commissioning executed with precision.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================= */}
        {/* CONTACT SECTION */}
        {/* ============================= */}
        <section id="contact" className="py-24 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl font-bold mb-6">Get In Touch</h3>
              <p className="leading-relaxed opacity-90 mb-6">Have a project? Need custom engineering? Our experts are ready to assist.</p>
              <p className="mb-2">📞 +91 98765 43210</p>
              <p className="mb-2">✉️ info@aceengineering.com</p>
              <p>📍 Industrial Area, India</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow text-gray-800">
              <h4 className="text-xl font-semibold mb-4">Send Message</h4>
              <form className="flex flex-col gap-4">
                <input className="p-3 border rounded" placeholder="Name" />
                <input className="p-3 border rounded" placeholder="Email" />
                <textarea className="p-3 border rounded h-32" placeholder="Message" />
                <button className="px-6 py-3 bg-amber-500 rounded text-white font-semibold">Submit</button>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* ============================= */}
      {/* FOOTER */}
      {/* ============================= */}
      <footer className="py-10 bg-black text-center text-white text-sm">
        © 2025 ACE Heavy Engineering. All Rights Reserved.
      </footer>

    </div>
  );
};

export default Ace;
