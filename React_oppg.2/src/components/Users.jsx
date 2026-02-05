/* eslint-disable no-unused-vars */
import { useState } from "react";
import { mockData } from "../data/mockdata";
import styles from "../styles/Users.module.css";

export default function Users() {
  const Users = () => {
    const [user, setUser] = useState(mockData);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
  };

  return (
    <>
      <section className={styles.mockData}>
        <h1>Our users.</h1>
        <ul>
          {mockData.map((user) => (
            <li className={styles.Users}>
              Username: {user.username}
              <br />
              Email: {user.email}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
