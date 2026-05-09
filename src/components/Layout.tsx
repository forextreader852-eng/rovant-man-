import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { motion, useScroll, useSpring } from 'motion/react';

export const Layout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-accent origin-left z-[80]"
        style={{ scaleX }}
      />
      
      <Navbar />
      <CartDrawer />
      
      <main className="flex-grow pt-[80px]">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};
