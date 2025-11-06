import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>{t("title")}</div>

        {/* Navigation Links */}
        <div className={styles.nav-links}>
          <Link href="/">{t("mission")}</Link>
          <Link href="/about">{t("about")}</Link>
          <Link href="/contact">{t("contact")}</Link>
        </div>

        {/* Language Switcher */}
        <div className={styles.language-switcher}>
          <button onClick={() => changeLanguage("en")}>🇬🇧 EN</button>
          <button onClick={() => changeLanguage("fr")}>🇫🇷 FR</button>
          <button onClick={() => changeLanguage("ar")}>🇸🇦 AR</button>
        </div>
      </nav>

      <main className={styles.content}>{children}</main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Helping Hands Charity</p>
      </footer>
    </div>
  );
}
