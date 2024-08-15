import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.svg";

const MainNav: React.FC = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li className="logo">
          <Link href="/">
            <Image src={logo} alt="DOT STUDIO" />
            <small>Your web transformation partner</small>
          </Link>
        </li>
        <div className="test-nav">
          <p>Test Pages</p>
          <ul>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/proposal">Proposal</Link>
              </li>
              <li>
                <Link href="/admin">CMS Admin</Link>
              </li>
          </ul>
        </div>
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
  );
};

export default MainNav;