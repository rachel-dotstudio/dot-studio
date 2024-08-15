import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.svg";

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;