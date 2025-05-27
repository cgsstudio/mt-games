import { useLoginPopup } from './context/LoginPopupContext';
import LoginPopup from './components/LoginPopup';

const Layout = () => {
  const { showLoginPopup, setShowLoginPopup } = useLoginPopup();

  return (
    <>
      {/* ...existing layout code... */}
      {showLoginPopup && (
        <LoginPopup
          onClose={() => setShowLoginPopup(false)}
          onLoginSuccess={() => setShowLoginPopup(false)}
        />
      )}
      {/* ...existing layout code... */}
    </>
  );
};

export default Layout;
