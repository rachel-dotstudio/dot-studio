import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="main-header">
        <div className="main-header__container container">
          <h1>Empowering businesses with <span className="lilac-text">next-level</span> websites and user interfaces</h1>
          <div className="main-header__cta">
            <p>We specialise in transforming digital experiences by offering comprehensive services that enhance website performance, user experience, and overall brand consistency.</p>
            <div className="main-header__buttons button-group">
              <Link href="/" className="button button--primary">Book a free consultation</Link>
              <Link href="/" className="button button--secondary">Contact us</Link>
            </div>
          </div>
          <div className="main-header__brands">
            <header className="main-header__brands__header">Big brands we&apos;ve worked with</header>
          </div>
        </div>
      </header>
      <main>
        <section className="services">
          <div className="services__container container">
            <h2>Services</h2>
            <ul>
              <li>
                <div className="card">
                  <small className="tag">Analysis</small>
                  <small className="tag tag--pink">Analysis</small>
                  <small className="tag tag--lime">Analysis</small>
                  <small className="tag tag--black">Analysis</small>
                  <small className="tag tag--orange">Analysis</small>
                  <small className="tag tag--purple">Analysis</small>
                  <header>Website Audit and Analysis</header>
                  <ul>
                    <li>Comprehensive analysis of website structure, navigation, and user experience.</li>
                    <li>Detailed Lighthouse report for performance, SEO, and accessibility insights.</li>
                    <li>Heat map testing to understand user behaviour and optimise layout.</li>
                    <li>User testing to identify pain points and areas for improvement.</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
