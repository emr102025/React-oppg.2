import { useState } from "react";
import { mockData } from "../data/mockdata";
import styles from "../styles/Users.module.css";

export default function Users() {
  const [user, setUser] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (username && email) {
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
          {mockData.map((user) => (
            <li className={styles.Users} key={crypto.randomUUID()}>
              Username: {user.username}
              <br />
              Email: {user.email}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />
        <button onClick={handleAdd}>Add</button>
      </section>
    </>
  );
}
