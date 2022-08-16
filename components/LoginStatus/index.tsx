import styles from "./LogInStatus.module.scss";

type LogInStatusProps = {
  status: string;
};

const LogInStatus = ({ status }: LogInStatusProps) => {
  return <div className={styles.LogInStatus}>{status}</div>;
};

export default LogInStatus;
