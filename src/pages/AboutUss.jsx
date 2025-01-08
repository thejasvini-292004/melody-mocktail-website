import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <main className="about-us">
        <section className="about-us-container">
          <h1>About Us</h1>
          <h2>Melody Mocktail</h2>
        </section>

        <section className="about-us-content">
          <div className="about-us-text">
            <h3>About Melody Mocktail:</h3>
            <p>
              Melody Mocktail is a digital content platform serving a vibrant
              South Asian community, particularly Indian immigrants in the U.S.
              With over 400 million content views and 25 million unique viewers,
              the platform bridges India and the U.S., offering resources like
              career guidance, job postings, housing, immigration assistance,
              real estate, travel recommendations, and business advisory
              services. It strives to simplify and enrich the lives of South
              Asians by addressing their diverse needs in a connected and
              efficient manner.
            </p>
          </div>

          <div className="about-us-image">
            <img
              src="https://dgslk2men7iqd.cloudfront.net/641a96c0c92c0f734ea10dc3/ee9af55177e369e4d0347768ed81b56a525e3f31.png"
              alt="Melody Mocktail"
            />
          </div>
        </section>

        <section className="info-section">
          <div className="info-card">
            <h3>Our Mission</h3>
            <p>
              Melody Mocktail's mission is to empower the South Asian community
              by providing tailored, high-quality digital resources that support
              their professional and personal growth.
            </p>
          </div>
          <div className="info-card">
            <h3>Our Vision</h3>
            <p>
              The company envisions itself as the go-to platform for bridging
              cultural, social, and professional gaps between India and the U.S.
            </p>
          </div>
          <div className="info-card">
            <h3>Our Values</h3>
            <p>
              Melody Mocktail is built on values of community, reliability, and
              excellence. It prioritizes understanding and addressing the unique
              needs of its audience with integrity and innovation.
            </p>
          </div>
        </section>

        <section className="our-team">
          <div className="team-wrapper">
            <img
              src="https://www.teambonding.com/wp-content/uploads/2014/12/Strengthen-Your-Team-Through-Community-Engagement.jpg"
              alt="Our Team"
              className="team-image-left"
            />

            <div className="team-content">
              <h3>Our Team</h3>
              <p>
                Our team is the heart of Melody Mocktail, bringing a wealth of
                experience, passion, and commitment to serving our community.
                Together, we work to bridge cultural and professional gaps,
                striving for innovation and excellence in every endeavor.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
