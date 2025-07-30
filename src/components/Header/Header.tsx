import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.less';

import type { FC } from 'react';

const Header: FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerContent}>
          <Link to='/' className={styles.logo}>
            React SPA
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navItems.map(item => (
                <li key={item.path} className={styles.navItem}>
                  <Link
                    to={item.path}
                    className={`${styles.navLink} ${
                      location.pathname === item.path ? styles.active : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;