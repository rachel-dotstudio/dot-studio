import React from 'react';
import Link from 'next/link';
import styles from '../page.module.css';

const BlogLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>© 2024 DOT STUDIO. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogLayout;