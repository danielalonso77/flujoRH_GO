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
      <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Flujo RH</h1>
      <nav>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
          <li style={{ marginRight: '20px' }}>
            <a href="#" style={linkStyles} activeStyle={activeLinkStyles}>
              Inicio
            </a>
          </li>
          <li style={{ marginRight: '20px' }}>
            <a href="#" style={linkStyles} activeStyle={activeLinkStyles}>
              Login
            </a>
          </li>
          <li style={{ marginRight: '20px' }}>
            <a href="#" style={linkStyles} activeStyle={activeLinkStyles}>
              Calendario
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopBar;
