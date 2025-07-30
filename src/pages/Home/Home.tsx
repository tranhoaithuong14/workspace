import { env } from '@utils/env';

import styles from './Home.module.less';

import type { FC } from 'react';

const Home: FC = () => {
  return (
    <div className='container'>
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to {env.APP_NAME}</h1>
        <p className={styles.subtitle}>
          A production-ready React SPA built with modern tools and best
          practices
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>⚡ Fast & Optimized</h3>
            <p>Built with Webpack 5, code splitting, and tree shaking</p>
          </div>
          <div className={styles.feature}>
            <h3>🔧 TypeScript</h3>
            <p>Full TypeScript support with strict type checking</p>
          </div>
          <div className={styles.feature}>
            <h3>🎨 Modern Styling</h3>
            <p>LESS with CSS modules and autoprefixer</p>
          </div>
          <div className={styles.feature}>
            <h3>✅ Code Quality</h3>
            <p>ESLint, Prettier, Husky, and lint-staged</p>
          </div>
        </div>
        <div className={styles.cta}>
          <button className={styles.primaryButton} type='button'>
            Get Started
          </button>
          <button className={styles.secondaryButton} type='button'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;