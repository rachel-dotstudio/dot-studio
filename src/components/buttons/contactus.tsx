import React, { FC, ReactNode } from 'react';
import styles from "../../styles/button.module.scss";

interface ButtonProps {
  children: ReactNode;
}

const ContactUsButton: FC<ButtonProps> = ({ children }) => {
  return (
    <button className={styles.ContactUsButton}>
      {children}
    </button>
  );
};

export default ContactUsButton;