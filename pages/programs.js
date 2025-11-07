import Layout from "../components/Layout";

export default function Programs() {
  return (
    <Layout title="Programs">
      <section style={{ padding: "40px 20px", maxWidth: 1000, margin: "auto" }}>
        <h1>Our Programs</h1>
        <ul>
          <li>👶 Orphan Care — providing shelter, education, and family support.</li>
          <li>🏥 Medical Assistance — health checkups, medication, and awareness.</li>
          <li>🎓 Education Support — school fees, supplies, and tutoring.</li>
        </ul>
      </section>
    </Layout>
  );
}
