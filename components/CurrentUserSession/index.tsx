// import Image from "next/image";
// import avatar from "./../../public/vercel.svg";
import LogInStatus from "../LoginStatus/";
import styles from "./CurrentUserSession.module.scss";
import Link from "next/link";

const UserAvatar = () => {
  return (
    <Link href="/user">
      <span className={styles.avatar}>AVATAR</span>
    </Link>
  );
};

type UserNameProps = {
  userName: string;
};

const UserName = ({ userName }: UserNameProps) => {
  return <div>{userName}</div>;
};

const CurrentUserSession = () => {
  return (
    <div className={styles.CurrentUserSessionWrapper}>
      <Link href="/user" passHref={true} className={styles.CurrentUserSession}>
        <UserAvatar />
      </Link>
      <UserName userName="user1" />
      <LogInStatus status="online" />
    </div>
  );
};

export default CurrentUserSession;
