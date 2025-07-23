import React from "react";
import PageWrapper from "../components/PageWrapper";

export default function Contact() {
  return (
    <PageWrapper>
      <section className="contact-section">
        <div className="container">
          <h1 className="title">Contact Us</h1>

          <div className="card" style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
            <div style={{ padding: "2rem 1.5rem" }}>
              <p className="card-body">
                📧 Email us at:
                <br />
                <strong>Vital@Spoon.com</strong>
              </p>

              <p className="card-body" style={{ marginTop: "1rem" }}>
                📷 Follow us on Instagram:
                <br />
                <strong>@VitalSpoon</strong>
              </p>

              <button className="hero-button" style={{ marginTop: "2rem" }}>
                Send a Message
              </button>
            </div>
          </div>

          <p className="card-body" style={{ textAlign: "center", marginTop: "3rem", fontStyle: "italic" }}>
            “We’d love to hear from you – whether it’s feedback, a question, or just to say hello!”
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
