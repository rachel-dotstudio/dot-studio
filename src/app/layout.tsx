import type { Metadata } from "next";
import "./global.scss";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section className="announcement">
          <p>
            <Link href="/">
              Book your free consultation
            </Link>{" "}
            today and take the first step towards achieving your objectives.
          </p>
        </section>
        <nav className="main-nav">
          <ul>
            <li className="logo">
              <Link href="/">
                <Image src={logo} alt="DOT STUDIO" />
                <small>Your web transformation partner</small>
              </Link>
            </li>
            <div>
              <li>
                <Link href="/">Book a consultation</Link>
              </li>
              <li>
                <Link href="/">Contact us</Link>
              </li>
            </div>
          </ul>
        </nav>
        {children}
        <nav className="footer-nav">
          <ul>
            <div>
              <li>
                <Link href="/">Contact us</Link>
              </li>
            </div>
            <li className="logo">
              <Link href="/">
                <small>© 2024 DotStudio</small>
                <Image src={logo} alt="DOT STUDIO" />
              </Link>
            </li>
          </ul>
        </nav>
      </body>
    </html>
  );
}