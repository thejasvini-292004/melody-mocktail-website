import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";

import "./Services.css";

const Services = () => {
  return (
    <>
      <main className="services-page">
        <section className="services-header">
          <div className="services-header-content">
            <h1>Services We Provide</h1>
          </div>
        </section>

        <section className="services-container">
          <h2>Solutions for Quality Services</h2>
          <p>
            Our services are aimed at ensuring the highest level of satisfaction
            and assistance to our customers. Explore a range of solutions
            tailored to your needs.
          </p>

          <div className="services-grid">
            {[
              {
                title: "Deals",
                desc: "Exclusive offers and discounts tailored to your preferences.",
                icon: <BiSolidOffer className="service-icon" />,
              },
              {
                title: "Visa and Immigration",
                desc: "Assistance with visa applications, immigration, and documentation.",
                icon: <MdOutlineTravelExplore className="service-icon" />,
              },
              {
                title: "Jobs (Professional Help)",
                desc: "Connect with experts for career guidance and job opportunities.",
                icon: <FaLaptopCode className="service-icon" />,
              },
              {
                title: "Rental",
                desc: "Find the perfect rental properties or services for your needs.",
                icon: <FaHouseUser className="service-icon" />,
              },
              {
                title: "IT Services",
                desc: "Cutting-edge IT solutions to enhance your business operations.",
                icon: <GrCloudSoftware className="service-icon" />,
              },
              {
                title: "Consultancy",
                desc: "Expert advice and strategies for your personal or business growth.",
                icon: <RiCustomerService2Fill className="service-icon" />,
              },
            ].map((service, index) => (
              <div key={index} className="service-card">
                {service.icon}
                <h3>{service.title}</h3>
                <hr />
                <p>{service.desc}</p>
                <a href="#">Read More</a>
              </div>
            ))}
          </div>

          <div className="services-stats">
            <div className="stats-overlay">
              {[
                { value: "139+", label: "Instagram Followers" },
                { value: "129k+", label: "YouTube Subscribers" },
                { value: "29+", label: "Active Website Users" },
                { value: "300", label: "Club Members" },
              ].map((stat, index) => (
                <div key={index} className="stats-item">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="additional-section">
            <div className="left-side"></div>
            <div className="right-side">
              <h2>Your Trusted Partner in Professional Growth</h2>
              <p>
                At Melody Mocktail, we offer tailored digital solutions designed
                to bridge cultural and professional gaps, empowering you to
                thrive in every aspect of your journey.
              </p>
              <div className="right-details">
                {[
                  {
                    desc: "we encourage you to connect with us. we are here to help and will respond as promptly as possible. We can arrange a phone call or a virtual meeting and provide the best possible support based on our extensive knowledge and expertise.",
                  },
                ].map((detail, index) => (
                  <div key={index}>
                    <h4>{detail.title}</h4>
                    <p>{detail.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mission-vision">
                {[
                  {
                    title: "Our Mission",
                    desc: "empower the South Asian community by providing tailored, high-quality digital resources that support their professional and personal growth.",
                  },
                  {
                    title: "Our Vision",
                    desc: "The company envisions itself as the go-to platform for bridging cultural, social, and professional gaps between India and the U.S.",
                  },
                ].map((mv, index) => (
                  <div key={index}>
                    <h4>{mv.title}</h4>
                    <p>{mv.desc}</p>
                  </div>
                ))}
              </div>
              <div className="testimonial">
                <p>
                  "Melody Mocktail is designed to make this process seamless,
                  reliable, and efficient, ensuring you can easily access the
                  services you need, all while supporting your local community."
                </p>
                <span>- Melody Mocktail, Community</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
