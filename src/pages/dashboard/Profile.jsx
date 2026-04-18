import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import { HiOutlineUser, HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

function Profile() {
  const { currentUser, userProfile, updateProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', phone: '', city: '', state: '', country: '',
  });

  useEffect(() => {
    if (userProfile) {
      setFormData({
        fullName: userProfile.fullName || '',
        phone: userProfile.phone || '',
        city: userProfile.city || '',
        state: userProfile.state || '',
        country: userProfile.country || '',
      });
    }
  }, [userProfile]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateProfile(formData);
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('Failed to update profile');
    }
    setLoading(false);
  };

  return (
    <div className="animate-fadeInUp max-w-3xl">
      <div className="mb-8">
        <p className="font-inter text-sm text-gray uppercase tracking-wider mb-1">Account</p>
        <h1 className="font-manrope font-extrabold text-3xl text-dark">Profile</h1>
      </div>

      <div className="bg-white rounded-xl border border-border p-6 mb-6 flex flex-col sm:flex-row items-center gap-5">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
          <span className="text-white font-manrope font-bold text-3xl">
            {formData.fullName?.charAt(0)?.toUpperCase() || 'U'}
          </span>
        </div>
        <div className="text-center sm:text-left">
          <h2 className="font-manrope font-bold text-xl text-dark">{formData.fullName || 'User'}</h2>
          <p className="font-inter text-sm text-gray">{currentUser?.email}</p>
          <div className="flex items-center gap-1 justify-center sm:justify-start mt-1">
            <div className={`w-2 h-2 rounded-full ${currentUser?.emailVerified ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
            <span className="font-inter text-xs text-gray">
              {currentUser?.emailVerified ? 'Email Verified' : 'Email Not Verified'}
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-6">
        <h3 className="font-manrope font-bold text-lg text-dark mb-6 flex items-center gap-2">
          <HiOutlineUser className="text-primary" size={20} />
          Personal Information
        </h3>

        <div className="space-y-5">
          <div className="flex flex-col gap-1.5">
            <label className="font-inter font-medium text-sm text-dark">Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
              className="w-full h-12 bg-inputbg border border-border rounded-lg px-4 font-inter text-sm text-dark outline-none focus:border-primary transition-colors" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-inter font-medium text-sm text-dark flex items-center gap-2">
              <HiOutlineMail size={16} /> Email Address
            </label>
            <input type="email" value={currentUser?.email || ''} disabled
              className="w-full h-12 bg-gray-100 border border-border rounded-lg px-4 font-inter text-sm text-gray outline-none cursor-not-allowed" />
            <p className="font-inter text-xs text-gray">Email cannot be changed</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-inter font-medium text-sm text-dark flex items-center gap-2">
              <HiOutlinePhone size={16} /> Phone Number
            </label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
              className="w-full h-12 bg-inputbg border border-border rounded-lg px-4 font-inter text-sm text-dark outline-none focus:border-primary transition-colors" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-inter font-medium text-sm text-dark flex items-center gap-2">
                <HiOutlineLocationMarker size={16} /> City
              </label>
              <input type="text" name="city" value={formData.city} onChange={handleChange}
                className="w-full h-12 bg-inputbg border border-border rounded-lg px-4 font-inter text-sm text-dark outline-none focus:border-primary transition-colors" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-inter font-medium text-sm text-dark">State</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange}
                className="w-full h-12 bg-inputbg border border-border rounded-lg px-4 font-inter text-sm text-dark outline-none focus:border-primary transition-colors" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-inter font-medium text-sm text-dark">Country</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange}
              className="w-full h-12 bg-inputbg border border-border rounded-lg px-4 font-inter text-sm text-dark outline-none focus:border-primary transition-colors" />
          </div>
        </div>

        <button type="submit" disabled={loading}
          className="mt-6 w-full sm:w-auto bg-primary text-white font-manrope font-bold text-sm px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50">
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </form>

      <div className="bg-white rounded-xl border border-red-200 p-6 mt-6">
        <h3 className="font-manrope font-bold text-lg text-red-600 mb-2">Danger Zone</h3>
        <p className="font-inter text-sm text-gray mb-4">Once you delete your account, there is no going back. Please be certain.</p>
        <button className="font-manrope font-semibold text-sm text-red-600 border border-red-300 px-5 py-2 rounded-lg hover:bg-red-50 transition-colors">
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default Profile;
