import React, { useState } from 'react';
import { Satellite, Upload, Brain, Bell, TrendingUp, Shield } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const MRVWorkspace: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState('mangrove-restoration-001');

  const mrvData = {
    reportedSequestration: 1250,
    verifiedSequestration: 1180,
    trustScore: 94,
    aiCalculation: 1205,
    status: 'verified'
  };

  const notifications = [
    { id: 1, type: 'verification', message: 'New verification required for Project MR-001', urgent: true },
    { id: 2, type: 'report', message: 'Monthly report due in 3 days for Project MR-002', urgent: false },
    { id: 3, type: 'alert', message: 'Anomaly detected in satellite data for Project MR-003', urgent: true }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">MRV Workspace</h1>
        <p className="text-gray-600">
          Monitor, report, and verify carbon sequestration with AI-powered analysis
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Satellite Imagery */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Satellite className="text-blue-600" size={24} />
              <h3 className="text-lg font-semibold">Satellite Integration</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg h-32 flex items-center justify-center mb-4">
              <div className="text-center">
                <Satellite className="mx-auto text-blue-600 mb-2" size={32} />
                <p className="text-sm text-blue-700">Latest: 2 days ago</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              View Imagery
            </Button>
          </CardContent>
        </Card>

        {/* Data Upload */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Upload className="text-teal-600" size={24} />
              <h3 className="text-lg font-semibold">Data Upload</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full">
                <Upload size={16} className="mr-2" />
                Drone Data
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <Upload size={16} className="mr-2" />
                Field Surveys
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <Upload size={16} className="mr-2" />
                Ground Truth
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* AI Calculator */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Brain className="text-purple-600" size={24} />
              <h3 className="text-lg font-semibold">AI Calculator</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-700 mb-1">
                {mrvData.aiCalculation.toLocaleString()} tCO₂
              </div>
              <p className="text-sm text-gray-600 mb-4">Estimated sequestration</p>
              <Button size="sm" className="w-full">
                Run Calculation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Comparison Chart */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <TrendingUp className="text-green-600" size={24} />
                <h3 className="text-lg font-semibold">Verification Comparison</h3>
              </div>
              <Badge variant="success">
                <Shield size={12} className="mr-1" />
                Trust Score: {mrvData.trustScore}%
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Reported</span>
                  <span className="text-sm font-bold">{mrvData.reportedSequestration} tCO₂</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">AI Calculated</span>
                  <span className="text-sm font-bold">{mrvData.aiCalculation} tCO₂</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Verified</span>
                  <span className="text-sm font-bold">{mrvData.verifiedSequestration} tCO₂</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Verification Status:</strong> Data validated with {mrvData.trustScore}% confidence. 
                Minor variance within acceptable range.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Notification Center */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Bell className="text-orange-600" size={24} />
              <h3 className="text-lg font-semibold">Notifications</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 rounded-lg border ${
                    notification.urgent
                      ? 'border-red-200 bg-red-50'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <p className={`text-sm ${
                      notification.urgent ? 'text-red-800' : 'text-gray-700'
                    }`}>
                      {notification.message}
                    </p>
                    {notification.urgent && (
                      <Badge variant="error" className="ml-2">
                        Urgent
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              View All Notifications
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};