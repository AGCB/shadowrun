/*

what app are we running?
what version?

This component gives basic info on the App they are running.
User can be linked to the /about page for more details.

*/

import styles from "./SoftwareData.module.scss";

type SoftwareDataProps = {
  name: string;
  version: string;
};

function SoftwareData({ name, version }: SoftwareDataProps) {
  return (
    <div className={styles.softwareDataWrapper}>
      <span>{name}</span>
      <span>{version}</span>
    </div>
  );
}

export default SoftwareData;
