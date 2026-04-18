import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { HiOutlineViewGrid, HiOutlineFolder, HiOutlineChartBar, HiOutlineUsers, HiOutlineUser, HiOutlineSupport, HiOutlineLogout, HiOutlinePlus, HiX } from 'react-icons/hi';

function Sidebar({ isOpen, onClose }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const navItems = [
    { name: 'Dashboard', icon: <HiOutlineViewGrid size={20} />, path: '/dashboard' },
    { name: 'Projects', icon: <HiOutlineFolder size={20} />, path: '/dashboard/projects' },
    { name: 'Metrics', icon: <HiOutlineChartBar size={20} />, path: '/dashboard/metrics' },
    { name: 'Clients', icon: <HiOutlineUsers size={20} />, path: '/dashboard/clients' },
    { name: 'Profile', icon: <HiOutlineUser size={20} />, path: '/dashboard/profile' },
  ];

  return (
    <>
      {isOpen && (<div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />)}

      <aside className={`fixed top-0 left-0 h-full w-[260px] bg-white border-r border-border flex flex-col z-50 transform transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="flex items-center justify-between px-6 py-6 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="font-manrope font-bold text-lg text-dark">PrecisionOS</span>
          </div>
          <button onClick={onClose} className="lg:hidden text-gray"><HiX size={20} /></button>
        </div>

        <div className="px-5 py-4">
          <button className="w-full flex items-center justify-center gap-2 bg-primary text-white font-manrope font-semibold text-sm py-3 rounded-lg hover:bg-blue-800 transition-colors">
            <HiOutlinePlus size={18} />
            New Project
          </button>
        </div>

        <nav className="flex-1 px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/dashboard'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg mb-1 font-inter text-sm transition-colors ${isActive ? 'bg-primary text-white font-semibold' : 'text-gray hover:bg-lightbg'}`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="px-3 pb-6 border-t border-border pt-4">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg w-full font-inter text-sm text-gray hover:bg-lightbg transition-colors">
            <HiOutlineSupport size={20} />
            Support
          </button>
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded-lg w-full font-inter text-sm text-gray hover:bg-red-50 hover:text-red-600 transition-colors">
            <HiOutlineLogout size={20} />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
