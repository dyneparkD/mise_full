import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LocalNavbar.module.scss";
import { LocalNavbarProps } from "../types/type";

const LocalNavbar: FC<LocalNavbarProps> = ({ current }) => {
  return (
    <div className={styles.LocalNavbar}>
      <div className={styles.wrapper}>
        <Link to="/">
          <FontAwesomeIcon icon={faAngleLeft} className={styles.leftIcon} />
        </Link>
        <div className={styles.current}>{current}</div>
      </div>
    </div>
  );
};

export default LocalNavbar;
