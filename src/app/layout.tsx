import "../styles/global.scss";
import Footer from "../components/footer";
import Ticker from "../components/ticker";
import Nav from "../components/nav";
import Header from "../components/header";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Ticker />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;