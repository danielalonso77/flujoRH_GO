import React from 'react';

function TopBar() {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
  };

  const linkStyles = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
    transition: 'all 0.2s ease-in-out',
  };

  const activeLinkStyles = {
    color: '#f00',
  };

  return (
    <div style={styles}>
      <h1 style={{ fontSize: '1.5rem', margin: 0 }}> IMPRESORAS SHARP GO</h1>
      <nav>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
          <NavItem path="/" text="Inicio" styles={linkStyles} activeStyles={activeLinkStyles} />
          <NavItem path="/about" text="Crear" styles={linkStyles} activeStyles={activeLinkStyles} />
          <NavItem path="/contact" text="Contacto" styles={linkStyles} activeStyles={activeLinkStyles} />
        </ul>
      </nav>
    </div>
  );
}

function NavItem(props) {
  const { path, text, styles, activeStyles } = props;
  const isActive = window.location.pathname === path;

  return (
    <li style={{ marginRight: '20px' }}>
      <a href={path} style={styles} activeStyle={activeStyles}>
        {text}
      </a>
    </li>
  );
}

export default TopBar;
