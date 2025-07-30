import { Component, ErrorInfo, ReactNode } from 'react';

import styles from './ErrorBoundary.module.less';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className={styles.errorBoundary}>
          <div className={styles.errorContent}>
            <h2 className={styles.errorTitle}>Oops! Something went wrong</h2>
            <p className={styles.errorMessage}>
              We apologize for the inconvenience. Please try refreshing the page
              or contact support if the problem persists.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className={styles.errorDetails}>
                <summary>Error Details (Development Mode)</summary>
                <pre className={styles.errorStack}>
                  {this.state.error.stack}
                </pre>
              </details>
            )}
            <div className={styles.errorActions}>
              <button
                onClick={this.handleRetry}
                className={styles.retryButton}
                type='button'
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className={styles.refreshButton}
                type='button'
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}