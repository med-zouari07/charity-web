import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Helping Hands</div>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/donate">Donate</Link>
        <Link href="/volunteer">Volunteer</Link>
        <Link href="/transparency">Transparency</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
