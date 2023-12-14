import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className={inter.className}>{children}</div>
    </>
  );
};

export default RootLayout;
