import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Zap, MapPin } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { CarbonCredit } from '../../types';

export const CarbonMarketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<CarbonCredit[]>([]);
  const [filters, setFilters] = useState({
    priceRange: 'all',
    location: 'all',
    projectType: 'all',
    sdgImpact: 'all'
  });

  const credits: CarbonCredit[] = [
    {
      id: '1',
      projectId: 'proj-001',
      tokenId: 'BC-001-2024',
      price: 25,
      vintage: '2024',
      quantity: 100,
      status: 'available',
      owner: 'Mangrove Foundation',
      transactionHash: '0x123...',
      certificateUrl: 'https://cert.example.com/bc-001',
      impactBadges: ['Biodiversity Boost', 'Community Benefit']
    },
    {
      id: '2',
      projectId: 'proj-002',
      tokenId: 'BC-002-2024',
      price: 30,
      vintage: '2024',
      quantity: 75,
      status: 'available',
      owner: 'Coastal Restoration Inc',
      transactionHash: '0x456...',
      certificateUrl: 'https://cert.example.com/bc-002',
      impactBadges: ['Climate Resilience', 'Ocean Protection']
    },
    {
      id: '3',
      projectId: 'proj-003',
      tokenId: 'BC-003-2024',
      price: 28,
      vintage: '2024',
      quantity: 200,
      status: 'available',
      owner: 'Blue Carbon Collective',
      transactionHash: '0x789...',
      certificateUrl: 'https://cert.example.com/bc-003',
      impactBadges: ['Biodiversity Boost', 'Community Benefit', 'Climate Resilience']
    }
  ];

  const addToCart = (credit: CarbonCredit) => {
    setCart(prev => [...prev, credit]);
  };

  const removeFromCart = (creditId: string) => {
    setCart(prev => prev.filter(item => item.id !== creditId));
  };

  const getTotalValue = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Carbon Credit Marketplace</h1>
        <p className="text-gray-600">
          Purchase verified blue carbon credits to offset your environmental impact
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold flex items-center">
                <Filter className="mr-2" size={20} />
                Filters
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Prices</option>
                  <option value="0-25">$0 - $25</option>
                  <option value="25-50">$25 - $50</option>
                  <option value="50+">$50+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <select
                  value={filters.location}
                  onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Locations</option>
                  <option value="asia">Asia Pacific</option>
                  <option value="americas">Americas</option>
                  <option value="africa">Africa</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  value={filters.projectType}
                  onChange={(e) => setFilters(prev => ({ ...prev, projectType: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Types</option>
                  <option value="mangrove">Mangrove Restoration</option>
                  <option value="seagrass">Seagrass Conservation</option>
                  <option value="coastal">Coastal Wetlands</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Shopping Cart */}
          <Card className="mt-6">
            <CardHeader>
              <h3 className="text-lg font-semibold flex items-center">
                <ShoppingCart className="mr-2" size={20} />
                Cart ({cart.length})
              </h3>
            </CardHeader>
            <CardContent>
              {cart.length === 0 ? (
                <p className="text-gray-500 text-sm">Your cart is empty</p>
              ) : (
                <div className="space-y-2">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                      <span>{item.tokenId}</span>
                      <div className="flex items-center space-x-2">
                        <span>${item.price}</span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total:</span>
                      <span>${getTotalValue()}</span>
                    </div>
                  </div>
                  <Button size="sm" className="w-full mt-3">
                    Checkout
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Credits Grid */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search carbon credits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {credits.map((credit) => (
              <Card key={credit.id} hover>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {credit.tokenId}
                      </h3>
                      <p className="text-sm text-gray-600">{credit.owner}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-700">
                        ${credit.price}
                      </div>
                      <div className="text-sm text-gray-500">per credit</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Available:</span>
                      <span className="font-medium">{credit.quantity} credits</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Vintage:</span>
                      <span className="font-medium">{credit.vintage}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {credit.impactBadges.map((badge, index) => (
                        <Badge key={index} variant="info" className="text-xs">
                          <Zap size={10} className="mr-1" />
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      onClick={() => addToCart(credit)}
                      disabled={cart.some(item => item.id === credit.id)}
                      className="w-full mt-4"
                    >
                      {cart.some(item => item.id === credit.id) ? 'Added to Cart' : 'Add to Cart'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};