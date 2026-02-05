/* eslint-disable no-unused-vars */
import { useState } from "react";
import { mockData } from "../data/mockdata";

export default function Users() {
  const Users = () => {
    const [user, setUser] = useState(mockData);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
  };

  return (
    <>
      <h1>Users</h1>
      <ul>
        {mockData.map((user) => (
          <li>
            Username: {user.username}
            <br />
            Email: {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}
