import React, { useState } from 'react';
import { 
  Home, 
  Database, 
  Satellite, 
  Blocks, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings,
  Bell,
  User
} from 'lucide-react';
import { RegistryDashboard } from '../registry/RegistryDashboard';
import { MRVWorkspace } from '../mrv/MRVWorkspace';
import { BlockchainExplorer } from '../blockchain/BlockchainExplorer';
import { CarbonMarketplace } from '../marketplace/CarbonMarketplace';
import { UserRole, Project } from '../../types';

interface DashboardProps {
  userRole: UserRole;
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ userRole, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const mockProjects: Project[] = [
    {
      id: '1',
      name: 'Sundarbans Mangrove Restoration',
      location: 'Bangladesh',
      coordinates: [89.5, 22.5],
      status: 'active',
      creditsIssued: 15000,
      creditsAvailable: 8500,
      price: 25,
      projectType: 'Mangrove Restoration',
      description: 'Large-scale mangrove restoration in the Sundarbans delta',
      images: ['https://images.pexels.com/photos/1655166/pexels-photo-1655166.jpeg?auto=compress&cs=tinysrgb&w=400'],
      verificationBadge: true,
      sdgImpacts: ['Climate Action', 'Life Below Water', 'Life on Land'],
      communityBenefits: 2500,
      biodiversityScore: 9,
      qrCode: 'QR123',
      blockchainCert: 'BC-001',
      trustScore: 94
    },
    {
      id: '2',
      name: 'Tamil Nadu Coastal Protection',
      location: 'Tamil Nadu, India',
      coordinates: [80.2, 13.1],
      status: 'verified',
      creditsIssued: 8500,
      creditsAvailable: 3200,
      price: 30,
      projectType: 'Coastal Wetlands',
      description: 'Protecting and restoring coastal wetlands along Tamil Nadu coast',
      images: ['https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=400'],
      verificationBadge: true,
      sdgImpacts: ['Climate Action', 'Sustainable Communities'],
      communityBenefits: 1800,
      biodiversityScore: 8,
      qrCode: 'QR124',
      blockchainCert: 'BC-002',
      trustScore: 91
    },
    {
      id: '3',
      name: 'Philippines Seagrass Conservation',
      location: 'Palawan, Philippines',
      coordinates: [118.7, 9.5],
      status: 'pending',
      creditsIssued: 5200,
      creditsAvailable: 5200,
      price: 22,
      projectType: 'Seagrass Beds',
      description: 'Conservation and restoration of seagrass ecosystems',
      images: ['https://images.pexels.com/photos/544731/pexels-photo-544731.jpeg?auto=compress&cs=tinysrgb&w=400'],
      verificationBadge: false,
      sdgImpacts: ['Life Below Water', 'Climate Action'],
      communityBenefits: 1200,
      biodiversityScore: 7,
      qrCode: 'QR125',
      blockchainCert: 'BC-003',
      trustScore: 87
    }
  ];

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Home, roles: ['admin', 'buyer', 'researcher', 'company', 'ngo'] },
    { id: 'registry', label: 'Registry', icon: Database, roles: ['admin', 'verifier', 'buyer', 'researcher', 'company', 'ngo'] },
    { id: 'mrv', label: 'MRV Workspace', icon: Satellite, roles: ['admin', 'verifier', 'researcher'] },
    { id: 'blockchain', label: 'Blockchain', icon: Blocks, roles: ['admin', 'buyer', 'researcher', 'company'] },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingCart, roles: ['buyer', 'company'] },
    { id: 'community', label: 'Community', icon: Users, roles: ['community', 'farmer', 'ngo'] },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, roles: ['admin', 'researcher', 'company'] },
    { id: 'settings', label: 'Settings', icon: Settings, roles: ['admin', 'verifier', 'buyer', 'researcher', 'community', 'company', 'farmer', 'ngo'] }
  ];

  const availableMenuItems = menuItems.filter(item => item.roles.includes(userRole));

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
                <h3 className="text-lg font-semibold mb-2">Total Credits</h3>
                <p className="text-3xl font-bold">2.3M</p>
                <p className="text-blue-100">+12% this month</p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl text-white">
                <h3 className="text-lg font-semibold mb-2">CO₂ Offset</h3>
                <p className="text-3xl font-bold">2.3M tons</p>
                <p className="text-green-100">+8% this month</p>
              </div>
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6 rounded-2xl text-white">
                <h3 className="text-lg font-semibold mb-2">Projects</h3>
                <p className="text-3xl font-bold">127</p>
                <p className="text-teal-100">+5 new projects</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-2xl text-white">
                <h3 className="text-lg font-semibold mb-2">Trust Score</h3>
                <p className="text-3xl font-bold">94%</p>
                <p className="text-purple-100">+2% improvement</p>
              </div>
            </div>
            <RegistryDashboard projects={mockProjects.slice(0, 3)} />
          </div>
        );
      case 'registry':
        return <RegistryDashboard projects={mockProjects} />;
      case 'mrv':
        return <MRVWorkspace />;
      case 'blockchain':
        return <BlockchainExplorer />;
      case 'marketplace':
        return <CarbonMarketplace />;
      case 'community':
        return (
          <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Community Portal</h1>
            <div className="text-center text-gray-600">
              <Users size={64} className="mx-auto mb-4 text-gray-400" />
              <p>Community features coming soon...</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              {menuItems.find(item => item.id === activeTab)?.label}
            </h1>
            <div className="text-center text-gray-600">
              <p>This section is under development...</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AC</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">AquaCarbon</h1>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded capitalize">
              {userRole}
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
              <Bell size={20} />
            </button>
            <button 
              onClick={onLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg"
            >
              <User size={20} />
              <span>Profile</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white/70 backdrop-blur-sm border-r border-blue-100 min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              {availableMenuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};