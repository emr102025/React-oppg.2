import { useState, useEffect } from "react";
import styles from "../styles/CatFacts.module.css";

export default function CatFacts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [catFacts, setCatFacts] = useState([]);
  const [delayFacts, setDelayFacts] = useState(0);

  useEffect(() => {
    if (delayFacts < catFacts.length) {
      const timout = setTimeout(() => {
        setDelayFacts((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timout);
    }
    const fetchCatFacts = async () => {
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=5");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setCatFacts(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCatFacts();
  }, [delayFacts, catFacts]);

  return (
    <>
      <section className={styles.CatFacts}>
        <h1 className={styles.h1}>CatFacts</h1>
        {loading && <p>Loading cat facts...</p>}
        {error && <p>Error occurred {error}</p>}
        <ul>
          {catFacts.slice(0, delayFacts).map((facts) => (
            <li>{facts.fact}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
