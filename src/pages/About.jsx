import React from "react";
import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <section className="about-section">
        <div className="container">
          <h1 className="title">About Us</h1>
          <p style={{ maxWidth: 600, margin: "0 auto" }}>
            VitalSpoon is a simple blog to inspire people with easy and nutritious recipes.
            Our goal is to promote clean eating, energizing meals, and a better lifestyle for everyone!
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
