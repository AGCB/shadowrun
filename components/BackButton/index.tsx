import styles from "./BackButton.module.scss";

import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  return (
    <span className={styles.BackButton} onClick={() => router.back()}>
      Click here to go back
    </span>
  );
};

export default BackButton;
