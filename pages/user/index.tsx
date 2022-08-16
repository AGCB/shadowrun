import styles from "./User.module.scss";
import Clock from "react-live-clock";

const User = () => {
  return (
    <div className={styles.userWrapper}>
      <Clock
        format={"dddd, MMMM Do YYYY, h:mm:ss a"}
        ticking={true}
        timezone={"US/Pacific"}
      />
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
