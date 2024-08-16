import React from 'react';
import '../../src/styles/global.scss';
import Footer from '@/components/footer';
import Ticker from '@/components/ticker';
import Nav from '@/components/nav';

const ProposalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <main>
        <Ticker />
        <Nav />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default ProposalLayout;