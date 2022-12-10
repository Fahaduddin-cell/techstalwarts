import React from "react";
import Content from "./Content";

const Home = () => {
  return (
    <>
      <nav className="navbar  navbar-expand-sm">
        <div className="container">
          <h2 className="jarvis">
            <b>JARVIS</b>
          </h2>
        </div>
      </nav>

      <section className="mt-5">
        <div className="fstText container">
          <div className="row text-center">
            <div className="col-md-2"> </div>
            <div className="col-md-8">
              <h2>
                Build an
                <span className="spanText"> Al-powered equity portfolio</span>
              </h2>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row text-center">
            <div className="col-md-2"> </div>
            <div className="col-md-8">
              <h2>
                for just <span className="textNum"> ₹399</span>
                <span className="spanText"> ₹100 </span>
                and make the most
              </h2>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row text-center">
            <div className="col-md-2"> </div>
            <div className="col-md-8">
              <h2>of volatile stock markets.</h2>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
      <Content />
    </>
  );
};

export default Home;
