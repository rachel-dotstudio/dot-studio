// components/layouts.tsx

import "../styles/global.scss";
import Footer from "../components/footer";
import Ticker from "../components/ticker";
import Nav from "../components/nav";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My Application</title>
      </head>
      <body>
        <header>
          <Ticker />
          <Nav />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;