/* use client */
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, visitCount, isArrive }) => {
  return (
    <div className="flex flex-col w-full h-full">
    <Header visitCount={visitCount} isArrive={isArrive}/>
     {children}
      <Footer />
    </div>
  );
};

export default Layout;
