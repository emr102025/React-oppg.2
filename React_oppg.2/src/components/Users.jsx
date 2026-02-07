import { useState } from "react";
import { mockData } from "../data/mockData";
import styles from "../styles/Users.module.css";

export default function Users() {
  const [user, setUser] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (username && email) {
      console.log("den kjører");
      setUser([...user, { username, email }]);
      setUsername("");
      setEmail("");
    }
  };

  return (
    <>
      <section className={styles.mockData}>
        <h1 className={styles.cursor}>Our users.</h1>
        <ul>
          {user.map((user) => (
            <li className={styles.Users} key={crypto.randomUUID()}>
              Username: {user.username}
              <br />
              Email: {user.email}
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.addUser}>
        <form onSubmit={handleAdd}>
          <h1 className={styles.cursor}>New User?</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button type="submit" onClick={handleAdd} className={styles.addBtn}>
            Add User
          </button>
        </form>
      </section>
    </>
  );
}
