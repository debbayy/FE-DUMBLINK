import React from "react";

import Logo from "../assets/Frame.png";
import Phone from "../assets/Phone.png";
import PC from "../assets/PC.png";
import Bg from "../assets/Bg.png";

const Home = () => {
  return (
    <div className="bg-light container-fluit">
      <div className="container-fluit">
        <nav style={{ height: "10vh" }}>
          <nav className="container">
            <div className="container-fluit navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav me-auto mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <img src={Logo} alt="" />
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <a className="btn btn-outline-none mx-2" type="submit">
                  Login
                </a>
                <button type="button" className="btn btn-warning">
                  Warning
                </button>
              </form>
            </div>
          </nav>
        </nav>
        <div className="container-fluit bg">
          <div
            className="d-flex container align-items-center"
            style={{ height: "90vh", width: "100%" }}
          >
            <div className="d-flex col-6">
              <div className="text-xl-start mx-2 ">
                <h1
                  className="text-xl-start"
                  style={{ fontSize: 60, color: "white" }}
                >
                  The Only Link
                  <br /> You’ll Ever Need
                </h1>
                <p className="color-white py-4" style={{ color: "white" }}>
                  Add a link for your Social Bio and optimize your
                  <br /> social media traffic.
                  <br />
                  <br /> safe, fast and easy to use
                </p>
                <button type="button" className=" my-5 btn btn-dark">
                  Get Started For Free
                </button>
              </div>
            </div>
            <div className="d-flex col-6">
              <div>
                <img className="" src={PC} alt="" />
              </div>
              <div>
                <img
                  className="my-2"
                  style={{ marginLeft: "-1050px", paddingTop: "80px" }}
                  src={Phone}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
