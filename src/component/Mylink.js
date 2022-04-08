import React from "react";
import Sitebar from "./Sitebar";

const Mylink = () => {
  return (
    <div className="container-fluit ">
      <div className="d-flex container-fluit">
        <div className="col-3 ">
          <Sitebar />
        </div>
        <div className="col-9 bg-light">
          <div className="bg-white ">
            <h1 className="p-3 d-flex justify-content-star">My link</h1>
          </div>

          <div className="container-fluit">
            <div className="d-flex container-fluit my-5">
              <>ini my link</>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mylink;
