import React from "react";
import Sitebar from "./Sitebar";

const Addlink = () => {
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
            <div className="d-flex container-fluit my-3 bg-info">
              <h1 className="ms-3">Create Link</h1>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary" type="button">
                  Button
                </button>
              </div>
            </div>
          </div>

          <div className="ms-3">
            <div className=" col-6 bg-white ">
              <div
                style={{
                  backgroundColor: "red",
                  borderRadius: "10px",
                  height: "70vh",
                }}
              >
                <div>
                  <img src="" alt="" />
                  <button type="button" class="btn btn-warning">
                    Warning
                  </button>
                </div>
                <p>Title</p>
                <label>
                  <input className="d-none" type="text" />
                  ex. Your Title
                </label>
                <hr />
                <p>Description</p>
                <label>
                  <input className="d-none" type="text" />
                  ex. Description Here
                </label>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addlink;
