/* use client */
import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full">
     {children}
      <Footer />
    </div>
  );
};

export default Layout;
