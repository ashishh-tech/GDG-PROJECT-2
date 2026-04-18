import { HiOutlineTrendingUp, HiOutlineCurrencyDollar, HiOutlineStar, HiOutlineClock } from 'react-icons/hi';

function Metrics() {
  const kpis = [
    { title: 'Total Revenue', value: '$284k', change: '+12.5%', positive: true, icon: <HiOutlineCurrencyDollar size={20} /> },
    { title: 'Active Projects', value: '12', change: '+3 new', positive: true, icon: <HiOutlineTrendingUp size={20} /> },
    { title: 'Client Satisfaction', value: '4.9/5', change: '+0.2', positive: true, icon: <HiOutlineStar size={20} /> },
    { title: 'Avg. Delivery Time', value: '18 days', change: '-2 days', positive: true, icon: <HiOutlineClock size={20} /> },
  ];

  const revenueData = [
    { month: 'Jan', value: 45, amount: '$18k' }, { month: 'Feb', value: 60, amount: '$24k' },
    { month: 'Mar', value: 35, amount: '$14k' }, { month: 'Apr', value: 75, amount: '$30k' },
    { month: 'May', value: 55, amount: '$22k' }, { month: 'Jun', value: 80, amount: '$32k' },
    { month: 'Jul', value: 70, amount: '$28k' }, { month: 'Aug', value: 90, amount: '$36k' },
    { month: 'Sep', value: 65, amount: '$26k' }, { month: 'Oct', value: 85, amount: '$34k' },
    { month: 'Nov', value: 95, amount: '$38k' }, { month: 'Dec', value: 100, amount: '$40k' },
  ];

  const projectTypes = [
    { type: 'Web Design', count: 5, percentage: 42, color: 'bg-primary' },
    { type: 'Branding', count: 3, percentage: 25, color: 'bg-green' },
    { type: 'Marketing', count: 2, percentage: 17, color: 'bg-dark' },
    { type: 'Video', count: 2, percentage: 16, color: 'bg-border' },
  ];

  const performanceData = [
    { project: 'Lumière Atelier', type: 'Web Design', revenue: '$45,000', satisfaction: '4.9', status: 'Active' },
    { project: 'Vertex Capital', type: 'Branding', revenue: '$62,000', satisfaction: '5.0', status: 'Completed' },
    { project: 'Ethereal Watches', type: 'E-Commerce', revenue: '$38,000', satisfaction: '4.8', status: 'Active' },
    { project: 'Velo Social', type: 'App Design', revenue: '$28,000', satisfaction: '4.7', status: 'On Hold' },
    { project: 'Nova Health', type: 'Dashboard', revenue: '$55,000', satisfaction: '4.9', status: 'Active' },
  ];

  return (
    <div className="animate-fadeInUp">
      <div className="mb-8">
        <p className="font-inter text-sm text-gray uppercase tracking-wider mb-1">Analytics</p>
        <h1 className="font-manrope font-extrabold text-3xl text-dark">Metrics</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map((kpi, index) => (
          <div key={index} className="bg-white rounded-xl p-5 border border-border">
            <div className="flex items-center justify-between mb-3">
              <span className="font-inter text-sm text-gray">{kpi.title}</span>
              <span className="text-primary">{kpi.icon}</span>
            </div>
            <p className="font-manrope font-bold text-2xl text-dark">{kpi.value}</p>
            <p className={`font-inter text-xs mt-1 ${kpi.positive ? 'text-green' : 'text-red-500'}`}>{kpi.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-border">
          <h3 className="font-manrope font-bold text-lg text-dark mb-6">Revenue Over Time</h3>
          <div className="flex items-end gap-2 h-48">
            {revenueData.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-1 group">
                <span className="font-inter text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{item.amount}</span>
                <div className="w-full bg-primary/20 rounded-t-md hover:bg-primary transition-colors cursor-pointer" style={{ height: `${item.value}%` }}></div>
                <span className="font-inter text-xs text-gray">{item.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-border">
          <h3 className="font-manrope font-bold text-lg text-dark mb-6">Project Types</h3>
          <div className="space-y-4">
            {projectTypes.map((type, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-inter text-sm text-dark">{type.type}</span>
                  <span className="font-inter text-sm font-semibold text-gray">{type.count} ({type.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div className={`${type.color} h-2.5 rounded-full transition-all`} style={{ width: `${type.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-border text-center">
            <p className="font-manrope font-bold text-3xl text-dark">12</p>
            <p className="font-inter text-sm text-gray">Total Projects</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="font-manrope font-bold text-lg text-dark">Project Performance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-lightbg">
                <th className="text-left font-inter font-semibold text-xs text-gray uppercase tracking-wider px-6 py-3">Project</th>
                <th className="text-left font-inter font-semibold text-xs text-gray uppercase tracking-wider px-6 py-3">Type</th>
                <th className="text-left font-inter font-semibold text-xs text-gray uppercase tracking-wider px-6 py-3">Revenue</th>
                <th className="text-left font-inter font-semibold text-xs text-gray uppercase tracking-wider px-6 py-3">Rating</th>
                <th className="text-left font-inter font-semibold text-xs text-gray uppercase tracking-wider px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.map((row, index) => (
                <tr key={index} className="border-b border-border last:border-0 hover:bg-lightbg transition-colors">
                  <td className="px-6 py-4 font-inter font-medium text-sm text-dark">{row.project}</td>
                  <td className="px-6 py-4 font-inter text-sm text-gray">{row.type}</td>
                  <td className="px-6 py-4 font-inter font-semibold text-sm text-dark">{row.revenue}</td>
                  <td className="px-6 py-4 font-inter text-sm text-dark">⭐ {row.satisfaction}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${row.status === 'Active' ? 'bg-blue-100 text-primary' : row.status === 'Completed' ? 'bg-green-100 text-green' : 'bg-yellow-100 text-yellow-700'}`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Metrics;
