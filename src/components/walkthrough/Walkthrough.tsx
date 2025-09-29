import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Blocks, Shield, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface WalkthroughProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Walkthrough: React.FC<WalkthroughProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const slides = [
    {
      icon: Blocks,
      title: 'Blockchain-Backed Carbon Credits',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Our platform leverages blockchain technology to create immutable, transparent carbon credits 
            from blue carbon ecosystems like mangroves and seagrass beds.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Key Benefits:</h4>
            <ul className="list-disc list-inside text-blue-800 space-y-1">
              <li>Tamper-proof credit registry</li>
              <li>Real-time tracking and verification</li>
              <li>Global accessibility and tradability</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      icon: Shield,
      title: 'MRV System Overview',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Monitoring, Reporting, and Verification (MRV) ensures the integrity of carbon 
            sequestration measurements through multiple data sources and AI validation.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-teal-50 p-3 rounded-lg">
              <h5 className="font-medium text-teal-900">Monitoring</h5>
              <p className="text-sm text-teal-700">Satellite & drone imagery</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <h5 className="font-medium text-green-900">Reporting</h5>
              <p className="text-sm text-green-700">Field surveys & data</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <h5 className="font-medium text-blue-900">Verification</h5>
              <p className="text-sm text-blue-700">Third-party validation</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <h5 className="font-medium text-purple-900">AI Analysis</h5>
              <p className="text-sm text-purple-700">Automated calculations</p>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Zap,
      title: 'Trust & Transparency',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Our platform provides unprecedented transparency through real-time trust scores, 
            verifier credentials, and public blockchain validation.
          </p>
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Trust Score</span>
              <span className="text-2xl font-bold text-green-600">94%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: '94%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Based on MRV data quality, verifier reputation, and blockchain validation
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="max-w-2xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <Icon className="text-blue-600" size={32} />
              <h2 className="text-2xl font-bold text-gray-900">{slide.title}</h2>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>

          <div className="mb-8">
            {slide.content}
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeft size={16} className="mr-1" />
              Previous
            </Button>

            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={currentSlide === slides.length - 1 ? onClose : nextSlide}
            >
              {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};