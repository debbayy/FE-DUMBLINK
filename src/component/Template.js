import React from "react";
import Sitebar from "./Sitebar";

//import images
import Phone from "../assets/Phone.png";
import Phone1 from "../assets/Phone-1.png";
import Phone2 from "../assets/Phone-2.png";
import Phone3 from "../assets/Phone-3.png";

const Template = () => {
  return (
    <div className="container-fluit ">
      <div className="d-flex container-fluit">
        <div className="col-3 ">
          <Sitebar />
        </div>
        <div className="col-9 bg-light">
          <div className="bg-white ">
            <h1 className="p-3 d-flex justify-content-star">Template</h1>
          </div>

          <div className="container-fluit">
            <div className="d-flex container-fluit my-5">
              <div>
                <img src={Phone} alt="" />
              </div>
              <div>
                <img src={Phone1} alt="" />
              </div>
              <div>
                <img src={Phone2} alt="" />
              </div>
              <div>
                <img src={Phone3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
