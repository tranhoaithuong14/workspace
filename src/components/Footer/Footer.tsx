import type { FC } from 'react';

import styles from './Footer.module.less';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footerContent}>
          <p className={styles.copyright}>
            © {currentYear} React SPA Production. All rights reserved.
          </p>
          <p className={styles.tech}>
            Built with React, TypeScript, Webpack & LESS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;