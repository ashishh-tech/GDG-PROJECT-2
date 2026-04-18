import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    city: '',
    state: '',
    country: '',
  });
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.password || !formData.city || !formData.state || !formData.country) {
      toast.error('Please fill in all fields');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await signup(
        formData.email,
        formData.password,
        formData.fullName,
        formData.phone,
        formData.city,
        formData.state,
        formData.country
      );
      toast.success('Account created! Please verify your email.');
      navigate('/verify-email');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error('An account with this email already exists');
      } else if (error.code === 'auth/weak-password') {
        toast.error('Password is too weak');
      } else {
        toast.error('Sign up failed. Please try again.');
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-lightbg flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 md:p-10 animate-fadeInUp">
        
        <div className="text-center mb-8">
          <h1 className="font-manrope font-extrabold text-3xl text-dark mb-2">
            The Precision Agency
          </h1>
          <p className="font-inter text-gray text-base">
            Create your custom account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <div className="flex flex-col gap-1.5">
            <label className="font-inter font-medium text-sm text-dark">FULL NAME</label>
            <input
              id="signup-name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full h-12 bg-inputbg border border-border rounded-lg px-4 font-inter text-sm text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-inter font-medium text-sm text-dark">EMAIL ADDRESS</label>
            <input
              id="signup-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full h-12 bg-inputbg border border-border rounded-lg px-4 font-inter text-sm text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-inter font-medium text-sm text-dark">PHONE NUMBER</label>
            <input
              id="signup-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full h-12 bg-inputbg border border-border rounded-lg px-4 font-inter text-sm text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-inter font-medium text-sm text-dark">PASSWORD</label>
              <input
                id="signup-password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full h-12 bg-inputbg border border-border rounded-lg px-4 font-inter text-sm text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-inter font-medium text-sm text-dark">CONFIRM PASSWORD</label>
              <input
                id="signup-confirm-password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full h-12 bg-inputbg border border-border rounded-lg px-4 font-inter text-sm text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-inter font-medium text-sm text-dark">CITY</label>
              <input
                id="signup-city"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Mumbai"
                className="w-full h-12 bg-inputbg border border-border rounded-lg px-4 font-inter text-sm text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-inter font-medium text-sm text-dark">STATE</label>
              <input
                id="signup-state"
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Maharashtra"
                className="w-full h-12 bg-inputbg border border-border rounded-lg px-4 font-inter text-sm text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-inter font-medium text-sm text-dark">COUNTRY</label>
            <input
              id="signup-country"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="India"
              className="w-full h-12 bg-inputbg border border-border rounded-lg px-4 font-inter text-sm text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>

          <button
            id="signup-submit"
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-primary text-white font-manrope font-bold text-base rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center mt-6 font-inter text-sm text-gray">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Login
          </Link>
        </p>

        <p className="text-center mt-8 font-inter text-xs text-gray/60">
          © 2024 THE PRECISION AGENCY
        </p>
      </div>
    </div>
  );
}

export default SignUp;
