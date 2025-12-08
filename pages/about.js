import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <Layout title={t("aboutTitle", "About")}>
      <section style={{ padding: "40px 20px", maxWidth: 800, margin: "auto" }}>
        <h1>{t("aboutHeading", "About Us")}</h1>

        <p>
          {t(
            "aboutParagraph1",
            "Founded in 2020, Helping Hands Charity has grown into a trusted organization committed to supporting orphans, education, and healthcare across the region."
          )}
        </p>

        <p>
          {t(
            "aboutParagraph2",
            "Our team of volunteers and partners work tirelessly to ensure transparency, accountability, and impact in every project we undertake."
          )}
        </p>
      </section>
    </Layout>
  );
}
