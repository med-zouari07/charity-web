import Link from "next/link";
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
          <p>
            {t(
              "subtitle",
              "Together we bring hope and support to those in need."
            )}
          </p>
          <Link href="/donate" className={styles.ctaButton}>
            {t("donate", "Donate Now")}
          </Link>
        </div>
      </header>

      {/* Mission Section */}
      <section id="mission" className={styles.section}>
        <h2>{t("mission", "Our Mission")}</h2>
        <p>
          {t(
            "missionText",
            "We work to provide education, healthcare, and emotional support for orphans and families living in poverty."
          )}
        </p>
        <Link href="/about" className={styles.ctaButton}>
          {t("learnMore", "Learn More About Us")}
        </Link>
      </section>

      {/* Programs Section */}
      <section className={styles.sectionAlt}>
        <h2>{t("programs", "Our Programs")}</h2>
        <ul className={styles.programList}>
          <li>
            👶{" "}
            {t(
              "orphanCare",
              "Orphan Care — providing shelter, education, and family support."
            )}
          </li>
          <li>
            🏥{" "}
            {t(
              "medicalAssistance",
              "Medical Assistance — health checkups, medication, and awareness."
            )}
          </li>
          <li>
            🎓{" "}
            {t(
              "educationSupport",
              "Education Support — school fees, supplies, and tutoring."
            )}
          </li>
        </ul>
        <Link href="/programs" className={styles.ctaButton}>
          {t("seePrograms", "See All Programs")}
        </Link>
      </section>

      {/* Call to Action */}
      <section className={styles.section}>
        <h2>{t("joinUs", "Join Our Cause")}</h2>
        <p>
          {t(
            "joinUsText",
            "Be a part of our mission — as a donor, volunteer, or partner. Together, we can change lives."
          )}
        </p>
        <Link href="/volunteer" className={styles.ctaButton}>
          {t("becomeVolunteer", "Become a Volunteer")}
        </Link>
      </section>

      {/* Transparency Section */}
      <section className={styles.sectionAlt}>
        <h2>{t("transparency", "Transparency & Impact")}</h2>
        <p>
          {t(
            "transparencyText",
            "We maintain full transparency with our donors and partners, sharing reports and success stories regularly."
          )}
        </p>
        <Link href="/transparency" className={styles.ctaButton}>
          {t("viewReports", "View Reports")}
        </Link>
      </section>

      {/* Contact Section */}
      <section className={styles.section}>
        <h2>{t("contact", "Get in Touch")}</h2>
        <p>
          {t(
            "contactText",
            "We’d love to hear from you — whether you’re looking to collaborate, volunteer, or just learn more about our work."
          )}
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          {t("contactUs", "Contact Us")}
        </Link>
      </section>
    </Layout>
  );
}
