import styles from "./User.module.scss";

const User = () => {
  return (
    <div className={styles.userWrapper}>
      <span>LOGIN BUTTON</span>
      <span>LOGOUT BUTTON</span>
      <span>LOGOUT BUTTON</span>
      <span>CURRENT TIMER</span>
      <span>TIME LEFT IN SHIFT</span>
      <div className="breaks">
        <span>BREAK1</span>
        <span>BREAK2</span>
        <span>BREAK3</span>
      </div>
    </div>
  );
};

export default User;
