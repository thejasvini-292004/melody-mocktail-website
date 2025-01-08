import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="blog-container">
        <header className="blog-header">
          <img
            src="https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
            alt="Blog Background"
            className="header-background"
          />
          <div className="header-content">
            <h1>WELCOME TO BLOG</h1>
            <a href="#about-me" className="learn-more">
              Learn More About Us
            </a>
          </div>
        </header>
      </div>

      <div className="categories-strip">
        <div className="categories">
          <div className="category">
            <img
              src="https://modacolumbus.com/wp-content/uploads/2017/06/drinks-bg.jpg"
              alt="Fashion"
            />
            <p>DRINKS</p>
          </div>
          <div className="category">
            <img
              src="https://png.pngtree.com/thumb_back/fw800/background/20240409/pngtree-empty-shopping-basket-on-wood-table-over-grocery-store-supermarket-blur-image_15653639.jpg"
              alt="Lifestyle"
            />
            <p>SHOPPING</p>
          </div>
          <div className="category">
            <img
              src="https://img.freepik.com/free-photo/business-conference-event-background_1409-4882.jpg?semt=ais_hybrid"
              alt="Travel"
            />
            <p>EVENTS</p>
          </div>
          <div className="category">
            <img
              src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500b"
              alt="Health"
            />
            <p>HEALTH</p>
          </div>
          <div className="category">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu32xo0uTfFXuJr8vxfBefaNpqw4eILOcPfw&s"
              alt="Education"
            />
            <p>EDUCATION</p>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="posts">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="post">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20221214/pngtree-happy-students-celebrate-friendship-female-community-photo-image_42798960.jpg"
                alt="Post"
              />
              <div className="post-content">
                <h2>Sample Post</h2>
                <p>
                  At Melody Mocktail, we connect, empower, and celebrate the
                  South Asian community in the U.S. Whether it’s through career
                  resources, housing assistance, or cultural content, we aim to
                  make your journey smoother and more fulfilling.
                </p>
              </div>
            </div>
          ))}
        </div>

        <aside className="sidebar">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20241104/pngtree-focused-individual-engaged-with-laptop-computer-business-person-using-for-tasks-image_16504119.jpg"
            alt="About Me"
            className="about-image"
          />
          <h3>About Me:</h3>
          <p>
            <b>Melody Mocktail</b> is more than just a platform—it’s a bridge
            between India and the U.S. We offer a range of resources tailored
            for South Asian immigrants, including immigration support, job
            listings, real estate guidance, and business consultancy.
          </p>
          <h3>Recent Posts</h3>
          <ul>
            <li>
              <b>Empowering Careers:</b> Explore curated job opportunities
              across various industries.
            </li>
            <li>
              <b>Housing Support: </b>Simplifying the search for your next home
              in the U.S.
            </li>
            <li>
              <b>Cultural Connection:</b>Stay rooted while adapting to new
              horizons.
            </li>
          </ul>
          <h3>Categories</h3>
          <ul>
            <li>Travel</li>
            <li>Lifestyle</li>
            <li>Uncategorized</li>
          </ul>
          <h3>Archives</h3>
          <ul>
            <li>October 2018</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Blog;
