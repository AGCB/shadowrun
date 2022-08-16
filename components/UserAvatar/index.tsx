import Link from "next/link";
import styles from "./UserAvatar.module.scss";

const UserAvatar = () => {
  return (
    <Link href="/user">
      <span className={styles.avatar}>AVATAR</span>
    </Link>
  );
};

export default UserAvatar;
