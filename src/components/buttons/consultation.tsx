import React, { FC, ReactNode } from 'react';
import styles from "../../styles/button.module.scss";

interface ButtonProps {
  children: ReactNode;
}

const ConsultationButton: FC<ButtonProps> = ({ children }) => {
  return (
    <button className={styles.ConsultationButton}>
      {children}
    </button>
  );
};

export default ConsultationButton;