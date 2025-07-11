import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CarvestHead = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false); // Close mobile menu on navigation
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>
        {/* Assuming brand still navigates to home, can also be a button if preferred */}
        <button onClick={() => handleNavigate('/')} style={styles.brandButton}>Carvest</button>
      </div>
      <div style={styles.desktopMenu}>
        <button onClick={() => handleNavigate('/buy')} style={styles.navButton}>Buy</button>
        <button onClick={() => handleNavigate('/sell')} style={styles.navButton}>Sell</button>
        <button onClick={() => handleNavigate('/auction')} style={styles.navButton}>Auction</button>
        <button onClick={() => handleNavigate('/bid')} style={styles.navButton}>Bid</button>
      </div>
      <div style={styles.mobileMenuButton} onClick={toggleMobileMenu}>
        ☰ {/* Hamburger Icon */}
      </div>
      {isMobileMenuOpen && (
        <div style={styles.mobileMenu}>
          <button onClick={() => handleNavigate('/buy')} style={styles.mobileNavButton}>Buy</button>
          <button onClick={() => handleNavigate('/sell')} style={styles.mobileNavButton}>Sell</button>
          <button onClick={() => handleNavigate('/auction')} style={styles.mobileNavButton}>Auction</button>
          <button onClick={() => handleNavigate('/bid')} style={styles.mobileNavButton}>Bid</button>
        </div>
      )}
    </nav>
  );
};

// Basic styles - consider moving to a separate CSS/SCSS file or using a CSS-in-JS library
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '1rem',
    color: 'white',
    position: 'relative', // Added for mobile menu positioning context
  },
  brand: {
    fontSize: '1.5rem',
  },
  brandButton: {
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: 0,
  },
  navButton: {
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    textDecoration: 'none',
    margin: '0 1rem',
    cursor: 'pointer',
    fontSize: '1rem', // Adjusted for button look
    padding: '0.5rem', // Added padding for better clickability
  },
  desktopMenu: {
    display: 'flex',
  },
  mobileMenuButton: {
    // display: 'none', // This will be handled by media queries in a real CSS setup
    cursor: 'pointer',
    fontSize: '1.5rem',
    background: 'none',
    border: 'none',
    color: 'white',
  },
  mobileMenu: {
    display: 'flex', // Changed to flex
    flexDirection: 'column',
    position: 'absolute',
    top: '100%', // Position below the navbar
    left: 0,
    width: '100%',
    backgroundColor: '#333',
    padding: '0.5rem 0', // Adjusted padding
    zIndex: 1000, // Ensure it's above other content
    borderTop: '1px solid #444', // Optional: adds a separator
  },
  mobileNavButton: {
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    textDecoration: 'none',
    padding: '0.75rem 1rem', // Adjusted padding
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '1rem', // Adjusted for button look
    width: '100%', // Make buttons take full width
  },
  // Conceptual media query styling (actual implementation would use CSS classes or CSS-in-JS media queries)
  // '@media (max-width: 768px)': {
  //   desktopMenu: {
  //     display: 'none',
  //   },
  //   mobileMenuButton: {
  //     display: 'block',
  //   },
  // },
  // '@media (min-width: 769px)': {
  //   mobileMenuButton: {
  //     display: 'none',
  //   },
  //   mobileMenu: {
  //     display: 'none', // Ensure mobile menu is hidden on desktop
  //   }
  // }
};

// For actual responsive show/hide, you would typically use CSS.
// Example (conceptual, would be in a .css file or styled-component):
// .desktop-menu { display: flex; }
// .mobile-menu-button { display: none; }
// @media (max-width: 768px) {
//   .desktop-menu { display: none; }
//   .mobile-menu-button { display: block; }
// }

export default CarvestHead;
