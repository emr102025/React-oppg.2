import { useState } from "react";
import styles from "../styles/CookieClicker.module.css";
import cookie from "/cookie.png";

export default function CookieClicker() {
  const [count, setCount] = useState(0);

  //handles increase when pressing the cookie image
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1 className={styles.cursor}>CookieClicker</h1>
      <button onClick={handleIncrease} className={styles.cookie_btn}>
        <img
          src={cookie}
          alt="An animated happy cookie with arms and legs"
          className={styles.cookie_img}
        />
      </button>
      <h2 className={styles.cursor}>Points: {count}</h2>
    </>
  );
}
