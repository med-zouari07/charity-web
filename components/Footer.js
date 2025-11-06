import styles from "../styles/Layout.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Helping Hands Charity. All Rights Reserved.</p>
      <p>
        Email: <a href="mailto:info@helpinghands.org">info@helpinghands.org</a> | Phone: +216 22 333 444
      </p>
    </footer>
  );
}
