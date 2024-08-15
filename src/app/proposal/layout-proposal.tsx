import React from 'react';
import Link from 'next/link';
import styles from '../../styles/proposal.module.scss';

const ProposalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default ProposalLayout;