import styles from "./footer.module.css";

export default function Header() {
  return (
    <footer className={styles.footer}>
      <h1>Footer</h1>
      <div className={styles.info}>
        <p>Address</p>
        <p>Contact information</p>
        <p>Right and conditions</p>
      </div>
    </footer>
  );
}