import styles from './LoadingSpinner.module.less';

import type { FC } from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  size = 'medium',
  text = 'Loading...',
}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.spinner} ${styles[size]}`} />
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};

export default LoadingSpinner;