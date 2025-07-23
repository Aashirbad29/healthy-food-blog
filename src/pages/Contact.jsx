import React from "react";
import PageWrapper from "../components/PageWrapper";

export default function Contact() {
  return (
    <PageWrapper>
      <section className="contact-section">
        <div className="container">
          <h1 className="title">Contact Us</h1>
          <p style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
            You can reach us at <strong>healthy@bites.com</strong> <br />
            or follow us on Instagram <strong>@healthybites</strong>.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
