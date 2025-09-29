import React, { useState } from 'react';
import { Hero } from './components/landing/Hero';
import { AuthModal } from './components/auth/AuthModal';
import { Walkthrough } from './components/walkthrough/Walkthrough';
import { Dashboard } from './components/dashboard/Dashboard';
import { UserRole } from './types';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isWalkthroughOpen, setIsWalkthroughOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ role: UserRole } | null>(null);

  const handleGetStarted = () => {
    setIsWalkthroughOpen(true);
  };

  const handleWalkthroughClose = () => {
    setIsWalkthroughOpen(false);
    setIsAuthModalOpen(true);
  };

  const handleLogin = (role: UserRole) => {
    setCurrentUser({ role });
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (currentUser) {
    return (
      <Dashboard 
        userRole={currentUser.role} 
        onLogout={handleLogout} 
      />
    );
  }

  return (
    <div className="min-h-screen">
      <Hero onGetStarted={handleGetStarted} />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />
      
      <Walkthrough
        isOpen={isWalkthroughOpen}
        onClose={handleWalkthroughClose}
      />
    </div>
  );
}

export default App;