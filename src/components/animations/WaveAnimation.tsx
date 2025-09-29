import React from 'react';

export const WaveAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute bottom-0 w-full h-32"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C150,120 350,0 500,60 C650,120 850,0 1000,60 C1150,120 1350,0 1500,60 L1500,120 L0,120 Z"
          fill="rgba(59, 130, 246, 0.1)"
          className="animate-pulse"
        />
        <path
          d="M0,80 C150,40 350,120 500,80 C650,40 850,120 1000,80 C1150,40 1350,120 1500,80 L1500,120 L0,120 Z"
          fill="rgba(20, 184, 166, 0.15)"
          className="animate-wave"
        />
      </svg>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};