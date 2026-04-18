import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { HiMenu, HiX } from 'react-icons/hi';

function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="flex justify-between items-center h-[90px] bg-white px-6 md:px-12 relative z-50">
      
      <div className="font-manrope font-extrabold text-2xl text-dark">
        <Link to="/">PRECISION<span className="text-primary">.</span></Link>
      </div>

      <nav className="hidden md:flex">
        <ul className="flex gap-8 lg:gap-11">
          <li><Link to="/" className="font-inter font-medium text-lg text-gray hover:text-primary transition-colors">Home</Link></li>
          <li><Link to="/services" className="font-inter font-medium text-lg text-gray hover:text-primary transition-colors">Services</Link></li>
          <li><Link to="/case-studies" className="font-inter font-medium text-lg text-gray hover:text-primary transition-colors">Case Studies</Link></li>
          <li><Link to="/contact" className="font-inter font-medium text-lg text-gray hover:text-primary transition-colors">Contact</Link></li>
        </ul>
      </nav>

      <div className="hidden md:flex gap-3">
        {currentUser ? (
          <>
            <Link to="/dashboard" className="font-manrope font-semibold text-base text-white bg-primary px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">Dashboard</Link>
            <button onClick={handleLogout} className="font-manrope font-semibold text-base text-dark bg-white border border-border px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="font-manrope font-semibold text-base text-dark bg-white border border-border px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">Login</Link>
            <Link to="/signup" className="font-manrope font-semibold text-base text-white bg-primary px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">Get Started</Link>
          </>
        )}
      </div>

      <button className="md:hidden text-dark text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {menuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-white shadow-lg border-t border-border md:hidden z-50">
          <div className="flex flex-col p-6 gap-4">
            <Link to="/" className="font-inter text-lg text-gray" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/services" className="font-inter text-lg text-gray" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/case-studies" className="font-inter text-lg text-gray" onClick={() => setMenuOpen(false)}>Case Studies</Link>
            <Link to="/contact" className="font-inter text-lg text-gray" onClick={() => setMenuOpen(false)}>Contact</Link>
            <hr className="border-border" />
            {currentUser ? (
              <>
                <Link to="/dashboard" className="font-manrope font-semibold text-center text-white bg-primary py-3 rounded-lg" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="font-manrope font-semibold text-dark border border-border py-3 rounded-lg">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="font-manrope font-semibold text-center text-dark border border-border py-3 rounded-lg" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link to="/signup" className="font-manrope font-semibold text-center text-white bg-primary py-3 rounded-lg" onClick={() => setMenuOpen(false)}>Get Started</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
