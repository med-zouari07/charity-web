import styles from "../styles/Layout.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Layout({ children }) {
  const { i18n, t } = useTranslation();

  // Switch RTL for Arabic
  useEffect(() => {
    document.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      <nav className={styles.navbar}>
        <div>Helping Hands Charity</div>
        <div className={styles.navLinks}>
          <a href="#mission">{t("mission", "Our Mission")}</a>
          <a href="#about">{t("about", "About Us")}</a>
          <a href="#contact">{t("contact", "Contact")}</a>
          <div className={styles.langSwitcher}>
            <button className={styles.langButton} onClick={() => i18n.changeLanguage("en")}>🇬🇧 EN</button>
            <button className={styles.langButton} onClick={() => i18n.changeLanguage("fr")}>🇫🇷 FR</button>
            <button className={styles.langButton} onClick={() => i18n.changeLanguage("ar")}>🇸🇦 AR</button>
          </div>
        </div>
      </nav>

      <main>{children}</main>
    </>
  );
}
