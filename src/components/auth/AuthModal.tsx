import React, { useState } from 'react';
import { X, User, Building, TreePine, HeartHandshake } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { UserRole } from '../../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (role: UserRole) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedRole, setSelectedRole] = useState<UserRole>('buyer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const roles = [
    { key: 'admin' as const, label: 'Admin', icon: User, desc: 'Platform administration' },
    { key: 'verifier' as const, label: 'Verifier', icon: User, desc: 'Project verification' },
    { key: 'community' as const, label: 'Community Member', icon: HeartHandshake, desc: 'Local stakeholder' },
    { key: 'buyer' as const, label: 'Buyer', icon: Building, desc: 'Purchase carbon credits' },
    { key: 'researcher' as const, label: 'Researcher', icon: User, desc: 'Data analysis' },
    { key: 'company' as const, label: 'Company', icon: Building, desc: 'Corporate sustainability' },
    { key: 'farmer' as const, label: 'Farmer', icon: TreePine, desc: 'Land management' },
    { key: 'ngo' as const, label: 'NGO', icon: HeartHandshake, desc: 'Conservation projects' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(selectedRole);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {isLogin ? 'Welcome Back' : 'Join Our Platform'}
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Your Role
              </label>
              <div className="grid grid-cols-2 gap-3">
                {roles.map((role) => (
                  <div
                    key={role.key}
                    onClick={() => setSelectedRole(role.key)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedRole === role.key
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <role.icon size={20} className="text-blue-600" />
                      <div>
                        <div className="font-medium text-gray-900">{role.label}</div>
                        <div className="text-sm text-gray-500">{role.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              {isLogin ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:text-blue-800"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};