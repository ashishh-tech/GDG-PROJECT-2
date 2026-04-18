import { useState } from 'react';
import { HiOutlineFolder, HiOutlineClock, HiOutlineCheckCircle, HiOutlinePause } from 'react-icons/hi';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, name: 'Lumière Atelier', client: 'Lumière Co.', status: 'active', progress: 65, deadline: 'May 15, 2024', description: 'Brand identity and web design for luxury atelier.' },
    { id: 2, name: 'Vertex Capital Rebrand', client: 'Vertex Capital Inc.', status: 'completed', progress: 100, deadline: 'Apr 01, 2024', description: 'Complete digital ecosystem overhaul for fintech firm.' },
    { id: 3, name: 'Ethereal E-Commerce', client: 'Ethereal Watches', status: 'active', progress: 40, deadline: 'Jun 20, 2024', description: 'Premium digital storefront for luxury watch brand.' },
    { id: 4, name: 'Velo Social App', client: 'Velo Technologies', status: 'on-hold', progress: 25, deadline: 'TBD', description: 'Social connection app with minimal, frictionless design.' },
    { id: 5, name: 'Kinetic Retail Platform', client: 'Kinetic Group', status: 'completed', progress: 100, deadline: 'Mar 10, 2024', description: 'Full e-commerce platform redesign with modern UX.' },
    { id: 6, name: 'Nova Health Dashboard', client: 'Nova Healthcare', status: 'active', progress: 80, deadline: 'May 30, 2024', description: 'Patient management dashboard with real-time analytics.' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.status === filter);

  const getStatusBadge = (status) => {
    const styles = { active: 'bg-blue-100 text-primary', completed: 'bg-green-100 text-green', 'on-hold': 'bg-yellow-100 text-yellow-700' };
    const labels = { active: 'Active', completed: 'Completed', 'on-hold': 'On Hold' };
    return <span className={`px-3 py-1 rounded-full text-xs font-semibold font-inter ${styles[status]}`}>{labels[status]}</span>;
  };

  const filters = [
    { key: 'all', label: 'All', icon: <HiOutlineFolder size={16} /> },
    { key: 'active', label: 'Active', icon: <HiOutlineClock size={16} /> },
    { key: 'completed', label: 'Completed', icon: <HiOutlineCheckCircle size={16} /> },
    { key: 'on-hold', label: 'On Hold', icon: <HiOutlinePause size={16} /> },
  ];

  return (
    <div className="animate-fadeInUp">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <p className="font-inter text-sm text-gray uppercase tracking-wider mb-1">Management</p>
          <h1 className="font-manrope font-extrabold text-3xl text-dark">Projects</h1>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white font-manrope font-semibold text-sm px-5 py-3 rounded-lg hover:bg-blue-800 transition-colors">+ New Project</button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <button key={f.key} onClick={() => setFilter(f.key)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-inter text-sm transition-colors ${filter === f.key ? 'bg-primary text-white font-semibold' : 'bg-white text-gray border border-border hover:bg-lightbg'}`}>
            {f.icon}
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-4">
              {getStatusBadge(project.status)}
              <span className="font-inter text-xs text-gray">{project.deadline}</span>
            </div>
            <h3 className="font-manrope font-bold text-lg text-dark mb-1">{project.name}</h3>
            <p className="font-inter text-sm text-primary mb-3">{project.client}</p>
            <p className="font-inter text-sm text-gray mb-5">{project.description}</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-gray-100 rounded-full h-2">
                <div className={`h-2 rounded-full transition-all ${project.progress === 100 ? 'bg-green' : 'bg-primary'}`} style={{ width: `${project.progress}%` }}></div>
              </div>
              <span className="font-inter text-sm font-semibold text-dark">{project.progress}%</span>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <HiOutlineFolder className="mx-auto text-border" size={48} />
          <p className="font-inter text-gray mt-4">No projects found with this filter.</p>
        </div>
      )}
    </div>
  );
}

export default Projects;
