import React from 'react';
import styles from "../../src/styles/global.scss";
import Footer from '@/components/footer';
import Ticker from '@/components/ticker';
import Nav from '@/components/nav';

const ProposalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Ticker />
        <Nav />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default ProposalLayout;