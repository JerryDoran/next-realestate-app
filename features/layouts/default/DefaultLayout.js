import Footer from '../../global/footer/Footer';
import Navigation from '../../global/navigation/Navigation';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
