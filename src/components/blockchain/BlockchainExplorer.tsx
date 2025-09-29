import React, { useState } from 'react';
import { Clock, ExternalLink, Shield, Hash } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Transaction } from '../../types';

export const BlockchainExplorer: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'transactions' | 'certificates' | 'audit'>('transactions');

  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'mint',
      creditId: 'BC-001-2024',
      from: 'System',
      to: '0x1234...5678',
      amount: 1000,
      timestamp: new Date('2024-01-15T10:30:00'),
      txHash: '0xabcd1234efgh5678...',
      verified: true
    },
    {
      id: '2',
      type: 'transfer',
      creditId: 'BC-001-2024',
      from: '0x1234...5678',
      to: '0x9876...5432',
      amount: 500,
      timestamp: new Date('2024-01-20T14:15:00'),
      txHash: '0xefgh5678ijkl9012...',
      verified: true
    },
    {
      id: '3',
      type: 'retire',
      creditId: 'BC-001-2024',
      from: '0x9876...5432',
      to: 'Retired',
      amount: 500,
      timestamp: new Date('2024-01-25T09:45:00'),
      txHash: '0xijkl9012mnop3456...',
      verified: true
    }
  ];

  const certificates = [
    {
      id: 'BC-001-2024',
      projectName: 'Mangrove Restoration Sundarbans',
      quantity: 1000,
      vintage: '2024',
      issueDate: '2024-01-15',
      status: 'active',
      imageUrl: 'https://images.pexels.com/photos/1655166/pexels-photo-1655166.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'BC-002-2024',
      projectName: 'Coastal Wetland Protection',
      quantity: 750,
      vintage: '2024',
      issueDate: '2024-01-20',
      status: 'retired',
      imageUrl: 'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blockchain Explorer</h1>
        <p className="text-gray-600">
          Track carbon credit transactions and verify certificate authenticity
        </p>
      </div>

      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {['transactions', 'certificates', 'audit'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab as any)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                  selectedTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {selectedTab === 'transactions' && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Transaction History</h2>
          {transactions.map((tx) => (
            <Card key={tx.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${
                      tx.type === 'mint' ? 'bg-green-100' :
                      tx.type === 'transfer' ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <Hash className={`${
                        tx.type === 'mint' ? 'text-green-600' :
                        tx.type === 'transfer' ? 'text-blue-600' : 'text-gray-600'
                      }`} size={20} />
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={tx.type === 'mint' ? 'success' : tx.type === 'transfer' ? 'info' : 'primary'}>
                          {tx.type.toUpperCase()}
                        </Badge>
                        {tx.verified && (
                          <Shield className="text-green-500" size={16} />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {tx.amount} credits • {tx.creditId}
                      </p>
                      <p className="text-xs text-gray-500">
                        {tx.from} → {tx.to}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock size={14} className="mr-1" />
                      {tx.timestamp.toLocaleString()}
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink size={14} className="mr-1" />
                      View TX
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {selectedTab === 'certificates' && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">NFT Certificates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <Card key={cert.id} hover>
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={cert.imageUrl}
                      alt={cert.projectName}
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                    <Badge
                      variant={cert.status === 'active' ? 'success' : 'primary'}
                      className="absolute top-3 right-3"
                    >
                      {cert.status}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{cert.projectName}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Certificate ID:</span>
                        <span className="font-mono">{cert.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Quantity:</span>
                        <span>{cert.quantity} tCO₂</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Vintage:</span>
                        <span>{cert.vintage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Issue Date:</span>
                        <span>{cert.issueDate}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      <ExternalLink size={14} className="mr-2" />
                      View Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {selectedTab === 'audit' && (
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900">Smart Contract Audit</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-700 mb-1">100%</div>
                  <div className="text-sm text-green-600">Security Score</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-700 mb-1">0</div>
                  <div className="text-sm text-blue-600">Vulnerabilities</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-700 mb-1">A+</div>
                  <div className="text-sm text-teal-600">Grade</div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Audit Details</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✅ Smart contract deployed with verified bytecode</li>
                  <li>✅ No critical or high-severity vulnerabilities found</li>
                  <li>✅ Implements industry-standard security patterns</li>
                  <li>✅ Gas optimization verified</li>
                  <li>✅ Multi-signature wallet integration</li>
                </ul>
              </div>
              
              <Button variant="outline">
                <ExternalLink size={16} className="mr-2" />
                View Full Audit Report
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};