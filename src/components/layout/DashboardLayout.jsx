import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuth } from '../../context/AuthContext';
import { HiMenu, HiOutlineBell, HiOutlineSearch } from 'react-icons/hi';

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { userProfile } = useAuth();

  return (
    <div className="min-h-screen bg-lightbg">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:ml-[260px]">
        
        <header className="bg-white h-16 flex items-center justify-between px-4 md:px-8 border-b border-border sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-dark">
              <HiMenu size={24} />
            </button>
            <div className="hidden sm:flex items-center bg-lightbg rounded-lg px-3 py-2 gap-2">
              <HiOutlineSearch className="text-gray" size={18} />
              <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none font-inter text-sm text-dark w-48" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative text-gray hover:text-primary transition-colors">
              <HiOutlineBell size={22} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-manrope font-bold text-sm">
                {userProfile?.fullName?.charAt(0)?.toUpperCase() || 'U'}
              </span>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
