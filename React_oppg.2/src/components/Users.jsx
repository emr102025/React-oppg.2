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
        <h1>Our users.</h1>
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
      <section>
        <form onSubmit={handleAdd}>
          <h2>New User?</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" onClick={handleAdd}>
            Add User
          </button>
        </form>
      </section>
    </>
  );
}
