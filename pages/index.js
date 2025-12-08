import Link from "next/link";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const { t } = useTranslation();

  // Slideshow Images
  const images = [
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1650&q=80",
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1650&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1650&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1650&q=80"
  ];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section with Slideshow */}
      <header
        className={styles.hero}
        style={{ backgroundImage: `url(${images[imageIndex]})` }}
      >
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
