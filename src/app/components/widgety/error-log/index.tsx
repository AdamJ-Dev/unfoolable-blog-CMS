import styles from './index.module.css';

type ErrorLogProps = {
  error: string;
};

const ErrorLog: React.FC<ErrorLogProps> = ({ error }) => {
  return (
    <div className={styles.errorLog}>
      <div className={styles.errorLogTitle}>Error:</div>
      <div className={styles.errorMessage}>{error}</div>
    </div>
  );
};

export default ErrorLog;
