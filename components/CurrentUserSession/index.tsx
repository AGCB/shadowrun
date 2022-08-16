// import Image from "next/image";
// import avatar from "./../../public/vercel.svg";
import UserName from "../UserName/";
import LogInStatus from "../LoginStatus/";
import UserAvatar from "../UserAvatar/";
import styles from "./CurrentUserSession.module.scss";
import Link from "next/link";

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
