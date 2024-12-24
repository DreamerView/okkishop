import "./globals.css";
import "./source/animation.css";
import "./source/media.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./component/header";
import Bootstrap from './source/bootstrap';
import AuthModal from "./component/authModal";

export const metadata = {
  title: "Okki Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <Bootstrap />
        <body>
          <AuthModal />
          <div className="container" style={{ maxWidth: '1100px', width: '100%' }}>
            <Header />
            {children}
          </div>
        </body>
      </html>
  );
}
