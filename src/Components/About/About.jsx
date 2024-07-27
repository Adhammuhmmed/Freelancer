import { useEffect } from "react";

export function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <section className="about text-white d-flex justify-content-center align-items-center p-5">
        <div className="about-content py-5">
          <h1 className="h2 text-center my-3">ABOUT COMPONENT</h1>
          <div className="star-shape d-flex justify-content-center align-items-center my-3">
            <div className="line bg-white"></div>
            <div>
              <i className="fa-solid fa-star mx-3"></i>
            </div>
            <div className="line bg-white"></div>
          </div>

          <div className="container">
            <div className="row my-3 ">
              <div className="col-md-6 p-5">
                <div>
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>

              <div className="col-md-6 p-5">
                <div>
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
