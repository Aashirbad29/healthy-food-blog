import React from "react";
import PageWrapper from "../components/PageWrapper";
import cleanImg from "../assets/clean.png";
import recipeImg from "../assets/recipe.png";
import lifestyleImg from "../assets/lifestyle.png";

export default function About() {
  return (
    <PageWrapper>
      <section className="about-section">
        <div className="container">
          <h1 className="title">About Us</h1>
          <p className="card-body" style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            VitalSpoon is a blog built around the idea that clean eating doesn't have to be complicated. 
            We’re here to make it easier for you to cook meals that are simple, energizing, and delicious.
          </p>

          <div className="grid" style={{ marginTop: "3rem" }}>
            <div className="card">
              <img
                src={cleanImg}
                alt="Clean Eating"
                className="card-img"
              />
              <h3 className="card-title">Clean Eating</h3>
              <p className="card-body">
                Discover whole food recipes that nourish your body and uplift your lifestyle.
              </p>
            </div>

            <div className="card">
              <img
                src={recipeImg}
                alt="Easy Recipes"
                className="card-img"
              />
              <h3 className="card-title">Easy Recipes</h3>
              <p className="card-body">
                Whether you're a beginner or pro, our quick, easy-to-follow recipes are for everyone.
              </p>
            </div>

            <div className="card">
              <img
                src={lifestyleImg}
                alt="Healthy Lifestyle"
                className="card-img"
              />
              <h3 className="card-title">Healthy Lifestyle</h3>
              <p className="card-body">
                It's more than food. We help you develop habits that lead to long-term wellness.
              </p>
            </div>
          </div>

          <p className="card-body" style={{ marginTop: "3rem", fontStyle: "italic" }}>
            “You don’t have to eat less, you just have to eat right.” – Unknown
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
