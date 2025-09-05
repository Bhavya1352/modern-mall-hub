import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-aesthetic">
      <Header />
      <main className="flex-1 relative">
        {children}
      </main>
      {/* Floating aesthetic elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full floating"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-br from-accent/8 to-transparent rounded-full floating-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-primary/3 to-transparent rounded-full floating"></div>
      </div>
    </div>
  );
};

export default Layout;