import React from "react";
import apple from "../assets/pngwing.com.png";
import gpay from "../assets/pngwing.com (2).png";
import webapp from "../assets/pngwing.com (3).png";
import qrcode from "../assets/qrcode.jpg";
const Thankyou = () => {
  return (
    <>
      <nav className="navbar  navbar-expand-sm">
        <div className="container">
          <h2 className="jarvis">
            <b>JARVIS</b>
          </h2>
          <div>
            <div style={{ color: "rgb(21,102,214)", fontWeight: "bold" }}>
              Investing Powered by AI
            </div>
          </div>
        </div>
      </nav>

      <div className="text-center">
        <span className="circle">
          <i className="fa-solid fa-check thankicon"></i>
        </span>

        <div>
          <h3>Thank You</h3>
        </div>
        <div>
          <p>Our team will get back to you within 24 hours</p>
        </div>
      </div>

      <div className="container mt-4 mb-5">
        <div className="row">
          <div
            className="col-md-8 mt-2"
            style={{
              backgroundColor: "rgb(21,102,214)",
              borderRadius: "10px",
              height: "200px",
            }}
          >
            <div className="mt-4 ml-2">
              <h3 className="text-white">Invest from device of your choice</h3>
              <p className="text-white">we are available on every platform</p>
            </div>
            <div className="row mt-4">
              <div className="col-md-1"></div>
              <div className="col-md-3">
                <img src={gpay} alt="gpay" className="storeImg" />
              </div>
              <div className="col-md-3">
                <img src={apple} alt="apple" className="storeImg" />
              </div>
              <div className="col-md-3">
                <img src={webapp} alt="webapp" className="storeImg" />
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div
            className="col-md-3 mt-2"
            style={{ backgroundColor: "rgb(21,102,214)", borderRadius: "10px" }}
          >
            <div className="text-center mt-4">
              <div style={{ fontSize: "12px" }} className="text-white">
                You can also scan this QR code to
              </div>
              <div style={{ fontSize: "12px" }} className="text-white">
                download our app
              </div>
              <div className="mt-3">
                <img src={qrcode} alt="webapp" className="qrImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
