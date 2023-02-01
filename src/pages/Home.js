import React from "react";
import { RiHome2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="icon-bg">
          <RiHome2Fill />
        </div>
        <h2>Home</h2>
      </div>
      <section>
        <h3>Get started</h3>
        <div className="text-btn-wrap">
          <p>Sign in attendees</p>
          <Link to="/signin" className="btn btn-primary">
            Go
          </Link>
        </div>
        <div className="text-btn-wrap">
          <p>View list</p>
          <Link to="/view" className="btn btn-primary">
            Go
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
