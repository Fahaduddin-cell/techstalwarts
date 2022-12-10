import React from "react";

export const Monthly = () => {
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
                    <div className=" rupee">399 </div>
                    <div className="ml-2"> /monthly</div>
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
                    <div className=" rupee">3999 </div>
                    <div className="ml-2"> /monthly</div>
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
                    <div className=" rupee">8999 </div>
                    <div className="ml-2"> /monthly</div>
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
    </>
  );
};
