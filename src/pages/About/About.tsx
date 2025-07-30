import styles from './About.module.less';

import type { FC } from 'react';

const About: FC = () => {
  return (
    <div className='container'>
      <div className={styles.about}>
        <header className={styles.header}>
          <h1 className={styles.title}>About This Project</h1>
          <p className={styles.subtitle}>
            A comprehensive React SPA template built with production-ready
            configurations
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Technology Stack</h2>
            <div className={styles.techGrid}>
              <div className={styles.techItem}>
                <h3>React 19</h3>
                <p>Latest React with concurrent features and automatic batching</p>
              </div>
              <div className={styles.techItem}>
                <h3>TypeScript 5.7</h3>
                <p>Strong typing with the latest TypeScript features</p>
              </div>
              <div className={styles.techItem}>
                <h3>Webpack 5</h3>
                <p>Modern bundling with module federation and optimizations</p>
              </div>
              <div className={styles.techItem}>
                <h3>LESS</h3>
                <p>Enhanced CSS with variables, nesting, and mixins</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Features</h2>
            <ul className={styles.featureList}>
              <li>✅ Code splitting and lazy loading</li>
              <li>✅ Tree shaking for optimal bundle size</li>
              <li>✅ CSS modules with LESS</li>
              <li>✅ Hot Module Replacement (HMR)</li>
              <li>✅ ESLint + Prettier for code quality</li>
              <li>✅ Husky + lint-staged for git hooks</li>
              <li>✅ Production-ready webpack configuration</li>
              <li>✅ Environment variable management</li>
              <li>✅ Error boundaries and loading states</li>
              <li>✅ Responsive design with mobile-first approach</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Best Practices</h2>
            <div className={styles.practiceGrid}>
              <div className={styles.practice}>
                <h3>Performance</h3>
                <p>
                  Optimized bundle splitting, lazy loading, and tree shaking to
                  ensure fast load times and optimal performance.
                </p>
              </div>
              <div className={styles.practice}>
                <h3>Accessibility</h3>
                <p>
                  Built with semantic HTML, ARIA attributes, and keyboard
                  navigation support for inclusive user experiences.
                </p>
              </div>
              <div className={styles.practice}>
                <h3>Code Quality</h3>
                <p>
                  Enforced coding standards with ESLint, Prettier, and git hooks
                  to maintain consistent, high-quality code.
                </p>
              </div>
              <div className={styles.practice}>
                <h3>Maintainability</h3>
                <p>
                  Clear project structure, TypeScript for type safety, and
                  comprehensive documentation for easy maintenance.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;