import { Link } from 'react-router-dom';

import styles from './NotFound.module.less';

import type { FC } from 'react';

const NotFound: FC = () => {
  return (
    <div className='container'>
      <div className={styles.notFound}>
        <div className={styles.content}>
          <div className={styles.illustration}>
            <div className={styles.number}>4</div>
            <div className={styles.zero}>
              <div className={styles.orbit}>
                <div className={styles.planet}></div>
              </div>
            </div>
            <div className={styles.number}>4</div>
          </div>
          
          <h1 className={styles.title}>Oops! Page Not Found</h1>
          <p className={styles.description}>
            The page you&apos;re looking for seems to have wandered off into the
            digital void. Don&apos;t worry, it happens to the best of us!
          </p>
          
          <div className={styles.suggestions}>
            <h2>Here are some suggestions:</h2>
            <ul>
              <li>Check the URL for typos</li>
              <li>Go back to the previous page</li>
              <li>Visit our homepage</li>
              <li>Use the navigation menu above</li>
            </ul>
          </div>
          
          <div className={styles.actions}>
            <Link to='/' className={styles.homeButton}>
              🏠 Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className={styles.backButton}
              type='button'
            >
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;