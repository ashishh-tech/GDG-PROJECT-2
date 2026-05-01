function CaseStudies() {
  const base = import.meta.env.BASE_URL;
  const projects = [
    { image: `${base}images/case-interior.png`, tag: 'UX Research & Design', title: 'Lumira Analytics', description: 'A comprehensive redesign of an enterprise data platform, resulting in a 42% increase in user retention.' },
    { image: `${base}images/case_ethereal.png`, tag: 'E-Commerce', title: 'Ethereal Watches', description: 'Crafting a premium digital storefront that translates tangible luxury into a seamless online experience.' },
    { image: `${base}images/case_velo.png`, tag: 'UI / Mobile Design', title: 'Velo Social', description: 'Reimagining social connection through a minimal, frictionless application focused on high-fidelity interaction.' },
    { image: `${base}images/case_vertex.png`, tag: 'Brand Architecture', title: 'Vertex Capital', description: 'Developing a digital-first brand architecture for a leading venture firm, emphasizing stability and innovation.' },
  ];

  const stats = [
    { number: '98%', label: 'Client Retention' },
    { number: '15+', label: 'Design Awards' },
    { number: '2.4x', label: 'Avg. Conversion Lift' },
    { number: '50m', label: 'Users Impacted' },
  ];

  return (
    <div>
      <section className="bg-lightbg px-6 md:px-12 py-16 md:py-24">
        <p className="font-inter font-medium text-base text-green mb-3">Our Work</p>
        <h1 className="font-manrope font-extrabold text-4xl md:text-5xl lg:text-6xl text-dark mb-5">Crafting digital authority.</h1>
        <p className="font-inter text-lg md:text-xl text-gray">Explore how we have helped market leaders redefine their digital presence.</p>
      </section>

      <section className="px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-lightbg rounded-2xl p-5 mb-6 hover:shadow-lg transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-[220px] md:h-[300px] object-cover rounded-xl" />
              <p className="font-inter font-semibold text-sm text-primary mt-5">{project.tag}</p>
              <h3 className="font-manrope font-bold text-2xl text-dark mt-2">{project.title}</h3>
              <p className="font-inter text-base text-gray mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white border border-border rounded-xl flex flex-col items-center justify-center py-8 px-4">
              <span className="font-manrope font-extrabold text-3xl md:text-4xl text-primary">{stat.number}</span>
              <span className="font-inter text-sm text-gray mt-3">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
