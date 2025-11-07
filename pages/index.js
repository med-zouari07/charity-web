import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{t("title", "Helping Hands Charity")}</h1>
          <p>{t("subtitle", "Together we bring hope and support to those in need.")}</p>
          <a href="/donate" className={styles.ctaButton}>
            {t("donate", "Donate Now")}
          </a>
        </div>
      </header>

      {/* Mission Section */}
      <section id="mission" className={styles.section}>
        <h2>{t("mission", "Our Mission")}</h2>
        <p>
          {t("missionText", "We work to provide education, healthcare, and emotional support for orphans and families living in poverty.")}
        </p>
      </section>

      {/* Programs Section */}
      <section className={styles.sectionAlt}>
        <h2>{t("programs", "Our Programs")}</h2>
        <ul>
          <li>👶 {t("orphanCare", "Orphan Care — providing shelter, education, and family support.")}</li>
          <li>🏥 {t("medicalAssistance", "Medical Assistance — health checkups, medication, and awareness.")}</li>
          <li>🎓 {t("educationSupport", "Education Support — school fees, supplies, and tutoring.")}</li>
          <li>🍞 {t("foodDistribution", "Food Distribution — regular food drives for low-income families.")}</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className={styles.section}>
        <h2>{t("joinUs", "Join Our Cause")}</h2>
        <p>
          {t("joinUsText", "Be a part of our mission — as a donor, volunteer, or partner. Together, we can change lives.")}
        </p>
        <a href="/volunteer" className={styles.ctaButton}>
          {t("becomeVolunteer", "Become a Volunteer")}
        </a>
      </section>
    </Layout>
  );
}
