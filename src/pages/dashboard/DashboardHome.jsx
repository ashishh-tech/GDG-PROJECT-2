import { useAuth } from '../../context/AuthContext';
import { HiOutlineTrendingUp, HiOutlineEye, HiOutlineDocumentText, HiOutlineClock } from 'react-icons/hi';

function DashboardHome() {
  const { userProfile } = useAuth();

  return (
    <div className="animate-fadeInUp">
      
      <div className="mb-8">
        <p className="font-inter text-sm text-gray uppercase tracking-wider mb-1">Overview</p>
        <h1 className="font-manrope font-extrabold text-3xl md:text-4xl text-dark">Curated Insights</h1>
      </div>

      {/* stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 border border-border hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="font-inter text-sm text-gray">Total Projects</span>
            <HiOutlineDocumentText className="text-primary" size={20} />
          </div>
          <p className="font-manrope font-bold text-2xl text-dark">12</p>
          <p className="font-inter text-xs text-green mt-1">+3 this month</p>
        </div>
        
        <div className="bg-white rounded-xl p-5 border border-border hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="font-inter text-sm text-gray">Active Clients</span>
            <HiOutlineEye className="text-primary" size={20} />
          </div>
          <p className="font-manrope font-bold text-2xl text-dark">8</p>
          <p className="font-inter text-xs text-green mt-1">+2 new</p>
        </div>
        
        <div className="bg-white rounded-xl p-5 border border-border hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="font-inter text-sm text-gray">Growth Velocity</span>
            <HiOutlineTrendingUp className="text-primary" size={20} />
          </div>
          <p className="font-manrope font-bold text-2xl text-dark">124k</p>
          <p className="font-inter text-xs text-green mt-1">+14% increase</p>
        </div>
        
        <div className="bg-white rounded-xl p-5 border border-border hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="font-inter text-sm text-gray">Avg. Delivery</span>
            <HiOutlineClock className="text-primary" size={20} />
          </div>
          <p className="font-manrope font-bold text-2xl text-dark">18d</p>
          <p className="font-inter text-xs text-green mt-1">On schedule</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* projects */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white rounded-xl p-6 border border-border">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="font-inter font-semibold text-xs text-gray uppercase tracking-wider">In Progress</span>
            </div>
            
            <div className="bg-lightbg rounded-xl p-5">
              <h3 className="font-manrope font-bold text-xl text-dark mb-2">Lumière Atelier</h3>
              <p className="font-inter text-sm text-gray mb-4">Brand identity, architecture and high-fidelity web design. Creating a cohesive digital presence for a luxury brand.</p>
              <div className="flex gap-3 mb-4">
                <div className="w-20 h-16 bg-capsule rounded-lg overflow-hidden">
                  <img src="/images/case-interior.png" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-16 bg-capsule rounded-lg overflow-hidden">
                  <img src="/images/case-furniture.png" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-16 bg-dark rounded-lg flex items-center justify-center">
                  <span className="text-white font-inter text-xs font-medium">+5 more</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-border rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <span className="font-inter text-sm font-semibold text-primary">65%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-border">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 bg-green rounded-full"></div>
              <span className="font-inter font-semibold text-xs text-gray uppercase tracking-wider">Completed</span>
            </div>

            <div className="bg-lightbg rounded-xl p-5">
              <h3 className="font-manrope font-bold text-xl text-dark mb-2">Vertex Capital</h3>
              <p className="font-inter text-sm text-gray mb-4">Full-stack digital ecosystem overhaul for a financial technology firm.</p>
              <div className="flex gap-6">
                <div>
                  <p className="font-manrope font-bold text-2xl text-dark">4.2k</p>
                  <p className="font-inter text-xs text-gray">Consultations Left</p>
                </div>
                <div>
                  <p className="font-manrope font-bold text-2xl text-dark">03</p>
                  <p className="font-inter text-xs text-gray">Case Studies</p>
                </div>
                <button className="ml-auto font-inter font-semibold text-sm text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
                  View Case
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* activity */}
        <div className="bg-white rounded-xl p-6 border border-border">
          <h3 className="font-manrope font-bold text-lg text-dark mb-6">Recent Activity</h3>
          
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">A</span>
              </div>
              <div>
                <p className="font-inter text-sm text-dark"><span className="font-semibold">Alice R.</span> uploaded new assets for Lumière</p>
                <p className="font-inter text-xs text-gray mt-1">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <div>
                <p className="font-inter text-sm text-dark"><span className="font-semibold">Client feedback</span> received on Phase 2</p>
                <p className="font-inter text-xs text-gray mt-1">5 hours ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-dark rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">P</span>
              </div>
              <div>
                <p className="font-inter text-sm text-dark"><span className="font-semibold">Milestone</span> Invoice Launch Completed</p>
                <p className="font-inter text-xs text-gray mt-1">1 day ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-capsule rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-xs font-bold">D</span>
              </div>
              <div>
                <p className="font-inter text-sm text-dark"><span className="font-semibold">Design review</span> scheduled for tomorrow</p>
                <p className="font-inter text-xs text-gray mt-1">1 day ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-border rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-dark text-xs font-bold">S</span>
              </div>
              <div>
                <p className="font-inter text-sm text-dark"><span className="font-semibold">Sprint 4</span> completed successfully</p>
                <p className="font-inter text-xs text-gray mt-1">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
