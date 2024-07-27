import { useEffect } from "react";

export function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
      <section className="contact my-5">
        <div className="container">
          <h1 className="h2 text-center">CONATCT SECTION</h1>
          <div className="star-shape d-flex justify-content-center align-items-center">
            <div className="line"></div>
            <div>
              <i className="fa-solid fa-star mx-3"></i>
            </div>
            <div className="line"></div>
          </div>
          <div className="form w-75 mx-auto p-4">
            <div className="my-5 position-relative">
              <label
                htmlFor="userName"
                className="user-name position-absolute  d-none"
              >
                Name:
              </label>
              <input
                type="text"
                className="form-control border-0 border-bottom"
                id="userName"
                placeholder="User Name"
                onInput={() => {
                  document
                    .querySelector(".user-name")
                    .classList.remove("d-none");
                }}
              />
            </div>
            <div className="my-5 position-relative">
              <label
                htmlFor="userAge"
                className="user-age position-absolute  d-none"
              >
                Age:
              </label>
              <input
                type="number"
                className="form-control border-0 border-bottom"
                id="userAge"
                placeholder="User Age"
                onInput={() => {
                  document
                    .querySelector(".user-age")
                    .classList.remove("d-none");
                }}
              />
            </div>
            <div className="my-5 position-relative">
              <label
                htmlFor="userEmail"
                className="user-email position-absolute  d-none"
              >
                Email:
              </label>
              <input
                type="Email"
                className="form-control border-0 border-bottom"
                id="userEmail"
                placeholder="User Email"
                onInput={() => {
                  document
                    .querySelector(".user-email")
                    .classList.remove("d-none");
                }}
              />
            </div>
            <div className="my-5 position-relative">
              <label
                htmlFor="userPassword"
                className="user-password position-absolute  d-none"
              >
                Password:
              </label>
              <input
                type="password"
                className="form-control border-0 border-bottom"
                id="userPassword"
                placeholder="User Password"
                onInput={() => {
                  document
                    .querySelector(".user-password")
                    .classList.remove("d-none");
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
