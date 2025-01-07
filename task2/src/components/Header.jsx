import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.intro}>
        <h1 style={styles.title}>Welcome to Our Website</h1>
        <p style={styles.subtitle}>This is a small introduction about our website.</p>
      </div>
      <div style={styles.contentSection}>
        <div style={styles.imageContainer}>
          <img
            src="image.jpg"
            alt="Placeholder"
            style={styles.image}
          />
        </div>
        <div style={styles.aboutUs}>
          <h2 style={styles.aboutTitle}>About Us</h2>
          <p style={styles.aboutText}>
          Software developers design, program, build, deploy and maintain software using many different skills and tools. They also help build software systems that power networks and devices and ensure that those systems remain functional.</p>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    padding: '40px 20px',
    backgroundColor: '#000', 
    textAlign: 'center',
    color: '#fff', 
  },
  intro: {
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#ECF0F1', 
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#BDC3C7', 
  },
  contentSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  imageContainer: {
    flex: '1',
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
  },
  aboutUs: {
    flex: '1',
    textAlign: 'left',
    padding: '30px',
  },
  aboutTitle: {
    fontSize: '1.8rem',
    color: '#ECF0F1', 
  },
  aboutText: {
    fontSize: '1rem',
    color: '#BDC3C7', 
    lineHeight: '1.6',
  },
};

export default Header;
