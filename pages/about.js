import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="About">
      <section style={{ padding: "40px 20px", maxWidth: 800, margin: "auto" }}>
        <h1>About Us</h1>
        <p>
          Founded in 2020, Helping Hands Charity has grown into a trusted organization
          committed to supporting orphans, education, and healthcare across the region.
        </p>
        <p>
          Our team of volunteers and partners work tirelessly to ensure transparency,
          accountability, and impact in every project we undertake.
        </p>
      </section>
    </Layout>
  );
}
