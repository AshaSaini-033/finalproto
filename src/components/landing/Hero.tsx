import React from 'react';
import { Waves, Shield, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { WaveAnimation } from '../animations/WaveAnimation';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 flex items-center justify-center overflow-hidden">
      <WaveAnimation />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Waves className="text-blue-600" size={48} />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">
              AquaCarbon
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Revolutionizing blue carbon through blockchain technology and AI-powered monitoring
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Protect mangroves, restore coastlines, and combat climate change with verified, 
            transparent carbon credits backed by cutting-edge MRV systems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" onClick={onGetStarted} className="group">
            <Globe className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
            Explore Projects
          </Button>
          <Button variant="outline" size="lg">
            <Shield className="mr-2" size={20} />
            Learn More
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-700 mb-2">127+</div>
            <div className="text-gray-700">Active Projects</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-teal-100">
            <div className="text-3xl font-bold text-teal-700 mb-2">2.3M</div>
            <div className="text-gray-700">Carbon Credits</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-green-100">
            <div className="text-3xl font-bold text-green-700 mb-2">45K</div>
            <div className="text-gray-700">Hectares Protected</div>
          </div>
        </div>
      </div>
    </div>
  );
};