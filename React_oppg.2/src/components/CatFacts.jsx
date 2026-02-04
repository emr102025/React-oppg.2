/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import styles from "../styles/CatFacts.module.css";

export default function CatFacts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [catFacts, setcatFacts] = [];

  useEffect(() => {
    const fetchCatFacts = async () => {
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=5");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setcatFacts(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCatFacts();
  });

  return (
    <>
      <h1 className={styles.h1}>CatFacts</h1>
    </>
  );
}
