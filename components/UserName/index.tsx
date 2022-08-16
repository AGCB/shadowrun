import styles from "./UserName.module.scss";

type UserNameProps = {
  userName: string;
};

const UserName = ({ userName }: UserNameProps) => {
  return <div className={styles.UserName}>{userName}</div>;
};

export default UserName;
