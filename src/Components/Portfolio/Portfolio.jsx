import { useEffect, useState } from "react";
import img1 from "./assets/poert1.png";
import img2 from "./assets/port2.png";
import img3 from "./assets/port3.png";

export function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  let [overLay, setOverlay] = useState(
    <div className="page-overlay d-none">
      <div className="overlay-inner"></div>
    </div>
  );
  function showOverlay(img) {
    setOverlay(
      <div
        className="page-overlay"
        onClick={() => {
          hideOverlay();
        }}
      >
        <div className="overlay-inner">
          <img src={img} alt="" />
        </div>
      </div>
    );
  }

  function hideOverlay() {
    setOverlay(
      <div className="page-overlay d-none">
        <div className="overlay-inner"></div>
      </div>
    );
  }

  return (
    <>
      <section className="portfolio my-5">
        {overLay}
        <div className="container">
          <h1 className="h2 text-center">PORTFOLIO COMPONENT</h1>
          <div className="star-shape d-flex justify-content-center align-items-center">
            <div className="line"></div>
            <div>
              <i className="fa-solid fa-star mx-3"></i>
            </div>
            <div className="line"></div>
          </div>
          <div className="row my-1 g-5 ">
            <div className="col-md-6 col-lg-4">
              <div
                className="position-relative image-cont"
                onClick={() => {
                  showOverlay(img1);
                }}
              >
                <img
                  src={img1}
                  alt="prtfolio image"
                  className="w-100 rounded-3"
                />
                <div className="overlay position-absolute start-0 top-0 w-100 h-100 rounded-3 d-flex justify-content-center align-items-center">
                  <span>
                    <i className="fa-solid fa-plus text-white"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="position-relative image-cont"
                onClick={() => {
                  showOverlay(img2);
                }}
              >
                <img
                  src={img2}
                  alt="prtfolio image"
                  className="w-100 rounded-3"
                />
                <div className="overlay position-absolute start-0 top-0 w-100 h-100 rounded-3 d-flex justify-content-center align-items-center">
                  <span>
                    <i className="fa-solid fa-plus text-white"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="position-relative image-cont"
                onClick={() => {
                  showOverlay(img3);
                }}
              >
                <img
                  src={img3}
                  alt="prtfolio image"
                  className="w-100 rounded-3"
                />
                <div className="overlay position-absolute start-0 top-0 w-100 h-100 rounded-3 d-flex justify-content-center align-items-center">
                  <span>
                    <i className="fa-solid fa-plus text-white"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="position-relative image-cont"
                onClick={() => {
                  showOverlay(img1);
                }}
              >
                <img
                  src={img1}
                  alt="prtfolio image"
                  className="w-100 rounded-3"
                />
                <div className="overlay position-absolute start-0 top-0 w-100 h-100 rounded-3 d-flex justify-content-center align-items-center">
                  <span>
                    <i className="fa-solid fa-plus text-white"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="position-relative image-cont"
                onClick={() => {
                  showOverlay(img2);
                }}
              >
                <img
                  src={img2}
                  alt="prtfolio image"
                  className="w-100 rounded-3"
                />
                <div className="overlay position-absolute start-0 top-0 w-100 h-100 rounded-3 d-flex justify-content-center align-items-center">
                  <span>
                    <i className="fa-solid fa-plus text-white"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="position-relative image-cont"
                onClick={() => {
                  showOverlay(img3);
                }}
              >
                <img
                  src={img3}
                  alt="prtfolio image"
                  className="w-100 rounded-3"
                />
                <div className="overlay position-absolute start-0 top-0 w-100 h-100 rounded-3 d-flex justify-content-center align-items-center">
                  <span>
                    <i className="fa-solid fa-plus text-white"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
