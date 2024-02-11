import React, { useEffect } from "react";

export function AboutUs() {

  return (
    <div className="p-5 m-auto text-center content bg-lavender img-down">
      <div
        id="aboutus"
        className="container-fluid text-white scrollspy dark-brown-background-color"
      >
        <h1>Rólunk:</h1>
        <hr />
        <div className="row mt-3">
          {/*BERTA ELEJE*/}
          <div className=" col-auto col-md-auto col-lg-4 col-xl-4 mx-auto mb-4">
            <br />
            <div className="card testimonial-card mt-2 mb-3">
              <div className="card-up aqua-gradient"></div>
              <div className="avatar mx-auto white">
                <img src="" decoding="async" width={140} height={140} className="rounded-circle img-fluid" alt="Berta"
                />
              </div>
              <div className="card-body text-center">
                <h4 className="card-title font-weight-bold colorblack">
                  Kala Berta Bíborka
                </h4>
                <h6 className="card-title font-weight-bold colorblack">
                   fejlesztő
                </h6>
                <hr />
                <p className="colorblack justify">
                  
                </p>
              </div>
            </div>
          </div>
          {/*BERTA VÉGE*/}

          {/*CSABI ELEJE*/}
          <div className=" col-auto col-md-auto col-lg-4 col-xl-4 mx-auto mb-4">
            <br></br>
            <div className="card testimonial-card mt-2 mb-3">
              <div className="card-up aqua-gradient"></div>
              <div className="avatar mx-auto white">
                <img src="" decoding="async" width={140} height={140} className="rounded-circle img-fluid" alt="Csaba"
                />
              </div>
              <div className="card-body text-center">
                <h4 className="card-title font-weight-bold colorblack">
                  Naár Csaba
                </h4>
                <h6 className="card-title font-weight-bold colorblack">
                   fejlesztő
                </h6>
                <hr></hr>
                <p className="colorblack justify">
                  
                </p>
              </div>
            </div>
          </div>
          {/*CSABI VÉGE*/}

          {/*ADRI ELEJE*/}
          <div className=" col-auto col-md-auto col-lg-4 col-xl-4 mx-auto mb-4">
            <br></br>
            <div className="card testimonial-card mt-2 mb-3">
              <div className="card-up aqua-gradient"></div>
              <div className="avatar mx-auto white">
                <img src="" decoding="async" width={140} height={140} className="rounded-circle img-fluid" alt="Adrienn"
                />
              </div>
              <div className="card-body text-center">
                <h4 className="card-title font-weight-bold colorblack">
                  Csizmadia Adrienn{" "}
                </h4>
                <h6 className="card-title font-weight-bold colorblack">
                   fejlesztő
                </h6>
                <hr></hr>
                <p className="colorblack justify">
                  
                </p>
              </div>
            </div>
          </div>
          {/*ADRI VÉGE*/}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
