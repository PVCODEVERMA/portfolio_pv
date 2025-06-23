import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileFooterNav from '../components/MobileFooterNav';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen  dark:text-white transition-colors duration-300">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Main content with padding for header and mobile footer */}
      <main className="flex-grow pt-16 pb-16 md:pb-0">
        {children}
      </main>
      
      {/* Regular Footer (hidden on mobile, shown on desktop) */}
      <div className="hidden md:block">
        <Footer />
      </div>
      
      {/* Mobile Footer Navigation (shown only on mobile) */}
      <div className="md:hidden">
        <MobileFooterNav />
      </div>
    </div>
  );
};

export default Layout;