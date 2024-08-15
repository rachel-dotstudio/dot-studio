import Link from "next/link";
import ConsultationButton from "./buttons/consultation";
import ContactUsButton from "./buttons/contactus";
import Logos from "./logos";
import styles from "../styles/button.module.scss";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="main-header__container container">
        <h1>
          Empowering businesses with <span className="lilac-text">next-level</span> websites and user interfaces
        </h1>
        <div className="main-header__cta">
          <p>
            We specialise in transforming digital experiences by offering comprehensive services that enhance website
            performance, user experience, and overall brand consistency.
          </p>
          <div className={styles.buttonGroup}>
            <ConsultationButton>Book a free consultation</ConsultationButton>
            <ContactUsButton>Contact Us</ContactUsButton>
          </div>
        </div>
        <Logos />
      </div>
    </header>
  );
};

export default Header;