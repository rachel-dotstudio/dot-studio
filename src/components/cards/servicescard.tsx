import React from 'react';
import styles from '../../styles/cards.module.scss';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <header className={styles.cardHeader}>{title}</header>
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
};

export default Card;