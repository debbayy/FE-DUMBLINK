import React from "react";

//import icon disini
import Fb from "../assets/Facebook_Logo.png";

const Priviewlink = () => {
  return (
    <div
      className="container-fluid bg-info d-flex justify-content-center align-items-center "
      style={{ height: "100vh" }}
    >
      <div className="d-flex justify-content-center align-contern-center col-10 bg-warning">
        <div className="">
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="text-center">
            <h1 className="d-flex">Toko Debby Trisandi</h1>
            <p className="d-flex">
              Silahkan kunjungi toko debby baik di link sosial media
              berikut....!
            </p>
          </div>
          <div className="d-grid gap-3 w-100 ">
            <button className="btn btn-dark" type="button">
              <img src="" alt="" />
              Facebook
            </button>
            <button className="btn btn-dark" type="button">
              <img src="" alt="" />
              Instagram
            </button>
            <button className="btn btn-dark" type="button">
              <img src="" alt="" />
              Twitter
            </button>
            <button className="btn btn-dark" type="button">
              <img src="" alt="" />
              Youtube
            </button>
            <button className="btn btn-dark" type="button">
              <img src="" alt="" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priviewlink;
