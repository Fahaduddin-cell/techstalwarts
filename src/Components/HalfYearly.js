import React from "react";

export const HalfYearly = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="mr-2">₹</span>
                    <div className=" rupee">1999 </div>
                    <div className="ml-2 "> /Half-yearly</div>
                  </div>
                  <div>
                    <button className="rupeeButton">Continue</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="mr-2">₹</span>
                    <div className=" rupee">19999 </div>
                    <div className="ml-2 fs-6"> /Half-yearly</div>
                  </div>
                  <div>
                    <button className="jarvisButtons">Continue</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <span className="mr-2">₹</span>
                    <div className=" rupee">49999 </div>
                    <div className="ml-2"> /Half-yearly</div>
                  </div>
                  <div>
                    <button className="jarvisButtons">Continue</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};
