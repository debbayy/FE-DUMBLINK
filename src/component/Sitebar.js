import React from "react";

//import images
import Logo from "../assets/Frame.png";
import LogoTm from "../assets/broken-link 1.png";
import Profile from "../assets/Vector.png";
import LogoTem from "../assets/sugar-cubes 1.png";
import Logout from "../assets/logout 1.png";

const Sitebar = () => {
  return (
    <div className="container-fluit">
      <div className="container-fluit d-flex" style={{ height: "100vh" }}>
        <div className="col-3">
          <div className="my-3">
            <div className="mx-5 px-5">
              <img style={{ cursor: "pointer" }} src={Logo} alt="" />
            </div>
            <div className="align-items-center">
              <div className=" text-start mx-5 px-5 py-5 my-5">
                <div>
                  <p className="d-flex" style={{ cursor: "pointer" }}>
                    <img style={{ marginRight: 10 }} src={LogoTem} />
                    Template
                  </p>
                </div>
                <div className=" my-5 " style={{ cursor: "pointer" }}>
                  <p className="d-flex">
                    <img style={{ marginRight: 10 }} src={Profile} />
                    Profile
                  </p>
                </div>

                <div style={{ cursor: "pointer" }}>
                  <p className="d-flex">
                    <img style={{ marginRight: 10 }} src={LogoTm} />
                    MyLink
                  </p>
                </div>
              </div>
              <div className="mx-5 px-5" style={{ cursor: "pointer" }}>
                <div
                  className="text-start my-5 py-5"
                  style={{ marginTop: "500px" }}
                >
                  <p className="d-flex">
                    <img style={{ marginRight: 10 }} src={Logout} />
                    Logout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitebar;
