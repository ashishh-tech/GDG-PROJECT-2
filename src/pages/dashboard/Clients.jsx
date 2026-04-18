import { useState } from 'react';
import { HiOutlineSearch, HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineX } from 'react-icons/hi';

function Clients() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    { id: 1, name: 'Lumière Co.', contact: 'Sophie Laurent', email: 'sophie@lumiere.co', phone: '+1 (555) 234-5678', location: 'Paris, France', projects: 2, status: 'Active', totalSpend: '$87,000', joinedDate: 'Jan 2024' },
    { id: 2, name: 'Vertex Capital Inc.', contact: 'James Morrison', email: 'james@vertexcapital.com', phone: '+1 (555) 345-6789', location: 'New York, USA', projects: 3, status: 'Active', totalSpend: '$162,000', joinedDate: 'Oct 2023' },
    { id: 3, name: 'Ethereal Watches', contact: 'Aria Chen', email: 'aria@ethereal.watch', phone: '+1 (555) 456-7890', location: 'Hong Kong', projects: 1, status: 'Active', totalSpend: '$38,000', joinedDate: 'Mar 2024' },
    { id: 4, name: 'Velo Technologies', contact: 'Marcus Webb', email: 'marcus@velotech.io', phone: '+1 (555) 567-8901', location: 'San Francisco, USA', projects: 1, status: 'Paused', totalSpend: '$28,000', joinedDate: 'Feb 2024' },
    { id: 5, name: 'Kinetic Group', contact: 'Rachel Kim', email: 'rachel@kineticgroup.com', phone: '+1 (555) 678-9012', location: 'Seoul, South Korea', projects: 2, status: 'Completed', totalSpend: '$95,000', joinedDate: 'Aug 2023' },
    { id: 6, name: 'Nova Healthcare', contact: 'Dr. Patel', email: 'drpatel@novahealth.com', phone: '+1 (555) 789-0123', location: 'London, UK', projects: 1, status: 'Active', totalSpend: '$55,000', joinedDate: 'Apr 2024' },
  ];

  const filteredClients = clients.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.contact.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="animate-fadeInUp">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <p className="font-inter text-sm text-gray uppercase tracking-wider mb-1">Relationships</p>
          <h1 className="font-manrope font-extrabold text-3xl text-dark">Clients</h1>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white font-manrope font-semibold text-sm px-5 py-3 rounded-lg hover:bg-blue-800 transition-colors">+ Add Client</button>
      </div>

      <div className="flex items-center bg-white border border-border rounded-lg px-4 py-3 gap-2 mb-6 max-w-md">
        <HiOutlineSearch className="text-gray" size={18} />
        <input type="text" placeholder="Search clients..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="flex-1 border-none outline-none font-inter text-sm text-dark bg-transparent" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className={`bg-white rounded-xl border border-border overflow-hidden ${selectedClient ? 'lg:w-3/5' : 'w-full'}`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-lightbg">
                  <th className="text-left font-inter font-semibold text-xs text-gray uppercase px-6 py-3">Client</th>
                  <th className="text-left font-inter font-semibold text-xs text-gray uppercase px-6 py-3 hidden md:table-cell">Contact</th>
                  <th className="text-left font-inter font-semibold text-xs text-gray uppercase px-6 py-3 hidden sm:table-cell">Projects</th>
                  <th className="text-left font-inter font-semibold text-xs text-gray uppercase px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client) => (
                  <tr key={client.id} onClick={() => setSelectedClient(client)} className={`border-b border-border last:border-0 cursor-pointer transition-colors ${selectedClient?.id === client.id ? 'bg-blue-50' : 'hover:bg-lightbg'}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{client.name.charAt(0)}</span>
                        </div>
                        <p className="font-inter font-medium text-sm text-dark">{client.name}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-inter text-sm text-gray hidden md:table-cell">{client.contact}</td>
                    <td className="px-6 py-4 font-inter font-semibold text-sm text-dark hidden sm:table-cell">{client.projects}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${client.status === 'Active' ? 'bg-blue-100 text-primary' : client.status === 'Completed' ? 'bg-green-100 text-green' : 'bg-yellow-100 text-yellow-700'}`}>{client.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {selectedClient && (
          <div className="lg:w-2/5 bg-white rounded-xl border border-border p-6 animate-fadeInUp">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{selectedClient.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-manrope font-bold text-lg text-dark">{selectedClient.name}</h3>
                  <p className="font-inter text-sm text-gray">{selectedClient.contact}</p>
                </div>
              </div>
              <button onClick={() => setSelectedClient(null)} className="text-gray hover:text-dark"><HiOutlineX size={20} /></button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3"><HiOutlineMail className="text-gray" size={18} /><span className="font-inter text-sm text-dark">{selectedClient.email}</span></div>
              <div className="flex items-center gap-3"><HiOutlinePhone className="text-gray" size={18} /><span className="font-inter text-sm text-dark">{selectedClient.phone}</span></div>
              <div className="flex items-center gap-3"><HiOutlineLocationMarker className="text-gray" size={18} /><span className="font-inter text-sm text-dark">{selectedClient.location}</span></div>
            </div>
            <hr className="my-5 border-border" />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-lightbg rounded-lg p-4 text-center">
                <p className="font-manrope font-bold text-xl text-dark">{selectedClient.projects}</p>
                <p className="font-inter text-xs text-gray">Projects</p>
              </div>
              <div className="bg-lightbg rounded-lg p-4 text-center">
                <p className="font-manrope font-bold text-xl text-dark">{selectedClient.totalSpend}</p>
                <p className="font-inter text-xs text-gray">Total Spend</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Clients;
