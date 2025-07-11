import React, { useState } from 'react';

const CarvestHead = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>
        <a href="/" style={styles.brandLink}>Carvest</a>
      </div>
      <div style={styles.desktopMenu}>
        <a href="/buy" style={styles.navLink}>Buy</a>
        <a href="/sell" style={styles.navLink}>Sell</a>
        <a href="/auction" style={styles.navLink}>Auction</a>
        <a href="/bid" style={styles.navLink}>Bid</a>
      </div>
      <div style={styles.mobileMenuButton} onClick={toggleMobileMenu}>
        ☰ {/* Hamburger Icon */}
      </div>
      {isMobileMenuOpen && (
        <div style={styles.mobileMenu}>
          <a href="/buy" style={styles.mobileNavLink}>Buy</a>
          <a href="/sell" style={styles.mobileNavLink}>Sell</a>
          <a href="/auction" style={styles.mobileNavLink}>Auction</a>
          <a href="/bid" style={styles.mobileNavLink}>Bid</a>
        </div>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '1rem',
    color: 'white',
  },
  brand: {
    fontSize: '1.5rem',
  },
  brandLink: {
    color: 'white',
    textDecoration: 'none',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 1rem',
  },
  desktopMenu: {
    display: 'flex', // Hidden on small screens, shown on larger
  },
  mobileMenuButton: {
    display: 'none', // Shown on small screens, hidden on larger
    cursor: 'pointer',
    fontSize: '1.5rem',
  },
  mobileMenu: {
    display: 'none', // Hidden by default, shown when isMobileMenuOpen is true
    flexDirection: 'column',
    position: 'absolute',
    top: '60px', // Adjust as needed
    left: 0,
    width: '100%',
    backgroundColor: '#333',
    padding: '1rem 0',
  },
  mobileNavLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    textAlign: 'center',
  },
  // Basic responsiveness - adjust breakpoints as needed
  '@media (max-width: 768px)': {
    desktopMenu: {
      display: 'none',
    },
    mobileMenuButton: {
      display: 'block',
    },
    mobileMenu: { // This style needs to be conditionally applied in the component
      // display: 'flex', // This will be handled by isMobileMenuOpen state
    }
  }
};

// Note: True media query handling for 'styles.desktopMenu.display' and
// 'styles.mobileMenuButton.display' (and 'styles.mobileMenu.display' if it were static)
// would typically be done with CSS classes or a CSS-in-JS library that supports media queries directly.
// The current inline style approach for @media is a conceptual representation.
// For actual responsive hiding/showing, you'd use conditional rendering based on screen size
// or CSS classes toggled by JavaScript, or a dedicated CSS-in-JS solution.

export default CarvestHead;
