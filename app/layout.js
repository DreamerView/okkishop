import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./source/animation.css";
import "./source/media.css";
import "./source/loader.css";
import Header from "./component/header";
import Bootstrap from './source/bootstrap';
import AuthModal from "./component/authModal";
import ShowImageFull from "./component/showImageFull";

export const metadata = {
  title: "Okki Shop",
  description: "Generated by create next app",
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <Bootstrap />
        <body data-bs-theme="light">
          <ShowImageFull />
          <AuthModal />
          <div className="container" style={{ maxWidth: '1100px', width: '100%' }}>
            <Header />
            {children}
          </div>
        </body>
      </html>
  );
}
